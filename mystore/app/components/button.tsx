"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const Custombutton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button onClick={handleClick} className={containerStyles}>
      <span>{title}</span>
    </button>
  );
};

export default Custombutton;
