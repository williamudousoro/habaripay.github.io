import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const WooCommerce = "img/woo-commerce.png";
const OrderImg = "img/place-order.png";
const ModalImg = "img/wooModal.png";

const WooImgComponent = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "delflsgq4" } });
  return (
    <div className="grid place-items-center w-full text-center text-gray-500 dark:text-gray-400 text-sm">
      <div>
        <AdvancedImage
          className="w-[80%]"
          cldImg={cld.image("squad-docs/woo-commerce")}
        />
        <p>1/3 - Squad Settings</p>
      </div>
      <div>
        <AdvancedImage
          className="w-full"
          cldImg={cld.image("squad-docs/place-order")}
        />
        <p>2/3 - Sample Order Page</p>
      </div>
      <div>
        <AdvancedImage
          className="w-full"
          cldImg={cld.image("squad-docs/wooModal")}
        />
        <p>3/3 - Squad Payment Modal</p>
      </div>
    </div>
  );
};

export default WooImgComponent;
