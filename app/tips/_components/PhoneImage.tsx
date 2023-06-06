"use client";
import React from "react";
import Image from "next/image";

type PhoneImageProp = {
  src: string;
  alt: string;
};

const PhoneImage: React.FC<PhoneImageProp> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center py-4 rounded-lg bg-slate-50">
      <Image src={src} width={170} height={320} alt={alt} />
    </div>
  );
};

export default PhoneImage;
