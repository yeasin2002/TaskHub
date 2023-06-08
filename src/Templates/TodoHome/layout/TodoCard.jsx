const TodoCard = () => {
  let tempImg =
    "https://th.bing.com/th/id/R.677d3abf75ddc6139ac411467c792eef?rik=Lqi7AtlZe%2fFXbw&pid=ImgRaw&r=0";
  return (
    <div className="bg-dim p-4">
      <div className=" flex justify-between">
        <div>
          <div className=" flex items-center gap-2">
            <h2 className="title">Task Title </h2>
            <span className="bg-Shades px-2 py-1 text-sm text-white rounded-md">
              Tag Category
            </span>
          </div>
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
        <div>12:30 AM - 2:45 PM</div>
        <div>
          <div className="flex -space-x-4">
            <img
              className=" w-10 h-10 border-2 border-white rounded-full"
              src={tempImg}
              alt=""
            />
            <img
              className=" w-10 h-10 border-2 border-white rounded-full"
              src={tempImg}
              alt=""
            />

            <p className="hover:bg-gray-600 flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full">
              +99
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
