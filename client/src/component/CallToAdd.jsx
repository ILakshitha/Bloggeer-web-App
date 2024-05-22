import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

export default function CallToAdd({add}) {
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  useEffect(()=>{
    try {
        const fetchAdd = async () => {
            const res = await fetch(`/api/add/getadds`);
            const data = await res.json();
            if (!res.ok) {
              console.log(data.message);
              setPublishError(data.message);
              return;
            }
            if (res.ok) {
              setPublishError(null);
              setFormData(data.adds[0]);
            }
         };
         fetchAdd();
    } catch (error) {
        console.log(error.message);
        
    }
  },[])

  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                   {formData.title}
                </h2>
                <p className='text-gray-500 my-2'>
                    
                </p>
               
            </div>
            <div className="p-7 flex-1">
                <img src={formData.image} />
            </div>
        </div>
  )
}
