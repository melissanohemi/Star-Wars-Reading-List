import React, { useContext, useState, useEffect } from 'react'
import { getAllPeople } from '../component/api';
import {useParams} from 'react-router-dom';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


    
const SingleCharacter = () => {
   const {store, actions} = useContext(Context);
    const params = useParams();
const [item, setItem] = useState([]);
     useEffect(() => {
         actions.getAllPeople()
        setItem(store[params.type][params.theId]?.name);
            
        },[]);


  return (
    <>
    <div className="container text-center">
    
            <h3 className="card-title">{store[params.type][params.theId]?.name}</h3>
            </div>
    </>
  )

  SingleCharacter.propTypes = {
    match: PropTypes.object
    };
}
export default SingleCharacter