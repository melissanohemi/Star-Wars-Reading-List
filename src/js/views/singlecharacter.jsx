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
        setItem(store.people.filter(person => person.uid === params.theId));
            
        },[]);

     
  return (
    <>
    {
      item.length > 0 &&
    
    <div className="container text-center">
    
            <h3 className="card-title">{item[0].name}</h3>
            </div>
      }
    </>
    )

  SingleCharacter.propTypes = {
    match: PropTypes.object
    };
}
export default SingleCharacter