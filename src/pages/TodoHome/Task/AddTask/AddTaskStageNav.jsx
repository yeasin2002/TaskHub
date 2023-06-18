const AddTaskStageNav = ({ setIsAdvance }) => {
  return (
    <div className=" border-slate-950/20 md:block hidden border-r rounded-sm">
      <div className=" bg-Light flex flex-col h-full gap-1 pt-10">
        <div className="moodSwitcher" onClick={() => setIsAdvance(false)}>
          Basic
        </div>
        <div className="moodSwitcher" onClick={() => setIsAdvance(true)}>
          Advance
        </div>
      </div>
    </div>
  );
};
export default AddTaskStageNav;
