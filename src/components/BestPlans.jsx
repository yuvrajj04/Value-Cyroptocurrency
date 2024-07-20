

const BestPlans = () => {
    return (
        
        <div className='relative flex flex-col gap-[66px] items-center'>
            <img src="/Ellipse.svg" alt="" className="absolute w-[349px] h-[349px] top-[40px] hidden md:flex "/>
            <div className="flex flex-col justify-center items-center mt-[122px]">
                <span className=" text-center text-white font-bold text-[42px] md:text-[54.5px]">Our best plans ready<span className=" !text-[#FEFF05]"> for <br /> your choice</span></span>
                <span className="text-[#7C8794] text-[20px] text-center">The available plans are billed monthly according to the plan <br /> appropriate to your needs.</span>
            </div>

            <div className="flex gap-[30px] py-[60px] md:py-[40px] overflow-x-scroll md:overflow-hidden">

                <div className=" rounded-[30px] relative flex h-[576px] flex-col border border-white px-[47px] w-[370px] justify-center gap-[60px]">
                    <div className="flex flex-col">
                        <span className="text-left text-white text-[22px]">Basic</span>
                        <span className="text-[#FEFF05] font-semibold text-[72px]">29$</span>
                        <span className="text-left text-white text-[22px]">Monthly</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                            <img src="half-tone.svg" alt="" className="" />
                            <span className="text-[#7C8794] text-[18px]">Up to 2 users</span>
                        </div>

                        <div className="flex gap-2">
                            <img src="/microphone.svg" alt="" className="" />
                            <span className="text-[#7C8794] text-[18px]">Up to 3 live campaigns</span>
                        </div>

                        <div className="flex gap-2">
                            <img src="/state-inactive.svg" alt="" className="" />
                            <span className="text-[#293546] text-[18px] line-through">Real-time statistics</span>
                        </div>

                        <div className="flex gap-2">
                            <img src="/chat-inactive.svg" alt="" className="" />
                            <span className="text-[#293546] text-[18px] line-through">Live support</span>
                        </div>

                    </div>

                    <button className='absolute left-1/2 transform -translate-x-1/2 bottom-[-27px] bg-white text-black text-[16px] rounded-[117px] w-[217px] h-[54px] flex gap-1 justify-center items-center'>
                        <span className="">BUY NOW</span>
                        <img src="/rightArrowBuyNow.svg" alt="" className="w-[20px] h-[20px] mb-[-2.5px]" />
                    </button>
                </div>

                <div className="rounded-[30px] relative flex h-[576px] flex-col border border-white px-[47px] w-[370px] justify-center gap-[60px]">
                    <div className="golden-grad absolute left-[-2px] top-[-2px] z-30 h-[578px] w-[372px] opacity-[30%] rounded-[30px]"></div>
                    <img src='/yellowNoise.svg' className="golden-grad opacity-5 absolute left-[-2px] top-[-2px] z-40 h-[578px] w-[372px] rounded-[30px]" />

                    <div className="flex flex-col z-50">
                        <span className="text-left text-white text-[22px]">Business</span>
                        <span className="text-white font-semibold text-[72px]">99$</span>
                        <span className="text-left text-white text-[22px]">Monthly</span>
                    </div>
                    <div className="flex flex-col z-50 gap-3">
                        <div className="flex gap-2">
                            <img src="half-tone.svg" alt="" className="" />
                            <span className="text-[#F2F2F2] text-[18px]">Up to 2 users</span>
                        </div>

                        <div className="flex gap-2">
                            <img src="/microphone.svg" alt="" className="" />
                            <span className="text-[#F2F2F2] text-[18px]">Up to 3 live campaigns</span>
                        </div>

                        <div className="flex gap-2">
                            <img src="/states-active.svg" alt="" className="" />
                            <span className="text-[#F2F2F2] text-[18px]">Real-time statistics</span>
                        </div>

                        <div className="flex gap-2">
                            <img src="/chat-inactive.svg" alt="" className="" />
                            <span className="text-[#8396B0] text-[18px] line-through">Live support</span>
                        </div>

                    </div>

                    <button className='absolute left-1/2 transform z-50 -translate-x-1/2 bottom-[-27px] bg-[#FEFF05] text-black text-[16px] rounded-[117px] w-[217px] h-[54px] flex gap-1 justify-center items-center'>
                        <span className="">BUY NOW</span>
                        <img src="/rightArrowBuyNow.svg" alt="" className="w-[20px] h-[20px] mb-0 md:mb-[-2.5px]" />
                    </button>
                </div>

                <div className="rounded-[30px] relative flex h-[576px] flex-col border border-white px-[47px] w-[370px] justify-center gap-[60px]">
                    <div className="flex flex-col">
                        <span className="text-left text-white text-[22px]">Enterprise</span>
                        <span className="text-[#FEFF05] font-semibold text-[72px]">279$</span>
                        <span className="text-left text-white text-[22px]">Monthly</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                            <img src="half-tone.svg" alt="" className="" />
                            <span className="text-[#7C8794] text-[18px]">Up to 2 users</span>
                        </div>

                        <div className="flex gap-2">
                            <img src="/microphone.svg" alt="" className="" />
                            <span className="text-[#7C8794] text-[18px]">Up to 3 live campaigns</span>
                        </div>

                        <div className="flex gap-2">
                        <img src="/states-active.svg" alt="" className="" />

                            <span className="text-[#7C8794] text-[18px] ">Real-time statistics</span>
                        </div>

                        <div className="flex gap-2">
                            <img src="/chat-active.svg" alt="" className="" />
                            <span className="text-[#7C8794] text-[18px] ">Live support</span>
                        </div>

                    </div>

                    <button className='absolute left-1/2 transform -translate-x-1/2 bottom-[-27px] bg-white text-black text-[16px] rounded-[117px] w-[217px] h-[54px] flex gap-1 justify-center items-center'>
                        <span className="">BUY NOW</span>
                        <img src="/rightArrowBuyNow.svg" alt="" className="w-[20px] h-[20px] mb-[-2.5px]" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BestPlans