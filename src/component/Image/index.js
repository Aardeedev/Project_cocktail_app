export function Image({ src, alt, width, height, className }) {
  return (
    <div className="imageContainer">
      <img
        src={src}
        alt={alt}
        /*         width={width}
        height={height} */
        className={className}
      />
    </div>
  );
}
