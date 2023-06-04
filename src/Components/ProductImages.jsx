import React from "react";
import { useState } from "react";

const ProductImages = ({ images = [] }) => {
  const [number, setnumber] = useState(0);
  const [mainImage, setmainImage] = useState({ filename: "", url: "" });

  const { filename, url } = mainImage;
  React.useEffect(() => {
    setmainImage(images[number]);
  }, [images, number]);

  return (
    <article className="product-images">
      <div className="main-image-container">
        <img src={url} alt={filename} className="main-image" />
      </div>
      <div className="small-images">
        {images.map((img, index) => {
          return (
            <div
              className={
                index === number ? "small-image active-img" : "small-image"
              }
              key={index}
              onClick={() => setnumber(index)}
            >
              <img src={img.url} alt={img.filename} className="small-img" />
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default ProductImages;
