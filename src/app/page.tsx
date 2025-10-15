import Footer from "@/component/footer";
import HomePage from "@/component/hero";
import HeroFact from "@/component/hero/hero-fact";

const Home = () => {
    return (
        <div className="bg-[#FFF9F5]">
            {/* <Navbar /> */}
            <HomePage />
            <HeroFact />
            <div className="min-h-screen"></div>
            <Footer />
        </div>
    );
};

export default Home;
