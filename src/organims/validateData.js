export default function validateData(data) {
  if (!data) {
    console.error("Data is not defined");
    return false;
  }
  if (!data.results || data.results.length < 0) {
    console.error("Result is not defined or its length is 0");
    return false;
  }
  if (!data.total_pages || data.total_pages <= 0) {
    console.error("Total pages is 0 or not defined");
    return false;
  }
  const images = data.results.map((e) => {
    return {
      id: e.id,
      urls: e.urls,
      src: e.urls.regular || e.urls.full,
      alt: e.alt_description,
      likes: e.likes,
      creator: {
        username: e.user?.username,
        name: e.user?.name,
        link: e.user?.links?.self,
      },
      size: {
        width: e.width,
        height: e.height,
      },
    };
  });
  const finalObject = {
    total_pages: data.total_pages,
    total: data.total,
    images,
  };
  return finalObject;
}
