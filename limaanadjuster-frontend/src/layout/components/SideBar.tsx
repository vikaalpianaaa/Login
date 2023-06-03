import lymaasLogo from "public/lymaas.png";

const SideBar = () => {
  return (
    <nav
      className="flex flex-col w-72"
      style={{boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.05)"}}>
      <div className="flex justify-center mt-5">
        <img src={lymaasLogo} alt="logo" width={200} height={220} />
      </div>
    </nav>
  );
};

export default SideBar;
