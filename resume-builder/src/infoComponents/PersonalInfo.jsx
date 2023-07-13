import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePersonalInfo } from "../store/resumeReducer"
import TextField from '../input components/TextField'
import Navbar from '../components/Navbar'
const PersonalInfo = () => {
    const head = useSelector(state => state.dataStore.personalInfo)
    const dispatch = useDispatch()
    const changeHandler = (key, value) => {
        dispatch(updatePersonalInfo({
            key: key,
            value: value
        }))
        console.log(value);
    }
    // console.log(head.firstName);
    return (
        <>
            {/* <Navbar /> */}

            <div className='w-[60rem] absolute top-0  left-20'>
                <h1 className='font-extrabold text-3xl'>Personal Details</h1>
                <div className='grid grid-cols-2'> 
                    <div className='mt-10 '>
                        <TextField  id="text" placeholder="First Name" value={head.firstName} onChange={(value => {
                            changeHandler("firstName", value)
                        })} />
                    </div>
                    <div className='mt-10 '>
                        <TextField  id="text" placeholder="Last Name" value={head.lastName} onChange={(value => {
                            changeHandler("lastName", value)
                        })} />
                    </div>
                    <div className='mt-10 '>
                        <TextField  id="text" placeholder="E-mail" value={head.Email} onChange={(value => {
                            changeHandler("Email", value)
                        })} />
                    </div>
                    <div className='mt-10'>
                        <TextField  id="text" placeholder="Mobile" value={head.Mobile} onChange={(value => {
                            changeHandler("Mobile", value)
                        })} />
                    </div>
                    <div className='mt-10'>
                        <TextField  id="text" placeholder="Website Link" value={head.Website} onChange={(value => {
                            changeHandler("Website", value)
                        })} />
                    </div>
                </div>
            </div>

        </>
    )
}
//{/* <input type="text" onChange={(e)=>changeHandler("firstName",e.target.value)} /> */}
export default PersonalInfo