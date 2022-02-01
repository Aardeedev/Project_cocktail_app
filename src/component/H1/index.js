export default function H1({ text, divH1ClassName, h1ClassName }) {
  return (
    <div className={divH1ClassName}>
      <h1 className={h1ClassName}>{text}</h1>
    </div>
  );
}
