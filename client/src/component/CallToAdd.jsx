import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function CallToAdd() {
  const [formData, setFormData] = useState([]);
  const [publishError, setPublishError] = useState(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const fetchAdd = async () => {
      try {
        const res = await fetch(`/api/add/getadds`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        setPublishError(null);
        setFormData(data.adds);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAdd();
  }, []);

  const nextSlide = () => {
    setSlide(slide === formData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? formData.length - 1 : slide - 1);
  };

  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left cursor-pointer" />
      
      <div className="flex-1 justify-center flex flex-col">
        {formData.length > 0 && (
          <h2>{formData[slide].title}</h2>
        )}
      </div>
      
      <div className="p-7 flex-1">
        {formData.length > 0 && (
          <img
            src={formData[slide].image}
            alt={formData[slide].title}
            className="slide"
          />
        )}
      </div>
      
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right cursor-pointer" />
    </div>
  );
}
