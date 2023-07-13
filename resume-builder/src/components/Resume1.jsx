import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf"
import { insta, link, tweet } from '../assets';



const Resume1 = () => {

    const pdfRef = useRef()

    const resumeData = useSelector(state => state.dataStore)
    console.log(resumeData.personalInfo.firstName);

    const downloadPdf = () => {
        const input = pdfRef.current;
        html2canvas(input, {}).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pageWidth = 210
            // const pageHeight = 297
            const height = canvas.height * pageWidth / canvas.width
            console.log(imgData);
            const pdf = new jsPDF("p", "mm", "a4", true)
            pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, height)
            pdf.save("Resume.pdf")
        })
    }

    return (
        <>
            <div className='p-10'>
                <button onClick={downloadPdf} className='absolute -top-36 -right-20 bg-blue-400 p-3'>DOWNLOAD</button>
                <div ref={pdfRef} className="resume-body border -mt-20  border-black bg-slate-100 p-10 ml-20">
                    <div className="head-seection text-center">
                        <span className='text-2xl font-extrabold'>{resumeData.personalInfo.firstName}</span>
                        <span className='text-2xl ml-5 font-extrabold'>{resumeData.personalInfo.lastName}</span>
                        <div className="contactDetails flex justify-around w-full mt-3 space-x-5">
                            <p><span className='font-semibold'>Email-Id:</span> {resumeData.personalInfo.Email}</p>
                            <p><span className='font-semibold'>Mobile no :</span> {resumeData.personalInfo.Mobile}</p>
                            <p><span className='font-semibold'>Website :</span> {resumeData.personalInfo.Website}</p>
                        </div>
                    </div>
                    <div className="workSection mt-5">
                        <h1 className='font-semibold underline'>Work Experience:</h1>
                        <div className="list flex flex-col">
                            {
                                resumeData.workEx.map((i) => {
                                    return <div className="item mt-5">
                                        <div className="top flex items-center space-x-10">
                                            <div>
                                                <p>{i.title}</p>
                                                {/* <p>{i.orgName}</p> */}
                                            </div>
                                            <div className="flex space-x-5 items-center">
                                                <span>{i.startYear}</span> <span>-</span>
                                                <span>{i.endYear}</span>
                                            </div>
                                        </div>
                                        <div className="middle">
                                            <p>{i.orgName}</p>
                                        </div>
                                        <div className="last w-[35rem]">
                                            <p>{i.jobDescription}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="education mt-5">
                        <h1 className='font-semibold underline'>Education :</h1>

                        <div className="list">
                            {
                                resumeData.education.map((i) => {
                                    return <div className="item mt-5">
                                        <div className="top flex items-center space-x-10">
                                            <div>
                                                <p>{i.Type}</p>
                                                {/* <p>{i.orgName}</p> */}
                                            </div>
                                            <div className="flex space-x-5 items-center">
                                                <span>{i.Start}</span> <span>-</span>
                                                <span>{i.End}</span>
                                            </div>
                                        </div>
                                        <div className="middle">
                                            <p>{i.University}</p>
                                        </div>
                                        <div className="last">
                                            <p>{i.Degree}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                    <div className="skills mt-5">
                        <h1 className='font-semibold underline'>Skills: </h1>
                        <div className="list grid grid-cols-3 gap-4 mt-3">
                            {
                                resumeData.skills.map((i) => {
                                    return <div className="item">
                                        {i.skillName}
                                    </div>
                                })
                            }
                        </div>

                    </div>
                   
                </div>
            </div>

        </>
    )
}

export default Resume1