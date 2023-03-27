import React from 'react'
import { useState,useEffect } from 'react';
import { getEventDetails } from '../api/GetEventData';
import EventCard from './EventCard';
function Events(){
    const [event,setEvent]=useState([]);
    useEffect(() => {
      async function getEventData(){
        try
        {
          const events = await getEventDetails();
          setEvent(events);
        }catch(error){
          console.log(error);
        }
      };
      getEventData();
    }, []);
  return (
    <div className='w-full h-auto my-5 py-5 px-10 flex flex-row flex-wrap justify-center'>
        {
            event&&
            event.map(e=>(
                <EventCard event={e}/>
            ))
        }
    </div>
    );
}
export default Events;
