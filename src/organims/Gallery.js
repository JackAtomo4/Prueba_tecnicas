import React from "react";
import Image from "../molecules/Image";
import "../css/gallery.css";

class Gallery extends React.Component {
  render() {
    const { images, selectImage } = this.props;
    return (
      <article id="gallery">
        {images.map((e) => (
          <Image key={e.id} image={e} selectImage={selectImage} />
        ))}
      </article>
    );
  }
}
export default Gallery;
