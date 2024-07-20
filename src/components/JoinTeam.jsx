

const JoinTeam = () => {
  return (
    <>
        
        <div className="flex flex-col gap-[40px] text-white my-[180px] mx-[150px] rounded-[24px] border-[1px] border-white px-[80px] py-[40px] justify-center items-center ">
            {/* <div className="flex relative bg-gradient-to-b from-[#2A2D31] to-[#060606] opacity-10 "></div> */}
            <img src="person-male.svg" alt=""  />
            <div className="flex flex-col gap-[24px] justify-center items-center">
                <span className="flex font-montserrat font-bold text-[50px]">Interested to <span className="text-[#FEFF05] "> Join Our Team?</span></span>
                <span className="flex text-[16px] font-poppins ">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation.</span>
            </div>
            <button className='bg-[#FEFF05] h-[62.5px] text-black text-[18px] py-[18px] px-[56px] rounded-[135px]'>GET STARTED</button>
        </div>
    </>
  )
}

export default JoinTeam
