

import Link from "next/link"
import { ModeToggle } from "./ToogleTheme"
import VercelIcon from "./icons/vercel"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

export default function Nav({belumLogin, logo}){
    return (
        <div className="min-w-full flex py-5">
            <div className="flex gap-2 grow items-center">
                {/* <img src="./vercel.svg" className="text-primary w-20 fill-primary"/> */}
                {(logo == undefined || logo == true) && (
                    <>
                        <VercelIcon className="fill-foreground w-8"/>
                        <h1 className="text-2xl font-semibold tracking-wide">AL.EDU</h1>
                    </>
                ) }
            </div>
            <div className="flex gap-3 flex-row-reverse grow items-center">
                <ModeToggle classNam="w-8 h-8"/>
                {!belumLogin && (
                <Link href={"/signup"} className={cn("text-primary dark:text-blue-500", buttonVariants({variant: "ghost", size: "sm"}))}>Daftar</Link>
                )}
                {!belumLogin && (
                    <Link href={"/login"} className={cn("", buttonVariants({variant: "ghost", size: "sm"}))}>Masuk</Link>
                )}
            
            </div>
        </div>
    )
}