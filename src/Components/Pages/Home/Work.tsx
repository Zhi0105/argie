import { work } from '@_src/utils/helpers'
import { Swiper, SwiperSlide } from 'swiper/react'

// swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '@_assets/css/swipe.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

export const Work = () => {
  return (
    <div className='work_main w-screen flex flex-col text-white gap-4 px-16'>
      <h1 className="uppercase text-sm text-gray-300 font-bold">My work</h1>
      <h1 className="capitalize text-4xl font-bold">projects.</h1>
      <p>Following projects showcases my skills and experiences through real-world examples of my work. Each project is briefly described with links to code repositories.It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
      <div className='w-full flex justify-center items-center'>
        <Swiper
          effect={'coverflow'}
          grabCursor={false}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='mySwiper'
        >
          {work.map((item: any) => {
            return(
              <SwiperSlide
                key={item.id}
              >
              <div className="rounded-xl shadow-xl shadow-[#08FFD4] mt-8 p-4">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                        Lorem ipsum dolor sit amet.
                      </h5>
                  </a>
                  <p className="mb-3 font-normal text-[#FAC334]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam voluptate optio autem quam commodi aut voluptatem eum omnis voluptas?
                  </p>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
            </SwiperSlide> 
            )
          })}
        </Swiper>
      </div>
     
    </div>
  )
}
