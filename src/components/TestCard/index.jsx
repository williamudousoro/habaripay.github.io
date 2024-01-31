import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

function TestCard() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cld = new Cloudinary({ cloud: { cloudName: "delflsgq4" } });

  const backgroundImageStyle = {
    backgroundImage: 'url("/static/img/frontCard.svg")',
    backgroundSize: "cover",
    width: "300px",
    height: "200px",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset copied status after 2 seconds
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

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
