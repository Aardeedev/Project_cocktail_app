export default function H2({ text, divH2ClassName, h2ClassName }) {
  return (
    <div className={divH2ClassName}>
      <h2 className={h2ClassName}>{text}</h2>
    </div>
  );
}
