import React, { useState } from 'react';
interface TextAreaFieldProps {
  placeholder: string;
  maxLength?: number;
}
export const TextAreaField = ({
  placeholder,
  maxLength = 10000
}: TextAreaFieldProps) => {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return <div className="relative">
      <textarea className="w-full p-4 border border-zinc-300 rounded-lg h-48 focus:ring-2 focus:ring-red-700 focus:border-red-700 transition bg-white" placeholder={placeholder} value={value} onChange={handleChange} maxLength={maxLength} />
      <div className="absolute bottom-3 right-3 text-xs text-zinc-500 bg-white px-1.5 py-0.5 rounded">
        {value.length} / {maxLength}
      </div>
    </div>;
};