"use client";

import Nav from "@/components/Nav";
import VercelIcon from "@/components/icons/vercel";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Home() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="px-24">
            <Nav belumLogin={true} logo={false} />
            <div className="flex  flex-col justify-center items-center gap-1">
                <VercelIcon className="fill-foreground w-16 h-16" />
                <Link href="/" className="text-2xl font-semibold tracking-widest">
                    AL.EDU
                </Link>
                <Link
                    href="/signup"
                    className={buttonVariants({ variant: "link" })}
                >
                    Already have an account? Sign-in
                    <ArrowRight className="h-4 w-6" />
                </Link>
                <h1 className="text-xl mt-2 font-semibold">Form Pendaftaran</h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-background w-[20em] shadow rounded-md px-5 pb-5 pt-2"
                >
                    <div className="grid sm:grid-cols-2">
                        <div className="">

                        </div>
                    </div>
                    <label
                        className="block text-primary text-sm font-semibold mb-1"
                        for="name"
                    >
                        Name
                    </label>
                    <input
                        {...register("name")}
                        className="shadow-sm rounded border w-full h-10 mb-3 px-3 py-2 text-sm focus:outline-primary"
                        placeholder="your_name"
                        id="name"
                    />
                    <label
                        className="block text-primary text-sm font-semibold mb-1"
                        for="username"
                    >
                        Username
                    </label>
                    <input
                        {...register("username")}
                        className="shadow-sm rounded border w-full h-10 mb-2 px-3 py-2 text-sm focus:outline-primary"
                        placeholder="your_username"
                        id="username"
                        type="text"
                    />
                    <label
                        className="block text-primary text-sm font-semibold mb-1"
                        for="email"
                    >
                        Email
                    </label>
                    <input
                        {...register("email")}
                        className="shadow-sm rounded border w-full h-10 mb-2 px-3 py-2 text-sm focus:outline-primary"
                        placeholder="you@example.com"
                        id="email"
                        type="email"
                    />
                    <label
                        className="block text-primary text-sm font-semibold mb-1"
                        for="password"
                    >
                        Password
                    </label>
                    <input
                        {...register("password")}
                        className="shadow-sm rounded border w-full h-10 mb-2 px-3 py-2 text-sm focus:outline-primary"
                        placeholder="your_passw"
                        id="password"
                        type="password"
                    />
                    <Button type="submit" variant="default" className="w-full">
                        Login
                    </Button>
                    <Link
                        href={"/forgotPassword"}
                        className={cn("w-full text-sm", buttonVariants({ variant: "link" }))}
                    >
                        Forgot your password? <ArrowRight className="w-8 h-4" />
                    </Link>
                </form>
            </div>
        </div>
    );
}
