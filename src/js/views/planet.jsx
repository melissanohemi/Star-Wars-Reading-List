import React, { useEffect, useState } from 'react';
import { getAllPlanets } from '../component/api';

const Planet = () => {
    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        const fn = async () => {
            const apiPlanets = await getAllPlanets();
            return setPlanet(apiPlanets);
        };
        fn();
    },[]);


    return (
        <>
        <div> { planet.map((item, index) => 

        
        <div key={index} className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">{item.url}</p>
    <a href="#" className="btn btn-primary">Learn more!</a>
  </div>
</div>
)}</div>
        </>
    )
};

export default Planet 