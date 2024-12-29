const Navbar = () => {
  return (
    <nav className="flex justify-around bg-slate-800 text-white py-2">
      <div className="logo">
        <span className="font-bold text-x1 mx-8 my-2">list of task</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all duration-50">Home</li>
      </ul> 
    </nav>
  );
};

export default Navbar;
