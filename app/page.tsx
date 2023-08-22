import ToggleMode from "@/components/ToggleMode";
import SvgTechstackImage from "@/components/svg-techstack-img/svg-techstack-img";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-100 h-screen m-5">
      <div className="flex justify-between xl:px-20 w-3/4 m-auto">
        <h2 className={`${inter.className} text-2xl italic`}>M4510</h2>
        <ToggleMode />
      </div>
      <div className="grid md:auto-rows-[250px] grid-cols-3 md:grid-cols-4 gap-4 my-5 container mx-auto xl:px-20">
        <div className="profile-img col-span-3 md:col-span-2 md:row-span-2 rounded-3xl">
          <Image
            alt="Adrian Dominguez"
            src="/profile.jpeg"
            className="w-[100%] h-[100%] rounded-3xl"
            width={500}
            height={500}
          />
        </div>
        <div className="about-me col-span-3 md:col-span-2 md:row-span-2  rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 p-4 dark:text-white cursor-pointer">
          <div className={`about-me ${inter.className} leading-6`}>
            <h1 className="m-4 text-4xl italic font-bold">About me.</h1>
            <h2 className="text-2xl  italic">
              👋 Hi my name is Adrian Dominguez
            </h2>
            <p className="m-2 text-xl">
              I am an experienced Frontend web developer.
            </p>

            <p className="m-2 text-xl">
              I am also very passionate about technology and programming with
              more than 6 years of experience developing web applications,
              enthusiastic about self-study and learning new technologies.
            </p>
          </div>
        </div>
        <div className="relative col-span-2 row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 dark:text-white cursor-pointer">
          <Image
            alt="Hacker Gif"
            src="/hacker.gif"
            fill
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="tech-stack col-span-3 row-span-1 sm:col-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 p-6 dark:text-white cursor-pointer">
          <div className="grid grid-cols-6 gap-4">
            {images.map((image, idx) => {
              return (
                <SvgTechstackImage key={idx} src={image.src} alt={image.alt} />
              );
            })}
          </div>
        </div>
        <div className="mode col-span-1 row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 p-4 dark:text-white cursor-pointer"></div>
      </div>
    </div>
  );
}

const images = [
  {
    src: "/html5",
    alt: "HTML5",
  },
  {
    src: "/css3",
    alt: "CSS3",
  },
  {
    src: "/bootstrap",
    alt: "CSS3",
  },
  {
    src: "/lodash",
    alt: "CSS3",
  },
  {
    src: "/sass",
    alt: "SASS",
  },
  {
    src: "/react",
    alt: "React",
  },
  {
    src: "/javascript",
    alt: "React",
  },
  {
    src: "/reactquery",
    alt: "React Query",
  },
  {
    src: "/nextdotjs",
    alt: "Next.js",
  },
  {
    src: "/webpack",
    alt: "Next.js",
  },
  {
    src: "/eslint",
    alt: "ESLint",
  },
  {
    src: "/typescript",
    alt: "Typescript",
  },
  {
    src: "/reacthookform",
    alt: "React Hook Form",
  },
  {
    src: "/tailwindcss",
    alt: "Tailwind CSS",
  },
  {
    src: "/mui",
    alt: "Zod",
  },
  {
    src: "/git",
    alt: "Zod",
  },
  {
    src: "/zod",
    alt: "Zod",
  },
  {
    src: "/npm",
    alt: "Zod",
  },
];
