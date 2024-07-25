

const Article = () => {
  return (
    <>
        <div className="flex flex-col text-white gap-[40px] md:gap-[140px]">
            <div className="flex flex-row py-[16px] px-[30px] md:px-[80px] gap-[140px] md:gap-[1200px] border-y-[1px] border-white">
                <div className="flex w-full justify-between">
                    <span className="text-[16px] md:text-[18px] font-poppins text-white">Content Articles</span>
                    <img src="yellowArrow.svg" alt="" className="" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row px-[0px] md:px-[150px] gap-[48px] md:gap-[48px] md:justify-center items-center">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-row px-[0px] md:px-[0px] gap-[16px]">
                        <img src="Line1.svg" alt="" />
                        <span className="text-[16.px] font-bold">ARTICLES</span>
                    </div>
                    <div className="flex text-white px-[0px] md:px-[0px] font-montserrat font-bold text-[28px] md:text-[48px]">
                        <span>Some Interesting <br /> <span className="text-[#FEFF05]"> Articles to Read</span></span>
                    </div>
                    <div className="flex flex-row px-[0px] gap-[20px] ">
                        <img src="left-arrow.svg" alt="" className="w-[60px] h-[60px]"/>
                        <img src="right-arrow.svg" alt="" className="w-[60px] h-[60px]"/>
                    </div>
                </div>

                <div className="flex flex-row gap-[24px] md:gap-[32px] h-[500px] md:h-auto px-[20px] md:px-[0px] justify-start md:justify-center max-w-full overflow-x-auto md:overflow-visible ">
                    <div className=" flex-shrink-0 w-[320px] md:w-[360px] h-[480px] md:h-auto relative flex flex-col border-[1px] border-white rounded-[30px] text-white p-[24px] md:p-[36px] gap-[20px] md:gap-[28px] overflow-visible">
                        <img src="Image placeholder.svg" alt="" className="w-full md:w-[316px] h-auto" />
                        <img src="/Ellipse.svg" alt="" className="absolute hidden md:block w-[121px] h-[121px] bottom-[-60px] left-[-60px]"/>
                        <div className="flex flex-col gap-[8px]">
                            <span className=" text-[20px] md:text-[18px]">The Importance of Customer Engagement in Business Growth</span>
                            <span className="text-[12px]">By Admin - 14 Dec 2022</span>
                        </div>
                        <span className="text-[12px] md:text-[14px]">Li Europan lingues es membres del sam <br /> familie. Lor separat existentie es un myth...</span>
                        <button className='bg-[#FEFF05] h-[48px] md:h-[62.5px] text-black text-[14px] md:text-[18px] py-[14px] md:py-[18px] px-[36px] md:px-[56px] rounded-[68px] md:rounded-[135px] justify-center hover:bg-black hover:border hover:border-[#FEFF05] hover:text-[#FEFF05] transition duration-300'>READ OUR BLOGS</button>
                    </div>

                    <div className=" flex-shrink-0 w-[320px] md:w-[360px] h-[480px] md:h-auto relative flex flex-col border-[1px] border-white rounded-[30px] text-white p-[24px] md:p-[36px] gap-[20px] md:gap-[28px] overflow-visible">
                        <img src="Image placeholder.svg" alt="" className="w-full md:w-[316px] h-auto" />
                        <div className="flex flex-col gap-[8px]">
                            <span className=" text-[20px] md:text-[18px]">The Importance of Customer Engagement in Business Growth</span>
                            <span className="text-[12px]">By Admin - 14 Dec 2022</span>
                        </div>
                        <span className="text-[12px] md:text-[14px]">Li Europan lingues es membres del sam <br /> familie. Lor separat existentie es un myth...</span>
                        <button className='bg-[#FEFF05] h-[48px] md:h-[62.5px] text-black text-[14px] md:text-[18px] py-[14px] md:py-[18px] px-[36px] md:px-[56px] rounded-[68px] md:rounded-[135px] justify-center hover:bg-black hover:border hover:border-[#FEFF05] hover:text-[#FEFF05] transition duration-300'>READ OUR BLOGS</button>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Article
