"use client";
import Footerpage from "@/components/Footer/page";
import NavBarPage from "@/components/Navbar/page";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex h-screen flex-col items-start md:items-center gap-10 justify-center p-16 ">
      <div className="text-Signature_alpha font-extrabold  text-4xl md:text-5xl lg:text-6xl">
        <span className="text-Phantom_alpha ">Pinchly</span> welcomes you{" "}
      </div>
      <Button
        onClick={() => router.push("/Object-Oriented-Concepts/Introduction/Definition")}
        className="bg-pink-700 rounded-lg text-xl duration-150 font-bold"
      >
        Get Started
      </Button>
    </main>
  );
}
