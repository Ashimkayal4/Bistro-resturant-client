import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const ChefRecommends = () => {
    const [offer, setOffer] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const chefRecommends = data.filter(item => item.category === 'offered')
                setOffer(chefRecommends)
            })
    }, [])
    return (
        <div>
            <div className='flex flex-col justify-center items-center mb-4'>
                <p className='my-2 text-orange-400'>---Should try---</p>
                <h1 className='border-b-2 border-t-2 w-72 p-2 text-center text-2xl font-semibold uppercase'>chef recommends</h1>
            </div>

            <div className="grid grid-cols-3 gap-5">
                {
                    offer.map(item => <ChefCard
                        key={item._id}
                        item={item}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;