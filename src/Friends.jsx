
import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './friend'
export default function Friends(){
    const [Friends, setFriend] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setFriend(data))
    },[]) 

    return (
        <div className='box'>
            <h3>Friends:{Friends.length} </h3>
            {
                Friends.map(friend=> <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

// state declear korte hobe