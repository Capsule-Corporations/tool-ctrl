import HorizontalScroll from "@/component/common/horizontal-scroll";
import Footer from "@/component/footer";
import HomePage from "@/component/home/hero";
import HeroFact from "@/component/home/hero/hero-fact";
import AgencySteps from "@/component/home/how-it-works";
import TechExpertsAndApps from "@/component/home/tech-experts";
import UseCasesGrid from "@/component/home/use-case";
import WorkflowsExamples from "@/component/home/workflows";

const Home = () => {
    return (
        <div className="bg-[#FFF9F5]">
            {/* <Navbar /> */}
            <HomePage />
            <HeroFact />
            <HorizontalScroll>
                {[<AgencySteps />, <UseCasesGrid />].map((item, idx) => (
                    <div key={idx} className="min-w-screen min-h-screen flex justify-center items-center">
                        {item}
                    </div>
                ))}
            </HorizontalScroll>
            <TechExpertsAndApps />
            <WorkflowsExamples />
            <div className="min-h-[20svh]"></div>
            <Footer />
        </div>
    );
};

export default Home;
