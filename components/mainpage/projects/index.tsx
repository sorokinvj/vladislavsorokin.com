import Image from "next/image";

const PROJECTS = [
  {
    image: "/assets/images/logoWella.svg",
    title: "design system",
  },
  {
    image: "/assets/images/logoSeedrs.svg",
    title: "fintech platform",
  },
  {
    image: "/assets/images/logoCarlsberg.svg",
    title: "multinational e\u2011commerce",
  },
  {
    image: "/assets/images/logoNimblefi.svg",
    title: "banking CRM",
  },
  {
    image: "/assets/images/logoVoxpop.svg",
    title: "speech-to-text SaaS",
  },
  {
    image: "/assets/images/logoRqc.svg",
    title: "corporate media",
  },
  {
    image: "/assets/images/logoMaria.svg",
    title: "jewellery e\u2011commerce",
  },
];

export const Projects: React.FC = () => {
  return (
    <div className="col-span-3 grid-container md:col-span-8">
      <h1 className="col-span-3 md:col-span-8 mb-12 md:mb-12">
        💛 Projects I enjoyed working on
      </h1>
      <div className="col-span-3 md:col-span-8 grid-container items-center">
        {PROJECTS.map((project) => (
          <div
            className="col-span-1 flex flex-col items-center mb-8"
            key={project.image}
          >
            <div className="relative w-20 h-16 flex flex-col items-start md:items-center justify-center">
              <Image src={project.image} alt={project.title} layout="fill" />
            </div>
            <p className="text-xs max-w-[65px] text-center">{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
