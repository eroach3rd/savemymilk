```index.tsx
import './index.css'
import React from "react";
import { render } from "react-dom";
import { App } from "./App";

render(<App />, document.getElementById("root"));

```
```App.tsx
import React, { useState } from 'react'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { TextAreaField } from './components/TextAreaField'
import { CustomizationSettings } from './components/CustomizationSettings'
import { GenerateButton } from './components/GenerateButton'
import { ResumePreview } from './components/ResumePreview'
import { ResumeHistory } from './components/ResumeHistory'
import { PromptConfiguration } from './components/PromptConfiguration'
import { AdvancedSettings } from './components/AdvancedSettings'
import { APIConfiguration } from './components/APIConfiguration'
export function App() {
  const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = () => {
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }
  return (
    <div className="bg-zinc-100 min-h-screen text-zinc-800 py-8 font-['Inter',sans-serif]">
      <div className="container max-w-5xl mx-auto p-4 sm:p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm">
        <Header />
        <main className="pt-8">
          <Section title="LinkedIn Profile" isOpen={true}>
            <TextAreaField
              placeholder="Paste your complete LinkedIn profile text here..."
              maxLength={6000}
            />
          </Section>
          <Section title="Job Description" isOpen={true}>
            <TextAreaField
              placeholder="Paste the complete job description here..."
              maxLength={6000}
            />
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
    </div>
  )
}

```
```tailwind.config.js
module.exports = {
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
}
```
```index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;
    --ring: 215 20.2% 65.1%;
    --radius: 0.5rem;
  }
  :root[class~="dark"] {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;
    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;
    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;
    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;
    --border: 216 34% 17%;
    --input: 216 34% 17%;
    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;
    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;
    --ring: 216 34% 17%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
    font-family: 'Inter', sans-serif;
  }
}
```
```components/Header.tsx
import React from 'react'
import { LogOut } from 'lucide-react'
export const Header = () => {
  return (
    <header className="flex justify-between items-center pb-6 border-b border-zinc-200">
      <div>
        <div className="h-12 flex items-center">
          <img
            src="https://uploadthingy.s3.us-west-1.amazonaws.com/5wMmHGGtHAkFGYWYsskNX7/logo_transparent_background.png"
            alt="WN CP Logo"
            className="h-full w-auto"
          />
        </div>
      </div>
      <div className="header-controls">
        <button className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white font-semibold rounded-lg shadow-sm hover:bg-red-800 transition-colors duration-200">
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </header>
  )
}

```
```components/Section.tsx
import React, { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
interface SectionProps {
  title: string
  children: React.ReactNode
  isOpen?: boolean
}
export const Section = ({ title, children, isOpen = false }: SectionProps) => {
  const [collapsed, setCollapsed] = useState(!isOpen)
  useEffect(() => {
    setCollapsed(!isOpen)
  }, [isOpen])
  return (
    <div
      className={`border border-zinc-300 rounded-xl mb-6 bg-zinc-50 ${collapsed ? 'collapsed' : ''}`}
    >
      <div
        className="p-5 flex justify-between items-center cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
      >
        <h2 className="text-xl font-semibold text-zinc-800">{title}</h2>
        <ChevronRight
          className={`h-6 w-6 text-zinc-500 transition-transform ${collapsed ? '' : 'rotate-90'}`}
        />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: collapsed ? '0fr' : '1fr',
          transition: 'grid-template-rows 0.4s ease-out',
        }}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5">{children}</div>
        </div>
      </div>
    </div>
  )
}

```
```components/TextAreaField.tsx
import React, { useState } from 'react'
interface TextAreaFieldProps {
  placeholder: string
  maxLength?: number
}
export const TextAreaField = ({
  placeholder,
  maxLength = 10000,
}: TextAreaFieldProps) => {
  const [value, setValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }
  return (
    <div className="relative">
      <textarea
        className="w-full p-4 border border-zinc-300 rounded-lg h-48 focus:ring-2 focus:ring-red-700 focus:border-red-700 transition bg-white"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
      />
      <div className="absolute bottom-3 right-3 text-xs text-zinc-500 bg-white px-1.5 py-0.5 rounded">
        {value.length} / {maxLength}
      </div>
    </div>
  )
}

```
```components/CustomizationSettings.tsx
import React from 'react'
interface SettingOptionProps {
  label: string
  options: string[]
  defaultValue?: string
}
const SettingOption = ({
  label,
  options,
  defaultValue,
}: SettingOptionProps) => {
  return (
    <div className="p-4 border border-zinc-200 rounded-lg bg-zinc-50">
      <label className="font-medium text-zinc-600 block mb-2">{label}</label>
      <select className="w-full p-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-red-700 transition">
        {options.map((option, index) => (
          <option key={index} selected={option === defaultValue}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
export const CustomizationSettings = () => {
  const experienceLevels = [
    '4-6 years (Mid-level)',
    '7-9 years (Senior)',
    '10+ years (Principal)',
  ]
  const technicalDepths = [
    'Medium - Balanced',
    'High - Technical emphasis',
    'Low - Strategic focus',
  ]
  const resumeStyles = ['Modern', 'Traditional', 'Technical', 'Creative']
  const roleFocuses = [
    'AI/ML Product Management',
    'Technical Product Management',
    'Growth Product Management',
    'Platform Product Management',
  ]
  return (
    <div className="border border-zinc-300 rounded-xl mb-6 p-5 bg-white">
      <h3 className="text-xl font-semibold text-zinc-800 mb-4">
        Customization Settings
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SettingOption
          label="Experience Level"
          options={experienceLevels}
          defaultValue={experienceLevels[0]}
        />
        <SettingOption
          label="Technical Depth"
          options={technicalDepths}
          defaultValue={technicalDepths[0]}
        />
        <SettingOption
          label="Resume Style"
          options={resumeStyles}
          defaultValue={resumeStyles[0]}
        />
        <SettingOption
          label="Role Focus"
          options={roleFocuses}
          defaultValue={roleFocuses[0]}
        />
      </div>
    </div>
  )
}

```
```components/GenerateButton.tsx
import React from 'react'
export const GenerateButton = () => {
  return (
    <div className="text-center my-8">
      <button className="px-12 py-4 bg-red-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-red-800 transform hover:-translate-y-1 transition-all duration-200">
        Generate AI-Optimized Resume
      </button>
    </div>
  )
}

```
```components/ResumePreview.tsx
import React from 'react'
import { Check, ClipboardCopy } from 'lucide-react'
interface ResumePreviewProps {
  onCopy: () => void
  hasCopied: boolean
}
export const ResumePreview = ({ onCopy, hasCopied }: ResumePreviewProps) => {
  const handleCopy = () => {
    const resumeText =
      document.getElementById('resume-preview')?.innerText || ''
    navigator.clipboard.writeText(resumeText).then(() => {
      onCopy()
    })
  }
  return (
    <div className="border border-red-700/50 rounded-xl mb-6 p-5 bg-red-50/30">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-zinc-800">
          ✨ Your AI-Optimized Resume
        </h3>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-300 text-zinc-700 font-semibold rounded-lg hover:bg-zinc-100 transition-colors duration-200"
        >
          {hasCopied ? (
            <>
              <Check className="h-5 w-5 text-green-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <ClipboardCopy className="h-5 w-5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div
        id="resume-preview"
        className="p-6 bg-white border border-zinc-200 rounded-lg min-h-[300px] text-sm leading-relaxed space-y-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-center">Sarah Chen</h1>
          <p className="text-center text-zinc-600">
            San Francisco, CA | (555) 123-4567 | sarah.chen@email.com |
            linkedin.com/in/sarahchenpm
          </p>
        </div>
        <div>
          <h2 className="font-bold border-b-2 border-zinc-200 pb-1 mt-4 mb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <p>
            Results-driven Senior Product Manager with over 8 years of
            experience leading cross-functional teams to launch and scale
            innovative AI/ML products. Proven ability to translate complex
            technical challenges into customer-centric solutions that drive
            business growth. Expert in product strategy, roadmap development,
            and agile methodologies, with a track record of increasing user
            engagement by 45% and reducing operational costs by over $2.3M.
          </p>
        </div>
        <div>
          <h2 className="font-bold border-b-2 border-zinc-200 pb-1 mt-4 mb-2">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="mb-4">
            <h3 className="font-semibold">TechCorp Inc. - San Francisco, CA</h3>
            <p className="italic text-zinc-600">
              Senior Product Manager, AI Platforms (June 2021 - Present)
            </p>
            <ul className="list-disc list-inside text-zinc-700 mt-1 space-y-1">
              <li>
                Led the development and launch of an ML-powered recommendation
                engine, increasing user engagement by 45% and content
                consumption by 30% across a user base of 10M+.
              </li>
              <li>
                Defined and managed the product roadmap for a conversational AI
                assistant, resulting in a 3x improvement in task completion
                rates and a 50% reduction in customer support tickets.
              </li>
              <li>
                Collaborated with a team of 15 engineers and data scientists to
                build and implement a robust A/B testing framework for ML
                models, accelerating iteration cycles by 40%.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">StartupXYZ - Palo Alto, CA</h3>
            <p className="italic text-zinc-600">
              Product Manager (July 2018 - June 2021)
            </p>
            <ul className="list-disc list-inside text-zinc-700 mt-1 space-y-1">
              <li>
                Launched a suite of personalization features using collaborative
                filtering and NLP, which increased user retention by 28% in the
                first year.
              </li>
              <li>
                Owned the entire product lifecycle from ideation to launch for a
                B2B analytics platform, acquiring 50+ enterprise clients within
                18 months.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-bold border-b-2 border-zinc-200 pb-1 mt-4 mb-2">
            TECHNICAL SKILLS
          </h2>
          <p>
            <strong>AI/ML:</strong> TensorFlow, PyTorch, Scikit-learn, Natural
            Language Processing (NLP), Computer Vision
          </p>
          <p>
            <strong>Data & Analytics:</strong> SQL, Python (Pandas, NumPy), R,
            Tableau, BigQuery, A/B Testing Frameworks
          </p>
          <p>
            <strong>Product Tools:</strong> Jira, Figma, Amplitude, Mixpanel,
            ProductBoard
          </p>
        </div>
      </div>
    </div>
  )
}

```
```components/ResumeHistory.tsx
import React from 'react'
import { Section } from './Section'
interface HistoryItemProps {
  title: string
  date: string
  template: string
  focus: string
}
const HistoryItem = ({ title, date, template, focus }: HistoryItemProps) => {
  return (
    <div className="p-4 border border-zinc-200 rounded-lg bg-white shadow-sm">
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
      <a
        href="#"
        className="text-sm font-semibold text-red-700 hover:underline mt-4 inline-block"
      >
        View Resume →
      </a>
    </div>
  )
}
export const ResumeHistory = () => {
  const historyItems = [
    {
      title: 'Senior PM - Anthropic',
      date: 'Jan 15, 2025 • 2:34 PM',
      template: 'Modern',
      focus: 'AI/ML Product Management',
    },
    {
      title: 'Principal PM - OpenAI',
      date: 'Jan 12, 2025 • 9:15 AM',
      template: 'Technical',
      focus: 'Technical Product Management',
    },
    {
      title: 'Senior AI Product Manager - Google DeepMind',
      date: 'Jan 8, 2025 • 4:45 PM',
      template: 'Creative',
      focus: 'AI/ML Product Management',
    },
  ]
  return (
    <div className="border border-zinc-300 rounded-xl mb-6 bg-zinc-50">
      <div className="p-5">
        <h2 className="text-xl font-semibold text-zinc-800">Resume History</h2>
      </div>
      <div className="px-5 pb-5">
        <div className="space-y-4">
          {historyItems.map((item, index) => (
            <HistoryItem
              key={index}
              title={item.title}
              date={item.date}
              template={item.template}
              focus={item.focus}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

```
```components/PromptConfiguration.tsx
import React, { useState } from 'react'
import { Section } from './Section'
import { RotateCcw } from 'lucide-react'
export const PromptConfiguration = () => {
  const defaultPrompt = `# PROFESSIONAL RESUME GENERATOR SYSTEM PROMPT
