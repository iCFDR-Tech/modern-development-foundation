import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <div className="px-10 md:px-0 bg-[#000d44] py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">
            Subscribe for Newsletter
          </h1>
        </div>
        <div className="flex gap-10 justify-center md:justify-end ">
           <div>
             <Input className="text-gray-600 rounded-3xl md:w-md" placeholder="Email Address"/>
           </div>
           <div>
            <Button className="bg-white hover:bg-white cursor-pointer text-[#000d44] w-full rounded-3xl">
                Subscribe
            </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
