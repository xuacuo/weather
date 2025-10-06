// src/app/works/page.jsx
import WorksCarouselLoop from "../components/works-carousel/loop";
import Card from "../components/card";

export default function WorksPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pb-20 animate-pageFade">
      {/* page header — match Legacy spacing */}
      <div className="text-center mb-4 md:mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Works</h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          A selection of Hayao Miyazaki&apos;s films across the decades.
        </p>
      </div>

      {/* single carousel at the top */}
      <WorksCarouselLoop variant="single" interval={2000} />

      {/* description between carousel and cards */}
      <div className="text-center mt-8 mb-8">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the artistry, imagination, and legacy of Miyazaki&apos;s most
          celebrated works below.
        </p>
      </div>

      {/* cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card imgSrc={"/Totoro.jpg"} title="My Neighbor Totoro" description="1988, Studio Ghibli" />
        <Card imgSrc={"/Spirited Away.jpg"} title="Spirited Away" description="2001, Academy Award Winner" />
        <Card imgSrc={"/haer.jpg"} title="Howl's Moving Castle" description="2004, Oscar-nominated" />
        <Card imgSrc={"/Castle in the Sky.jpg"} title="Castle in the Sky" description="1986, Studio Ghibli" />
        <Card imgSrc={"/Valley of the Wind.jpg"} title="Nausicaä of the Valley of the Wind" description="1984, Topcraft/Studio Ghibli" />
        <Card imgSrc={"/Whisper of the Heart.jpg"} title="Whisper of the Heart" description="1995, Studio Ghibli" />
        <Card imgSrc={"/Princess Mononoke_33.jpg"} title="Princess Mononoke" description="1997, Studio Ghibli" />
        <Card imgSrc={"/The Wind Rises_50.jpg"} title="The Wind Rises" description="2013, Studio Ghibli" />
        <Card imgSrc={"/The Boy and the Heron.jpeg"} title="The Boy and the Heron" description="2023, Studio Ghibli" />
      </div>
    </div>
  );
}
