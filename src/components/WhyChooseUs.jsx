

const WhyChooseUs = () => {
    return (
        <div className="flex flex-col">
            <div className='flex flex-col bg-[#484848] '>
                <div className="relative  pt-[92px]  pb-[180px]">
                    <div className="absolute bg-[#000000] bg-opacity-[50%] w-full h-full top-0"></div>
                    <div className="flex flex-col items-start md:items-center z-40 pl-6 md:pl-0">
                        <span className="text-white text-bold text-[20px] ">WHY CHOOSE US</span>
                        <span className="text-white text-[60px] font-semibold mt-2 md:mt-[-10px] leading-none">Why choose our bigtech</span>
                        <span className="text-[#FEFF05] text-[60px] font-semibold mt-[-20px]">Token</span>
                    </div>
                </div>
            </div>

            <div className="flex px-4 md:px-0 flex-nowrap gap-[64px] overflow-x-auto md:overflow-hidden w-full justify-start md:justify-center items-center mt-[-116px] z-[40] ">
                <div className="flex-shrink-0 relative rounded-[30px] p-12 border-[0.8px] card-gradient  border-[white] w-[308px] h-[355px] flex flex-col gap-6 justify-center items-start">
                    <div className="absolute left-[-2px] w-[310px] h-[355px] backdrop-blur-[1px] rounded-[30px] "></div>
                    <img src="/paymentBag.svg" alt="" className="w-[80px] h-[80px] z-[40]" />
                    <span className="text-white text-left text-[22px] font-medium z-[40]">Mobile payment make easy </span>
                    <span className="text-[#A4B4C3] text-[15px] z-[40]">Add new, trending and rare artwork to your collection.</span>
                </div>
                <div className="flex-shrink-0 relative rounded-[30px] p-12 border-[0.8px] card-gradient border-[white] w-[308px] h-[355px] flex flex-col gap-6 justify-center items-start">
                    <div className="absolute left-[-2px] w-[310px] h-[355px] backdrop-blur-[1px] rounded-[30px] "></div>
                    <img src="/freeBag.svg" alt="" className="w-[80px] h-[80px] z-[40]" />
                    <span className="text-white text-left text-[22px] font-medium z-[40]">Lifetime free transaction  </span>
                    <span className="text-[#A4B4C3] text-[15px] z-[40]">Add new, trending and rare artwork to your collection.</span>
                </div>
                <div className="flex-shrink-0 relative rounded-[30px] p-12 border-[0.8px] card-gradient border-[white] w-[308px] h-[355px] flex flex-col gap-6 justify-center items-start">
                    <div className="absolute left-[-2px] w-[310px] h-[355px] backdrop-blur-[1px] rounded-[30px] "></div>
                    <img src="/chartBag.svg" alt="" className="w-[80px] h-[80px] z-[40]" />
                    <span className="text-white text-left text-[22px] font-medium z-[40]">Protect the identity </span>
                    <span className="text-[#A4B4C3] text-[15px] z-[40]">Add new, trending and rare artwork to your collection.</span>
                </div>
                <div className="flex-shrink-0 relative rounded-[30px] p-12 border-[0.8px] card-gradient border-[white] w-[308px] h-[355px] flex flex-col gap-6 justify-center items-start">
                    <div className="absolute left-[-2px] w-[310px] h-[355px] backdrop-blur-[1px] rounded-[30px] "></div>
                    <img src="/securityBag.svg" alt="" className="w-[80px] h-[80px] z-[40]" />
                    <span className="text-white text-left text-[22px] font-medium z-[40]">Sercurity & control over money </span>
                    <span className="text-[#A4B4C3] text-[15px] z-[40]">Add new, trending and rare artwork to your collection.</span>
                </div>
            </div>
        </div>

    )
}

export default WhyChooseUs