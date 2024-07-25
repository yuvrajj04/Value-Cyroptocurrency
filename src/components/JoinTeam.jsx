

const JoinTeam = () => {
  return (
    <>
        <div className="flex justify-center px-[150px]">
          <div className="relative flex flex-col max-w-[1270px] gap-[28px] md:gap-[40px] text-white my-[40px] md:my-[40px] mx-[20px] md:mx-[170px] rounded-[24px] border-[1px] border-white px-[60px] md:px-[80px] py-[30px] md:py-[40px] md:justify-center items-center ">
              {/* <div className="flex relative bg-gradient-to-b from-[#2A2D31] to-[#060606] opacity-10 "></div> */}
              <img src="person-male.svg" alt="" className="flex w-[56px] md:w-[72px] h-[56px] md:h-[72px]" />
              <div className="flex flex-col gap-[24px] justify-center items-center">
                  <span className="md:flex text-center font-montserrat font-bold text-[24px] md:text-[50px]">Interested to<span className="text-[#FEFF05] md:px-[20px]"> Join Our Team?</span></span>
                  <span className="flex text-[12px] md:text-[16px] font-poppins ">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation.</span>
              </div>
              <button className='bg-[#FEFF05] h-[48px] md:h-[62.5px] text-black text-[14px] md:text-[18px] py-[14px] md:py-[18px] px-[36px] md:px-[56px] rounded-[68px] md:rounded-[135px] justify-center hover:bg-black hover:border hover:border-[#FEFF05] hover:text-[#FEFF05] transition duration-300'>GET STARTED</button>
              <img src="/Ellipse.svg" alt="" className="absolute w-[148px] h-[148px] bottom-[-74px] right-[-74px] hidden md:flex"/>
          </div>
        </div>
    </>
  )
}

export default JoinTeam
