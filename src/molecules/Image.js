import React from "react";
import "../css/image.css";

class Image extends React.Component {
  render() {
    const { image, selectImage } = this.props;
    return (
      <article className="gallery-image">
        <img
          src={image.src}
          alt={image.alt}
          onClick={() => selectImage(image.id)}
        />
      </article>
    );
  }
}
export default Image;
