import React from 'react'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
//import axios from 'axios'
import styles from './list.module.css'

export default function List() {

    const navigate = useNavigate();

    const handleAppointment = () => {
      navigate("/slot");
    };
    const handleDetails = () => {
      navigate("/details");
    };
    const [drlist,setDrlist] = useState([])

    const getData = async() => {
        const res = await fetch("http://localhost:3000/data");
        const data = await res.json();
        //console.log(data)
        setDrlist(data);
    }
    useEffect(() => {
        getData()
      }
    , [])
    

  return (
    <div>

        <div className={styles.list} >
        {drlist.map((item)=> {
          return (
            <div className={styles.card} key={item.name}>
              <div><h1>{item.name}</h1></div>
              <div>Fee:{item.Fee}</div>
              <div>Specialization:{item.department}</div>
              <div className={styles.click}>
                  <button className={styles.apo} onClick={handleAppointment}>Appointment</button>
                  <button className={styles.det} onClick={handleDetails}>Details</button>
              </div>
            </div>
          )
        })}
        </div>
    </div>
  )
}
