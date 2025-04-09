"use client";
import Signupimage from "@/components/signupImage";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";

export default function Splash() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center">
      <Signupimage />
      <Button
        className="bg-[purple] my-14 px-12 py-7"
        onClick={() => router.push("/academicDataForm")}
      >
        NEXT
      </Button>
    </div>
  );
}
