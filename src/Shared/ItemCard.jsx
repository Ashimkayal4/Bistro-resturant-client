
const ItemCard = ({ item }) => {
    const { name, price, recipe, image } = item
    return (
        <div className='flex gap-2'>
            <div>
                <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-28' src={image} alt="" />
          </div>
            <div>
                <h1 className="uppercase text-2xl">{name}</h1>
                <p>{ recipe}</p>
          </div>
            <div>
                <p className='flex text-orange-400'>${price}</p>
          </div>
        </div>
    );
};

export default ItemCard;