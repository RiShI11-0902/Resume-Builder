import PersonalInfo from './infoComponents/PersonalInfo'
import Home from './components/Home'
import WorkExp from './infoComponents/WorkExp'
import Skills from './infoComponents/Skills'
import Education from './infoComponents/Education'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import ResumeCreator from './components/ResumeCreator';

function App() {
  return (

    <>

      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/create-resume/*' element={<ResumeCreator />} />
          {/* <Route path='create-resume/PersonalInfo' element={<PersonalInfo />} />
          <Route path='create-resume/WorkExp' element={<WorkExp />} />
          <Route path='create-resume/Skills' element={<Skills />} />
          <Route path='create-resume/Education' element={<Education />} /> */}
        </Routes>
      </Router>

      {/* <Home />
      <PersonalInfo /> */}
    </>
  )
}

export default App
