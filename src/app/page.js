import About from "@/components/about/content";
import Slider from "@/components/hero/carousel";
import WhatWeDo from "@/components/whatWeDo/content";

export default function Home() {
  return (
    <>
      <section>
        <div className="mt-53 md:mt-40 xl:mt-40">
          <Slider />
        </div>
      </section>
      <section>
        <div className="mt-20 px-8 py-10 md:px-20  xl:px-28">
          <About />
        </div>
      </section>

      <section>
        <div className="mt-20 px-8 py-10 md:px-20  xl:px-28">
          <WhatWeDo/>
        </div>
      </section>
    </>
  );
}
