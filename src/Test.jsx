import { useGetAllTaskQuery } from "./Redux/feature/API/taskApiSlice/taskApiSlice";

const Test = () => {
  const { data, isLoading } = useGetAllTaskQuery();
  console.log(data);
  return (
    <div>
      <p>Test</p>
      <p>{isLoading && "loading"}</p>
    </div>
  );
};

export default Test;
