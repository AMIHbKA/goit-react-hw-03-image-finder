export const ImageGalleryItem = (id, webformatURL, tags, largeImageURL) => {
  console.log('webformatURL', webformatURL);
  return (
    <li key={id} className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
//largeImageURL
