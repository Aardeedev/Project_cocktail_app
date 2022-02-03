export default function Image({ src, alt, className }) {
  return (
    <div className="imageContainer">
      <img src={src} alt={alt} className={className} />
    </div>
  );
}
