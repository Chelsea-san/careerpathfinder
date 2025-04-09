"use client"
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/components/useTypewriter";
import Link from "next/link";

export default function Home() {
  const text = useTypewriter([" King", "Saviour of the World", "Lamb of God"]);

  return (
    <main className="flex flex-row items-center justify-between w-screen ">
      <div className="flex justify-center items-center w-[50%] h-screen bg-orange-500">
        <h1 className="text-3xl font-bold min-w-[300px]">Jesus is {text}<span className="animate-blink">|</span></h1>
      </div>
      <div className="flex flex-col justify-center items-center w-[50%]">
        <h1 className="font-bold text-3xl my-10">Get Started</h1>
        <div className="flex gap-4"> 
            <Button asChild size="sm" variant={"outline"}>
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild size="sm" variant={"default"}>
              <Link href="/sign-up">Sign up</Link>
            </Button>
        </div>
      </div>
    </main>
  );
}
