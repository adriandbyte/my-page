"use client";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function SvgTechstackImage({ src, alt }: Props) {
  return (
    <div className={`flex justify-center align-middle`}>
      <Image
        className="dark:invert rounded-xl"
        alt={alt}
        src={`${src}.svg`}
        width={50}
        height={50}
        priority
      />
    </div>
  );
}
