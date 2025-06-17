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
- As a new parent, I want to quickly record milk pumping details so I can spend more time caring for my baby
- As a new parent, I want to get alerts before milk spoils so I don’t waste milk I worked hard to pump
- As a new parent, I want to scan a QR code on milk bags to pre-fill data and avoid manual entry
- As a new parent, I want to see my milk inventory visually (calendar or list) so I can plan usage

### Persona: Sustainable & Community-Oriented Parent
- As a parent with surplus milk, I want to find donation centers nearby so it doesn’t go to waste
- As a parent looking for support, I want to find Facebook mom groups and lactation consultants
- As a resourceful parent, I want to learn how to repurpose expired milk in safe and useful ways

## Functional Requirements

### Breastmilk Logging (Priority: MVP)
- **Storage temperature** either room, fridge or freezer
- **Date & time pumped** default to now
- **Add/edit/delete** milk entries
- **Auto-calculate expiration** based on temperature and 5-5-5 rule (e.g. 5hr for room temp breastmilk)
- **Mark a bottle as used/finished**

### Authentication (Priority: Post-MVP)
- **Simple signup/login** with email or number and password only
- **Modal-based auth** that doesn't interrupt the flow
- **No email verification** to reduce friction
- **Secure session management** via Supabase
- **Platform-specific schema** isolation (e.g., `lovable-milk-db`)

### Smart Reminders (Priority: Post-MVP)
- **Expiration Notification** 
    - Room-temp milk approaching 5-hour limit
    - Fridge milk approaching 5-day limit
    - Frozen milk approaching 5-month limit
- **Tips** such as
    - "Don’t toss expired milk—use for baby baths!"
    - "Label your milk with QR stickers for easier tracking."
    - "Freeze your older fridge milk before it expires."
- **Reminder delivery** via push, SMS, or email (user selectable)

### Inventory View (Priority: MVP)
- **List of stored milk**:
    - Sort by oldest/newest
    - Filter by storage location
    - Countdown timer
- **Calendar view** of pumping history
- **Visual tags**  (red/yellow/green) for soon-to-expire milk

### Mobile-First UI (Priority: MVP)
- Optimized for one-handed use
- Swipe to view inventory
- Tap to enter and mark done
- Large buttons, simple hierarchy

### Community Resources (Priority: Post-MVP)
- **Map/search** for nearby:
    - Milk banks/donation centers
    - Lactation consultants
- **Facebook group** suggestions (by zip code)
- **Facebook marketplace** Buy/sell links for bottles, warmers, pumps
- **Community voted recommendations** for best bottles, warmers, pumps

## User Experience

### Entry Flow
1. User lands on a lightweight homepage explaining the app
2. Clicks "Start Tracking" to open signup modal
3. Enters email + password → enters main app (Post-MVP)
4. Immediately sees the main application page

### Main Application Page
Single page with all functionality:

**Top Section** Breastmilk Log
- Enter time and date, which defaults to now but users can change
- Enter storage type
- Enter amount (oz/ml)
- Confirm "Add breastmilk"

**Inventory Section**
- Horizontal scroll list of current breastmilk
- Each card shows:
  - Type (room-temperature, fridge, freezer)
  - Amount left
  - Time remaining
- "Edit" button
- “Fed” or “Discard” button
- Option to view in a calendar view

**Reminders** (Collapsible)
- App checks milk age every hour
- If nearing threshold, sends gentle notification
- Push/email/SMS reminders (select one for MVP)

### Bottom Nav
- Tabs: [Track], [Reminders], [Inventory], [Home]

## Narrative

It's 2 AM. Michelle’s 6-month-old baby finally settles back to sleep. Her partner is taking the next feeding, but Michelle can’t remember how long ago she left the milk bottle out—and if it’s still good. She opens Save My Milk, taps the active bottle, and immediately sees it expired 15 minutes ago. Crisis averted.

In the morning, her partner Ben thaws 4oz of frozen breastmilk to feed the baby while Michelle sleeps. The app sends Michelle a ping: “Frozen milk thawed: 4oz expires at 11:32 AM.” No guessing, no mental math. Just relief.

## Success Metrics

- **Adoption**: 70% of users log at least 3 pumpings in the first 48 hours
- **Alert Engagement**: 80% of expiring bottle alerts are viewed/interacted with
- **Waste Reduction**: 50% reduction in discarded bottles (self-reported survey)
- **Speed of Use**: 90% of logs completed in under 15 seconds
- **Shared Accounts**: 60% of users invite a second caregiver within 1 week
- **Low Churn**: 50% of users return weekly

## Technical Considerations

### Technical Stack
- **Framework**: Next.js 14 (App Router)
- **UI Components**: Shadcn/ui with Tailwind CSS
- **Database**: Supabase PostgreSQL with platform-specific schema
- **Hosting**: Vercel
- **Analytics**: Posthog for privacy-first tracking
- **Notifications**: OneSignal or Firebase Cloud Messaging

### Database Schema
```sql
-- Platform-specific schema (e.g., lovable-milk-db)
CREATE SCHEMA IF NOT EXISTS "lovable-milk-db";
SET search_path TO "lovable-milk-db";

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

-- Breastmilk log
CREATE TABLE milk_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users,
  volume_oz integer,
  storage_type text CHECK (storage_type IN ('room', 'fridge', 'freezer')),
  created_at timestamp DEFAULT now()
  expires_at timestamp NOT NULL,
  status text CHECK (status IN ('active', 'used', 'expired', 'discarded')),
);

-- Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users manage own profiles"
  ON profiles FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "Users manage own milk"
  ON milk FOR ALL
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
Save My Milk helps parents prevent wasted milk and reduce mental fatigue in the early months of a baby’s life. With real-time expiration tracking, mobile-first design, and shared caregiver access, it provides just enough functionality to be useful without becoming overwhelming. Parents can confidently feed their baby without second-guessing storage rules, forgetting last feed times, or throwing away valuable milk.

### Open Questions for Refinement

1. Should we offer QR code stickers to help autogenerate logs?
2. Will users prefer SMS or push notifications for reminders?
3. Should we integrate with baby feeding apps or offer our own log?
4. Monetization: Should we promote lactation consultants as ad revenue?
5. AI-features: Auto-suggest ideal feeding times or bottle usage order? OR Predict baby’s preferred volumes or patterns?

These questions will guide our iteration strategy post-MVP, ensuring we build what users truly need rather than what we assume they want.
