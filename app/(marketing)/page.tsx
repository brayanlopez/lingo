import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] wb-8 lg:mb-0">
        <Image src={"/images/hero.svg"} alt="Hero" fill />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn Practice and master new languages
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton>
                <Button className="w-full" size={"lg"} variant={"secondary"}>
                  Get Started
                </Button>
              </SignUpButton>
              <SignUpButton>
                <Button className="w-full" size={"lg"}>
                  I already have an account
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button variant={"secondary"} size={"lg"}>
                <Link href={"/learn"}>Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
