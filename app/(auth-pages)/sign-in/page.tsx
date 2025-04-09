import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import Signinimage from "@/components/signinImage";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <>
      <main className="flex flex-row items-center w-screen justify-between w-screen min-h-screen">
        <Signinimage />
    
                <div className="flex flex-col justify-center items-center w-[50%]">
                <form className="flex-1 flex flex-col min-w-64">
                  <h1 className="text-2xl font-medium">Sign in</h1>
                  <p className="text-sm text-foreground">
                    Don't have an account?{" "}
                    <Link className="text-foreground font-medium underline" href="/sign-up">
                      Sign up
                    </Link>
                  </p>
                  <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" placeholder="you@example.com" required />
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        className="text-xs text-foreground underline"
                        href="/forgot-password"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Your password"
                      required
                    />
                    <SubmitButton pendingText="Signing In..." formAction={signInAction}>
                      Sign in
                    </SubmitButton>
                    <FormMessage message={searchParams} />
                  </div>
                </form>
        </div>
      </main>
    </>
  );
}
