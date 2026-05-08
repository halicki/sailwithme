"use server";

import { supabase } from "@/lib/supabase";
import { sendApplicationNotification } from "@/lib/email";

const MAX_FIELD_LENGTH = {
  name: 120,
  email: 254,
  occupation: 240,
  motivation: 2000,
} as const;

const messages = {
  pl: {
    required: "Wszystkie pola są wymagane.",
    invalidEmail: "Podaj poprawny adres email.",
    tooLong: "Jedno z pól jest za długie. Skróć odpowiedź i spróbuj ponownie.",
    failed: "Coś poszło nie tak. Spróbuj ponownie.",
  },
  en: {
    required: "All fields are required.",
    invalidEmail: "Please enter a valid email address.",
    tooLong: "One of the fields is too long. Shorten it and try again.",
    failed: "Something went wrong. Please try again.",
  },
} as const;

function getLocale(formData: FormData): "pl" | "en" {
  const value = formData.get("locale");
  return value === "en" ? "en" : "pl";
}

function getFormValue(formData: FormData, key: keyof typeof MAX_FIELD_LENGTH) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
}

export async function submitApplication(formData: FormData) {
  const locale = getLocale(formData);
  const t = messages[locale];

  const name = getFormValue(formData, "name");
  const email = getFormValue(formData, "email").toLowerCase();
  const occupation = getFormValue(formData, "occupation");
  const motivation = getFormValue(formData, "motivation");

  if (!name || !email || !occupation || !motivation) {
    return { success: false, error: t.required };
  }

  if (!isValidEmail(email)) {
    return { success: false, error: t.invalidEmail };
  }

  if (
    name.length > MAX_FIELD_LENGTH.name ||
    email.length > MAX_FIELD_LENGTH.email ||
    occupation.length > MAX_FIELD_LENGTH.occupation ||
    motivation.length > MAX_FIELD_LENGTH.motivation
  ) {
    return {
      success: false,
      error: t.tooLong,
    };
  }

  const { error } = await supabase
    .from("applications")
    .insert({ name, email, occupation, motivation });

  if (error) {
    console.error("Supabase insert error:", error);
    return { success: false, error: t.failed };
  }

  try {
    await sendApplicationNotification({ name, email, occupation, motivation });
  } catch (err) {
    console.error("Email notification error:", err);
  }

  return { success: true };
}
