import Contact from "./_components/content";
import Hero from "./_components/hero";


export default function Page() {
  return (
    <>
      <section>
        <div className="mt-30">
         <Hero/>
        </div>
      </section>
      <section>
        <div className="mt-20 px-8 py-10 md:px-20  xl:px-28">
        <Contact/>
        </div>
      </section>
    </>
  );
}
