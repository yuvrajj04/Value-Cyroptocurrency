

const Header = () => {
  return (
    <header className="p-[20px] md:p-[32px] mx-auto md:mx-[78px] flex justify-between items-center bg-black text-white font-poppins">
      <div className="text-[26px] font-normal  mb-4 md:mb-0">VALUE</div>
        <nav className="hidden md:flex justify-center items-center space-x-[44px] text-[14px] flex-grow">
          <a href="#HOME" className="hover:underline">HOME</a>
          <a href="#EXCHANGE" className="hover:underline">EXCHANGE</a>
          <a href="#PRICES" className="hover:underline">PRICES</a>
          <a href="#ABOUT" className="hover:underline">ABOUT</a>
          <a href="#BLOG" className="hover:underline">BLOG</a>
        </nav>
        
        <div className="flex mb-4 md:mb-0">
          <img src="menu.svg" alt="" className="flex md:hidden " />
          <div className="hidden md:flex gap-[20px] text-[14px]">
            <button className="text-white py-1 px-4 ">Sign In</button>
            <button className="text-white border-[0.8px] border-[#FEFF05] rounded-full py-[8px] px-[32px] hover:bg-[#FEFF05] hover:text-black transition duration-300">Sign Up</button>
          </div>
        </div>
    </header>
  );
};

export default Header;
