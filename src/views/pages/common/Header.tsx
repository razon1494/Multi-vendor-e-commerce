import logo from "../../../assets/img/logo.png";
// import logo from "./"
export const Header = () => {
  const newLocal = "container mx-auto bg-slate-400";
  return (
    <div className={newLocal}>
      <div className="flex items-center">
        <div className="">
          <img src={logo} alt="a" />
        </div>
        <div className="p-3 border-none">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};
