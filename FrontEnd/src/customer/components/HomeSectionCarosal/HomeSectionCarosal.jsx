import React, { useState, useRef} from "react";
import AliceCarousel from "react-alice-carousel";
import HomeCard from "../HomeSectionCard/HomeCard";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { KurtaMens } from "../../../data/MensKurta";

const HomeSectionCarosal = ({data, secName}) => {

    const carosalRef=useRef(null);  
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };
  const slideNext = ()=>{
    carosalRef.current.slideNext();
  }
  const slidePrev = ()=>{
    carosalRef.current.slidePrev();
  }
  const items = data.map((item) => <HomeCard item={item} />);
  
  return (
    <>
      <div className="relative px-4 m-2 lg:px-8">
        <h2 className="text-xl font-extrabold text-zinc-700 " > {secName} </h2>
        <div className="relative p-5 ">
          <AliceCarousel
            items={items}
            disableButtonsControls
            controlsStrategy="alternate"
            responsive={responsive}
            disableDotsControl
            ref={carosalRef}
          />
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "40%",
              right: "0",
              transform: "translate(50%) rotate(90deg)",
              bgcolor: "white",
              color: "black", }
            }
          >
            <ChevronLeftIcon sx={{ transform: "rotate(90deg) " }} />
          </Button>
           <Button
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
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomeSectionCarosal;
