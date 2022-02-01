export default function Input({
  inputClassName,
  divClassName,
  onChange,
  onKeyUp,
  placeholder,
}) {
  return (
    <div className={divClassName}>
      <input
        type="text"
        className={inputClassName}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
      />
    </div>
  );
}
