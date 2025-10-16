import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <div className="px-10 xl:px-0 bg-[#000d44] py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl md:text-3xl xl:text-4xl text-center lg:text-start font-bold text-white">
            Subscribe for Newsletter
          </h1>
        </div>
        <div className="flex gap-10 justify-center lg:justify-end ">
          <div>
            <Input
              className="text-gray-600 rounded-3xl md:w-md"
              placeholder="Email Address"
            />
          </div>
          <div>
            <Button className="bg-white hover:bg-white cursor-pointer text-[#000d44] w-full rounded-3xl">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-20 container mx-auto text-white grid grid-cols-1  md:grid-cols-4 space-y-5 md:space-y-0">
        <div className="flex items-center justify-center">
          <Link href="#">Cancellation & Refund</Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="#">Privacy Policy</Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="#">Terms & Conditions</Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="#">Shipping Policy</Link>
        </div>
      </div>
    </div>
  );
}
