interface CheckboxProps {
  id?: string;
  text?: string;
  isChecked: boolean;
  setValue: (e: boolean) => void;
}

export function Checkbox({ id, text, isChecked, setValue }: CheckboxProps) {
  return (
    <div className="flex gap-2 items-center justify-start">
      <input
        type="checkbox"
        className="border border-black-200 rounded w-4 h-4 text-black-200 cursor-pointer"
        {...(id && { id })}
        onChange={e => setValue(e.target.checked)}
        checked={isChecked}
      />
      {text && (
        <label
          htmlFor={id}
          className="text-black-200 text-[0.875rem] cursor-pointer"
        >
          {text}
        </label>
      )}
    </div>
  );
}
