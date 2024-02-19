"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const Custombutton = ({
  title,
  containerStyles,
  handleClick,
  btntype,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button" || btntype}
      onClick={handleClick}
      className={containerStyles}
    >
      <span>{title}</span>
    </button>
  );
};

export default Custombutton;
