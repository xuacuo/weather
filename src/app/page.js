// src/app/page.jsx
import Header from "./components/header";
import Text from "./components/text";
import WorksCarouselLoop from "./components/works-carousel/loop";
import ThemesGrid from "./components/themes-grid/themes-grid";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Header className="h-[60vh] w-full mt-0" title="THE WORLD OF HAYAO MIYAZAKI" />

      <div className="animate-pageFade">
        {/* About */}
        <div id="about" className="w-full bg-gray-50 py-6">
          <div className="max-w-7xl mx-auto px-6">
            {/* 抵消 Text 内部的额外水平 padding（关键一行） */}
            <div className="-mx-6">
              <Text
                imgSrc="/Hayao Miyazaki.jpg"
                alt="Hayao Miyazaki"
                bodyText="Hayao Miyazaki (born January 5, 1941) is a renowned Japanese animator, filmmaker, and manga artist."
                bodytext2="Miyazaki graduated from the Faculty of Political Science and Economics at Gakushuin University in Tokyo in 1963. He joined Toei Animation as an animator, working on films like Gulliver's Travels Beyond the Moon (1965) and Puss in Boots (1969). In 1971, he moved to A Production with Isao Takahata and co-directed the first season of Lupin the Third. In 1979, he joined Tokyo Movie Shinsha and directed his first feature film, The Castle of Cagliostro."
                bodytext3="Miyazaki's films have received numerous awards and critical acclaim, making him one of the most influential figures in animation."
              />
            </div>
          </div>
        </div>

        {/* Works */}
        <div id="works" className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center mt-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Works</h1>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              A selection of Hayao Miyazaki's films across the decades.
            </p>
          </div>
          <WorksCarouselLoop autoPlay interval={1500} />
        </div>

        {/* Themes */}
        <div id="themes" className="mt-2">
          <ThemesGrid />
        </div>
      </div>
    </>
  );
}
