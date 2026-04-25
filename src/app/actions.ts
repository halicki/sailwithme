"use server";

import { supabase } from "@/lib/supabase";
import { sendApplicationNotification } from "@/lib/email";

const MAX_FIELD_LENGTH = {
  name: 120,
  email: 254,
  occupation: 240,
  motivation: 2000,
} as const;

function getFormValue(formData: FormData, key: keyof typeof MAX_FIELD_LENGTH) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
}

export async function submitApplication(formData: FormData) {
  const name = getFormValue(formData, "name");
  const email = getFormValue(formData, "email").toLowerCase();
  const occupation = getFormValue(formData, "occupation");
  const motivation = getFormValue(formData, "motivation");

  if (!name || !email || !occupation || !motivation) {
    return { success: false, error: "Wszystkie pola są wymagane." };
  }

  if (!isValidEmail(email)) {
    return { success: false, error: "Podaj poprawny adres email." };
  }

  if (
    name.length > MAX_FIELD_LENGTH.name ||
    email.length > MAX_FIELD_LENGTH.email ||
    occupation.length > MAX_FIELD_LENGTH.occupation ||
    motivation.length > MAX_FIELD_LENGTH.motivation
  ) {
    return {
      success: false,
      error: "Jedno z pól jest za długie. Skróć odpowiedź i spróbuj ponownie.",
    };
  }

  const { error } = await supabase
    .from("applications")
    .insert({ name, email, occupation, motivation });

  if (error) {
    console.error("Supabase insert error:", error);
    return { success: false, error: "Coś poszło nie tak. Spróbuj ponownie." };
  }

  try {
    await sendApplicationNotification({ name, email, occupation, motivation });
  } catch (err) {
    console.error("Email notification error:", err);
  }

  return { success: true };
}
