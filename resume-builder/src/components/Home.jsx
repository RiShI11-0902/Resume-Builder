import React from 'react'
import { useNavigate } from 'react-router'
import { motion } from "framer-motion"

const Home = () => {


    let word = 'A SINGLE SHEET OF PAPER CAN DECIDE YOUR FUTURE'
    let splitWords = word.split(" ")
    console.log(splitWords);
   
    const navigate = useNavigate()

   

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        }
    }

    return (
        <>
        <div className='main bg-blue-400 pt-[8rem] pb-[18rem]'>
            <motion.div style={{ overflow: "hidden", display: "flex"}} variants={container} initial="hidden" animate="visible" className=' flex pt-24  space-x-5  '>
                {
                    splitWords.map((word, index) => {
                        return <motion.span variants={child} key={index} className=' text-gray-700 font-bold text-3xl ml-56 '>{word}</motion.span>
                    })
                }
            </motion.div>
            <div className='w-fit mx-auto mt-10 '>
                <button className='bg-blue-300 border-2 p-2 rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg font-semibold' onClick={() => navigate("/create-resume")}>
                    CREATE RESUME
                </button>
            </div>
            <p className='ml-5 text-gray-800'>Note: use on PC or Laptop for better experience</p>
        </div>
        </>
    )
}

export default Home