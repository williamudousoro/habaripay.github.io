import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

function TestCard() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const cld = new Cloudinary({ cloud: { cloudName: "delflsgq4" } });

  const backgroundImageStyle = {
    backgroundImage: 'url("/static/img/frontCard.svg")',
    backgroundSize: "cover",
    width: "300px",
    height: "200px",
  };

  return (
    <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-5">
      <AdvancedImage
        className="w-full"
        cldImg={cld.image("squad-docs/frontCard")}
      />
      <AdvancedImage
        className="w-full"
        cldImg={cld.image("squad-docs/backCard")}
      />
    </div>
  );
}

export default TestCard;
