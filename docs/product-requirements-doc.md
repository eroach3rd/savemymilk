# AI Resume Builder - Product Requirements Document

## TL;DR

AI Resume Builder is a streamlined single-page web application that transforms LinkedIn profiles into tailored, ATS-optimized resumes specifically designed for Product Managers seeking senior roles at AI/ML companies. Built with Next.js and Shadcn/ui, it leverages Google Gemini AI (free tier) to bridge the gap between traditional PM experience and newly acquired AI skills, enabling users to create compelling resumes in under 2 minutes.

## Goals

- **Solve the core need** of mid-level PMs struggling to showcase AI/ML competencies alongside traditional product skills when applying for senior positions
- **Delight users** by intelligently highlighting relevant experience and newly acquired skills that match specific job requirements
- **Enable rapid iteration** through mobile-first design that allows resume creation during networking events or commutes
- **Build trust** through secure, privacy-first architecture using Supabase for data persistence
- **Create a polished experience** with modern UI components and smooth interactions
- **Focus on outcome quality** over feature quantity—better to nail the core resume generation than add peripheral features

## Non-Goals

- Will not become a full ATS or job application tracking system
- Does not include interview preparation or salary negotiation features in MVP
- Will not support team/enterprise features or shared resume templates initially
- Does not automate job applications or integrate with job boards
- Will not process resumes for non-PM roles in the first release

## User Stories

### Primary Persona: Aspiring Senior PM

- **As an aspiring senior PM**, I want to quickly transform my LinkedIn profile into a resume that highlights my AI/ML side projects, so I can compete for senior roles at AI companies
- **As an aspiring senior PM**, I want the tool to identify and emphasize transferable skills from my current role, so I don't appear underqualified for senior positions
- **As an aspiring senior PM**, I want to create multiple resume versions on my phone, so I can apply immediately when I find relevant openings
- **As an aspiring senior PM**, I want AI to suggest which experiences to emphasize based on the job description, so my resume passes both ATS and human screening

### Persona: Career Switcher PM

- **As a PM transitioning to AI**, I want to highlight my recent certifications and bootcamps prominently, so they don't get buried under years of non-AI experience
- **As a career switcher**, I want the AI to reframe my past experience through an AI/ML lens, so hiring managers see the relevance
- **As a career switcher**, I need mobile access to update my resume after networking conversations, so I can incorporate new insights immediately

### Persona: Technical PM

- **As a technical PM**, I want granular control over how technical my resume appears, so I can calibrate for different company cultures
- **As a technical PM**, I want my GitHub contributions and side projects automatically incorporated, so my hands-on experience is visible
- **As a technical PM**, I need the AI to balance technical depth with product leadership narrative, so I'm not pigeonholed as "just technical"

## Functional Requirements

### Single-Page Application (Priority: MVP)
- **All-in-one interface** with collapsible sections for profile and job inputs
- **Real-time generation** without page navigation
- **Responsive design** that works seamlessly on all devices
- **Resume history** displayed at the bottom of the main page

### Authentication (Priority: MVP)
- **Simple signup/login** with email and password only
- **Modal-based auth** that doesn't interrupt the flow
- **No email verification** to reduce friction
- **Secure session management** via Supabase
- **Platform-specific schema** isolation (e.g., `lovable-ai-resume-db`)

### Profile & Job Input (Priority: MVP)
- **LinkedIn text import** via large textarea with 6000 character limit
- **Smart parsing** of AI-relevant skills and keywords
- **Job description input** with automatic parsing
- **Collapsible sections** to save screen space
- **Character counting** for user feedback

### Resume Generation (Priority: MVP)
- **Four customization dropdowns**:
  - Experience Level (4-6, 7-9, 10+ years)
  - Technical Depth (Low/Medium/High)
  - Resume Style (Modern/Traditional/Technical/Creative)
  - Role Focus (AI/ML PM, Technical PM, Growth PM, Platform PM)
- **Gemini AI integration** for intelligent content generation
- **HTML output** with embedded styling
- **Unique URLs** for each generated resume

### Settings Screen (Priority: MVP)
- **Custom AI prompt** configuration
- **API key management** for Gemini
- **Account preferences**
- **Simple navigation** back to main page

### Resume Access & History (Priority: MVP)
- **Hosted resumes** with permanent URLs
- **Resume history list** showing:
  - Company and role title
  - Generation date and time
  - Template and focus used
  - Direct access links
- **No download required** - access via URL

## User Experience

### Entry Flow
1. User lands on homepage with clear value proposition
2. Clicks "Get Started" to open signup/login modal
3. Enters email and password (no verification needed)
4. Immediately sees the main application page

### Main Application Page
Single page with all functionality:

**LinkedIn Profile Section** (Collapsible)
- Large textarea for profile paste
- Character counter (0/6000)
- Auto-expands when focused

**Job Description Section** (Collapsible)
- Textarea for job description
- Character counter (0/6000)
- Collapsed by default

**Customization Grid** (2x2)
- Four dropdown selectors
- Clean card-based layout
- Hover states for interactivity

**Generate Button**
- Prominent placement
- Loading state during generation
- Clear success feedback

**Access Section**
- Appears after generation
- Shows unique resume URL
- "Access Your AI Resume" link

**Resume History** (Collapsible)
- List of past generations
- Sorted by recency
- Direct links to view

