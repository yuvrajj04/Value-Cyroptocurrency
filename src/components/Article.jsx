

const Article = () => {
  return (
    <>
        <div className="flex flex-col text-white gap-[140px]">
            <div className="flex flex-row py-[16px] px-[80px] gap-[1080px] border-y-[1px] border-white">
                <span className="text-[18px] font-poppins text-white">Content Articles</span>
                <img src="yellowArrow.svg" alt="" />
            </div>
            <div className="flex flex-row gap-[100px] justify-center items-center">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-row px-[80px] gap-[16px]">
                        <img src="Line1.svg" alt="" />
                        <span className="text-[16.px] font-bold">ARTICLES</span>
                    </div>
                    <div className="flex text-white px-[80px] font-montserrat font-bold text-[54px]">
                        <span>Some Interesting <br /> <span className="text-[#FEFF05]"> Articles to Read</span></span>
                    </div>
                    <div className="flex flex-row px-[80px] gap-[20px] ">
                        <img src="left-arrow.svg" alt="" />
                        <img src="right-arrow.svg" alt="" />
                    </div>
                </div>

                <div className="flex flex-row gap-[32px] ">
                    <div className="relative flex flex-col border-[1px] border-white rounded-3xl text-white p-[36px] gap-[34px]">
                        <img src="Image placeholder.svg" alt="" className="w-[316px] h-auto" />
                        <img src="/Ellipse.svg" alt="" className="absolute w-[121px] h-[121px] bottom-[-80px] left-[-40px]"/>
                        <div className="flex flex-col gap-[8px]">
                            <span className="text-[18px]">The Importance of Customer <br /> Engagement in Business Growth</span>
                            <span className="text-[10px]">By Admin - 14 Dec 2022</span>
                        </div>
                        <span className="text-[14px]">Li Europan lingues es membres del sam <br /> familie. Lor separat existentie es un myth...</span>
                        <button className="text-[12px] border-[0.5px] border-[#FEFF05] w-[140px] h-[38px] rounded-full">READ OUR BLOGS</button>
                    </div>

                    <div className="flex flex-col border-[1px] border-white rounded-3xl text-white p-[36px] gap-[34px]">
                    <img src="Image placeholder.svg" alt="" className="w-[316px] h-auto" />
                    <div className="flex flex-col gap-[8px]">
                        <span className="text-[18px]">How to Build a Strong Brand <br /> Identity in the Digital Age</span>
                        <span className="text-[10px]">By Admin - 14 Dec 2022</span>
                    </div>
                    <span className="text-[14px]">Li Europan lingues es membres del sam <br /> familie. Lor separat existentie es un myth...</span>
                    <button className="text-[12px] border-[0.5px] border-[#FEFF05] w-[140px] h-[38px] rounded-full">READ OUR BLOGS</button>
                </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Article
