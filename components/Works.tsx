import { Card } from "./Card";

export const Works = ({ projects }: any) => {
  console.log(projects);
  return (
    <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section className="w-full">
        <h2 id="work" className="secondary-title">
          My work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {projects.map((project: any) => (
            <Card key={project.sys.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};
