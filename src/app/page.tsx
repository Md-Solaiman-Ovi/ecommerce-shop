import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CategoryLayout from "./components/CategoryLayout";

export default function Home() {
  return (
    <div className="font-normal text-sm py-[50px] w-full flex flex-col gap-4">
      <HeroSection />
      <CategoryLayout />
    </div>
  );
}
