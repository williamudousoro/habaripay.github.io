import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const UssdModalImg = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "delflsgq4" } });
  return (
    <div className="grid place-items-center w-full bg-[#F4F6F9] dark:bg-[#22282F] rounded-lg">
      <AdvancedImage
        className="w-[60%]"
        cldImg={cld.image("squad-docs/ussdModal")}
      />
    </div>
  );
};

export default UssdModalImg;
