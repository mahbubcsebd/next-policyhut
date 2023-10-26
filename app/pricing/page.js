import Faq from "@/components/faq/Faq"
import Banner from "@/components/global/Banner"
import InsuranceForm from "@/components/home/InsuranceForm"
import Pricing from "@/components/pricing/Pricing"

const page = () => {
  return (
    <div>
        <Banner/>
        <Pricing />
        <Faq />
        <InsuranceForm/>
    </div>
  )
}

export default page