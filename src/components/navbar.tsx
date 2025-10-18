import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="px-12 py-5 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        <Image src="/logo.webp" alt="logo" width={123} height={50} />
        <div className="flex items-center gap-4">
          <Link href="/auth" className="text-neutral-50 font-medium">Sign In</Link>
          <Button asChild className="bg-[#4DA8CCE5] hover:bg-[#4DA8CCE5]/90 font-medium"><Link href="/auth">Sign Up</Link></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
