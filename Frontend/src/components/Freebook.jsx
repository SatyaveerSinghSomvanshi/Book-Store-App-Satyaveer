import React from 'react'
import list from "../../public/list.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";//css of slider
import "slick-carousel/slick/slick-theme.css";//css of slider
import Cards from './Cards';
export default function Freebook(item) {// here item is prop
   
    const filterdata=list.filter((data)=>data.category==="Free");//filter is array method  to filter
    console.log(filterdata);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,//agar itna pixel  se bada then show 3 cards or boxes
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-1 '>
        <div>
      <h1 className=' font-semibold text-xl pb-2'>Free offered Courses</h1>
      <p>Here Books are all accessible for free since they are in the public domain, and they offer a wealth of classic literature to dive into. Happy reading! </p>
      </div>
    <div className="slider-container">
      <Slider {...settings}>
        {filterdata.map((item)=> (<Cards item={item} key={item.id}/>))}
        
      </Slider>
    </div></div>
    </>
  )
}
