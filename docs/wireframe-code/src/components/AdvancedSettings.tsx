import React from 'react';
import { Section } from './Section';
export const AdvancedSettings = () => {
  return <Section title="Advanced Settings" isOpen={true}>
      <div className="space-y-6 pt-2">
        <div>
          <label className="font-medium text-zinc-600 block mb-2">
            Temperature
          </label>
          <input type="range" min="0" max="2" defaultValue="0.7" step="0.1" className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-red-700" />
          <p className="text-sm text-zinc-500 mt-1">
            Controls creativity (0=deterministic, 2=very creative)
          </p>
        </div>
        <div>
          <label className="font-medium text-zinc-600 block mb-2">
            Max Tokens
          </label>
          <input type="range" min="500" max="4000" defaultValue="2000" step="100" className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-red-700" />
          <p className="text-sm text-zinc-500 mt-1">
            Maximum length of generated resume content
          </p>
        </div>
      </div>
    </Section>;
};