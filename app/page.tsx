import Hero from "@/components/Hero";
import Camp from '@/components/Camp';
import Features from "@/app/Features/page";
import GetApp from "@/app/GetApp/page";
import Guide from "@/app/Guide/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
