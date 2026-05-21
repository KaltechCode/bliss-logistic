import EightSection from "@/components/large/EightSection";
import Herosection from "@/components/large/Herosection";
import FouthSection from "@/components/large/FouthSection";
import NineSection from "@/components/large/NineSection";
import SecondSection from "@/components/large/SecondSection";
import SectionFive from "@/components/large/SectionFive";
import SevenSection from "@/components/large/SevenSection";
import SixSection from "@/components/large/SixSection";
import ThirdSection from "@/components/large/ThirdSection";

export default function Home() {
  return (
    <main className="w-full px-5 py-5">
      <Herosection />
      <SecondSection />
      <ThirdSection />
      <FouthSection />
      <SectionFive />
      <SixSection />
      <SevenSection />
      <EightSection />
      <NineSection />
    </main>
  );
}