YOU ARE A PROFESSIONAL RESUME GENERATOR SPECIALIZED IN CREATING ATS-OPTIMIZED RESUMES IN STRUCTURED MARKDOWN FORMAT.
## OBJECTIVE
Transform user-provided career information into professionally formatted resumes using clean Markdown syntax that renders perfectly across all platforms and passes ATS screening systems.
## OUTPUT REQUIREMENTS
- FORMAT: Structured Markdown with proper syntax
- STYLE: Professional, clean, ATS-compatible
- TONE: Formal business language, action-oriented
- RESTRICTIONS: No emojis, decorative symbols, or HTML tags
- COMPATIBILITY: Must render cleanly in all Markdown viewers
## MARKDOWN STRUCTURE TEMPLATE
# [FULL NAME]
**[Professional Title]** | [City, State] | [Phone] | [Email] | [LinkedIn URL]
---
## PROFESSIONAL SUMMARY
[2-3 sentence compelling summary with quantified achievements]
---
## CORE COMPETENCIES
- [Skill 1] | [Skill 2] | [Skill 3]
- [Skill 4] | [Skill 5] | [Skill 6]
---
## PROFESSIONAL EXPERIENCE
### [Job Title] | [Company Name] | [Location] | [Start Date - End Date]
- [Achievement-focused bullet with quantified results]
- [Achievement-focused bullet with quantified results]
- [Achievement-focused bullet with quantified results]
---
## EDUCATION
**[Degree Type]** | [Institution Name] | [Location] | [Year]
---
## CERTIFICATIONS
- [Certification Name] | [Issuing Organization] | [Date]
---
## TECHNICAL SKILLS
**[Category]:** [Skill 1, Skill 2, Skill 3]
**[Category]:** [Skill 1, Skill 2, Skill 3]
## CONTENT OPTIMIZATION RULES
- Use reverse chronological order for experience
- Start bullets with strong action verbs
- Include quantified results where possible
- Focus on achievements, not job duties
- Incorporate industry-specific keywords naturally
- Use exact phrases from job descriptions when applicable
## ATS OPTIMIZATION
- Use standard section headers
- Maintain consistent date formats (MM/YYYY)
- Avoid complex formatting or tables
- Use simple bullet points (hyphens)
- Balance keyword density appropriately
## MARKDOWN SYNTAX STANDARDS
- Primary headers (#) for name only
- Section headers (##) for main sections
- Subsection headers (###) for job titles
- Bold (**text**) for emphasis on titles and companies
- Pipe separators (|) for contact info and skills
- Horizontal rules (---) between major sections
## PROCESSING INSTRUCTIONS
1. Analyze provided career information
2. Structure content according to template
3. Optimize language with action verbs and metrics
4. Apply precise Markdown syntax
5. Validate for ATS compatibility and clean rendering
## OUTPUT
Deliver a complete, professional resume in clean Markdown format ready for immediate use in job applications, optimized for ATS systems and flawless rendering across all platforms.`
  const [promptValue, setPromptValue] = useState(defaultPrompt)
  const handleReset = () => {
    setPromptValue(defaultPrompt)
  }
  return (
    <Section title="Core Prompt Configuration" isOpen={true}>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-medium text-zinc-600">System Prompt</label>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-sm rounded-lg border border-zinc-300 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset to Default
            </button>
          </div>
          <textarea
            className="w-full p-4 border border-zinc-300 rounded-lg h-40 focus:ring-2 focus:ring-red-700 focus:border-red-700 transition font-mono text-sm"
            placeholder="You are an AI resume builder..."
            value={promptValue}
            onChange={(e) => setPromptValue(e.target.value)}
            maxLength={10000}
          />
          <div className="text-xs text-zinc-500 text-right mt-1">
            {promptValue.length} / 10000
          </div>
        </div>
      </div>
    </Section>
  )
}

```
```components/AdvancedSettings.tsx
import React from 'react'
import { Section } from './Section'
export const AdvancedSettings = () => {
  return (
    <Section title="Advanced Settings" isOpen={true}>
      <div className="space-y-6 pt-2">
        <div>
          <label className="font-medium text-zinc-600 block mb-2">
            Temperature
          </label>
          <input
            type="range"
            min="0"
            max="2"
            defaultValue="0.7"
            step="0.1"
            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-red-700"
          />
          <p className="text-sm text-zinc-500 mt-1">
            Controls creativity (0=deterministic, 2=very creative)
          </p>
        </div>
        <div>
          <label className="font-medium text-zinc-600 block mb-2">
            Max Tokens
          </label>
          <input
            type="range"
            min="500"
            max="4000"
            defaultValue="2000"
            step="100"
            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-red-700"
          />
          <p className="text-sm text-zinc-500 mt-1">
            Maximum length of generated resume content
          </p>
        </div>
      </div>
    </Section>
  )
}

```
```components/APIConfiguration.tsx
import React, { useState } from 'react'
import { Section } from './Section'
import { Loader2 } from 'lucide-react'
export const APIConfiguration = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [models, setModels] = useState<string[]>([])
  const handleLoadModels = () => {
    setIsLoading(true)
    // Simulate API call - replace with actual API call
    setTimeout(() => {
      setModels(['gemini-pro', 'gemini-pro-vision', 'gemini-ultra'])
      setIsLoading(false)
    }, 1000)
  }
  return (
    <Section title="Gemini API Configuration" isOpen={true}>
      <div className="space-y-4 pt-2">
        <div>
          <label className="font-medium text-zinc-600 block mb-2">
            Gemini API Key
          </label>
          <input
            type="password"
            className="w-full p-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-red-700 transition"
            placeholder="Enter your API key..."
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-medium text-zinc-600">Model</label>
            <button
              onClick={handleLoadModels}
              disabled={isLoading}
              className="text-sm px-3 py-1 bg-red-700 hover:bg-red-800 text-white rounded-lg border border-red-600 flex items-center gap-2 transition-colors"
            >
              {isLoading && <Loader2 className="h-3 w-3 animate-spin" />}
              Load Models
            </button>
          </div>
          <select
            className="w-full p-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-700 focus:border-red-700 transition"
            disabled={models.length === 0}
          >
            {models.length === 0 ? (
              <option>Load models first...</option>
            ) : (
              models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))
            )}
          </select>
        </div>
      </div>
    </Section>
  )
}

```
```systemPrompt.md
# PROFESSIONAL RESUME GENERATOR SYSTEM PROMPT
YOU ARE A PROFESSIONAL RESUME GENERATOR SPECIALIZED IN CREATING ATS-OPTIMIZED RESUMES IN STRUCTURED MARKDOWN FORMAT.
## OBJECTIVE
Transform user-provided career information into professionally formatted resumes using clean Markdown syntax that renders perfectly across all platforms and passes ATS screening systems.
## OUTPUT REQUIREMENTS
- FORMAT: Structured Markdown with proper syntax
- STYLE: Professional, clean, ATS-compatible
- TONE: Formal business language, action-oriented
- RESTRICTIONS: No emojis, decorative symbols, or HTML tags
- COMPATIBILITY: Must render cleanly in all Markdown viewers
## MARKDOWN STRUCTURE TEMPLATE
# [FULL NAME]
**[Professional Title]** | [City, State] | [Phone] | [Email] | [LinkedIn URL]
---
## PROFESSIONAL SUMMARY
[2-3 sentence compelling summary with quantified achievements]
---
## CORE COMPETENCIES
- [Skill 1] | [Skill 2] | [Skill 3]
- [Skill 4] | [Skill 5] | [Skill 6]
---
## PROFESSIONAL EXPERIENCE
### [Job Title] | [Company Name] | [Location] | [Start Date - End Date]
- [Achievement-focused bullet with quantified results]
- [Achievement-focused bullet with quantified results]
- [Achievement-focused bullet with quantified results]
---
## EDUCATION
**[Degree Type]** | [Institution Name] | [Location] | [Year]
---
## CERTIFICATIONS
- [Certification Name] | [Issuing Organization] | [Date]
---
## TECHNICAL SKILLS
**[Category]:** [Skill 1, Skill 2, Skill 3]
**[Category]:** [Skill 1, Skill 2, Skill 3]
## CONTENT OPTIMIZATION RULES
- Use reverse chronological order for experience
- Start bullets with strong action verbs
- Include quantified results where possible
- Focus on achievements, not job duties
- Incorporate industry-specific keywords naturally
- Use exact phrases from job descriptions when applicable
## ATS OPTIMIZATION
- Use standard section headers
- Maintain consistent date formats (MM/YYYY)
- Avoid complex formatting or tables
- Use simple bullet points (hyphens)
- Balance keyword density appropriately
## MARKDOWN SYNTAX STANDARDS
- Primary headers (#) for name only
- Section headers (##) for main sections
- Subsection headers (###) for job titles
- Bold (**text**) for emphasis on titles and companies
- Pipe separators (|) for contact info and skills
- Horizontal rules (---) between major sections
## PROCESSING INSTRUCTIONS
1. Analyze provided career information
2. Structure content according to template
3. Optimize language with action verbs and metrics
4. Apply precise Markdown syntax
5. Validate for ATS compatibility and clean rendering
## OUTPUT
Deliver a complete, professional resume in clean Markdown format ready for immediate use in job applications, optimized for ATS systems and flawless rendering across all platforms.
```