import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

function HotelCardItem({hotels}) {

    const [photoUrl,setPhotoUrl]=useState();
    useEffect(()=>{
      hotels&&GetPlacePhoto();
    },[hotels])
  
    const GetPlacePhoto=async()=>{
      const data={
        textQuery:hotels?.HotelName
      }
      const result=await GetPlaceDetails(data).then(resp=>{
        console.log(resp.data.places[0].photos[3].name);
  
        const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
        setPhotoUrl(PhotoUrl);
      })
    }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotels.HotelName + "," + hotels?.HotelAddress} target='_blank' >
    <div className='hover:scale-105 transition-all cursor-pointer'>
        <img src={photoUrl?photoUrl:'/placeholder.jpg'} className='rounded-xl h-[180px] w-full object-cover' />
        <div className='my-2 flex flex-col gap-2'>
            <h2 className='font-medium '>{hotels?.HotelName}</h2>
            <h2 className='text-xs text-gray-500 '>📍 {hotels?.HotelAddress}</h2>
            <h2 className='text-sm'>💰 {hotels?.PriceInRupees}</h2>
            <h2 className='text-sm'>⭐ {hotels?.rating}</h2>

        </div>
    </div>
</Link>
  )
}

export default HotelCardItem