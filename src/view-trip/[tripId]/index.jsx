
import { useParams } from 'react-router-dom'
import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'sonner';
import InfoSection from '@/view-trip/components/InfoSection';
import React, { useEffect, useState } from 'react'
import Hotels from '@/view-trip/components/Hotels';
import PlacestoVisit from '@/view-trip/components/PlacesToVisit';
import Footer from '../components/Footer';


function Viewtrip() {
    const {tripId}=useParams();
    const [trip,setTrip]=useState([]);
    useEffect(()=>{
        tripId&&GetTripData();
    },[tripId])

    
    const GetTripData=async()=>{
        const docRef=doc(db,'AITrips',tripId);
        const docSnap=await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Dodcument:",docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No Such Document");
            toast('No trip Found!')
        }
    }
  return (

    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
        <InfoSection trip={trip} />

        <Hotels trip={trip}/>

        <PlacestoVisit trip={trip}/>

        <Footer trip={trip}/>
    </div>
  )
}

export default Viewtrip