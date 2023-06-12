// import {  } from "@material-tailwind/react";

import { useGetJWTQuery } from "./Redux/feature/API/accountApiSlice/accountApiSlice";

const Test = () => {
  const { data } = useGetJWTQuery();
  console.log(data?.cout);
  return (
    <div>
      <p>Test</p>
    </div>
  );
};

export default Test;
