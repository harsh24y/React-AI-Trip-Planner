import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

function placecarditem({ places }) {
  const [photoUrl,setPhotoUrl]=useState();
    useEffect(()=>{
      places&&GetPlacePhoto();
    },[places])
  
    const GetPlacePhoto=async()=>{
      const data={
        textQuery:places.placeName
      }
      const result=await GetPlaceDetails(data).then(resp=>{
        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
        setPhotoUrl(PhotoUrl);
      })
    }
  return (
  <Link to={'https://www.google.com/maps/search/?api=1&query='+places.placeName} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 
        hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
          <img src={photoUrl?photoUrl:'/placeholder.jpg'}
        className='h-[130px] w-[130px] rounded-xl'
        />
        <div>
          <h2 className='font-bold text-lg'>{places.placeName}</h2>
          <p className='text-sm text-gray-500'>{places.PlaceDetails}</p>
          <h2 className='mt-2'> 🕙{places.timeToTravel}</h2>
          <h2 className='mt-2'>🎟️ {places.ticketPricing}</h2>
        </div>
    </div>
  </Link >
  )
}

export default placecarditem