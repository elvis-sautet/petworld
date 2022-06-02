import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../Product";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// create a previous arrow
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      style={{
        // display: "block",
        position: "absolute",
        top: "30%",
        transform: "translateY(-50%)",
        // fontSize: "2rem",
        left: "2px",
        zIndex: "40",
        display: "inline-block",
      }}
      className={className}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon
        className="!text-[#B6246F] h-16 w-16 
	  "
      />
    </div>
  );
};

// create a next arrow
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        top: "30%",
        right: "2px",
        transform: "translateY(-50%)",
        fontSize: "2rem",
      }}
      className={className}
      onClick={onClick}
    >
      <ArrowForwardIosIcon
        className=" !text-[#B6246F] h-16 w-16 
	  "
      />
    </div>
  );
};

// eslint-disable-next-line no-unused-vars
const ProductSlide = ({ recentlyViewed }) => {
  const settings = {
    // dont show dots
    dots: true,
    infinite: false,
    // speed to scroll
    speed: 500,
    // slides to show
    slidesToShow:
      window.innerWidth > 768
        ? 5
        : window.innerWidth > 576
        ? 3
        : window.innerWidth > 320
        ? 1
        : 1,

    slidesToScroll:
      window.innerWidth > 768
        ? 5
        : window.innerWidth > 576
        ? 3
        : window.innerWidth > 320
        ? 1
        : 1,
    // show previous arrow
    prevArrow: (
      <PrevArrow
        className="!absolute top-0 left-0 mr-6 mt-2 z-40"
        onClick={() => {
          console.log("prev");
        }}
      />
    ),
    // show next arrow
    nextArrow: (
      <NextArrow
        className="!absolute !right-4 text-lg"
        onClick={() => {
          console.log("next");
        }}
      />
    ),
    //dont autoplay
    autoplay: false,
    // title
    AnimationEffect: "fade",
  };
  return (
    <Slider {...settings}>
      {recentlyViewed.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Slider>
  );
};

export default ProductSlide;
