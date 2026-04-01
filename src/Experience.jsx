import { useState } from "react";

export default function Experience({data, onChange}) {
    const explist = data;

    function addExp(index) {
        const newItem = {
            id: crypto.randomUUID(),
            company: "",
            position: "",
            responsibilities: "",
            from: "",
            to: ""
        };

        const newExpList = [...explist];
        newExpList.splice(index + 1, 0, newItem);
        onChange(newExpList);
    }

    function deleteExp(index) {
        const newExpList = [...explist];
        newExpList.splice(index, 1);
        onChange(newExpList);
    }

    function handleChange(e, type, index){
        const newExpList = [...explist];
        newExpList[index][type] = e.target.value;
        onChange(newExpList);
    }

    // console.log(explist);

    if (explist.length === 0) {
        return (
            <button type="button" onClick={() => addExp(0)}>Add Experience</button>
        );
    }
    
    return (
    <>
        {
        explist.map((exp,index) => {
            return (
                <div key={exp.id}>
                    Experience {index + 1}
                    <input type="text" id={exp.id} placeholder="Company Name" value={exp.company} onChange={(e) => handleChange(e,"company", index)} />
                    <input type="text" placeholder="Position" value={exp.position} onChange={(e) => handleChange(e,"position", index)} />
                    <input type="text" placeholder="Responsibilities" value={exp.responsibilities} onChange={(e) => handleChange(e,"responsibilities", index)} />
                    <input type="number" min="1900" max="2099" placeholder="From" value={exp.from} onChange={(e) => handleChange(e,"from", index)} />
                    <input type="number" min="1900" max="2099" placeholder="To" value={exp.to} onChange={(e) => handleChange(e,"to", index)} />
                    <button type="button" className="add-btn" onClick={()=>addExp(index)}>Add Experience</button>
                    <button type="button" className="remove-btn" onClick={()=>deleteExp(index)}>Delete Experience</button>
                </div>
            );
        })
        }
    </>
    );   
}
