const ProjectCard = ({ project }) => {
  const { name, desc, link } = project;
  return (
    <div className="border p-4 dark:border-black rounded-md w-full flex flex-col">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-slate-500 py-3">{desc}</p>
      <div className="mt-auto flex flex-col md:flex-row  items-center gap-2 w-full ">
        <a
          className="bg-iOrange px-2 py-1 rounded-md text-center w-full"
          href={link}
          target="_blank"
        >
          View Repo
        </a>
        <button className="px-2 py-1 bg-transparent border border-iOrange rounded-md w-full">
          Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
