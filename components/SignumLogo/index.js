import React, { useState, useEffect } from "react";
import Image from "next/image";
import WhiteBison from "@/assets/logos/White_Signum_Bison.svg";
import WhiteText from "@/assets/logos/White_Signum_Logo_Text.svg";
import RedBison from "@/assets/logos/Red_Signum_Bison.svg";
import RedText from "@/assets/logos/Red_Signum_Logo_Text.svg";

const SignumLogo = ({ size = 1, isRed = true }) => {
  const bisonSize = {
    height: size * 50,
    width: size * 100,
  };

  const textSize = {
    height: size * 20,
    width: size * 100,
  };

  const containerSize = {
    height: size * 85,
    width: size * 100,
  };

  const BisonImage = isRed ? RedBison : WhiteBison;
  const TextImage = isRed ? RedText : WhiteText;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: containerSize.height,
        width: containerSize.width,
        // alignItems: 'center',
      }}
      className="logoContainer"
    >
      <Image
        src={BisonImage}
        height={bisonSize.height}
        width={bisonSize.width}
        alt="Signum Logo"
        className="bisonSize"
      />
      <Image
        src={TextImage}
        height={textSize.height}
        width={textSize.width}
        alt="Signum Logo"
        style={{
          objectFit: "contain",
        }}
        className="logoTextSize"
      />
    </div>
  );
};

export default SignumLogo;

// @media (max-width: 768px) {
//   .SignumLogo {
//     mawidth: 50%;
//     height: auto;
//   }
// }
