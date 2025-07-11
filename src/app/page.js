import Banner from "@/components/Home/Banner";
import WhatDo from "@/components/Home/whatDoMe";
import Service from "@/components/Home/ourService";
import Image from "next/image";

export default function Home() {
  return (
   <div>
     <Banner/>
     <WhatDo/>
     <Service/>

   </div>
  );
}
