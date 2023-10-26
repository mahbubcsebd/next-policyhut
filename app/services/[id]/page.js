'use client';

import Faq from '@/components/faq/Faq';
import Banner from '@/components/global/Banner';
import InsuranceForm from '@/components/home/InsuranceForm';
import Coverage from '@/components/services/Coverage';
import InsuranceCost from '@/components/services/InsuranceCost';
import InsuranceType from '@/components/services/InsuranceType';
import ServicesDetails from '@/components/services/ServicesDetails';
import { useRouter } from 'next/navigation';

const ServiceDetailsPage = () => {
    const router = useRouter();

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Service', url: '/service' },
        { text: 'Life Insurance', url: router.asPath },
    ];

    return (
        <div
            id="serviceDetailsPage"
            className="serviceDetailsPage"
        >
            <Banner />
            <ServicesDetails />
            <Coverage />
            <InsuranceType />
            <InsuranceCost />
            <InsuranceForm />
            <Faq />
        </div>
    );
};

export default ServiceDetailsPage;
