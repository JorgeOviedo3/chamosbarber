import { services } from "../../data/services" 
import { SingleServiceCard } from "./SingleServiceCard"

export const GridServices = () => {
    return (
        <section className="mb-[100px] py-[50px]">
            <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                    {
                        services.map(service => <SingleServiceCard key={service.title} {...service} />)
                    }
                </div>
            </div>
        </section>
    )
}
