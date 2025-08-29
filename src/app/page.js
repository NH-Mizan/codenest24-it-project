import Banner from "@/components/Home/Banner";
import WhatDo from "@/components/Home/whatDoMe";
import Service from "@/components/Home/ourService";
import Image from "next/image";
import WhyChooseUs from "@/components/Home/whychoose";
import ContactUs from "@/components/Home/contact";

export default function Home() {
  return (
   <div>
     <Banner/>
     <WhatDo/>
     <Service/>
     <WhyChooseUs/>
     <ContactUs/>

   </div>
  );
}
