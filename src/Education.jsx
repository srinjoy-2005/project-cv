// import { useState } from "react";

export default function Education({data, onChange}) {
   const edulist = data;

    function addEdu(index) {
        const newItem = {
            id: crypto.randomUUID(),
            school: "",
            degree: "",
            from: "",
            to: ""
        };

        const newEduList = [...edulist];
        newEduList.splice(index + 1, 0, newItem);
        onChange(newEduList);
    }

    function deleteEdu(index) {
        const newEduList = [...edulist];
        newEduList.splice(index, 1);
        onChange(newEduList);
    }  
    
    function handleChange(e, type, index){
        // const newEduList = [...edulist];
        // newEduList[index][type] = e.target.value;
        // onChange(newEduList);
        const newEduList = edulist.map((item, i) => {
            if (i === index) {
                // Create a brand new object with the updated value
                return { ...item, [type]: e.target.value };
            }
            return item; 
        });
        onChange(newEduList);
    }

    if (edulist.length === 0) {
        return (
            <button type="button" onClick={() => addEdu(0)}>Add Education</button >
        );
    }

    return (
    <>
        {
        edulist.map((edu,index) => {
            return (
                <div key={edu.id}>
                    <input type="text" id={edu.id} placeholder="School Name" value={edu.school} onChange={(e) =>handleChange(e,"school", index)} />

                    <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(e,"degree",index)} />
                    <input type="number" min="1900" max="2099" placeholder="From" value={edu.from} onChange={(e) => handleChange(e,"from",index)} />
                    <input type="number" min="1900" max="2099" placeholder="To" value={edu.to} onChange={(e)=>handleChange(e,"to",index)} />
                    <button type="button" className="add-btn" onClick={()=>addEdu(index)}>Add Education</button >
                    <button type="button" className="remove-btn" onClick={()=>deleteEdu(index)}>Delete Education</button >
                </div>
            );
        })
        }
        
    </>
    )
    
}