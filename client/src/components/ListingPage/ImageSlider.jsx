import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import 'swiper/css/bundle'

function ImageSlider({ listing }) {
  return (
    <div>
      <Swiper modules={[Navigation]} navigation>
        {listing.imageUrls.map((url) => (
          <SwiperSlide key={url}>
            <div
              className="h-[550px]"
              style={{
                background: `url(${url}) center no-repeat`,
                backgroundSize: 'cover',
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider
