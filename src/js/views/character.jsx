import React, { useEffect, useState } from 'react';
import { getAllPeople } from '../component/api';
import {Link} from "react-router-dom"

const Character = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fn = async () => {
            const apiPeople = await getAllPeople();
            return setPeople(apiPeople);
        };
        fn();
    },[]);


    return (
        <>
        <div> { people.map((item, index) => 

        
        <div key={index} className="card" style={{width: "18rem", display:"inline-block"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">{item.url}</p>
    <Link to={`/characters/${item.uid}`}>Learn more!</Link>
  </div>
</div>
)}</div>
        </>
    )
};

export default Character 