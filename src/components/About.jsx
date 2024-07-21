


const About = () =>{
  return (
    <>
        <div className="flex md:flex-row m-auto my-[28px]  md:m-[150px] gap-[50px] md:gap-[108px] text-white font-poppins">
            <img src="Sphere.svg" alt="sphere" className="hidden md:flex"/>
            <div className="flex flex-col gap-[44px] px-4 md:px-0">
                <div className="flex flex-col gap-[36px]">
                    <div className="flex flex-row gap-[16px]">
                        <img src="Line1.svg" alt="" />
                        <span className="text-[16.px] font-bold">WHO ARE WE</span>
                    </div>
                    
                    <div >
                        <span className="text-[46px] font-semibold">The World’s </span>
                        <span className="text-[#FEFF05] text-[46px] font-semibold"> 1st ICO </span>
                        <span className="text-[46px] font-semibold">Platform That Offers Rewards</span>
                    </div>
                    <span className="text-[16px] text-[#A4B4C3] text-normal">The World’s 1st ICO Platform That Offers Rewards and 
                    The platform helps investors to make easy to purchase and sell their tokens.
                    </span>
                </div>
                <button className="text-white border-[1px] border-[#FEFF05] rounded-full w-[316px] h-[72px] px-[72px] py-[24px] hover:bg-[#FEFF05] hover:text-black transition duration-300">Purchase Token</button>
            </div>
        </div>
    </>
  )
}

export default About
