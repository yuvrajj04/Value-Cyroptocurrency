

const Token = () => {
  return (
    <>
        <div className="flex flex-row mt-[180px] mb-[80px] mx-[80px] justify-center items-center gap-[140px]">
            <div className="flex flex-col text-white gap-[84px]">
                <div className="flex flex-row gap-[55px] font-bold text-[18px]">
                    <span>Funding Allocation</span>
                    <span>Token Allocation</span>
                </div>
                <div className="flex flex-col gap-[54px]">
                    <div className="flex font-montserrat font-semibold text-[66px] leading-[80px]">
                        <span>1 CNL = <span className="text-[#FEFF05]"> 0.0863 BTC</span></span>
                    </div>
                    <div>
                        <span>The World’s 1st ICO Platform That Offers Rewards and <br/>The platform helps investors to make easy to purchase and sell their tokens
                        </span>
                    </div>
                    <div>
                        <button className="text-white border-[1px] border-[#FEFF05] rounded-full w-[255px] h-[72px] px-[72px] py-[24px]">BUY NOW</button>
                    </div>
                </div>
            </div>
            <img src="Mobile-phone.svg" alt="" />
        </div>
    </>
  )
}

export default Token
