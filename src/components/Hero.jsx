

const Hero = () => {
    return (
        <div className='flex flex-col relative w-full h-auto overflow-hidden font-Poppins font-normal my-[80px]'>

            <div className="flex flex-col w-full z-50 items-center font-normal">
                <span className="text-white text-[36px]">THE EASIEST WAY TO</span>
                <span className="text-stroke-white-2 text-[103px] text-black !mt-[-20px] font-black">BUY & <span className="!text-white font-black">SELL</span></span>
                <span className="text-white text-[103px] !mt-[-40px] font-black"> CRYPTO <span className="font-black text-stroke-white-2 text-[103px] !text-black"> CURRENCY</span></span>

                <div className="flex gap-[33px] w-full justify-center items-center">
                    <div className="flex gap-[22px]">
                        <img src="/Check.svg" alt="check" className='w-[33px] h-[33px]' />
                        <span className="text-white text-[22px]">100% Guarantee</span>
                    </div>

                    <div className="flex gap-[22px]">
                        <img src="/Check.svg" alt="check" className='w-[33px] h-[33px]' />
                        <span className="text-white text-[22px]">Safe Payment</span>
                    </div>

                    <div className="flex gap-[22px]">
                        <img src="/Check.svg" alt="check" className='w-[33px] h-[33px]' />
                        <span className="text-white text-[22px]">24/7 Support</span>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-center items-center mt-[56px] z-50">
                <button className='bg-[#FEFF05] h-[62.5px] text-black text-[18px] py-[18px] px-[56px] rounded-[135px]'>GET STARTED</button>
                <div className="fade h-[62.5px] w-[75px] yellow-fade-in ml-[-32px]"></div>
                <div className='rounded-full bg-[#FEFF05] w-[84px] h-[84px] flex justify-center items-center ml-[-32px]'>
                    <img src="/rightArrow.svg" alt="check" className='w-[34.5px] h-[23px]' />
                </div>
            </div>

            <div className="flex gap-[64px] w-full justify-center items-center mt-[56px] z-50">
                <div className="relative items-center rounded-[30px] border-[0.8px] border-[white] w-[261px] h-[261px] flex flex-col justify-center">
                    <div className="absolute left-[-2px] w-[262.6px] h-[262.6px] black-card-fade-down rounded-[30px] z-[30]"></div>
                    <span className="text-[#DFDE02] text-[50px] font-bold z-[40]">20+</span>
                    <span className="text-white text-[25px] z-[40]">Wallet Types</span>
                </div>
                <div className="relative items-center rounded-[30px] border-[0.8px] border-[white] w-[261px] h-[261px] flex flex-col justify-center">
                    <div className="absolute left-[-2px] w-[262.6px] h-[262.6px] black-card-fade-down rounded-[30px] z-[30]"></div>
                    <span className="text-[#DFDE02] text-[50px] font-bold  z-[40]">2000+</span>
                    <span className="text-white text-[25px]">Wallet Types</span>
                </div>
                <div className="relative items-center rounded-[30px] border-[0.8px] border-[white] w-[261px] h-[261px] flex flex-col justify-center">
                    <div className="absolute left-[-2px] w-[262.6px] h-[262.6px] black-card-fade-down rounded-[30px] z-[30]"></div>
                    <span className="text-[#DFDE02] text-[50px] font-bold  z-[40]">10M+</span>
                    <span className="text-white text-[25px]">Transactions</span>
                </div>
            </div>
            <div className="absolute bottom-[580px] w-full z-40">
                <div className="w-full flex flex-col relative max-w-full">
                    <span className="text-stroke-3 text-black text-[200px] font-bold absolute" style={{ right: '-230px' }}>VALUE</span>
                    <span className="text-stroke-3 text-black text-[200px] font-bold absolute top-[170px]" style={{ left: '-350px' }}>VALUE</span>
                </div>
            </div>

        </div>
    )
}

export default Hero