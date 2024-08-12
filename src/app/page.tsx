import Benefit from "@/components/dashboard/benefit";
import Footer from "@/components/dashboard/footer";
import Hero from "@/components/dashboard/hero";
import HowItWork from "@/components/dashboard/howitwork";
import Questions from "@/components/dashboard/questions";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
        <section id="hero">
          <Hero />
        </section>
        <section id="benefit">
          <Benefit />
        </section>
        <section id="how-it-works">
          <HowItWork />
        </section>
        <section id="questions">
          <Questions />
        </section>
        <Footer />
    </div>
  );
}
