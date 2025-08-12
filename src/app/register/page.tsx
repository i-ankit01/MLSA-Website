"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import mlsamiet from "../../assets/mlsamietlogo1.webp";
import Image from "next/image";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

type FormValues = {
  name: string;
  rollno: string;
  branch: string;
  year: string;
  email: string;
  contact: string;
  firstDomain: string;
  secondDomain: string;
  motivation: string;
  toContribute: string;
  experience: string;
  additionalInfo: string;
};

const domainOptions = [
  "Event Planning & Relation",
  "Public Relation & Outreach",
  "Graphic Design & Visual Content",
  "Phtography & Media Coverage",
  "Content Writing & Editorial",
  "Web Development & Management",
  "Video Production & Editing",
  "Social Media & Management",
];

export default function RegistrationPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      rollno: "",
      branch: "",
      year: "",
      email: "",
      contact: "",
      firstDomain: "",
      secondDomain: "",
      motivation: "",
      toContribute: "",
      experience: "",
      additionalInfo: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      setLoading(true)
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setLoading(false)
        router.push("/register/success");
      } else {
        setLoading(false)
        const errorData = await response.json();
        console.log(errorData)
        alert("Registration failed");
      }
    } catch (error) {
      setLoading(false)
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 md:p-6 ">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl md:p-8 p-5">
        <div className="flex items-center justify-center md:gap-8 mb-8 border rounded-md shadow">
          <div className="relative w-20 h-20 sm:w-30 sm:h-30 md:ml-0 ml-3">
            <Image
              src={mlsamiet}
              alt="MLSA MIET"
              fill
              className="object-cover rounded-full"
            />
          </div>

          <h1 className="md:text-3xl text-lg md:mt-0 mt-5 font-bold mb-4 text-center text-primary">
            MLSA MIET Volunteer Registration
          </h1>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 text-lg"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="border bg-secondary/5 shadow-md p-5 rounded-lg">
                  <FormLabel className="md:text-lg text-[17px] text-primary">
                    <span className="bg-secondary/40 w-5 h-5 rounded-full text-sm flex items-center justify-center">
                      1
                    </span>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-4 text-[15px] border border-gray-300"
                      placeholder="Enter your full name"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Roll Number */}
            <FormField
              control={form.control}
              name="rollno"
              render={({ field }) => (
                <FormItem className="border bg-secondary/5 shadow-md p-5 rounded-lg">
                  <FormLabel className="md:text-lg text-[17px] text-primary">
                    <span className="bg-secondary/40 w-5 h-5 rounded-full text-sm flex items-center justify-center">
                      2
                    </span>
                    Roll Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-4 text-[15px]"
                      placeholder="Enter your roll number"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Branch & Year */}
            <div className="flex flex-col sm:flex-row gap-6">
              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => (
                  <FormItem className="flex-1 border bg-secondary/5 shadow-md p-5 rounded-lg">
                    <FormLabel className="md:text-lg text-[17px] text-primary">
                      <span className="bg-secondary/40 w-5 h-5 rounded-full text-sm flex items-center justify-center">
                        3
                      </span>
                      Branch
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="p-4 text-[15px]"
                        placeholder="Enter your branch"
                        {...field}
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem className="flex-1 border bg-secondary/5 shadow-md p-5 rounded-lg">
                    <FormLabel className="md:text-lg text-[17px] text-primary">
                      <span className="bg-secondary/40 w-5 h-5 rounded-full text-sm flex items-center justify-center">
                        4
                      </span>
                      Year
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="p-4 text-[15px] md:text-sm">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1st Year">1st Year</SelectItem>
                        <SelectItem value="2nd Year">2nd Year</SelectItem>
                        <SelectItem value="3rd Year">3rd Year</SelectItem>
                        <SelectItem value="4th Year">4th Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="border bg-secondary/5 shadow-md p-5 rounded-lg">
                  <FormLabel className="md:text-lg text-[17px] text-primary">
                    <span className="bg-secondary/40 w-5 h-5 rounded-full text-sm flex items-center justify-center">
                      5
                    </span>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="p-4 text-[15px]"
                      placeholder="Enter your email"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Contact Number */}
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem className="border bg-secondary/5 shadow-md p-5 rounded-lg">
                  <FormLabel className="md:text-lg text-[17px] text-primary">
                    <span className="bg-secondary/40 w-5 h-5 rounded-full text-sm flex items-center justify-center">
                      6
                    </span>
                    Contact Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-4 text-[15px]"
                      placeholder="10-digit number"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Domain Choice (Radio Group) */}
            <FormField
              control={form.control}
              name="firstDomain"
              render={({ field }) => (
                <FormItem className="border bg-secondary/5 shadow-md p-5 rounded-lg">
                  <FormLabel className="md:text-lg text-[17px] text-primary">
                    <span className="bg-secondary/40 md:w-5 md:h-5 w-7 mb-7 md:mb-0 aspect-square rounded-full text-sm flex items-center justify-center">
                      7
                    </span>
                    First Choice - Which Domain you want to join ?
                  </FormLabel>
                  <p className="text-[14px] text-gray-500 mt-2 mb-3">
                    (Please Note : The order of domains listed here does not
                    represent any hierarchy or importance. Each domain is
                    equally valuable to our community.)
                  </p>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid grid-cols-1 sm:grid-cols-2 md:gap-4"
                    >
                      {domainOptions.map((option) => (
                        <div
                          key={option}
                          className="flex items-center space-x-3 md:p-3 p-2 border rounded-lg hover:bg-secondary/10"
                        >
                          <RadioGroupItem
                            className="cursor-pointer"
                            value={option}
                            id={`first-${option}`} // unique ID for first group
                            style={{ borderColor: "#1F3B61" }}
                          />
                          <label
                            htmlFor={`first-${option}`}
                            className="text-sm text-primary cursor-pointer"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="secondDomain"
              render={({ field }) => (
                <FormItem className="border bg-secondary/5 shadow-md p-5 rounded-lg">
                  <FormLabel className="md:text-lg text-[17px] text-primary">
                    <span className="bg-secondary/40 w-5 h-5 rounded-full text-sm flex items-center justify-center">
                      8
                    </span>
                    Second Choice :
                  </FormLabel>
                  <p className="text-[14px] text-gray-500 mt-2 mb-3">
                    (Please Note : The order of domains listed here does not
                    represent any hierarchy or importance. Each domain is
                    equally valuable to our community.)
                  </p>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid grid-cols-1 sm:grid-cols-2 md:gap-4"
                    >
                      {domainOptions.map((option) => (
                        <div
                          key={option}
                          className="flex items-center space-x-3 md:p-3 p-2 border rounded-lg hover:bg-secondary/10"
                        >
                          <RadioGroupItem
                            className="cursor-pointer"
                            value={option}
                            id={`second-${option}`} // unique ID for second group
                            style={{ borderColor: "#1F3B61" }}
                          />
                          <label
                            htmlFor={`second-${option}`}
                            className="text-sm text-primary cursor-pointer"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* motivation */}
            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem className="border bg-secondary/5 shadow-md p-5 rounded-lg">
                  <FormLabel className="md:text-lg text-[17px] md:text-lg text-primary">
                    <span className="bg-secondary/40 md:w-7 w-17 md:mb-7 mb-18 aspect-square rounded-full text-sm flex items-center justify-center leading-none">
                      9
                    </span>
                    What motivates you to volunteer with MLSA MIET, and what do
                    you hope to gain from this experience?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="md:p-4 p-2 text-[15px]"
                      placeholder="Write your motivation here..."
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* toContribute */}
            <FormField
              control={form.control}
              name="toContribute"
              render={({ field }) => (
                <FormItem className="border bg-secondary/5 shadow-md p-5 rounded-lg">
                  <FormLabel className="md:text-lg text-[17px] text-primary">
                    <span className="bg-secondary/40 md:w-7 w-17 md:mb-7 w-14 mb-19 aspect-square rounded-full text-sm flex items-center justify-center leading-none">
                      10
                    </span>
                    In what ways do you see yourself contributing to the growth
                    and success of the MLSA MIET community?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="md:p-4 p-2 text-[15px]"
                      placeholder="Write your answer here..."
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* experience */}
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem className="border bg-secondary/5 shadow-md p-5 rounded-lg">
                  <FormLabel className="md:text-lg text-[17px] text-primary">
                    <span className="bg-secondary/40 md:w-5 w-13 md:mb-0 mb-13 aspect-square rounded-full text-sm flex items-center justify-center leading-none">
                      11
                    </span>
                    Any previous experience in a community or collaborative
                    projects? (Optional)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="md:p-4 p-2 text-[15px]"
                      placeholder="Write your answer here..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* additional Info */}
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem className="border bg-secondary/5 shadow-md p-5 rounded-lg">
                  <FormLabel className="md:text-lg text-[17px] text-primary">
                    <span className="bg-secondary/40 md:w-5 w-11 md:mb-0 mb-6 aspect-square rounded-full text-sm flex items-center justify-center leading-none">
                      12
                    </span>
                    Any additional information you'd like to share? (Optional)
                  </FormLabel>
                  <p className="text-[14px] text-gray-500 mt-2 mb-3">
                    (Note : Feel free to share your resume, portfolio, project links, designs, or any other work samples that can help us assess your skills for the domain(s).)
                  </p>
                  <FormControl>
                    <Textarea
                      className="md:p-4 p-2 text-[15px]"
                      placeholder="Write your answer here..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full p-4 text-md font-semibold bg-primary"
              disabled={loading}
            >
              {loading && <Loader2Icon className="animate-spin mr-1"/>}
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
