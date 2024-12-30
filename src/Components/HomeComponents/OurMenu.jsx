import featuredImg from '../../assets/home/featured.jpg'
const OurMenu = () => {
    return (
        <div className='p-20 bg-featured bg-fixed text-white'>
            <div className='flex flex-col justify-center items-center mb-4'>
                <p className='my-2 text-orange-400'>---Check it out---</p>
                <h1 className='border-b-2 border-t-2 w-72 p-2 text-center text-2xl font-semibold uppercase'>from our menu</h1>
            </div>
            <div className='lg:flex md:flex gap-5 items-center justify-center'>
                <div>
                    <img className='h-[350px] w-[630px]' src={featuredImg} alt="" />
                </div>
                <div>
                    <h1>March 29 ,2020</h1>
                    <h1>where can i get some?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad asperiores exercitationem corporis aut doloremque perspiciatis velit, dolorem nostrum sit!</p>
                    <button className='btn'>button</button>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;