import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <Image
        alt="Contact background"
        src="/Hero/about.jpg"
        width={1422}
        height={534}
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white drop-shadow-lg">
          About Us
        </h1>
      </div>
    </div>
  );
}
