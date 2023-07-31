const BannerForPage = ({ title, image, paragraph }) => {
  return (
    <section className={`overflow-hidden bg-cover bg-top bg-no-repeat ${image}`}>
      <div className="bg-black/80 p-8  md:p-12 lg:px-16 lg:py-24">
        <div className="text-left max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-20">
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">{title}</h1>

          <p className="hidden max-w-4xl text-justify rounded-sm text-white/90 text-sm   mt-6 md:block md:text-lg">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerForPage;
