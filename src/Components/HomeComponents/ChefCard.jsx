
const ChefCard = ({ item }) => {
    const { name, image, recipe } = item
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="recipe" />
            </figure>
            <div className="card-body justify-center items-center">
                <h2 className="card-title">{ name}</h2>
                <p>{ recipe}</p>
                <div className="card-actions justify-center mt-2">
                    <button className="btn">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;