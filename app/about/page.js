import AboutPolicy from "@/components/about/AboutPolicy";
import CustomerFeedback from "@/components/about/CustomerFeedback";
import Banner from "@/components/global/Banner";
import Insurance from "@/components/home/Insurance";
import PremiumClient from "@/components/home/PremiumClient";
import Team from "@/components/team/Team";
import CounterUp from "../../components/about/CounterUp";

const page = () => {
    return (
        <div>
            <Banner
                title="About Us"
                breadcrumb="home / about us"
            />
            <Insurance />
            <AboutPolicy />
            <CounterUp />
            <PremiumClient />
            <Team teamMember="4" />
            <CustomerFeedback />
        </div>
    );
};

export default page;
