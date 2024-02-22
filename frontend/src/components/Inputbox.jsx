export const Inputbox = ({ label, placeholder, onChange }) => {
  return (
    <div>
      <div className="text-left text-md font-medium py-2">{label}</div>
      <input
        type="text"
        onChange={onChange}
        className="w-full rounded border px-2 py-1 border-slate-200"
        placeholder={placeholder}
      />
    </div>
  );
};
