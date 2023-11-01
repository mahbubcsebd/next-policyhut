import CounterUp from '@/components/about/CounterUp';
import Banner from '@/components/global/Banner';
import InsuranceForm from '@/components/home/InsuranceForm';
import Services from '@/components/services/Services';

const page = () => {
    return (
        <div className="team-page">
            <Banner />
            <Services />
            <CounterUp />
            {/* <CustomerFeedback /> */}
            <InsuranceForm/>
        </div>
    );
};

export default page;