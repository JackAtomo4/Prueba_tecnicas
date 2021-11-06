import React from "react";
import "../css/imageDescription.css";

class ImageDescription extends React.Component {
  render() {
    const { selectedImage, images, selectImage } = this.props;
    const image = images.filter((i) => i.id === selectedImage);
    console.log(image);
    const { creator, likes, src, size, height, urls } = image[0];
    const { name, link, username } = creator;
    return (
      <article className="imageDescription">
        <div className="closeButton-container">
          <button onClick={() => selectImage(false)}>X</button>
        </div>
        <img src={src} alt={image.alt} />
        <div>
          <div className="display-flex position-relative">
            <h1>Created by: {name}</h1>
            <h1>Likes: {likes}</h1>
          </div>
          <div className="information">
            <p>This image was uploaded by: {username}</p>
            <p>
              Real sizes: width:{size.width} height:{size.height}
            </p>
            <div>
              <p>Link to the all the image sizes</p>
              <nav>
                <a href={urls.raw} target="_blank">
                  Raw size
                </a>
              </nav>
              <nav>
                <a href={urls.full} target="_blank">
                  Full size
                </a>
              </nav>
              <nav>
                <a href={urls.regular} target="_blank">
                  Medium size
                </a>
              </nav>
              <nav>
                <a href={urls.small} target="_blank">
                  Small size
                </a>
              </nav>
              <nav>
                <a href={urls.thumb} target="_blank">
                  Thumbnail size
                </a>
              </nav>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
export default ImageDescription;
