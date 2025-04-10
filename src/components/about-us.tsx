import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="grid grid-cols-2 gap-4 my-12 bg-primary/30">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold text-center">
          Somos <span className="text-primary text-4xl font-akira">ESTEKO</span>
        </h2>
      </div>
      <div className="flex items-center justify-center col-span-2">
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          ad dolor exercitationem beatae perspiciatis corrupti porro distinctio
          nihil voluptatem. Placeat maxime asperiores quos quam, earum nostrum
          fugiat explicabo ipsam pariatur.
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          ad dolor exercitationem beatae perspiciatis corrupti porro distinctio
          nihil voluptatem. Placeat maxime asperiores quos quam, earum nostrum
          fugiat explicabo ipsam pariatur.
        </p>
      </div>
      <div className="py-4 flex items-center justify-center">
        <Image
          src="/logo-primary.svg"
          alt="About Us"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
