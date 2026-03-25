"use server";

import { supabase } from "@/lib/supabase";
import { sendApplicationNotification } from "@/lib/email";

export async function submitApplication(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const occupation = formData.get("occupation") as string;
  const motivation = formData.get("motivation") as string;

  if (!name || !email || !occupation || !motivation) {
    return { success: false, error: "Wszystkie pola są wymagane." };
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
