/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";

//  icons
import { AiOutlineTeam } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import DatesPicker from "./DatesPicker";
// components

const AddTask_Form = () => {
  const [participants, setParticipants] = useState([]);
  const { handleSubmit, formState, register } = useForm();

  return (
    <div className=" px-7 flex flex-col justify-between flex-1 h-screen py-4">
      <div>
        <input
          type="text"
          //    daysi ui is conflicting with this  input so i have to add this style
          style={{
            outline: "none",
          }}
          placeholder="Add a title to your task "
          className=" inputHolder"
          {...register("title", {
            required: "Todo Title is required",
          })}
        />
        {/*  dates */}
        <div className=" gap-x-2 flex items-center">
          {/* start dates */}
          <DatesPicker />
          {/*  ending date  */}
          <DatesPicker />
        </div>

        <div className="my-4">
          <label htmlFor="Description" className="text-blackens ">
            <p>Description</p>
          </label>
          <br />
          <textarea
            className="placeholder:text-Shades ring ring-Shades/10 w-full h-48 border-none rounded-lg"
            name="Description"
            id="Description"
            placeholder="Write a meaningfull  Description"
            {...register("description", {
              required: "Description is required",
            })}
          ></textarea>
        </div>

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
            {...register("collection")}
          />
        </div>

        <div>
          <p className="text-blackens my-4 text-xl font-semibold">
            Participants
          </p>
          <span className="border-Shades hover:cursor-pointer inline-block p-1 border-2 rounded-md">
            <AiOutlineTeam className="text-3xl text-blue-800" />
          </span>
        </div>
      </div>

      {/*  advance part  */}
    </div>
  );
};
export default AddTask_Form;
