"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <main className="bg-white min-h-screen text-black w-full h-full flex flex-col justify-center items-center p-5 sm:p-10 md:p-20">
      <div className="w-full h-fit md:max-w-[50rem] flex flex-col gap-10 items-center">
        <h1 className="text-center text-5xl 2xsm:text-5xl sm:text-7xl md:text-8xl font-suisse-bold uppercase">
          404 Error.
        </h1>
        <p className="text-center font-suisse-regular 2xsm:text-normal xsm:text-lg sm:text-2xl">
          Sorry! This page could not be found.
        </p>
        <Button onClick={() => router.back()} className="uppercase font-suisse-medium text-lg w-fit h-fit text-center">Back</Button>
      </div>
    </main>
  );
}
