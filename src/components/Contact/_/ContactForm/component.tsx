import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
import RenderFormButtonIcon from "@/utils/RenderFormButtonIcon";
import emailjs from '@emailjs/browser';
import { FaLinkedin } from "react-icons/fa";

const formSchema = z.object({
    name: z.string().min(1, "Nombre requerido"),
    email: z.string().email("Email inválido"),
    message: z.string().min(1, "Mensaje requerido"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
    const linkedInUrl = "https://www.linkedin.com/in/valentin-petrocelli-a8389b1b4/";

    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          message: "",
        },
    });

    const onSubmit = async () => {
        setStatus("loading");
      
        try {
          await emailjs.sendForm(
            "service_nd7n8yd",
            "template_fwa3sn5",
            formRef.current!,
            "nJ8yQn6HVrlji7Jnf"
          );
      
          setStatus("success");
          form.reset();
          setTimeout(() => setStatus("idle"), 2500);
        } catch (error) {
          console.error("Error:", error);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 2500);
        }
      };

    // Render
    return (
        <div className="w-[50%] h-full flex flex-col justify-between">
            <Form {...form}>
                <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[0.7rem] lg:text-[0.9rem] text-neutral-100">Name</FormLabel>
                                <FormControl>
                                    <Input className="pt-3 pb-3 !text-[0.6rem] lg:!text-[0.8rem] text-neutral-100" placeholder="Your name" {...field} />
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
                            <FormLabel className="text-[0.7rem] lg:text-[0.9rem] text-neutral-100">Email</FormLabel>
                            <FormControl>
                                <Input type="email" className="pt-3 pb-3 !text-[0.6rem] lg:!text-[0.8rem] text-neutral-100" placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[0.7rem] lg:text-[0.9rem] text-neutral-100">Message</FormLabel>
                                <FormControl>
                                    <Textarea className=" h-[5rem] !text-[0.6rem] lg:!text-[0.8rem] text-neutral-100" placeholder="Write your message..." rows={5} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className="w-[30%] bg-neutral-900 text-green-500 border" type="submit" disabled={status === "loading"}>
                        {status === "idle" ? <IoIosSend /> : RenderFormButtonIcon(status)}
                    </Button>
                </form>
            </Form>

            <div className="flex items-center gap-1 lg:gap-5 text-neutral-100 text-[0.5rem] lg:text-[0.7rem] pt-4 pb-4">
                <span>If you'd like to learn more about my experience and skills, you can access my LinkedIn profile by <a className="text-green-500 hover:underline" href={linkedInUrl} target="_blank">clicking here</a>.</span>
                <FaLinkedin className="text-[5rem] md:text-[3rem]" />
            </div>
        </div>
    );
};

export default ContactForm;