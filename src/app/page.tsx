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
            <AgencySteps />
            <UseCasesGrid />
            <TechExpertsAndApps />
            <WorkflowsExamples />
            <div className="min-h-[20svh]"></div>
            <Footer />
        </div>
    );
};

export default Home;
