"use client"; // client component করতে হবে

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottieAnimation = () => {
  return (
    <div className="w-[315px] h-[315px] lg:w-[700px] lg:h-[700px]">
      <DotLottieReact
        src="https://lottie.host/166a2185-4f8a-45a8-918d-87b53ac0a22c/u0B2HYV4SQ.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default LottieAnimation;
