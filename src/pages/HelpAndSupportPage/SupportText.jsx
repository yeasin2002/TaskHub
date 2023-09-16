import { AiFillCode } from "react-icons/ai";
import { MdOutlineReportProblem } from "react-icons/md";
import wdHiveContact from "../../data/wdHiveContactInfo";

const SupportText = () => {
  return (
    <div className="flex-1">
      <p className="mb-5 text-lg font-semibold text-gray-600">Hey, There </p>
      <span className=" xl:text-2xl-5xl text-xl font-semibold text-gray-800">
        <h2>
          Thanks for using our service. We are here to help you. If you have any
          query or suggestion, please feel free to contact us.
        </h2>

        <h2 className="mt-2">
          Moreover,{"It's"} an open source project. If you want to contribute
          feel free to check our repo.
        </h2>
      </span>
      <div className="gap-y-3 flex flex-col my-8">
        {wdHiveContact.map((info) => {
          return (
            <div className=" inline-block" key={info.name}>
              <a
                href={`https://${info.link}`}
                className="flex"
                target="_blank"
                rel="noreferrer"
              >
                {info.icons}

                <span className="ml-2 font-semibold text-blue-300">
                  {info.link}
                </span>
              </a>
            </div>
          );
        })}

        <div className="mt-10">
          <h3 className="text-blackens text-2xl font-bold">
            Contributions Guideline :
          </h3>

          <div className="gap-x-8 flex items-center mt-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Mdkawsarislam2002/TaskHub"
              className="text-cyan-800 gap-x-1 flex items-center font-semibold"
            >
              <AiFillCode /> Source Code
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Mdkawsarislam2002/TaskHub/issues"
              className="text-cyan-800 gap-x-1 flex items-center font-semibold"
            >
              <MdOutlineReportProblem />
              Create Issue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportText;
