import Countdown from "../../Components/Countdown/Countdown";
import config from "../../data/config.json";

function Home() {
  const { hero, about, features, eventDate } = config;

  return (
    <>
      <div className="mx-auto max-w-page_lg md:px-8 px-4 overflow-hidden">
        <section id="animate-1">
        <div className="relative h-screen w-full pt-16">
          <div className="flex flex-col custom-width:flex-row items-center justify-center custom-width:justify-between h-full px-4 custom-width:px-8 gap-4 custom-width:gap-0">
            <div className="text-center custom-width:text-left w-full custom-width:w-auto flex flex-col items-start space-y-2 flex-shrink-0">
              <div className="w-full text-4xl custom-width:text-8xl font-semibold font-hero">
                {hero.title}
              </div>
              <div className="w-full text-3xl custom-width:text-7xl font-medium">
                {hero.subtitle}
                <div className="w-full">
                  <span className="gradient-text">IIT</span> {hero.institution.replace('IIT ', '')}
                </div>
              </div>
              <div className="w-full text-lg text-center custom-width:text-left custom-width:text-2xl">{hero.dates}</div>
            </div>
            <div className="w-auto text-center custom-width:text-right mt-4 custom-width:mt-0 flex-shrink-0 text-3xl sm:text-4xl custom-width:text-5xl">
              <Countdown eventDate={eventDate} />
            </div>
          </div>
        </div>
          <div className="relative">
            <div className="max-w-[1000px] text-xl rounded-2xl mx-auto my-28 p-8 bg-[#000006] bg-opacity-80">
              {about.intro}
            </div>
          </div>
        </section>

        <section>
          <div className="relative w-full" id="animate-2">
            <div className="w-full h-28"></div>
            <div className="w-full md:w-1/2">
              <div className="font-hero text-4xl font-semibold md:text-5xl text-center md:text-left">
                About us
              </div>
              <div className="text-xl mt-4 rounded-2xl p-8 bg-black bg-opacity-80">
                <div>
                  {about.description}
                </div>
              </div>
            </div>
            <div className="w-full h-28"></div>
          </div>
          <div className="w-full h-[200px]" id="animate-3"></div>
          <div className="w-full h-[800px]"></div>
        </section>

        <section className="relative">
          <div id="animate-4">
            <div className="text-4xl md:text-5xl font-semibold font-hero text-center">
              Our Sponsors
            </div>
            <div className="mt-16 mb-16 text-center">
              <div className="inline-block bg-gradient-indigo-blue text-white px-8 py-4 rounded-lg shadow-blue-glow">
                <span className="text-2xl md:text-3xl font-bold text-white">To Be Announced</span>
              </div>
              <p className="mt-6 text-gray-400 text-lg">
                Exciting partnerships coming soon!
              </p>
            </div>

          </div>
        </section>
        <section className="relative">
          <div id="animate-5" className="w-full h-[800px]"></div>
          <div className="w-full h-[200px]"></div>
          <div id="animate-6">
            <div className="w-full relative">
              <div className="font-hero text-4xl text-center font-semibold relative">
                What you get
              </div>
              <div className="flex flex-wrap justify-around px-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`max-w-[400px] 
                      rounded-lg 
                      p-4 my-8 
                      relative
                      ${feature.bgClass}
                      ${feature.shadowClass}
                      bg-black/50
                      border-white/50
                      border-2
                    `}
                  >
                    <div className="font-hero text-xl font-semibold text-center">
                      {feature.title}
                    </div>
                    <div className="mt-8 text-[1.1rem]">
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-[100px]"></div>
        </section>
      </div>
    </>
  );
}

export default Home;
