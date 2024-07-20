

const JoinTeam = () => {
  return (
    <>
        
        <div className="relative flex flex-col gap-[28px] md:gap-[40px] text-white my-[90px] md:my-[180px] mx-[20px] md:mx-[150px] rounded-[24px] border-[1px] border-white px-[60px] md:px-[80px] py-[30px] md:py-[40px] md:justify-center md:items-center ">
            {/* <div className="flex relative bg-gradient-to-b from-[#2A2D31] to-[#060606] opacity-10 "></div> */}
            <img src="person-male.svg" alt="" className="hidden md:flex" />
            <div className="flex flex-col gap-[24px] justify-center items-center">
                <span className="flex font-montserrat font-bold text-[24px] md:text-[50px]">Interested to <span className="text-[#FEFF05] px-[20px]"> Join Our Team?</span></span>
                <span className="flex text-[12px] md:text-[16px] font-poppins ">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation.</span>
            </div>
            <button className='bg-[#FEFF05] h-[62.5px] text-black text-[12px] md:text-[18px] py-[18px] px-[56px] rounded-[135px]'>GET STARTED</button>
            <img src="/Ellipse.svg" alt="" className="absolute w-[148px] h-[148px] bottom-[-74px] right-[-74px] hidden md:flex"/>
        </div>
    </>
  )
}

export default JoinTeam
