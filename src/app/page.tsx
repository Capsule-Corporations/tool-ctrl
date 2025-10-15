import Footer from "@/component/footer";
import HomePage from "@/component/hero";
import HeroFact from "@/component/hero/hero-fact";
import Navbar from "@/component/navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomePage />
            <HeroFact />
            <div className="min-h-screen"></div>
            <Footer />
        </div>
    );
};

export default Home;
