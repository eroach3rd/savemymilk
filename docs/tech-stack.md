# AI Resume Builder - Tech Stack & Architecture

## Overview

This document outlines the technical architecture for the AI Resume Builder - a simple, frontend-only application using Next.js, Shadcn/ui, and Google Gemini AI with no backend or authentication requirements.

## Core Technology Stack

### Framework: Next.js 14
- Static site generation for zero backend needs
- React 18 for modern component architecture
- TypeScript for type safety
- Static export for simple hosting

### UI Components: Shadcn/ui
- Pre-built, accessible components
- Tailwind CSS for styling
- Clean, modern design
- Fully client-side compatible

### AI Integration: Google Gemini
- Gemini Pro API (user provides key)
- Client-side API calls only
- No proxy or backend needed
- Direct browser-to-Gemini communication

### Storage: Browser LocalStorage
- API keys stored locally
- User preferences persisted
- No cookies or server storage
- Complete privacy

### Hosting: Vercel
- Static site hosting
- Global CDN distribution
- Zero server costs
- Instant deployment

## Application Architecture

### Single Page Structure
```
app/
├── page.tsx                 # Everything lives here
├── components/
│   ├── Header.tsx          # Logo and user icon
│   ├── ProfileInput.tsx    # LinkedIn textarea
│   ├── JobInput.tsx        # Job description textarea
│   ├── Settings.tsx        # Dropdowns and API config
│   ├── ResumeOutput.tsx    # Formatted preview
│   └── CopyButton.tsx      # Copy functionality
├── lib/
│   ├── gemini.ts          # Gemini API client
│   ├── storage.ts         # LocalStorage helpers
│   └── formatter.ts       # Markdown/HTML parsing
└── styles/
    └── globals.css        # Tailwind setup
```

### No Backend Required
- **No API Routes**: All logic in the browser
- **No Database**: No data persistence
- **No Auth**: Anonymous usage only
- **No Sessions**: Stateless application

## Key Implementation Details

### Gemini Integration (Client-Side)

```typescript
// lib/gemini.ts
class GeminiClient {
  private apiKey: string;
  
  constructor() {
    this.apiKey = localStorage.getItem('gemini_api_key') || '';
  }
  
  async generateResume(
    profile: string,
    jobDescription: string,
    settings: ResumeSettings
  ): Promise<string> {
    if (!this.apiKey) {
      throw new Error('Please set your Gemini API key');
    }
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: this.buildPrompt(profile, jobDescription, settings)
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          }
        })
      }
    );
    
    const data = await response.json();
    return this.formatResponse(data);
  }
  
  private buildPrompt(
    profile: string,
    jobDescription: string,
    settings: ResumeSettings
  ): string {
    return `You are an AI resume builder specialized in creating ATS-optimized resumes for Product Managers seeking senior roles at AI/ML companies.

Transform the provided LinkedIn profile and job description into a compelling resume.

IMPORTANT: Return the resume in markdown format with the following structure:
- Use # for the name
- Use ## for section headers (Summary, Experience, Education, Skills)
- Use ### for job titles
- Use bullet points for achievements
- Include proper line breaks between sections

LinkedIn Profile:
${profile}

Job Description:
${jobDescription}

Settings:
- Experience Level: ${settings.experienceLevel}
- Technical Depth: ${settings.technicalDepth}
- Resume Style: ${settings.resumeStyle}
- Role Focus: ${settings.roleFocus}

Generate a professional resume optimized for ATS systems and the specific role.`;
  }
}
```

### LocalStorage Management

```typescript
// lib/storage.ts
export const Storage = {
  // API Key
  getApiKey: () => localStorage.getItem('gemini_api_key'),
  setApiKey: (key: string) => localStorage.setItem('gemini_api_key', key),
  
  // Settings
  getSettings: () => {
    const saved = localStorage.getItem('resume_settings');
    return saved ? JSON.parse(saved) : defaultSettings;
  },
  setSettings: (settings: ResumeSettings) => {
    localStorage.setItem('resume_settings', JSON.stringify(settings));
  },
  
  // Clear all data
  clearAll: () => {
    localStorage.removeItem('gemini_api_key');
    localStorage.removeItem('resume_settings');
  }
};
```

### Component Structure

```typescript
// components/ResumeOutput.tsx
export function ResumeOutput({ content }: { content: string }) {
  const formattedContent = useMemo(() => {
    // Parse markdown to HTML
    return markdownToHtml(content);
  }, [content]);
  
  return (
    <div className="resume-output">
      <div className="resume-header">
        <h3>Your AI-Optimized Resume</h3>
        <CopyButton content={content} />
      </div>
      <div 
        className="resume-content"
        dangerouslySetInnerHTML={{ __html: formattedContent }}
      />
    </div>
  );
}
```

### Main Page Component

```typescript
// app/page.tsx
export default function Home() {
  const [profile, setProfile] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [settings, setSettings] = useState(Storage.getSettings());
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleGenerate = async () => {
    setLoading(true);
    try {
      const client = new GeminiClient();
      const resume = await client.generateResume(
        profile,
        jobDescription,
        settings
      );
      setOutput(resume);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container">
      <Header />
      <main>
        <ProfileInput value={profile} onChange={setProfile} />
        <JobInput value={jobDescription} onChange={setJobDescription} />
        <Settings settings={settings} onChange={setSettings} />
        <GenerateButton onClick={handleGenerate} loading={loading} />
        {output && <ResumeOutput content={output} />}
      </main>
    </div>
  );
}
```

## Styling Approach

```css
/* Clean, simple styling */
:root {
  --primary-red: #BD1B04;
  --dark-gray: #9C9696;
  --light-gray: #f8f9fa;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
}

.generate-button {
  background: var(--primary-red);
  color: white;
  padding: 16px 48px;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 0 20px rgba(189, 27, 4, 0.3);
  transition: all 0.3s;
}

.generate-button:hover {
  box-shadow: 0 0 30px rgba(189, 27, 4, 0.5);
  transform: translateY(-2px);
}
```

## Environment Configuration

```bash
# .env.local (for development only)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# No other environment variables needed!
```

## Build & Deployment

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production (static export)
npm run build
npm run export

# Deploy to Vercel
vercel --prod

# The output is in the 'out' directory
# Can be hosted anywhere that serves static files
```

## Security Considerations

### API Key Security
- Keys stored only in browser localStorage
- Never sent to our servers
- Users responsible for their own keys
- Clear data option available

### Content Security
- No user data stored anywhere
- No analytics beyond basic page views
- No cookies or tracking
- Complete user privacy

## Performance Optimizations

### Bundle Size
- Tree-shaking unused components
- Dynamic imports where possible
- Minimal dependencies
- Target: <200KB gzipped

### Runtime Performance
- No server round trips
- Direct API calls to Gemini
- Efficient markdown parsing
- Smooth UI interactions

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

## Development Workflow

### Local Development
```bash
# Clone repository
git clone [repo-url]
cd ai-resume-builder

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Testing Locally
1. Get a Gemini API key from Google AI Studio
2. Enter key in the settings section
3. Paste sample LinkedIn profile
4. Paste sample job description
5. Generate and verify output

## Maintenance

### Updating Dependencies
```bash
npm update
npm audit fix
```

### Adding Features
- All features must work client-side
- No backend dependencies
- Maintain simplicity
- Test across browsers

This architecture provides a clean, simple, privacy-focused solution that requires minimal infrastructure while delivering full functionality.