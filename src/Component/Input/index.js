export function Input({ inputClassName, divClassName, onChange, onKeyUp }) {
  return (
    <div className={divClassName}>
      <input
        type="text"
        className={inputClassName}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}
