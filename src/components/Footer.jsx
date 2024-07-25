

const Footer = () => {
  return (
    <>
        <footer className=" text-white md:pt-[60px]">
            
            <div className="relative flex flex-col-reverse md:flex-row md:gap-[140px] justify-center items-start md:items-center mb-[60px] md:mb-[60px] ">
                <div className="absolute hidden md:flex bg-white opacity-[6%] h-[318px] w-full top-[-60px]"></div>
                <div className="flex gap-[20px] md:gap-[140px] md:mx-[40px] px-[16px] md:px-0 max-w-[360px] md:max-w-auto">
                    <div className="flex flex-col w-[180px] md:w-auto md:space-y-[40px] gap-4">
                        <a className="text-[22px] font-bold md:mr-4">Quick Links</a>
                        <nav className="flex flex-col space-y-[16px] text-sm">
                            <a href="#About" className="text-[16px] hover:underline">About</a>
                            <a href="#Services" className="text-[16px] hover:underline">Services</a>
                            <a href="#Hubs" className="text-[16px] hover:underline">Hubs</a>
                            <a href="#Pricing Plan" className="text-[16px] hover:underline">Pricing Plan</a>
                        </nav>
                    </div>
                    <div className="flex flex-col md:space-y-[40px] justify-between gap-4">
                        <a className="text-[22px] font-bold mr-4">Contact Us</a>
                        <nav className="flex flex-col gap-4 md:gap-0 md:space-y-[16px] text-sm">
                            <div className="text-[16px] flex gap-[8px] items-center">
                                <img src="/Email.svg" alt="email" className='w-[16px] h-[16px]' />
                                <a href="#About" className="hover:underline">hello@website.com</a>
                            </div>
                            <div className="text-[16px] flex gap-[8px] items-baseline">
                                <img src="/Location.svg" alt="location" className='w-[16px] h-[16px]' />
                                <a href="#Services" className="hover:underline">Riverside Building, County Hall,<br/>London SE1 7PB, United Kingdom</a>
                            </div>
                            <div className="text-[16px] flex gap-[8px] items-center">
                                <img src="/Contact.svg" alt="contact" className='w-[16px] h-[16px]' />
                                <a href="#Hubs" className="hover:underline">+02 5421234560</a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col px-[16px] md:px-0 gap-4 md:gap-[40px] justify-center items-start md:items-start md:flex">
                    <a className="text-[22px] font-bold mr-4">Subscribe</a>
                    <div className="h-[48px] w-[300px] md:w-[400px] flex shadow rounded-full md:rounded-l-full p-l-[24px] overflow-hidden mb-4">
                        <input  type="text"
                                className="bg-[#3F4143] text-[12px] outline-none w-full py-[16px] px-[24px]"
                                placeholder="Enter your email address"
                                readOnly 
                        />
                        <button
                        // onClick={}
                        className='outline-none bg-[#DFDE02] text-black px-4 '
                        >Subscribe</button>
                    </div>
                    <div className="flex flex-row gap-[32px] md:gap-[16px] pb-[40px] md:pb-0">
                        <img src="/Socials/Twitter.svg" alt="check" className='w-[40px] h-[40px]' />
                        <img src="/Socials/Instagram.svg" alt="check" className='w-[40px] h-[40px]' />
                        <img src="/Socials/Facebook.svg" alt="check" className='w-[40px] h-[40px]' />
                        <img src="/Socials/Youtube.svg" alt="check" className='w-[40px] h-[40px]' />
                    </div>                    
                </div>
            </div>
            <div className="flex border-t-[1px] border-white text-[12px] py-[14px] justify-center items-center ">Ⓒ 2023 All rights reserved. This is Your Company</div>
        </footer>
    </>
  );
};

export default Footer;
