"use server";

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContact(prevState: any, formData: FormData) {
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    const validated = contactSchema.safeParse(data);

    if (!validated.success) {
        return {
            success: false,
            errors: validated.error.flatten().fieldErrors,
            message: "Please fix the errors below.",
        };
    }

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would integrate Resend / SendGrid / Nodemailer
    console.log("Contact Form Submitted:", validated.data);

    return {
        success: true,
        message: "Thank you! I'll get back to you soon.",
        errors: {},
    };
}
