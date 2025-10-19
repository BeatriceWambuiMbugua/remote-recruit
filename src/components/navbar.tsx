import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="px-8 md:px-12 py-5 absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        <Image src="/logo.webp" alt="logo" width={123} height={50} />
        <div className="flex items-center gap-4">
          <Link href="/auth" className="text-neutral-50 font-medium" aria-label="Sign In">
            Sign In
          </Link>
          <Button
            asChild
            className="bg-[#4DA8CCE5] hover:bg-[#4DA8CCE5]/90 font-medium"
          >
            <Link href="/auth" aria-label="Sign up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
