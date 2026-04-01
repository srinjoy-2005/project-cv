
export default function Resume({data}){
    const general=data.general;
    const {name,mobile,email} = general;
    const education = data.education;
    const experience = data.experience;

    return(
        <>
            <div id="resume">
                <div className="general-section">
                    <h1>{name}</h1>
                    <p>Mobile:📱 {mobile} </p>
                    <p>Email:📩 {email}</p>
                </div>
                <div className="experience-section">
                    Experience
                    {experience.map((exp) => (
                        <div key={exp.id} className="cv-item">
                            <h3 className="company">{exp.company}</h3>
                            <p className="position">{exp.position}</p>
                            <p className="responsibilities">{exp.responsibilities}</p>
                            <p className="date">
                                {exp.from} - {exp.to}   
                            </p>
                        </div>
                    ))}
                </div>
                <div className="education-section">
                    Education
                    {education.map((edu) => (
                        <div key={edu.id} className="cv-item">
                            <h3 className="school">{edu.school}</h3>
                            <p className="degree">{edu.degree}</p>
                            <p className="date">
                                {edu.from} - {edu.to}
                            </p>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    )
}