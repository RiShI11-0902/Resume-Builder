import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '../input components/TextField'
import { addElement, removeElement, updateSkill } from '../store/resumeReducer'

const Skills = () => {

  const skillHead = useSelector(state => state.dataStore.skills)
  const dispatch = useDispatch()

  const changeHandler = (key,value,index)=>{
    dispatch(updateSkill({
      key: key,
      value: value,
      index: index
    }))
  }

  const addskill = () => {
    dispatch(addElement({
      key: "skills",
      element: {
        SkillName: "",
      },
    }))
  }

  const removeskill = () => {
    dispatch(removeElement({
      key: "skills"
    }))
  }

  return (
    <>
      <div className='w-[60rem] absolute -top-10  left-20'>
        <h1 className='text-2xl font-bold'>SKILLS</h1>
        {
          skillHead.map((i, index) => {
            return <div key={index}>
              <h2 className='mt-5'>Skill {index + 1}</h2>
              <div className='grid grid-cols-2 items-center gap-5 mt-10'>
                <div className="type">
                  <TextField id="skill1" placeholder="Skill Name" value={i.SkillName} onChange={(value) => { changeHandler("skillName", value, index) }} />
                </div>
                <div className='flex flex-row items-center space-x-5'>
                <button onClick={addskill} className=' hover:shadow-2xl shadow-black p-2 font-semibold rounded-2xl bg-green-300 w-fit'>
                    Add Skill
                  </button>
                  <button onClick={removeskill} className=' hover:shadow-2xl shadow-black p-2 font-semibold rounded-2xl bg-red-300 w-fit'>
                    Remove Skill
                  </button>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default Skills

