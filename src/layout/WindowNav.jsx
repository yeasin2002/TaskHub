import { Link } from "react-router-dom";

import { MdOutlineArrowBackIos } from "react-icons/md";

const WindowNav = () => {
  return (
    <div>
      <div className="navbar px-4 py-1">
        <div className="bg-dim text-slate-800 inline-block p-2 rounded-full">
          <Link to={-1} className="btn btn-ghost text-xl normal-case">
            <MdOutlineArrowBackIos />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WindowNav;
