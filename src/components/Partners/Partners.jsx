import React from 'react';
import Marquee from 'react-fast-marquee'


const imgUrl = import.meta.env.VITE_IMAGE_URL



const Partners = () => {
  return (
    <div class="marquee-container py-5 px-20 z-0">
      <Marquee direction="left">
        <div class="mx-7 sm:mx-5">
          <img src={imgUrl + '/img/others/icici.png'} alt="ICICI Bank Logo" class="w-4/5 sm:max-w-xs" />
        </div>
        <div class="mx-7 sm:mx-5">
          <img src={imgUrl + '/img/others/idfc.png'} alt="ICICI Bank Logo" class="w-4/5 sm:max-w-xs" />
        </div>
      </Marquee>
    </div>
  )
}

export default Partners;
