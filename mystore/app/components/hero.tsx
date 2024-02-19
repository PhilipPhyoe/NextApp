"use client";
import Custombutton from "./button";
import Image from "next/image";

const hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find, book or ride a car easily</h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our services.
        </p>
        <Custombutton
          title="Explore Products"
          containerStyles="p-4 bg-amber-600 rounded-lg text-white mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/SN0W20.png"
            alt="Bosch Fully Synthetic 0W20"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default hero;
