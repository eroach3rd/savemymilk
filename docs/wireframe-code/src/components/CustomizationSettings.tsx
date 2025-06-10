import React from 'react';
interface SettingOptionProps {
  label: string;
  options: string[];
  defaultValue?: string;
}
const SettingOption = ({
  label,
  options,
  defaultValue
}: SettingOptionProps) => {
  return <div className="p-4 border border-zinc-200 rounded-lg bg-zinc-50">
      <label className="font-medium text-zinc-600 block mb-2">{label}</label>
      <select className="w-full p-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-red-700 transition">
        {options.map((option, index) => <option key={index} selected={option === defaultValue}>
            {option}
          </option>)}
      </select>
    </div>;
};
export const CustomizationSettings = () => {
  const experienceLevels = ['4-6 years (Mid-level)', '7-9 years (Senior)', '10+ years (Principal)'];
  const technicalDepths = ['Medium - Balanced', 'High - Technical emphasis', 'Low - Strategic focus'];
  const resumeStyles = ['Modern', 'Traditional', 'Technical', 'Creative'];
  const roleFocuses = ['AI/ML Product Management', 'Technical Product Management', 'Growth Product Management', 'Platform Product Management'];
  return <div className="border border-zinc-300 rounded-xl mb-6 p-5 bg-white">
      <h3 className="text-xl font-semibold text-zinc-800 mb-4">
        Customization Settings
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SettingOption label="Experience Level" options={experienceLevels} defaultValue={experienceLevels[0]} />
        <SettingOption label="Technical Depth" options={technicalDepths} defaultValue={technicalDepths[0]} />
        <SettingOption label="Resume Style" options={resumeStyles} defaultValue={resumeStyles[0]} />
        <SettingOption label="Role Focus" options={roleFocuses} defaultValue={roleFocuses[0]} />
      </div>
    </div>;
};