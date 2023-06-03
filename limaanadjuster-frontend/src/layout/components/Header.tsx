const Header = () => {
  return (
    <header className="border-b-[#EAEAEA] border px-8 py-3 justify-end flex">
      <div className="flex space-x-2 items-center">
        <div className="w-9 h-9 overflow-hidden rounded-full">
          <img
            src="https://source.unsplash.com/random/400x400"
            alt="Person"
            className="object-cover w-full h-full"
          />
        </div>
        <p>Admin</p>
      </div>
    </header>
  );
};

export default Header;
