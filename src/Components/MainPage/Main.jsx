
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Inner_component/Inner_Component';
import { useNavigate } from "react-router-dom";

const Main_Page = () => {
  const navigate = useNavigate();

    const [data, setData] = useState([]);
    useEffect(() => {
      // Assuming your API endpoint is 'https://example.com/api/names'
      axios.get('https://comfortable-fox-apron.cyclic.app/staff')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

const navigatee = (arg)=>{
  navigate("/detail"  , {
    state : {
      data :arg     
    }
  });

}


    return (
      <>
      <h1  id={data._id}  className='text-4xl font-bold text-center font-serif py-12 ' >All Staff Attendance</h1>
      <div className="flex flex-wrap justify-center">




        {data.map((item) => (
        <div   onClick={()=>{
            navigatee(item._id)
          }} >
        
        <Card key={item._id}  name={item.username}   />
        </div>
        ))}
      </div>
      </>
    );
  };
  
  export default Main_Page;
  