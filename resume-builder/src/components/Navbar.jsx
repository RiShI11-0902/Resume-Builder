import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import { Link, Route, Routes } from 'react-router-dom';
import PersonalInfo from '../infoComponents/PersonalInfo';
import Skills from '../infoComponents/Skills';
import Education from '../infoComponents/Education';
import WorkExp from '../infoComponents/WorkExp';
import Templates from '../infoComponents/Templates';

const Navbar = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <>
        <div className="left mt-10 ml-5">
            <div className="logo w-36 text-2xl font-extrabold md:text-5xl text-blue-300">
                <Link to="/" >Resume</Link>
            </div>
        </div>

            <div className="navbar  top-40 flex  left-10  md:space-x-40 w-fit absolute z-10 justify-between  mx-auto">

                <div>
                    <ul className="sm:flex  flex-col text-left cursor-pointer font-bold hidden md:space-y-10  ">
                        <Link className='text-left' to="/create-resume/PersonalInfo">Personal info</Link>
                        <Link className='text-left' to="/create-resume/WorkExp">Work</Link>
                        <Link className='text-left' to="/create-resume/Education">Education</Link>
                        <Link className='text-left' to="/create-resume/Skills">Skills</Link>
                        <Link className='text-left' to="/create-resume/Templates">Templates</Link>
                    </ul>
                </div>
                {
                    <Routes>
                        <Route exact path='/PersonalInfo' element={<PersonalInfo />} />
                        <Route exact path='/Skills' element={<Skills />} />
                        <Route exact path='/Education' element={<Education />} />
                        <Route exact path='/WorkExp' element={<WorkExp />} />
                        <Route exact path='/Templates' element={<Templates />} />
                    </Routes>
                }
                <div className="right-mobile  sm:block md:hidden xl:hidden 2xl:hidden ">
                    <div className="nav-items my-4">
                        {
                            toggle ? (
                                ""
                            ) :
                                <div initial={{ x: -200 }} transition={{ ease: "backOut" }} animate={{ x: 0 }} className=" absolute bg-white rounded-tr-3xl rounded-bl-3xl w-full top-20 left-0 ">
                                    <div className="nav-items my-10">
                                        <ul className="flex flex-col space-y-10 items-center font-bold">
                                            <Link to="PersonalInfo">Personal info</Link>
                                            <Link to="WorkExp">Work</Link>
                                            <Link to="Education">Education</Link>
                                            <Link to="Skills">Skills</Link>
                                        </ul>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="md:hidden ">
                    {
                        toggle ? <GiHamburgerMenu className='text-black' onClick={() => setToggle(false)} /> : <GrClose onClick={() => setToggle(true)} />
                    }
                </div>
            </div>
        </>
    )
}


export default Navbar

