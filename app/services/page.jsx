import BannerForPage from "../components/BannerForPage"
import { GridServices } from "./components/GridServices"

const page = () => {
    return (
        <>
            <BannerForPage title={"Premier Men's Grooming Services at Chamos Barber Shop"} image={"bg-[url(/services/services-banner.jpg)]"} paragraph={"Experience the epitome of men's grooming at Chamos Barber Shop. Our premier services, including regular haircuts, kids' haircuts, designs, and senior grooming, are tailored to perfection. From stylish scissor haircuts to trendy skin fades, our expert barbers deliver exceptional results. Discover the ultimate grooming experience that leaves you looking and feeling your best."} />

            <GridServices /> 
        </>
    )
}

export default page