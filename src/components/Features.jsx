import './Features.css';

const Features = () => {
  return (
    <>
      <div className='relative flex flex-col text-white font-poppins'>
        <div className="absolute flex bg-[#242424] w-full h-[240px] md:h-[456px] z-[-20]"></div>
        <span className='flex text-[12px] md:text-[20px] font-bold justify-center mt-[32px] md:mt-[96px]'>WHY CHOOSE US</span>
        <span className="flex text-[24px] md:text-[60px] justify-center font-semibold font-montserrat">Why choose our bigtech</span>
        <span className="flex text-[24px] md:text-[60px] justify-center font-semibold font-montserrat text-[#FEFF05] mb-[32px] md:mb-[58px]"> Token</span>
        <div className="flex flex-row px-[60px] md:px-[80px] gap-[12px] md:gap-[24px] md:justify-center overflow-x-scroll md:overflow-x-hidden">
            <div className="flex flex-col border-[1px] rounded-[16px] border-gradient-reverse shadow-bg backdrop-blur-2xl py-[32px] md:py-[60px] px-[28px] md:px-[40px]">
                <div className='flex flex-col gap-[24px] md:gap-[24px] w-[200px]'>
                  <img src="/paymentBag.svg" alt="" className='w-[80px] h-[80px]'/>
                  <span className='text-[24px] font-medium'>Mobile payment <br /> make easy</span>
                  <span className='text-[16px] font-normal'>Add new, trending and rare <br /> artwork to your collection.</span>
                </div>
            </div>
            <div className="flex flex-col gap-[24px] md:gap-[24px] border-[1px] rounded-[16px] border-gradient-reverse shadow-bg backdrop-blur-2xl py-[32px] md:py-[60px] px-[28px] md:px-[40px]">
                <div className='flex flex-col gap-[24px] md:gap-[24px] w-[200px]'>
                  <img src="/freeBag.svg" alt="" className='w-[80px] h-[80px]'/>
                  <span className='text-[24px] font-medium'>Lifetime free <br /> transaction </span>
                  <span className='text-[16px] font-normal'>Add new, trending and rare <br /> artwork to your collection.</span>
                </div>
            </div>
            <div className="flex flex-col gap-[24px] md:gap-[24px] border-[1px] rounded-[16px] border-gradient-reverse shadow-bg backdrop-blur-2xl py-[32px] md:py-[60px] px-[28px] md:px-[40px]">
              <div className='flex flex-col gap-[24px] md:gap-[24px] w-[200px]'>
                <img src="/chartBag.svg" alt="" className='w-[80px] h-[80px]'/>
                <span className='text-[24px] font-medium'>Protect the <br /> identity </span>
                <span className='text-[16px] font-normal'>Add new, trending and rare <br /> artwork to your collection.</span>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] md:gap-[24px] border-[1px] rounded-[16px] border-gradient-reverse shadow-bg backdrop-blur-2xl py-[32px] md:py-[60px] px-[28px] md:px-[40px]">
                <div className='flex flex-col gap-[24px] md:gap-[24px] w-[200px]'>
                  <img src="/securityBag.svg" alt="" className='w-[80px] h-[80px]'/>
                  <span className='text-[24px] font-medium'>Sercurity & control <br /> over money </span>
                  <span className='text-[16px] font-normal'>Add new, trending and rare <br /> artwork to your collection.</span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Features
