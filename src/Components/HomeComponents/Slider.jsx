import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'

const Slider = () => {
    return (
        <div className='my-10'>
            <div className='flex flex-col justify-center items-center mb-4'>
                <p className='my-2 text-orange-400'>---From 11:00am to 10:00pm---</p>
                <h1 className='border-b-2 border-t-2 w-60 p-2 text-center text-2xl font-semibold'>ORDER ONLINE</h1>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="h-[450px]"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <p className='-my-10 text-center font-semibold text-2xl text-white'>SALAD</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className='-my-10 text-center font-semibold text-2xl text-white'>PIZZAS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <p className='-my-10 text-center font-semibold text-2xl text-white'>SOUPS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <p className='-my-10 text-center font-semibold text-2xl text-white'>DESSERTS</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <p className='-my-10 text-center font-semibold text-2xl text-white'>SALAD</p>
                </SwiperSlide>
            
            </Swiper>
        </div>
    );
};

export default Slider;