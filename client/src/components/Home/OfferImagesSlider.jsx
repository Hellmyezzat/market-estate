import React from 'react'
import useHomePageData from '../../hooks/useHomePageData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/bundle'

function OfferImagesSlider() {
  const { offerListings } = useHomePageData()
  return (
    <Swiper navigation modules={[Navigation]}>
      {offerListings &&
        offerListings.length > 0 &&
        offerListings.map((listing) => (
          <SwiperSlide key={listing._id}>
            <div
              className="h-[500px]"
              style={{
                background: `url(${listing.imageUrls}) no-repeat center`,
                backgroundSize: 'cover',
              }}
            ></div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default OfferImagesSlider
