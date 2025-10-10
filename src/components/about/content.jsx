import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
            <Image alt="Children doing prayer" src="/Home/about.jpg" width={278} height={300} className="rounded-lg"/>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl xl:text-3xl text-[#0b0e45] font-bold mb-5">
            About Us
          </h1>
          <p className="text-sm md:text-base xl:text-lg text-gray-600">
            Modern Dream Foundation is a non-profit trust dedicated to building
            a healthier, happier, and more sustainable society. We believe that
            true transformation begins with the well-being of
            individuals—physically, mentally, and emotionally—and extends to the
            empowerment of entire communities.
          </p>
          <div className="mt-15">
            <Link
              href="/about"
              className="bg-gradient-to-bl from-[#25d58a] via-[#cff6e5]to-pink-500 h-64 py-3 px-6 rounded-3xl font-bold"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
