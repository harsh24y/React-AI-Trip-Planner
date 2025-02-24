import React from 'react'
import PlaceCardItem from './placecarditem'


function PlacestoVisit({ trip }) {

  return (

    <div>
      <h2 className='font-bold text-lg'>Places to Visit</h2>

      <div>
        {trip.tripData?.itinerary.map((item, index) => (
          <div className='mt-5'>
          
           < h2 className='font-medium text-lg'> DAY {item.day}</h2>
           <div className='grid md:grid-cols-2 gap-5'>
            {item.places.map((places,index)=>(
                  <div className=''>
                    <h2 className='font-medium text-sm text-orange-600'>{places.time}</h2>
                    <PlaceCardItem places={places}/>
                  </div>
            ))}
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default PlacestoVisit