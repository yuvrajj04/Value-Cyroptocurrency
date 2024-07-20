

const Hero = () => {
    return (
        <div className='flex flex-col relative w-auto md:w-full h-auto overflow-hidden font-Poppins font-normal my-[40px] md:my-[80px]'>

            <div className="flex flex-col w-full z-50 items-center font-normal gap-[12px] md:gap-0 font-poppins">
                <span className="text-white text-[18px] md:text-[36px]">THE EASIEST WAY TO</span>
                <span className="text-stroke-white-2 text-[52px] md:text-[103px] text-black !mt-[-20px] font-black">BUY & <span className="!text-white font-black">SELL</span></span>
                <span className="text-white text-[32px] md:text-[103px] !mt-[-40px] font-black"> CRYPTO <span className="font-black text-stroke-white-2  !text-black"> CURRENCY</span></span>

                <div className="flex gap-[18px] md:gap-[33px] w-auto md:w-full justify-center items-center">
                    <div className="flex gap-[22px]">
                        <img src="/Check.svg" alt="check" className='w-[24px] md:w-[33px] h-[24px] md:h-[33px]' />
                        <span className="text-white text-[12px] md:text-[22px]">100% Guarantee</span>
                    </div>

                    <div className="flex gap-[22px]">
                        <img src="/Check.svg" alt="check" className='w-[24px] md:w-[33px] h-[24px] md:h-[33px]' />
                        <span className="text-white text-[12px] md:text-[22px]">Safe Payment</span>
                    </div>

                    <div className="flex gap-[22px]">
                        <img src="/Check.svg" alt="check" className='w-[24px] md:w-[33px] h-[24px] md:h-[33px]' />
                        <span className="text-white text-[12px] md:text-[22px]">24/7 Support</span>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-center items-center mt-[28px] md:mt-[56px] z-50 gap-[16px]">
                <button className='bg-[#FEFF05] h-[48px] md:h-[62.5px] text-black text-[14px] md:text-[18px] py-[14px] md:py-[18px] px-[36px] md:px-[56px] rounded-[68px] md:rounded-[135px]'>GET STARTED</button>
                <div className="fade h-[42px] md:h-[62.5px] w-[62px] md:w-[75px] yellow-fade-in ml-[-18px] md:ml-[-32px]"></div>
                <div className='rounded-full bg-[#FEFF05] w-[62px] md:w-[84px] h-[62px] md:h-[84px] flex justify-center items-center ml-[-32px]'>
                    <img src="/rightArrow.svg" alt="check" className='w-[24px] md:w-[34.5px] h-[18px] md:h-[23px]' />
                </div>
            </div>

            <div className="flex gap-[200px] md:gap-[64px] w-full justify-center items-center mt-[56px] z-50 overflow-x-scroll md:overflow-hidden">
                <div className="relative items-center rounded-[16px] md:rounded-[30px] border-[0.8px] border-[white] px-[36px] w-[200px] md:w-[261px] h-[160px] md:h-[261px] flex flex-col justify-center">
                    <div className="absolute left-[-2px] w-[262.6px] h-[262.6px] black-card-fade-down rounded-[30px] z-[30]"></div>
                    <span className="text-[#DFDE02] text-[24px] md:text-[50px] font-bold z-[40]">20+</span>
                    <span className="text-white text-[25px] z-[40]">Wallet Types</span>
                </div>
                <div className="relative items-center rounded-[16px] md:rounded-[30px] border-[0.8px] border-[white] px-[36px] w-[200px] md:w-[261px] h-[160px] md:h-[261px] flex flex-col justify-center">
                    <div className="absolute left-[-2px] w-[262.6px] h-[262.6px] black-card-fade-down rounded-[30px] z-[30]"></div>
                    <span className="text-[#DFDE02] text-[24px] md:text-[50px] font-bold  z-[40]">2000+</span>
                    <span className="text-white text-[25px]">Wallet Types</span>
                </div>
                <div className="relative items-center rounded-[16px] md:rounded-[30px] border-[0.8px] border-[white] px-[36px] w-[200px] md:w-[261px] h-[160px] md:h-[261px] flex flex-col justify-center">
                    <div className="absolute left-[-2px] w-[262.6px] h-[262.6px] black-card-fade-down rounded-[30px] z-[30]"></div>
                    <span className="text-[#DFDE02] text-[24px] md:text-[50px] font-bold  z-[40]">10M+</span>
                    <span className="text-white text-[25px]">Transactions</span>
                </div>
            </div>
            <div className="absolute bottom-[580px] w-full z-40">
                <div className="w-0 md:w-full hidden md:flex flex-col relative max-w-full">
                    <span className="text-stroke-3 text-black text-[200px] font-bold absolute" style={{ right: '-230px' }}>VALUE</span>
                    <span className="text-stroke-3 text-black text-[200px] font-bold absolute top-[170px]" style={{ left: '-350px' }}>VALUE</span>
                </div>
            </div>

        </div>
    )
}

export default Hero