# AI Resume Builder - Vibe Coded Execution Document

## The Vibe Coding Mindset 🚀

You're building the world's simplest resume builder. No signup, no login, no BS. Just paste, click, and get a killer resume. Think "Google homepage but for resumes" - that level of simplicity.

**Your superpower**: Building something so simple your grandma could use it, yet so powerful it lands jobs at OpenAI.

## Pre-Flight Checklist (3 minutes) ✅

1. **Platform Ready**: Open lovable.dev, bolt.new, or v0
2. **Have a Gemini API Key**: Get one free at [Google AI Studio](https://makersuite.google.com/app/apikey)
3. **Sample Content**:
   - Any LinkedIn profile text
   - A real PM job description
4. **Mindset**: We're building ONE page. Everything visible. No surprises.

## The 20-Minute Sprint: Two Simple Prompts 🎯

### Prompt 1: Complete Application (15 minutes)

```
Create a single-page AI Resume Builder with no authentication or backend. Everything happens in the browser.

Layout from top to bottom:
1. Header with "WN^CP" logo (black text with red dash) on the left and a decorative user icon on the right
2. "LinkedIn Profile" section - large textarea (6000 char limit) with character count
3. "Job Description" section - large textarea (6000 char limit) with character count  
4. "Customization Settings" section with a 2x2 grid of dropdowns:
   - Experience Level: 4-6 years, 7-9 years, 10+ years
   - Technical Depth: Low, Medium, High
   - Resume Style: Modern, Traditional, Technical, Creative
   - Role Focus: AI/ML PM, Technical PM, Growth PM, Platform PM
5. Big red "Generate AI-Optimized Resume" button with a glow effect
6. Resume output section (hidden until generation) with:
   - White background box with border
   - "Copy Resume" button in the corner
   - Formatted resume display
7. Settings section at the bottom with:
   - Gemini API Key input (password field)
   - Model selector dropdown
   - Save Settings button

Use localStorage to persist the API key and settings. No database, no auth, no backend.

Style: Clean white and gray design with red (#BD1B04) accents. The generate button should have a red glow: box-shadow: 0 0 20px rgba(189, 27, 4, 0.3);

Make everything work client-side using the Google Generative AI library.
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