import React from 'react'
import styles from './slot.module.css'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Slot() {

    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate();
    const handleBooked = ()=> {
        //console.log(name, mobile)
        setBookings([...bookings,{name,mobile}])
        if(name!== "" && mobile !== ""){
            axios.post("http://localhost:3000/booking",{name, mobile});
            alert("Your Slot has booked.")
        }
        else{
            alert("Please fill your details")
        }

    }
    // console.log(bookings)
    const goHome = () => {
        navigate("/");
    }
    
  return (
    <div className={styles.booking}>
        <div className={styles.form}>
            <div><h3>Patient Details:</h3></div>
            <div>
                Name:<input type="text" placeholder='' value = {name} onChange={(e)=> setName(e.currentTarget.value)}/>
                mob:<input type="text"  placeholder='' value = {mobile} onChange={(e)=> setMobile(e.currentTarget.value)}/>
            </div>
        </div>
        <div className={styles.slot}>
            <div><h2>Slots:</h2></div>
            <div>
                <div><button onClick={handleBooked}>11:00</button></div>
                <div><button onClick={handleBooked}>11:30</button></div>
                <div><button onClick={handleBooked}>12:00</button></div>
                <div><button onClick={handleBooked}>12:30</button></div>
                <div><button onClick={handleBooked}>04:00</button></div>
                <div><button onClick={handleBooked}>04:30</button></div>
                <div><button onClick={handleBooked}>05:00</button></div>
                <div><button onClick={handleBooked}>05:30</button></div>
                <div><button onClick={handleBooked}>06:00</button></div>
                <div><button onClick={handleBooked}>06:30</button></div>
                <div><button onClick={handleBooked}>07:00</button></div>
                <div><button onClick={handleBooked}>07:30</button></div>
            </div>
            <div className={styles.home}><button  onClick={goHome}>HOME</button></div>
        </div>
    </div>
  )
}
