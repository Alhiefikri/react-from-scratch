function CommonInput({ type, placeholder, name, value, onChange, className }) {
  return (
    <div>
      <input
        type={type || "text"}
        placeholder={placeholder || "Enter Value Here"}
        name={name}
        value={value}
        onChange={onChange}
        className={
          className ||
          "w-full block px-5 py-2 mt-2 text-white border rounded-lg"
        }
      />
    </div>
  );
}

export default CommonInput;
