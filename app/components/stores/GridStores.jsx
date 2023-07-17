import { stores } from "@/app/data/stores"
import { SingleStore } from "./SingleStore"


const GridStores = () => {
    return (
        <section className="mx-auto my-[100px] px-2" id="locations">
            <h2 className="text-center mb-4 h2 max-w-2xl mx-auto">Discover our conveniently located barber shops</h2>
            <p className="mb-6 text-center max-w-4xl mx-auto text-gray-700 font-thin">Explore our network of conveniently located barber shops across the United States. Chamos Barber Shop brings you exceptional men's grooming services right in your neighborhood. From bustling city centers to vibrant local communities, our skilled barbers provide top-notch grooming experiences near you. Find your nearest Chamos Barber Shop and indulge in the pinnacle of style and sophistication.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
                {
                    stores.map( store => <SingleStore key={store.name} { ...store }/> )
                }
            </div>
        </section>
    )
}

export default GridStores