import React, { useState } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { TextAreaField } from './components/TextAreaField';
import { CustomizationSettings } from './components/CustomizationSettings';
import { GenerateButton } from './components/GenerateButton';
import { ResumePreview } from './components/ResumePreview';
import { ResumeHistory } from './components/ResumeHistory';
import { PromptConfiguration } from './components/PromptConfiguration';
import { AdvancedSettings } from './components/AdvancedSettings';
import { APIConfiguration } from './components/APIConfiguration';
export function App() {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return <div className="bg-zinc-100 min-h-screen text-zinc-800 py-8 font-['Inter',sans-serif]">
      <div className="container max-w-5xl mx-auto p-4 sm:p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm">
        <Header />
        <main className="pt-8">
          <Section title="LinkedIn Profile" isOpen={true}>
            <TextAreaField placeholder="Paste your complete LinkedIn profile text here..." maxLength={6000} />
          </Section>
          <Section title="Job Description" isOpen={true}>
            <TextAreaField placeholder="Paste the complete job description here..." maxLength={6000} />
          </Section>
          <CustomizationSettings />
          <GenerateButton />
          <ResumePreview onCopy={handleCopy} hasCopied={hasCopied} />
          <ResumeHistory />
          <PromptConfiguration />
          <AdvancedSettings />
          <APIConfiguration />
        </main>
      </div>
    </div>;
}