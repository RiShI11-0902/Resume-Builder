import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '../input components/TextField'
import TextArea from '../input components/TextArea'
import { addElement, updateWorkEx, removeElement } from '../store/resumeReducer'


const WorkExp = () => {
  const work = useSelector(state => state.dataStore.workEx)
  const dispatch = useDispatch()
  const changeHandler = (key, value, index) => {
    dispatch(updateWorkEx({
      key: key,
      value: value,
      index: index
    }))// console.log(value);
  }
  const AddeExp = () => {
    dispatch(addElement({
      key: "workEx",
      element: {
        title: "",
        orgName: "",
        startYear: "",
        endYear: "",
        jobDescription: "",
      }
    }))
  }
  const removeExp = () => {
    dispatch(removeElement({
      key: "workEx"
    }))
  }
  return (
    <>

      <div className='w-[60rem] absolute -top-10  left-20'>
        <h1 className='text-2xl font-bold'>Work Experience</h1>
        {
          work.map((i, index) => {
            return <div key={index}>
              <h1 className='mt-5'>Experience {index + 1}</h1>
              <div className='grid grid-cols-2 items-center gap-5 mt-10'>
                <div className="title">
                  <TextField id="text" placeholder="Job Title" value={i.title} onChange={(value => {
                    changeHandler("title", value, index)
                  })} />
                </div>
                <div>
                  <TextField id="text" placeholder="org Name" value={i.orgName} onChange={(value => {
                    changeHandler("orgName", value, index)
                  })} />
                </div>
                <div>
                  <TextField id="text" placeholder="Start Year" value={i.startYear} onChange={(value => {
                    changeHandler("startYear", value, index)
                  })} />
                </div>
                <div>
                  <TextField id="text" placeholder="End Year" value={i.endyear} onChange={(value => {
                    changeHandler("endYear", value, index)
                  })} />
                </div>
                <div className=' p-3 '>
                  <TextArea id="text" placeholder="Job description" value={i.jobDescription} onChange={(value => {
                    changeHandler("jobDescription", value, index)
                  })} />
                </div>
                <div className='flex flex-row space-x-5'>
                  <button onClick={AddeExp} className=' hover:shadow-2xl shadow-black p-2 font-semibold rounded-2xl bg-green-300 w-fit'>
                    Add Experience
                  </button>
                  <button onClick={removeExp} className=' hover:shadow-2xl shadow-black p-2 font-semibold rounded-2xl bg-red-300 w-fit'>
                    Remove Experience
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

export default WorkExp