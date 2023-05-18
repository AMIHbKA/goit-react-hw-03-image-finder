export const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
  return (
    <li key={id} className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
//largeImageURL
