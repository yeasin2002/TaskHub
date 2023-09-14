// eslint-disable-next-line no-unused-vars
const Developers = ({ name, fullName, Roll, contact, image, workDetails }) => {
  return (
    <div>
      <div className=" w-full p-4">
        <span className=" md:h-72 xl:h-80 2xl:h-[30] block h-60 overflow-hidden rounded">
          <img
            alt={fullName}
            className="block object-cover object-center w-full h-full"
            src={image}
          />
        </span>
        <div className="mt-4">
          <h2 className="title-font text-lg font-medium text-gray-900">
            {fullName}
          </h2>
          <p className="mt-1">{Roll}</p>

          <div className="gap-x-1 flex flex-wrap mt-5">
            {contact.map((val) => {
              return (
                <div key={val.name}>
                  {val.link && (
                    <a href={val.link} target="_blank" rel="noreferrer">
                      {val.icons}
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <p className="my-1">Technology : {workDetails.technology} </p>
            <span className="gap-x-1 flex">
              <p>{workDetails.displayName} </p> :
              <a
                href={workDetails.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                {workDetails.title}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Developers;
