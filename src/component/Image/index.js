export function Image({ src, alt, width, height }) {
  return (
    <div className="imageContainer">
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
