import Warning from "../icons/Warning";
import Cancel_Button from "./Cancel_Button";
import Ok_Button from "./Ok_Button";

const Modals = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body ">
          <div className="flex gap-x-2">
            <Warning />
            <div>
              <h2 className="card-title">Are your Sure ?</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Ok_Button />
            <Cancel_Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
