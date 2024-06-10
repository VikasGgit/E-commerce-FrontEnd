import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeCard from "../HomeSectionCard/HomeCard";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { KurtaMens } from "../../../data/MensKurta";

const HomeSectionCarosal = () => {
    const [activeIndex, setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 },
  };
  const slidePrev=()=>setActiveIndex(activeIndex-1)
  const slideNext=()=>setActiveIndex(activeIndex+1)
  const syncActiveIndex=({item})=>setActiveIndex(item);
  const items = KurtaMens.map((item) => <HomeCard item={item} />);
  return (
    <>
      <div className="relative px-4 m-2 lg:px-8">
        Mens Kurta
        <div className="relative p-5 ">
          <AliceCarousel
            items={items}
            disableButtonsControls
            controlsStrategy="alternate"
            responsive={responsive}
            disableDotsControls
            onSlideChange={syncActiveIndex}
            activeIndex={activeIndex}
          />
          { activeIndex!== items.length-5 && <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "40%",
              right: "0",
              transform: "translate(50%) rotate(90deg)",
              bgcolor: "white",
              color: "black",
            }}
          >
            <ChevronLeftIcon sx={{ transform: "rotate(90deg) " }} />
          </Button>}
         { activeIndex!==5-items.length && <Button
          onClick={slidePrev}
            variant="contained"
            className="z-50"
            sx={{
              position: "absolute",
              top: "40%",
              left: "-3rem",
              transform: "translate(50%) rotate(-90deg)",
              bgcolor: "white",
              color: "black",
            }}
          >
            <ChevronLeftIcon sx={{ transform: "rotate(90deg) " }} />
          </Button>}
        </div>
      </div>
    </>
  );
};

export default HomeSectionCarosal;
