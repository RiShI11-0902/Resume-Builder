import { createSlice } from "@reduxjs/toolkit";

export const resumeReducer = createSlice({
  name: "dataStore",
  initialState: {
    personalInfo: {
      firstName: "",
      lastName: "",
      Email: "",
      Mobile: "",
      Website: "",
    },
    workEx: [
      {
        title: "",
        orgName: "",
        startYear: "",
        endYear: "",
        jobDescription: "",
      },
    ],
    education: [
      {
        Type: "Graduation",
        University: "",
        Degree: "",
        Start: "",
        End: "",
      },
    ],
    skills: [{ skillName: "" }],
    selectedTemplate: "",
  },
  reducers:{
    updatePersonalInfo:(state,action)=>{
        state.personalInfo[action.payload.key] = action.payload.value
    },
    updateWorkEx:(state,action)=>{
      state.workEx[action.payload.index][action.payload.key] = action.payload.value
    },
    updateEducation:(state,action)=>{
      state.education[action.payload.index][action.payload.key] = action.payload.value
    },
    updateSkill:(state,action)=>{
      state.skills[action.payload.index][action.payload.key] = action.payload.value
    },
    addElement:(state,action)=>{
      state[action.payload.key].push(action.payload.element)
    },
    removeElement:(state,action)=>{
      state[action.payload.key].pop()
    }
  }
});

export const { updatePersonalInfo, updateWorkEx, addElement, removeElement,updateEducation, updateSkill } = resumeReducer.actions

export default resumeReducer.reducer
