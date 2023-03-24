function Gallery({ src, alt }) {
  return (
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src={src}
      alt={alt}
    />
  </div>
  );
}

export default Gallery;

