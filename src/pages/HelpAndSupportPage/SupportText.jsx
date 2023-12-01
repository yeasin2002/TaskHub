import { AiFillCode } from "react-icons/ai"
import { MdOutlineReportProblem } from "react-icons/md"
import wdHiveContact from "../../data/wdHiveContactInfo"

const SupportText = () => {
  return (
    <div className="flex-1">
      <p className="mb-5 text-lg font-semibold text-gray-600">Hey, There </p>
      <span className=" xl:text-2xl-5xl text-xl font-semibold text-gray-800">
        <h2>
          Thanks for using our service. We are here to help you. If you have any query or suggestion, please feel free
          to contact us.
        </h2>

        <h2 className="mt-2">
          Moreover,{"It's"} an open source project. If you want to contribute feel free to check our repo.
        </h2>
      </span>
      <div className="my-8 flex flex-col gap-y-3">
        {wdHiveContact.map((info) => {
          return (
            <div className=" inline-block" key={info.name}>
              <a href={`https://${info.link}`} className="flex" target="_blank" rel="noreferrer">
                {info.icons}

                <span className="ml-2 font-semibold text-blue-300">{info.link}</span>
              </a>
            </div>
          )
        })}

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-blackens">Contributions Resources :</h3>

          <div className="mt-6 flex items-center gap-x-8">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Mdkawsarislam2002/TaskHub"
              className="flex items-center gap-x-1 font-semibold text-cyan-800">
              <AiFillCode /> Source Code
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Mdkawsarislam2002/TaskHub/issues"
              className="flex items-center gap-x-1 font-semibold text-cyan-800">
              <MdOutlineReportProblem />
              Create Issue
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportText
