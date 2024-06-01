import Link from "next/link";

export default function Footerpage() {
  
  return (
    <footer className="flex flex-col gap-4 justify-center items-center pb-4 ">
      <div className=" flex flex-col justify-center items-center gap-4">
        <h1 className="text-Signature_alpha text-3xl md:text-5xl font-bold">Community</h1>
        <h2 className="text-lg md:text-2xl text-center">
          Get involved in our community. Everyone is welcome to <Link  href="https://github.com/yashpandey06/Pinch" className="text-Phantom_alpha">contribute 🚀</Link>!
        </h2>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-bold text-Phantom_alpha">Pinch</span>. All rights
        reserved.
      </p>
    </footer>
  );
}
