import { work } from '@_src/utils/helpers'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaLink } from "react-icons/fa";
// swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '@_assets/css/swipe.css'

import { EffectCoverflow, Pagination } from 'swiper/modules'

export const Work = () => {
  return (
    <div className='work_main min-h-screen w-screen flex flex-col text-white gap-4 px-16'>
      <h1 className="uppercase text-sm text-gray-300 font-bold">My work</h1>
      <h1 className="capitalize text-4xl font-bold">projects.</h1>
      <p>Following projects showcases my skills and experiences through real-world examples of my work. Each project is briefly described with links to code repositories.It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
      <div className='h-full w-full flex justify-center'>
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
          modules={[EffectCoverflow, Pagination]}
          className='mySwiper'
        >
          {work.map((item: any) => {
            return(
              <SwiperSlide
                key={item.id}
              >
              <div className="rounded-xl shadow-xl shadow-[#08FFD4] mt-8 p-4">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center capitalize">
                    {item?.title ? 
                      item?.title : "Lorem ipsum dolor sit amet."
                    }
                  </h5>
                  <p className="mb-3 font-sm text-[#FAC334] indent-2">
                    {item?.description ?
                      item?.description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam voluptate optio autem quam commodi aut voluptatem eum omnis voluptas?`
                    }
                  </p>
                <div className='flex flex-col gap-2'>
                  <a href={item?.codeURL} target='_blank' className="bg-blue-500 text-grey-darkest text-sm font-bold py-2 rounded inline-flex justify-center items-center gap-2">
                    <FaLink size={20} color='#000'/>
                    <span>Code URL</span>
                  </a>
                  {item?.liveURL &&
                  <a href={item?.liveURL} target='_blank' className="bg-blue-500 text-grey-darkest text-sm font-bold py-2 px-4 rounded inline-flex justify-center items-center gap-2">
                    <FaLink size={20} color='#000'/>
                    <span>Live URL</span>
                  </a>    
                  }
                  {item?.endpoints &&
                  <a href={item?.endpoints} target='_blank' className="bg-blue-500 text-grey-darkest text-sm font-bold py-2 px-4 rounded inline-flex justify-center items-center gap-2">
                    <FaLink  size={20} color='#000'/>
                    <span>Endpoint collections</span>
                  </a>
                  }
                </div>
              </div>
            </SwiperSlide> 
            )
          })}
        </Swiper>
      </div>
     
    </div>
  )
}
