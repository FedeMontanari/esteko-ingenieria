import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col flex-wrap w-full my-12 px-12">
      <div className="h-[100px] w-full flex flex-row">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">
            Somos{" "}
            <span className="font-akira text-3xl text-primary">ESTEKO</span>
          </h2>
        </div>
        <div className="w-1/2 relative">
          <svg
            width="400"
            height="100"
            viewBox="0 0 400 100"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full h-[100px] block"
          >
            <path
              d="M399.5 0.5V99.5H1.20711L100.207 0.5H200H399.5Z"
              stroke="#FA7B04"
            />
          </svg>

          <p className="w-3/4 absolute right-0 h-full py-4 pr-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptatum quaerat ad a fugiat provident est voluptas cupiditate
            accusamus omnis sequi harum doloremque.
          </p>
        </div>
      </div>
      <div className="h-[100px] w-full flex flex-row">
        <div className="w-1/2 relative">
          <svg
            width="400"
            height="100"
            viewBox="0 0 400 100"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full h-[100px] block scale-[-1]"
          >
            <path
              d="M399.5 0.5V99.5H1.20711L100.207 0.5H200H399.5Z"
              stroke="#FA7B04"
            />
          </svg>
          <p className="w-3/4 py-4 pl-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure sunt
            sint, animi recusandae hic necessitatibus nemo? Asperiores, ratione
            officiis eum sed placeat et illo doloribus dolorem.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/logo-primary.svg"
            alt="About Us"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
