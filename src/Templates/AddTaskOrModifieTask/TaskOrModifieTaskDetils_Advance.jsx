import { AiOutlineTeam } from "react-icons/ai";

const TaskOrModifieTaskDetils_Advance = () => {
  return (
    <div className="w-full px-8 py-8">
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
  );
};

export default TaskOrModifieTaskDetils_Advance;
