const Footer = () => {
  return (
    <div className="flex justify-center mt-4 space-x-3">
      <p className="text-center text-sm">
        Made using <span className="font-bold">React</span> and{" "}
        <span className="font-bold">Tailwind</span>
        {" "}code available{" "}
        <a
          href="https://github.com/itzzsauravp/Portfolio"
          target="_blank"
          className="font-bold"
        >
          @GitHub
        </a>
      </p>
    </div>
  );
};

export default Footer;
