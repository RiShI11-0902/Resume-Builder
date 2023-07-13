import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { addElement, removeElement, updateEducation } from '../store/resumeReducer'
import TextField from '../input components/TextField'

const Education = () => {
  const edu = useSelector(state => state.dataStore.education)
  console.log(edu);

  const dispatch = useDispatch()

  const changeHandler = (key, value, index) => {
    dispatch(updateEducation({
      key: key,
      value: value,
      index: index
    }))
  }

  const addEdu = () => {
    dispatch(addElement({
      key: "education",
      element: {
        Type: "Graduation",
        University: "",
        Degree: "",
        Start: "",
        End: "",
      },
    }))
  }

  const removeEdu = () => {
    dispatch(removeElement({
      key: "education"
    }))
  }

  return (
    <>
      {/* <Navbar/> */}
      <div className='w-[60rem] absolute -top-10  left-20'>
        <h1 className='text-2xl font-bold'>Education</h1>
        {
          edu.map((i, index) => {
            return <div key={index}>
              <h2 className='mt-5'>Education {index + 1}</h2>
              <div className='grid grid-cols-2 items-center gap-5 mt-10'>
                <div className="type">
                  <TextField id="Edu1" placeholder="" value={i.Type} onChange={(value) => { changeHandler("Type", value, index) }} />
                </div>
                <div className="uni">
                  <TextField id="uni1" placeholder="University Name" value={i.University} onChange={(value) => { changeHandler("University", value, index) }} />
                </div>
                <div className="deg1">
                  <TextField id="deg1" placeholder="Degree Name" value={i.Degree} onChange={(value) => { changeHandler("Degree", value, index) }} />
                </div>
                <div className="year">
                  <div className="start"><TextField id="deg1" placeholder="Start Year" value={i.Start} onChange={(value) => { changeHandler("Start", value, index) }} /></div>
                </div>

                <div className="end"><TextField id="deg1" placeholder="End Year" value={i.End} onChange={(value) => { changeHandler("End", value, index) }} /></div>
                <div className='flex flex-row items-center space-x-5'>
                  <button onClick={addEdu} className=' hover:shadow-2xl shadow-black p-2 font-semibold rounded-2xl bg-green-300 w-fit'>
                    Add Education
                  </button>
                  <button onClick={removeEdu} className=' hover:shadow-2xl shadow-black p-2 font-semibold rounded-2xl bg-red-300 w-fit'>
                    Remove Education
                  </button>
                </div>
              </div>
              <div className='mt-5 font-bold text-3xl w-[50rem]  p-[0.10rem]  bg-cyan-950'></div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default Education