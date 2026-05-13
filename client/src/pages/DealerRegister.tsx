import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";

const dealerRegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  dealershipName: z.string().min(2, "Dealership name is required"),
  city: z.string().min(2, "City is required"),
  province: z.string().min(2, "Province is required"),
});

type DealerRegisterInput = z.infer<typeof dealerRegisterSchema>;

export function DealerRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [, navigate] = useLocation();
  const registerMutation = trpc.crm.dealers.register.useMutation();

  const form = useForm<DealerRegisterInput>({
    resolver: zodResolver(dealerRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      dealershipName: "",
      city: "",
      province: "",
    },
  });

  const onSubmit = async (data: DealerRegisterInput) => {
    setIsLoading(true);
    try {
      const result = await registerMutation.mutateAsync(data);
      toast.success("Registration submitted! We'll review your application shortly.");
      window.location.href = "/dealer/dashboard";
    } catch (error: any) {
      toast.error(error.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Dealer Registration</CardTitle>
            <CardDescription>
              Join our network and start purchasing high-quality leads
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Personal Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
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
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Dealership Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Dealership Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="dealershipName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dealership Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Smith Auto Group" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Vancouver" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="province"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Province</FormLabel>
                          <FormControl>
                            <Input placeholder="BC" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Register as Dealer"}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By registering, you agree to our terms and conditions. We'll review your application within 24 hours.
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
