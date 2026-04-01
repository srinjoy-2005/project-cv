import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import General from './General.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Resume from './Resume.jsx'
import './App.css'

function App() {
  const [candidate, setCandidate] = useState({
    general: {
      name: "",
      mobile: "",
      email: ""
    },
    experience: [
      { id: crypto.randomUUID(), company: "", position: "",responsibilities:"", from: "", to: "" }
    ],
    education: [
      { id: crypto.randomUUID(), school: "", degree: "", from: "", to: "" }
    ]
  });

  // //general
  function handleGeneralChange(e){
    let tempCand = {...candidate, general:{...candidate.general, [e.target.name]:e.target.value}};
    setCandidate(tempCand);
  }


  //education
  function handleEducationChange(updatedEduList){
    setCandidate({...candidate, education: updatedEduList});
  }

  //experience
  function handleExperienceChange(updatedExpList){
    setCandidate({...candidate, experience:updatedExpList});
  }

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <>
      <div id="form-container">
        <form action="#" id="user-data-form" onSubmit={handleSubmit}>
          <General data={candidate.general} onChange={handleGeneralChange}></General>
          <Education data ={candidate.education} onChange={handleEducationChange}/>
          <Experience data={candidate.experience} onChange={handleExperienceChange} />
        </form>
      </div>
      <Resume data={candidate}/>
    </>
  )
}

export default App
