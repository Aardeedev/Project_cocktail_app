export function H1({ text, h1ClassName, divClassName }) {
  return (
    <div className={divClassName}>
      <h1 className={h1ClassName}>{text}</h1>
    </div>
  );
}
