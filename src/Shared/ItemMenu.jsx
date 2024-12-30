import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const ItemMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular');
                setMenu(popularItem)
            })
    }, [])
    return (
        <div>
            <div className='flex flex-col justify-center items-center mb-4'>
                <p className='my-2 text-orange-400'>---Check it out---</p>
                <h1 className='border-b-2 border-t-2 w-60 p-2 text-center text-2xl font-semibold uppercase'>From our menu</h1>
            </div>

            <div className='grid grid-cols-2 gap-5 mt-10'>
                {
                    menu.map(item => <ItemCard
                        key={item._id}
                        item={item}
                    ></ItemCard>)
                }
            </div>
        </div>
    );
};

export default ItemMenu;