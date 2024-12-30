import Banner from "../../Components/HomeComponents/Banner";
import BgSection from "../../Components/HomeComponents/BgSection";
import Slider from "../../Components/HomeComponents/Slider";
import ItemMenu from "../../Shared/ItemMenu";

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>

            <section>
                <Slider></Slider>
            </section>

            <section>
                <BgSection></BgSection>
            </section>

            <section>
                <ItemMenu></ItemMenu>
            </section>

            <section>
                <div className="bg-black p-10 mt-8">
                    <h1 className="text-white text-2xl text-center">Call Us: +88 0192345678910</h1>
                </div>
            </section>
        </div>
    );
};

export default Home;