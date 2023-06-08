const TodoCard = () => {
  return (
    <div className="bg-dim p-4">
      <div className=" flex justify-between">
        <div>
          <h2 className="title">Task Title </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            error?
          </p>
        </div>
        <div>
          <input type="checkbox" name="todo" id="todo" defaultChecked />
        </div>
      </div>
      <div className="bg-slate-900/40 my-2 w-full h-[.10rem]"></div>

      <div className="flex justify-between">
        <div>Date</div>
        <div>Avatar</div>
      </div>
    </div>
  );
};

export default TodoCard;
