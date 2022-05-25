import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  // read the images from the src/images folder
  const images = [
    require("../images/Best-Pet-Food-Kenya-Petsasa.webp"),
    // require("../images/Kitten-Shop.webp"),
    require("../images/Parasiticide-For-Cats-And-Dogs-Kenya.webp"),
    // require("../images/Puppy-Shop.webp"),
  ];

  return (
    <div className="relative">
      <div className="absolute w-full h-24 md:h-14  bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
      <Carousel
        autoPlay
        autoFocus
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img
              className="md:h-full md:w-full max-h-full h-48 w-full object-cover"
              src={image}
              alt="banner"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
