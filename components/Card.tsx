import Image from "next/image";

export const Card = ({ project }: any) => {
  return (
    <div className="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700">
      <Image
        placeholder="blur"
        blurDataURL={project.fields.url}
        src={project.fields.url}
        height={270}
        width={400}
        objectFit="cover"
        alt="an image of the project"
      />
      <div className="p-5">
        <a target="_blank" rel="noreferrer" href={project.fields.demo}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
            {project.fields.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">
          {project.fields.description}
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href={project.fields.demo}
          className="inline-flex items-center mt-2 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Live Demo
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={project.fields.code}
          className="inline-flex items-center ml-5 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};
