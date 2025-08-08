"use server"

export async function registerVolunteer(prevState: any, formData: FormData) {
  // In a real app, save to a DB or notify via email.
  // You can integrate Supabase/Neon later.
  await new Promise((r) => setTimeout(r, 800))

  const name = (formData.get("name") as string)?.trim()
  const email = (formData.get("email") as string)?.toLowerCase()
  const year = formData.get("year") as string
  const domain = formData.get("domain") as string
  const message = (formData.get("message") as string) || ""

  if (!name || !email) {
    return { ok: false, message: "Please provide name and email." }
  }

  console.log("Volunteer Registration:", { name, email, year, domain, message })
  return {
    ok: true,
    message:
      "Thanks for volunteering! We'll reach out soon with next steps.",
  }
}

export async function sendContact(prevState: any, formData: FormData) {
  await new Promise((r) => setTimeout(r, 700))
  const name = (formData.get("name") as string)?.trim()
  const email = (formData.get("email") as string)?.toLowerCase()
  const msg = (formData.get("message") as string)?.trim()

  if (!name || !email || !msg) {
    return { ok: false, message: "Please fill out all fields." }
  }

  console.log("Contact Message:", { name, email, msg })
  return { ok: true, message: "Message sent! We’ll get back to you shortly." }
}
