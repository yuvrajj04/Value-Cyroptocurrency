

const Token = () => {
  return (
    <>
        <div className="flex flex-row mt-[180px] mb-[80px] pl-6 md:pl-0 md:mx-[80px] justify-center items-center gap-[140px]">
            <div className="flex flex-col text-white gap-[42px] md:gap-[84px]">
                <div className="flex flex-row gap-4 md:gap-[55px] font-bold text-[18px]">
                    <span>Funding Allocation</span>
                    <span>Token Allocation</span>
                </div>
                <div className="flex flex-col gap-[32px] md:gap-[54px]">
                    <div className="flex font-montserrat font-semibold text-[40px] md:text-[66px] leading-[40px] md:leading-[80px]">
                        <span>1 CNL = <span className="text-[#FEFF05]"> 0.0863 BTC</span></span>
                    </div>
                    <div>
                        <span>The World’s 1st ICO Platform That Offers Rewards and <br/>The platform helps investors to make easy to purchase and sell their tokens
                        </span>
                    </div>
                    <div>
                        <button className="text-white border-[1px] border-[#FEFF05] rounded-full w-[255px] h-[72px] px-[72px] py-[24px] hover:bg-[#FEFF05] hover:text-black transition duration-300">BUY NOW</button>
                    </div>
                </div>
            </div>
            <img src="Mobile-phone.svg" alt="" className="hidden md:flex"/>
        </div>
    </>
  )
}

export default Token
