import Blogs from "@/components/blog/Blogs";
import Faq from "@/components/faq/Faq";
import ChooseUs from "@/components/home/ChooseUs";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/HomeServices";
import Insurance from "@/components/home/Insurance";
import InsurancePlan from "@/components/home/InsurancePlan";
import Policy from "@/components/home/Policy";
import PremiumClient from "@/components/home/PremiumClient";

export default function Home() {
  return (
    <div>
      <Hero />
      <Policy />
      <Insurance/>
      <InsurancePlan />
      <ChooseUs/>
      <PremiumClient/>
      <Services/>
      {/* <Testimonial/> */}
      <Blogs/>
      <Faq/>
    </div>
  )
}
