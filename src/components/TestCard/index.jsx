import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

function TestCard() {
  const currentDate = new Date();
  const cld = new Cloudinary({ cloud: { cloudName: "delflsgq4" } });

  return (
    <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-5 hover:cursor-pointer">
      <CopyToClipboard copyData={"4242424242424242"}>
        <AdvancedImage
          className="w-full "
          cldImg={cld.image("squad-docs/frontCard")}
        />
      </CopyToClipboard>

      <AdvancedImage
        className="w-full"
        cldImg={cld.image("squad-docs/backCard")}
      />
    </div>
  );
}

export default TestCard;
