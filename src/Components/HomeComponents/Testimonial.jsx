import '@smastrom/react-rating/style.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { SiComma } from 'react-icons/si';
const Testimonial = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div>
            <div className='flex flex-col justify-center items-center mb-4'>
                <p className='my-2 text-orange-400'>---What our client say---</p>
                <h1 className='border-b-2 border-t-2 w-72 p-2 text-center text-2xl font-semibold uppercase'>testimonial</h1>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
             
                
                <div>
                    {
                        review.map(item => <SwiperSlide
                        key={item._id}
                        >
                            <div className='flex flex-col gap-3 justify-center items-center h-60'>
                                <p className='flex text-3xl'><SiComma /><SiComma /></p>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={item.rating}
                                    readOnly
                                />
                                <h1>{item.details}</h1>
                                <h1 className='text-2xl text-orange-400'>{item.name}</h1>
                          </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonial;