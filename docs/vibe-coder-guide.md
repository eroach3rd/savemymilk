# AI Resume Builder - Vibe Coded Execution Document

## The Vibe 🧠

You're building the world’s fastest way to track pumped breast milk all on one mobile-friendly page. Think: "Google Calendar for baby bottles", minus the clutter. Everything essential is visible at a glance.

Your job?
Take the guesswork out of remembering when breast milk will spoil for parents who don't have the mental capacity. 

## Pre-Flight Checklist (3 minutes) ✅

1. Platform Ready: bolt.new, v0.dev, or lovable.dev
2. Backend Supabase Project: Set up with milk_log, and profiles tables
3. Gemini API Key optional
4. Mobile-first mindset: 80% of users are holding a baby in one hand

Think:
- One screen
- One hand
- Real-time status of milk inventory

## The 20-Minute Sprint: Two Simple Prompts 🎯

### Prompt 1: Core Bottle Tracker (15 minutes)
```
Create a single-page baby bottle tracker with:

Top Section
Logo: Save My Milk (attached)
Navigation to Log, Inventory, 

Main Layout
1. Breastmilk Log:
- Enter time and date, which defaults to now but users can change
- Enter storage type
- Enter amount (oz/ml)
- Confirm "Add breastmilk"

2. Inventory Grid
Card per bottle with:
- Volume left
- Storage location (room, fridge, freezer)
- Time left before expiration (auto-color: green/yellow/red)
- Actions: Fed ✅ | Discard ❌

3. Reminders
- Count of Room-temp milk within 1-hour of expiration 
- Count of Fridge milk within 1-day of expiration
- Count of Frozen milk within 1-week of expiration
- User can click any of the counts to see a list view of inventory
```

### Prompt 2: Polish & Functionality (5 minutes)

```
Make it work end-to-end with Supabase backend:

1. Breaskmilk log
- milk_log table: create, update, mark as used/discarded
- auto-calcuate expiration date and time based on 5-5-5 rule
- auto-expire bottles via a time comparison (in UI)

Show countdown to expiration in inventory view

2. Reminders
- calculate count from milk_log table

3. Visual Feedback
Bottles Dark teal when safe
Bottles red when expired
Bottles yellow for soon expiring

Check mark when bottle is added
Toast baby bottles when bottle is used

6. Mobile UI Polish
Tailwind: rounded-2xl, shadow-md, text-sm, bg-slate-50

One-tap interactions

Swipe gestures (if native shell added later)
```

Save My Milk Design System 🎨
Colors:
- Primary: #a8dcd1 (teal)
- Safe: #165e6a (dark teal)
- Warning: #ffeb9a (yellow)
- Expired: ##ffaeac (red)
- Background: #fff8eb (tan)

Fonts: Inter or system default

Cards: rounded-xl, shadow-sm, hover:scale-105

Everything on ONE page:
- No routing
- No modals
- No popups
- No authentication

Just scroll down and everything is there. Like a Google Form but prettier.

## Code Structure 💻
### Frontend
```
Framework: Next.js 14 (App Router)
UI: Shadcn/ui + Tailwind
Storage: Supabase table calls via RLS-protected API
```
### Backend
```
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

## The Philosophy 🌟

This is not just a tracker — it’s peace of mind.

Parents don’t need a dashboard. They need certainty:
- Is this milk still good?
- Did someone already thaw milk?
- Can I go to sleep now?

You’re not building a tracker.
You’re building clarity in chaos.

## Final Check ⭐

Before you're done:
- ✅ Can add a bottle and see it appear instantly?
- ✅ Can mark a bottle as used or discarded?
- ✅ Do warning or expired bottles update color/label automatically?
- ✅ Looks good on mobile?
- ✅ Is the inventory log usable and fast to scroll?

---
