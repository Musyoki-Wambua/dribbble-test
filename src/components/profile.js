import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';


function Profile() {
  const [user, setUser] = useState([]);
  const [shots, setShots] = useState([]);
  // const [update, setUpdates]= useState([]);

  const access_token = "56aa8f69f33e0059a795f5f2ea890a2088285f6593daa12702efdd4d939a9a8e"
  const username= "Musyoki-Wambua"
  
  const getData = async () => {
    const config = {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    }
    const {data } = await axios.get("https://api.dribbble.com/v2/user", config)
    setUser(data)
    return data
  }
  const getShots = async ()  =>{

    const config = {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    }
    const {data } = await axios.get("https://api.dribbble.com/v2/user/shots", config)

    // const {data } = await axios.get("https://api.dribbble.com/v2/user/shots", config,setShots)

    setShots(data)
    return data

    // console.log(data)
  }

  useEffect(() => {
    getData();
    getShots();
    getupdateShots();

  }, []);

 
  const getupdateShots = async () => {
    const config = {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    }

    const {data} = await axios.post ("https://api.dribbble.com/v2/shots", config)
    setUpdates(data)
    console.log("jidijfedjief")
    return(data)
  }


  


  return (
    <div className='profile'>
      <h1>{user.name}</h1>
      <img src={user.avatar_url} alt={user.name} className="img"/>
      <p>{user.bio}</p>
      <h2 className='shot'>Shots</h2>
      <ul>
        {shots.map(shot => (
          <li key={shot.id}>
            <img className='pro' src={shot.images.normal} alt={shot.title} />
            <p>{shot.title}</p>
            {parse(shot.description)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;

