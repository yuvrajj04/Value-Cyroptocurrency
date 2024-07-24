

const Article = () => {
  return (
    <>
        <div className="flex flex-col text-white gap-[40px] md:gap-[140px]">
            <div className="flex flex-row py-[16px] px-[30px] md:px-[80px] gap-[160px] md:gap-[1200px] border-y-[1px] border-white">
                <span className="text-[16px] md:text-[18px] font-poppins text-white">Content Articles</span>
                <img src="yellowArrow.svg" alt="" />
            </div>
            <div className="flex flex-col md:flex-row gap-[48px] md:gap-[100px] md:justify-center items-center">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-row px-[40px] md:px-[80px] gap-[16px]">
                        <img src="Line1.svg" alt="" />
                        <span className="text-[16.px] font-bold">ARTICLES</span>
                    </div>
                    <div className="flex text-white px-[40px] md:px-[80px] font-montserrat font-bold text-[28px] md:text-[54px]">
                        <span>Some Interesting <br /> <span className="text-[#FEFF05]"> Articles to Read</span></span>
                    </div>
                    <div className="flex flex-row px-[80px] gap-[20px] ">
                        <img src="left-arrow.svg" alt="" className="w-[60px] h-[60px]"/>
                        <img src="right-arrow.svg" alt="" className="w-[60px] h-[60px]"/>
                    </div>
                </div>

                <div className="flex flex-row gap-[32px] px-8 md:px-8 justify-start md:justify-center max-w-full overflow-x-auto md:overflow-visible ">
                    <div className=" flex-shrink-0 w-[226px] md:w-auto h-min md:h-auto relative flex flex-col border-[1px] border-white rounded-3xl text-white p-[12px] md:p-[36px] gap-[34px] overflow-visible">
                        <img src="Image placeholder.svg" alt="" className="w-[200px] md:w-[316px] h-auto" />
                        <img src="/Ellipse.svg" alt="" className="absolute hidden md:block w-[121px] h-[121px] bottom-[-60px] left-[-60px]"/>
                        <div className="flex flex-col gap-[8px]">
                            <span className=" text-[14px] md:text-[18px]">The Importance of Customer <br /> Engagement in Business Growth</span>
                            <span className="text-[10px]">By Admin - 14 Dec 2022</span>
                        </div>
                        <span className="text-[12px] md:text-[14px]">Li Europan lingues es membres del sam <br /> familie. Lor separat existentie es un myth...</span>
                        <button className="text-[12px] border-[0.5px] border-[#FEFF05] w-[140px] h-[38px] rounded-full hover:bg-[#FEFF05] hover:text-black transition duration-300">READ OUR BLOGS</button>
                    </div>

                    <div className=" flex-shrink-0 w-[226px] md:w-auto h-min md:h-auto relative flex flex-col border-[1px] border-white rounded-3xl text-white p-[12px] md:p-[36px] gap-[34px]">
                    <img src="Image placeholder.svg" alt="" className="w-[200px] md:w-[316px] h-auto" />
                    <div className="flex flex-col gap-[8px]">
                        <span className="text-[14px] md:text-[18px]">The Importance of Customer <br /> Engagement in Business Growth</span>
                        <span className="text-[10px]">By Admin - 14 Dec 2022</span>
                    </div>
                    <span className="text-[12px] md:text-[14px]">Li Europan lingues es membres del sam <br /> familie. Lor separat existentie es un myth...</span>
                    <button className="text-[12px] border-[0.5px] border-[#FEFF05] w-[140px] h-[38px] rounded-full hover:bg-[#FEFF05] hover:text-black transition duration-300">READ OUR BLOGS</button>
                </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Article
