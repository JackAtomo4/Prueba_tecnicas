import React from "react";
import Header from "./organims/Header";
import Gallery from "./organims/Gallery";
import PageSelector from "./molecules/PageSelector";
import ImageDescription from "./organims/ImageDescription";
import loadingGif from "./resources/loading.gif";
import testJson from "./resources/images_test1.json";
import validateData from "./organims/validateData";

import "./css/app.css";
const baseUrl = "https://api.unsplash.com/search/photos";
const headers = {
  Authorization: "Client-ID z9p8DvYMw-9Y-pou37LZp4CHtM5tFvFUm8k9mKfi5Dw",
};
// Dado que hay numero de maximo de llamdas por dia he creado un json para
// hacer las pruebas cuando se publique el codido solo hay que cambiar la variable test a false
const test = false;

class PhotoFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      data: false,
      page: 1,
      selectedImage: false,
      error: false,
      loading: false,
    };
    this.changeTerm = this.changeTerm.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
    this.selectImage = this.selectImage.bind(this);
  }
  changeTerm(event) {
    this.setState({ term: event.target.value || "", error: false });
  }

  async searchTerm(newPage) {
    const { term, page } = this.state;
    this.setState({ loading: true, error: false });
    const shearchPage = newPage || page;
    let jsonObject;
    if (!term || term == "" || term == " ") {
      return;
    }
    if (!test) {
      const response = await fetch(
        `${baseUrl}?query=${term}&page=${shearchPage}`,
        {
          headers,
        }
      );
      if (!response.ok) {
        return this.setState({ error: true, loading: false });
      }
      jsonObject = await response.json();
    } else {
      jsonObject = testJson;
    }
    const data = validateData(jsonObject);
    if (data) {
      return this.setState({ data, page: shearchPage, loading: false });
    }
    return this.setState({ error: true, loading: false });
  }

  selectImage(id) {
    this.setState({ selectedImage: id });
  }

  render() {
    const { term, data, page, selectedImage, error, loading } = this.state;
    console.log(this.state);

    return (
      <React.Fragment>
        {error && (
          <article id="errorMessage">
            <p> An error has occurred, please try again. </p>
          </article>
        )}
        <Header
          term={term}
          changeTerm={this.changeTerm}
          searchTerm={this.searchTerm}
          loading={loading}
        />
        <div id="loading-gif" className={!loading && "none"}>
          <img src={loadingGif} />
        </div>
        {data && !selectedImage && !loading && (
          <React.Fragment>
            <Gallery images={data.images} selectImage={this.selectImage} />
            <PageSelector
              searchTerm={this.searchTerm}
              page={page}
              totalPage={data.total_pages}
            />
          </React.Fragment>
        )}
        {data && selectedImage && (
          <ImageDescription
            selectedImage={selectedImage}
            images={data.images}
            selectImage={this.selectImage}
          />
        )}
      </React.Fragment>
    );
  }
}
export default PhotoFinder;
