import Banner from "../../Components/HomeComponents/Banner";
import Slider from "../../Components/HomeComponents/Slider";

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>

            <section>
                <Slider></Slider>
            </section>
        </div>
    );
};

export default Home;