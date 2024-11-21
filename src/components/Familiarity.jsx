const Familiarity = ({ skill }) => {
  const { name, icon, familiarity } = skill;
  const total = 5;
  return (
    <div className="w-full flex justify-between p-2 text-xl">
      <div className="flex items-center gap-2">
        <div className="text-lg  lg:text-xl">{icon}</div>
        <div className="text-lg lg:text-xl">{name}</div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {[...Array(familiarity)].map((_, i) => (
          <div key={i} className="h-2 w-4 lg:w-6 bg-white dark:bg-black"></div>
        ))}
        {[...Array(total - familiarity)].map((_, i) => (
          <div
            key={i}
            className="h-2 w-4 lg:w-6 bg-transparent border dark:border-black"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Familiarity;
