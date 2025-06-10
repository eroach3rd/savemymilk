import React from 'react';
import { Section } from './Section';
interface HistoryItemProps {
  title: string;
  date: string;
  template: string;
  focus: string;
}
const HistoryItem = ({
  title,
  date,
  template,
  focus
}: HistoryItemProps) => {
  return <div className="p-4 border border-zinc-200 rounded-lg bg-white shadow-sm">
      <div className="flex justify-between items-start flex-wrap gap-2">
        <h3 className="font-semibold text-zinc-800">{title}</h3>
        <p className="text-xs text-zinc-500 whitespace-nowrap">{date}</p>
      </div>
      <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mt-2">
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-zinc-600">Template:</span>
          <span className="px-2 py-0.5 bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-medium rounded-md">
            {template}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-zinc-600">Focus:</span>
          <span className="px-2 py-0.5 bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-medium rounded-md">
            {focus}
          </span>
        </div>
      </div>
      <a href="#" className="text-sm font-semibold text-red-700 hover:underline mt-4 inline-block">
        View Resume →
      </a>
    </div>;
};
export const ResumeHistory = () => {
  const historyItems = [{
    title: 'Senior PM - Anthropic',
    date: 'Jan 15, 2025 • 2:34 PM',
    template: 'Modern',
    focus: 'AI/ML Product Management'
  }, {
    title: 'Principal PM - OpenAI',
    date: 'Jan 12, 2025 • 9:15 AM',
    template: 'Technical',
    focus: 'Technical Product Management'
  }, {
    title: 'Senior AI Product Manager - Google DeepMind',
    date: 'Jan 8, 2025 • 4:45 PM',
    template: 'Creative',
    focus: 'AI/ML Product Management'
  }];
  return <div className="border border-zinc-300 rounded-xl mb-6 bg-zinc-50">
      <div className="p-5">
        <h2 className="text-xl font-semibold text-zinc-800">Resume History</h2>
      </div>
      <div className="px-5 pb-5">
        <div className="space-y-4">
          {historyItems.map((item, index) => <HistoryItem key={index} title={item.title} date={item.date} template={item.template} focus={item.focus} />)}
        </div>
      </div>
    </div>;
};