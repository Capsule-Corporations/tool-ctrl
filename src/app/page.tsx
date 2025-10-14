import Footer from "@/component/footer";
import HomePage from "@/component/hero";
import HeroFact from "@/component/hero/hero-fact";

const Home = () => {
    return (
        <div>
            <HomePage />
            <HeroFact />
            <div className="min-h-screen"></div>
            <Footer />
        </div>
    );
};

export default Home;
