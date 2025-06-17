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

2. Feed Log
Reverse timeline of feedings

Show bottle used, volume, and time

Optional: caregiver name

3. Add Bottle Modal (or inline form)
Volume (ml or oz)

Milk type

Storage location

Time created (defaults to now)

Auto-calculate expiration time
```

### Prompt 2: Polish & Functionality (5 minutes)

```
Now make the resume generation actually work:

1. Install Google's Generative AI client library
2. When Generate is clicked:
   - Get API key from localStorage (prompt if missing)
   - Build a prompt that includes profile, job description, and settings
   - Call Gemini Pro API directly from the browser
   - Display formatted output in the resume section

3. The AI prompt should instruct Gemini to:
   - Return resume in markdown format
   - Use # for name, ## for sections, ### for job titles
   - Include Summary, Experience, Education, and Skills sections
   - Optimize for ATS and the specific role

4. Parse the markdown response and display it with proper formatting:
   - Convert markdown to HTML
   - Style it to look like a professional resume
   - Georgia font for resume content

5. Make the Copy button work:
   - Copy the markdown text (not HTML)
   - Show "Copied!" feedback for 2 seconds

6. Add error handling:
   - Show alert if API key is missing
   - Show alert if generation fails
   - Loading state while generating

Remember: NO backend, NO authentication, NO database. Everything in the browser!
```

## The Vibe Check ✨

Your app should feel:
- **Instant**: No waiting, no loading screens (except during generation)
- **Obvious**: Everything visible, no hidden menus
- **Private**: Nothing leaves the browser except API calls to Gemini
- **Professional**: Clean design that makes users trust it

## Quick Fixes 🔧

### "The API key isn't saving"
```
Make sure to use localStorage.setItem('gemini_api_key', apiKey) when the user enters it. Check localStorage in DevTools to verify it's there.
```

### "The resume looks ugly"
```
Add proper CSS for the resume output. Use Georgia font, proper spacing, and format headers correctly. The resume should look professional with clear sections.
```

### "Generate button doesn't look special"
```
The generate button needs to stand out. Use this CSS:
background: #BD1B04;
box-shadow: 0 0 20px rgba(189, 27, 4, 0.3);
transition: all 0.3s;

On hover:
box-shadow: 0 0 30px rgba(189, 27, 4, 0.5);
transform: translateY(-2px);
```

### "Markdown isn't formatting"
```
Install a markdown parser like 'marked' or write a simple converter. Make sure headers, bullets, and paragraphs are properly styled in the output.
```

## Pro Tips 💡

- **Start with static UI**: Get everything looking right before adding functionality
- **Test with your own API key**: Make sure the Gemini integration works
- **Keep it simple**: No fancy features, just the essentials
- **Use Tailwind classes**: Faster than custom CSS

## The Single-Page Magic 🎨

Everything on ONE page:
- No routing
- No modals
- No popups
- No authentication
- No database

Just scroll down and everything is there. Like a Google Form but prettier.

## Code Structure 💻

Keep it flat and simple:
```
- One main component with all the state
- Helper functions for API calls
- Simple localStorage utilities
- That's it!
```

## The Philosophy 🌟

This tool should feel like magic:
1. Paste your stuff
2. Click the glowing button
3. Get a perfect resume
4. Copy and go

No signup fatigue. No data harvesting. No subscription popups. Just a tool that works.

## Final Check ⭐

Before you're done:
- ✅ Can generate a resume in under 30 seconds?
- ✅ API key persists between refreshes?
- ✅ Copy button works perfectly?
- ✅ Looks good on mobile?
- ✅ No console errors?

---

*Ready? Open your platform, paste Prompt 1, and let's build the world's simplest resume builder! 🚀*
