//  Importable Dependencies
import cover from "../../assets/cover/logInCover.svg"

import brand from "../../assets/Brand.svg"

const LogInOutAndSingInAndUp_temp = ({ children }) => {
  return (
    <section className="flex h-screen w-full bg-Shades p-5 md:p-9">
      <div style={{ backgroundImage: `url(${cover})` }} className="bg-slate-700 relative hidden flex-1 md:block">
        <div className=" bg-slate-900/70 flex h-full w-full flex-col justify-between px-4 py-4">
          <div>
            <img src={brand} alt="logo" className=" w-56" />
            <h1 className=" mt-4 text-4xl font-bold text-white xl:text-5xl">
              Let us be a tiny
              <br />
              Little part of
              <br />
              Your life
            </h1>
          </div>
          <div>
            <ul className="flex gap-x-6 pb-8 font-bold text-white">
              <li>home</li>
              <li>about</li>
              <li>service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex-1 bg-white">{children} </div>
    </section>
  )
}
export default LogInOutAndSingInAndUp_temp
