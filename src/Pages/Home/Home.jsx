import Banner from "../../Components/HomeComponents/Banner";
import BgSection from "../../Components/HomeComponents/BgSection";
import ChefRecommends from "../../Components/HomeComponents/ChefRecommends";
import OurMenu from "../../Components/HomeComponents/OurMenu";
import Slider from "../../Components/HomeComponents/Slider";
import Testimonial from "../../Components/HomeComponents/Testimonial";
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

            <section className="mt-5">
                <ChefRecommends></ChefRecommends>
            </section>

            <section className="mt-5">
                <OurMenu></OurMenu>
            </section>

            <section className="mt-5">
                <Testimonial></Testimonial>
            </section>
        </div>
    );
};

export default Home;