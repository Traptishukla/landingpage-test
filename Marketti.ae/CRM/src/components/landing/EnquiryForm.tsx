"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().max(255, { message: "Name must not exceed 255 characters." }).optional(),
  phone: z.object({
    code: z.string(),
    number: z.string().regex(/^\d{10}$/, { message: "Enter a valid 10-digit phone number." }).optional(),
  }).optional(),
  email: z.string().email({ message: "Enter a valid email address." }).optional(),
  organization: z.string().max(255, { message: "Organization must not exceed 255 characters." }).optional(),
});

export default function EnquiryForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: {
        code: "in",
        number: "",
      },
      email: "",
      organization: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const phoneNumber = values.phone?.number
        ? `+${values.phone.code === "in" ? "91" : values.phone.code === "us" || values.phone.code === "ca" ? "1" : "971"}${values.phone.number}`
        : undefined;

      const response = await fetch("https://marketti.inventurs.com/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name || undefined,
          email: values.email || undefined,
          phone: phoneNumber,
          organization: values.organization || undefined,
          source: "Marketti.ae", // Omit source as it's not in the form; uncomment if adding a source field
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      toast({
        title: "Enquiry Submitted!",
        description: "Thank you for your interest. We will get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 border rounded-2xl shadow-md px-4 py-6 sm:px-6 md:px-8 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Submit Your Enquiry</h2>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <div className="flex space-x-2">
                    <Select
                      value={field.value?.code}
                      onValueChange={(value) => field.onChange({ ...field.value, code: value })}
                    >
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ae">🇦🇪 +971</SelectItem>
                        <SelectItem value="in">🇮🇳 +91</SelectItem>
                        <SelectItem value="us">🇺🇸 +1</SelectItem>
                        <SelectItem value="ca">🇨🇦 +1</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="phone number"
                      value={field.value?.number || ""}
                      onChange={(e) => field.onChange({ ...field.value, number: e.target.value })}
                      className="flex-1 transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization</FormLabel>
              <FormControl>
                <Input placeholder="Your company name" {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button id="submit" type="submit" className="w-full text-base py-4 md:py-5 lg:py-6">
          Submit Enquiry
        </Button>
      </form>
    </Form>
  );
}