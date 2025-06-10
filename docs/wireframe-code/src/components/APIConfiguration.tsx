import React, { useState } from 'react';
import { Section } from './Section';
import { Loader2 } from 'lucide-react';
export const APIConfiguration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [models, setModels] = useState<string[]>([]);
  const handleLoadModels = () => {
    setIsLoading(true);
    // Simulate API call - replace with actual API call
    setTimeout(() => {
      setModels(['gemini-pro', 'gemini-pro-vision', 'gemini-ultra']);
      setIsLoading(false);
    }, 1000);
  };
  return <Section title="Gemini API Configuration" isOpen={true}>
      <div className="space-y-4 pt-2">
        <div>
          <label className="font-medium text-zinc-600 block mb-2">
            Gemini API Key
          </label>
          <input type="password" className="w-full p-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-red-700 transition" placeholder="Enter your API key..." />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-medium text-zinc-600">Model</label>
            <button onClick={handleLoadModels} disabled={isLoading} className="text-sm px-3 py-1 bg-red-700 hover:bg-red-800 text-white rounded-lg border border-red-600 flex items-center gap-2 transition-colors">
              {isLoading && <Loader2 className="h-3 w-3 animate-spin" />}
              Load Models
            </button>
          </div>
          <select className="w-full p-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-red-700 transition" disabled={models.length === 0}>
            {models.length === 0 ? <option>Load models first...</option> : models.map(model => <option key={model} value={model}>
                  {model}
                </option>)}
          </select>
        </div>
      </div>
    </Section>;
};