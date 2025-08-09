"use client"

import { useState, useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { registerVolunteer } from "@/app/actions"

const BRAND_SECONDARY = "#0179D4"

export default function RegistrationDialog({ children }: { children: React.ReactNode }) {
const [open, setOpen] = useState(false)
const [state, action] = useActionState(registerVolunteer, { ok: false, message: "" })

return (
  <Dialog open={open} onOpenChange={(v) => {
    setOpen(v)
    if (!v) {
      // reset state upon close
      ;(state as any).message = ""
      ;(state as any).ok = false
    }
  }}>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle className="text-slate-900">Volunteer Registration</DialogTitle>
        <DialogDescription className="text-slate-600">
          Fill the form to join MLSA MIET volunteer team. We welcome all years and skill levels!
        </DialogDescription>
      </DialogHeader>

      <form action={action} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="Jane Doe" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@college.edu" required />
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label>Year</Label>
            <Select name="year" defaultValue="1">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1st Year</SelectItem>
                <SelectItem value="2">2nd Year</SelectItem>
                <SelectItem value="3">3rd Year</SelectItem>
                <SelectItem value="4">4th Year</SelectItem>
                <SelectItem value="alumni">Alumni</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Interested Domain</Label>
            <Select name="domain" defaultValue="events">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose domain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="content">Content</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="web">Web Dev</SelectItem>
                <SelectItem value="ml">ML / AI</SelectItem>
                <SelectItem value="cloud">Cloud</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Why do you want to volunteer?</Label>
          <Textarea id="message" name="message" placeholder="Tell us in a few lines..." />
        </div>

        <SubmitButton />

        {state?.message && (
          <p className={`text-sm ${state.ok ? "text-emerald-600" : "text-red-600"}`}>{state.message}</p>
        )}

        {state?.ok && (
          <Button
            type="button"
            onClick={() => setOpen(false)}
            className="w-full rounded-full font-semibold text-white"
            style={{ backgroundColor: BRAND_SECONDARY }}
          >
            Done
          </Button>
        )}
      </form>
    </DialogContent>
  </Dialog>
)
}

function SubmitButton() {
const { pending } = useFormStatus()
return (
  <Button
    type="submit"
    disabled={pending}
    className="w-full rounded-full font-semibold text-white"
    style={{ backgroundColor: "#0179D4" }}
  >
    {pending ? "Submitting..." : "Submit Registration"}
  </Button>
)
}
