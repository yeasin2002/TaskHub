import Btn_Primary from "../Components/Btn_Primary";
import view from "./../../assets/display/view.png";

const Hero = () => {
  return (
    <main className="">
      <section className="body-font text-gray-600">
        <div className="md:flex-row container flex flex-col items-center px-5 py-24 mx-auto">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 flex flex-col items-center mb-16 text-center">
            <h1 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
              Smash all of your ideas into one place
            </h1>
            <p className="mb-8 leading-relaxed">
              Collaborate with your friends to help you make your journey of
              bringing them to live a bit more fun.
            </p>
            <div className="flex justify-center">
              <Btn_Primary className="focus:outline-none hover:bg-indigo-600 inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded">
                Button
              </Btn_Primary>
              <Btn_Primary className="focus:outline-none hover:bg-gray-200 inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded">
                Button
              </Btn_Primary>
            </div>

            <p className="mt-4">69 people are already enjoying our app</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={view}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
