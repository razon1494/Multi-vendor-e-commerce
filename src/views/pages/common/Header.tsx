import logo from "../../../assets/img/logo.png";
// import logo from "./"
export const Header = () => {
  const newLocal = "container mx-auto bg-slate-400";
  return (
    <div className={newLocal}>
      <div className="flex items-center justify-between py-3">
        <div className="">
          <img src={logo} alt="a" />
        </div>
        <div className=" border-none p-5">
          <input className="px-3 py-2" type="text" />
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