### Settings Screen
- Accessed via gear icon
- Custom prompt editor
- API key input field
- Save and return functionality

## Narrative

It's 9 PM. Sarah, a Product Manager at a Series B startup, just got home from an AI/ML meetup where she networked with a recruiter from Anthropic. The recruiter mentioned a Senior PM role opening tomorrow. Sarah's current resume emphasizes her e-commerce experience but barely mentions the ML certification she completed last month or the recommendation engine side project she's been building.

She opens AI Resume Builder on her phone while making tea. No complex signup process - just email and password, and she's in. A quick paste of her LinkedIn profile, followed by the Anthropic job description she found online. She adjusts the dropdowns: 7-9 years experience, High technical depth, Modern style, AI/ML Product Management focus.

The AI immediately identifies that Anthropic values technical depth and suggests emphasizing her SQL skills and A/B testing experience through an ML lens. It pulls her GitHub contributions into a "Technical Leadership" section and reframes her e-commerce personalization work as "ML-driven user experience optimization."

Within 90 seconds, Sarah has a polished resume accessible via a permanent URL. She copies the link and emails it to the recruiter before her tea gets cold. The next morning, she has an interview scheduled.

## Success Metrics

- **Time to Resume**: 90% of users generate first resume in under 2 minutes
- **Resume Quality Score**: User-reported satisfaction with AI suggestions (>4.5/5)
- **Mobile Completion Rate**: 80% of mobile sessions result in generated resume
- **Return Usage**: 70% of users create multiple versions within first week
- **Outcome Tracking**: Optional user survey on interview success (3-month follow-up)
- **Generation Success Rate**: >95% successful AI generations
- **URL Access Rate**: Track how often resume URLs are accessed

## Technical Considerations

### Technical Stack
- **Framework**: Next.js 14 (App Router)
- **UI Components**: Shadcn/ui with Tailwind CSS
- **Database**: Supabase PostgreSQL with platform-specific schema
- **AI/ML**: Google Gemini Pro (free tier)
- **Hosting**: Vercel
- **Analytics**: Posthog for privacy-first tracking

### Database Schema
```sql
-- Platform-specific schema (e.g., lovable-ai-resume-db)
CREATE SCHEMA IF NOT EXISTS "lovable-ai-resume-db";
SET search_path TO "lovable-ai-resume-db";

-- User profiles
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  gemini_api_key text ENCRYPTED,
  custom_prompt text,
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now(),
  UNIQUE(user_id)
);

-- Generated resumes
CREATE TABLE resumes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  slug varchar(100) UNIQUE NOT NULL,
  linkedin_text text NOT NULL,
  job_description text NOT NULL,
  settings jsonb NOT NULL,
  generated_html text NOT NULL,
  created_at timestamp DEFAULT now()
);

-- Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users manage own profiles"
  ON profiles FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "Users manage own resumes"
  ON resumes FOR ALL
  USING (auth.uid() = user_id);
```

### Security & Privacy
- **Simple auth**: Email/password only via Supabase
- **Encrypted API keys**: Stored securely in database
- **Unique resume URLs**: Non-guessable slugs
- **Data isolation**: Platform-specific schemas
- **HTTPS only**: All resume access via secure connection

### Performance Requirements
- **Initial Load**: <2s on 3G connection
- **Generation Time**: <5s for full resume
- **Mobile Performance**: 90+ Lighthouse score
- **Concurrent Users**: Support 100+ simultaneous generations

## Summary & Open Questions

### Executive Summary
AI Resume Builder addresses a critical pain point for mid-level Product Managers seeking senior roles in the competitive AI/ML industry. By leveraging Google Gemini AI to intelligently transform LinkedIn profiles into tailored resumes that emphasize both traditional PM skills and newly acquired technical competencies, we can reduce resume creation time from hours to minutes while significantly improving quality and relevance.

The single-page design with modal authentication ensures users can create compelling resumes anywhere, anytime—crucial for busy professionals who discover opportunities through networking or spontaneous job postings.

### Key Differentiators
1. **AI-PM Focus**: Unlike generic resume builders, specifically optimized for PM→Senior PM in AI companies
2. **Speed**: 2-minute turnaround vs. 2+ hours manual editing
3. **Free AI**: Uses Google Gemini's free tier - no API costs for users
4. **Simple Access**: No downloads - resumes hosted with permanent URLs
5. **Privacy-First**: User controls their data with Supabase's secure infrastructure

### Open Questions for Refinement

1. **Monetization Strategy**
   - Freemium with limited generations?
   - One-time purchase ($29) vs. subscription ($9/month)?
   - Premium features like custom domains for resume URLs?

2. **AI Integration Depth**
   - Should we auto-generate cover letters too?
   - Include interview question preparation based on resume?
   - Suggest LinkedIn profile optimizations?

3. **Resume URL Strategy**
   - Custom domains for premium users?
   - Analytics on who views resumes?
   - Expiration dates or permanent hosting?

4. **Success Tracking**
   - How do we measure actual job placement success?
   - Should we build in feedback loops from recruiters?
   - Community features for peer review?

5. **Competitive Moat**
   - How do we prevent copying of our AI prompts?
   - Should we build proprietary PM skills taxonomy?
   - Partner with PM communities for distribution?

These questions will guide our iteration strategy post-MVP, ensuring we build what users truly need rather than what we assume they want.