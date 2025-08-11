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
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";

type FormValues = {
  name: string;
  rollNo: string;
  branch: string;
  year: string;
  email: string;
  contact: string;
  domain: string;
  reason: string;
};

const domainOptions = [
  "Web Development",
  "App Development",
  "AI/ML",
  "Cybersecurity",
  "Cloud Computing",
];

export default function RegistrationPage() {
  const router = useRouter();

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      rollNo: "",
      branch: "",
      year: "",
      email: "",
      contact: "",
      domain: "",
      reason: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    router.push("/register/success");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">
        <h1
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: "#1F3B61" }}
        >
          MLSA MIET Registration Form
        </h1>
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
                <FormItem className="bg-secondary/10 p-5 rounded-lg">
                  <FormLabel className="text-md text-primary"><span className="bg-red-300 w-5 h-5 rounded-full text-sm flex items-center justify-center">1</span>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="p-4 text-lg border border-gray-300"
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
              name="rollNo"
              render={({ field }) => (
                <FormItem className="bg-secondary/10 p-5 rounded-lg">
                  <FormLabel className="text-md text-primary">Roll Number</FormLabel>
                  <FormControl>
                    <Input
                      className="p-4 text-lg"
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
                <FormItem className="flex-1 bg-secondary/10 p-5 rounded-lg">
                  <FormLabel className="text-md text-primary">Branch</FormLabel>
                  <FormControl>
                    <Input
                      className="p-4 text-lg"
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
                  <FormItem className="flex-1 bg-secondary/10 p-5 rounded-lg">
                    <FormLabel className="text-md text-primary">Year</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="p-4">
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
                <FormItem className="bg-secondary/10 p-5 rounded-lg">
                  <FormLabel className="text-md text-primary">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="p-4 text-lg"
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
                <FormItem className="bg-secondary/10 p-5 rounded-lg">
                  <FormLabel className="text-md text-primary">
                    Contact Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-4 text-lg"
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
              name="domain"
              render={({ field }) => (
                <FormItem className="bg-secondary/10 p-5 rounded-lg">
                  <FormLabel className="text-md text-primary">First Choice - Which domain you want to join ?</FormLabel>
                  <p className="text-[14px] text-gray-500 mt-2 mb-3">(Please Note : The order of domains listed here does not represent any hierarchy or importance. Each domain is equally valuable to our community.)</p>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      {domainOptions.map((domain) => (
                        <div
                          key={domain}
                          className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50"
                        >
                          <RadioGroupItem
                           className="cursor-pointer"
                            value={domain}
                            id={domain}
                            style={{ borderColor: "#1F3B61" }}
                          />
                          <label
                            htmlFor={domain}
                            className="text-sm text-primary cursor-pointer"
                          >
                            {domain}
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Reason */}
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem className="bg-secondary/10 p-5 rounded-lg">
                  <FormLabel className="text-md text-primary">
                    Why do you want to join?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="p-4 text-lg"
                      placeholder="Write your motivation here..."
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full p-4 text-md font-semibold"
              style={{ backgroundColor: "#1F3B61" }}
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
