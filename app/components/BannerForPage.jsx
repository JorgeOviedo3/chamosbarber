const BannerForPage = ({title, image, paragraph}) => {    

    return (
        < section
            className={`overflow-hidden bg-cover bg-top bg-no-repeat ${ image }`}
        >
            <div className="bg-black/40 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        { title }
                    </h1>

                    <p
                        className="hidden max-w-4xl mx-auto text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
                    >
                        { paragraph }
                    </p>
                </div>
            </div>
        </section >
    )
}

export default BannerForPage