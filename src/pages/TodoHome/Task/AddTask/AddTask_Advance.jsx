import { AiOutlineTeam } from "react-icons/ai";

const AddTask_Advance = ({ setIsAdvance }) => {
  return (
    <div className="flex flex-col justify-between w-full h-screen px-8 py-8">
      <div>
        <div className="w-full">
          <label htmlFor="collection" className=" text-xl font-semibold">
            Collection
          </label>
          <br />
          <input
            type="text"
            id="collection"
            className="inputHolder"
            placeholder="Type a collection name"
          />
        </div>

        <div>
          <p className="text-blackens my-4 text-xl font-semibold">
            Perticipants{" "}
          </p>
          <span className="border-Shades hover:cursor-pointer inline-block p-1 border-2 rounded-md">
            <AiOutlineTeam className="text-3xl text-blue-800" />
          </span>
        </div>
      </div>

      <div className="md:hidden flex justify-end">
        <button
          className="bg-Shades px-2 py-1 mb-20 rounded-lg"
          onClick={() => setIsAdvance(false)}
        >
          previous
        </button>
      </div>
    </div>
  );
};

export default AddTask_Advance;
