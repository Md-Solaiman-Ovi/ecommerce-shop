import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CategoryLayout from "./components/CategoryLayout";
// import { Image } from "next/image";
export default function Home() {
  return (
    <div className="font-normal text-sm py-[50px] w-full flex flex-col gap-4 scrollbar-hide">
      <HeroSection />
      <CategoryLayout title={"Best selling product"} />
      <CategoryLayout title={"Products"} />
      <Image
        className="object-cover w-full"
        src={"/images/Banner1.jpg"}
        width={1200}
        height={400}
        alt=""
      />
      <CategoryLayout title={"Mac Book"} />
      <CategoryLayout title={"iPad Pro"} />
      <CategoryLayout title={"iPhone"} />
      <CategoryLayout title={"iPad Air"} />
      <CategoryLayout title={"Apple Watch"} />
      <CategoryLayout title={"Air Pods"} />
      <CategoryLayout title={"iMac"} />
      <CategoryLayout title={"Computer Accessories"} />
    </div>
  );
}
