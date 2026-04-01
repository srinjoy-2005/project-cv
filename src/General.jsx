// import { useState } from "react";

export default function General({data:{name,mobile,email}, onChange}){
    return(
        <>
        
            <label htmlFor="name">Name </label> 
            <input
            name="name"
            value={name}
            onChange={onChange}
            />
            <label htmlFor="mobile">Mobile Number </label>
            <input
            name="mobile"
            type="number"
            value={mobile}
            onChange={onChange}
            />
            <label htmlFor="email">E-Mail ID </label>
            <input
            name="email"
            type="email"
            value={email}
            onChange={onChange}
            />
        
        </>
    );
}