# Save My Milk - Product Requirements Document

## TL;DR

Save My Milk is a mobile-first application that helps breastfeeding parents manage breast milk inventory, avoid spoilage, and reduce the mental burden of tracking expressed milk. Inspired by the real-life exhaustion of triple feeding and manual storage tracking, the app digitizes the process of logging, monitoring, and getting reminders for stored breast milk. It leverages smart automation, reminders, and community resources to support healthier and more sustainable feeding routines.

## Goals

- **Track breast milk inventory** with minimal friction, supporting entry via manual form or QR scan
- **Prevent spoilage** through intelligent alerts based on the 5-5-5 rule (Room temp: 5 hours, Fridge: 5 days, Freezer: 5 months)
- **Automate repetitive actions** so parents don’t have to remember dates or manually record time and volume
- **Connect parents** with lactation consultants, donation centers, and mom groups for support
- **Encourage sustainability** by providing tips for reusing expired milk (e.g., baths, plants)

## Non-Goals

- Will not replace feeding trackers (e.g., Baby Tracker or Pump Log)
- Will not include advanced medical or nutritional analytics
- Will not support hardware integrations (e.g., Bluetooth pumps) in MVP
- Will not track bottle feeding or baby consumption logs in MVP
- Will not include in-app purchasing or marketplace in MVP

## User Stories

### Primary Persona: New Breastfeeding Parent
-As a new parent, I want to quickly record milk pumping details so I can spend more time caring for my baby
- As a new parent, I want to get alerts before milk spoils so I don’t waste milk I worked hard to pump
- As a new parent, I want to scan a QR code on milk bags to pre-fill data and avoid manual entry
- As a new parent, I want to see my milk inventory visually (calendar or list) so I can plan usage

### Persona: Sustainable & Community-Oriented Parent
- As a parent with surplus milk, I want to find donation centers nearby so it doesn’t go to waste
- As a parent looking for support, I want to find Facebook mom groups and lactation consultants
- As a resourceful parent, I want to learn how to repurpose expired milk in safe and useful ways

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
