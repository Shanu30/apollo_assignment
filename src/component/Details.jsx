import React from 'react'
import {useState, useEffect} from 'react'
import styles from './details.module.css'
import axios from 'axios'

export default function Details() {

    let [details, setDetails] = useState([])
    const getData = async() => {
        const res = await fetch("http://localhost:3000/booking");
        const data = await res.json();
        //console.log(data)
        setDetails(data);
    }
    useEffect(() => {
        getData()
      },[]
    )

    const handleDelete = async(id) => {
        await axios.delete(`http://localhost:3000/booking/${id}`)
        // console.log(id)
        getData()
    }
    useEffect(() => {
        getData()
      }
    , [])
    
    return (
        <div className={styles.details}>
            <div>
                <h1>Details</h1>
            </div>
            

            <div className={styles.bookingList}>
                {details.map((item)=> {
                    return (
                    <div key={item.mobile} className={styles.row}>
                        <div>Patient Name: {item.name}</div>
                        <div>Contact: {item.mobile}</div>
                        <div><button onClick={() => handleDelete(item.id)}>DONE</button></div>

                    </div>
                    )
                })}
            </div>
        </div>
  )
}
