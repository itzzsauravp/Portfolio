import { FaBookOpen } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Education = () => {
  const EducationDetails = [
    {
      education: "Bachelor",
      faculty: "Bsc.CSIT",
      studiedAt: "Kathmandu Bernhardt College",
      start: "2021",
      graduate: "2025",
      gpa: "N/A",
    },
    {
      education: "Higher School",
      faculty: "+2 Science (Physics)",
      studiedAt: "Trinity International College",
      start: "2017",
      graduate: "2019",
      gpa: "2.96",
    },
  ];
  const [openAccordion, setOpenAccordion] = useState(
    Array(EducationDetails.length).fill(false)
  );
  return (
    <div className="mt-7">
      <span className="flex py-2  text-2xl gap-2 items-center font-semibold uppercase border-iOrange border-b">
        <FaBookOpen />
        Education
      </span>
      {EducationDetails.map((edu, idx) => (
        <div
          key={idx}
          className="text-xl border-b py-2 mt-2 cursor-pointer"
          onClick={() =>
            setOpenAccordion((prev) => {
              const newState = [...prev].map((item, i) =>
                idx === i ? item : false
              );
              newState[idx] = !newState[idx];
              return newState;
            })
          }
        >
          <div className="flex items-center gap-1">
            <span className="text-xl mt-1 transition-transform duration-300">
              {openAccordion[idx] ? (
                <IoIosArrowDown className="duration-200" />
              ) : (
                <IoIosArrowDown className="-rotate-90 duration-200" />
              )}
            </span>
            <span
              className={`${
                !openAccordion[idx] && "hover:translate-x-4"
              } duration-200 ease-in-out`}
            >
              {edu.education}
            </span>
          </div>
          <div
            className={`${
              openAccordion[idx] ? "max-h-[500px] py-2" : "max-h-0"
            } overflow-hidden transition-all duration-500 ease-in-out text-[1rem] px-6`}
          >
            <p>
              <span className="font-semibold">Faculty:</span> {edu.faculty}
            </p>
            <p>
              <span className="font-semibold">At:</span> {edu.studiedAt}
            </p>
            <p>
              <span className="font-semibold">Start:</span> {edu.start}
            </p>
            <p>
              <span className="font-semibold">Graduate:</span> {edu.graduate}
            </p>
            <p>
              <span className="font-semibold">GPA:</span> {edu.gpa}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
