import { GoDownload } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
const DownloadAndMail = () => {
  const email = import.meta.env.VITE_MY_EMAIL;
  const subject = import.meta.env.VITE_EMAIL_SUBJECT;
  const body = import.meta.env.VITE_EMAIL_BODY;

  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="mt-4 w-full flex items-center justify-center gap-3 p-4">
      <a
        className="px-4 py-2 bg-iOrange rounded-md shadow-xl"
        href="/myResume.pdf"
        target="_blank"
      >
        <span className="flex items-center gap-2">
          <span className="text-sm">Download CV</span>
          <GoDownload />
        </span>
      </a>
      <a
        href={mailToLink}
        target="_blank"
        className="px-5 py-2 bg-transparent border border-iOrange rounded-md shadow-xl"
      >
        <span className="flex items-center gap-2">
          <span className="text-sm">Email Me</span>
          <MdOutlineEmail />
        </span>
      </a>
    </div>
  );
};

export default DownloadAndMail;
