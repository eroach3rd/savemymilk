<img src="https://uploadthingy.s3.us-west-1.amazonaws.com/5wMmHGGtHAkFGYWYsskNX7/logo_transparent_background.png" alt="WNCP AI Logo" height="60"> 

# AI-Accelerated Product Management Companion Repository

**Workshop materials and comprehensive guides for mastering AI-accelerated product development**

Welcome to the companion repository for the **"AI-Accelerated Product Management"** talk, created by [WNCP AI](https://www.wncp.ai) in collaboration with the University of Maryland. This repository contains resources, example project details, and detailed setup guides to help you practically apply AI-accelerated product management concepts from the presentation.

🚀 **[Visit WNCP AI](https://www.wncp.ai)** | 🎯 **[AI Resume Builder Example](https://github.com/wncp-ai/ai-resume-builder)** | 📚 **[WNCP Resources](https://www.wncp.ai)**

## About the Talk: "AI-Accelerated Product Management"

This talk dives into how AI, especially Large Language Models (LLMs) and generative AI tools, is reshaping the landscape of product management. We explore the transformative potential of AI across the entire product lifecycle, including:

*   **Ideation and Market Research:** Using AI to uncover insights, identify trends, and validate ideas.
*   **User Story Generation & PRD Drafting:** Accelerating the creation of detailed product requirements and user narratives.
*   **Roadmap Planning:** Leveraging AI for data-driven prioritization and scenario planning.
*   **Rapid Prototyping & Development:** Employing AI-assisted tools to quickly build and iterate on product concepts.

The core theme is moving beyond manual processes to an AI-augmented approach. As a practical case study, we'll be looking at the **"AI Resume Builder"** project, demonstrating how these principles can be applied. We also touch upon "vibe coding" (see `docs/vibe-coder-guide.md`) as a mindset for rapid, AI-assisted development.

## The "AI Resume Builder" Example Project

The "AI Resume Builder" is a single-page web application designed to showcase how AI can solve a real-world problem for Product Managers.

**Core Goal:** To help mid-level PMs, especially those transitioning into or seeking senior roles in AI/ML companies, to quickly create tailored, ATS-optimized resumes that highlight both their traditional product skills and newly acquired AI/ML competencies. (See `docs/product-requirements-doc.md` for full details).

**Key Features (Illustrative - based on the PRD):**
*   **Single-Page Application:** All functionality on one page for a streamlined experience.
*   **LinkedIn Profile Import:** Users can paste their LinkedIn profile text.
*   **Job Description Input:** Allows tailoring the resume to a specific job.
*   **AI-Powered Generation:** Utilizes Google Gemini to intelligently rewrite and structure the resume.
*   **Customization:** Options to adjust experience level, technical depth, style, and role focus.

**Simplified Tech Stack for this Workshop (as per `docs/tech-stack.md`):**
For the purpose of this talk and rapid prototyping, we focus on a **frontend-only version**:
*   **Framework:** Next.js 14 (App Router)
*   **UI Components:** Shadcn/ui with Tailwind CSS
*   **AI/ML:** Google Gemini Pro (user provides their own API key)
*   **Storage:** Browser LocalStorage (for API key and settings, ensuring privacy and no backend).
*   **Hosting:** Vercel (for static site deployment).

This simplified stack allows for quick iteration and demonstrates core AI integration without backend complexities, aligning with the "vibe coding" approach.

## 🎯 Why Use This Repository

This repository serves multiple purposes:

- **Learn Vibe Coding:** Experience building functional applications through conversational AI development
- **Apply CRAFT+ Framework:** Practice the Capture, Refine, Analyze, Formulate, Test workflow from the talk
- **Hands-On Learning:** Use real code examples with AI development tools
- **Rapid Prototyping:** Go from idea to working prototype in under 20 minutes
- **Best Practices:** See how to structure prompts and context for AI tools

## Setting Up Your Development Environment & Building the Example

You can use any AI-assisted development tool you prefer (e.g., Google's AI Studio, Firebase with Gemini, VS Code with AI plugins). The key is to provide the AI with the right context (like the PRD, tech stack, and UI prompts).

Below is a detailed guide for using **Lovable.dev**, which is excellent for chat-based, iterative development.

### Detailed Guide: Using Lovable.dev

**Step 1: Create Your Accounts**

*   **Lovable.dev Account:**
    1.  Visit [Lovable.dev](https://link.wncp.ai/lovable-ref).
    2.  Sign up for an account.
*   **Google Gemini API Key:**
    1.  Go to [Get a Gemini API key](https://link.wncp.ai/gemini-api-key) via Google AI for Developers.
    2.  Create your API key in Google AI Studio.
    3.  **Securely set up your API key** as an environment variable (highly recommended) or have it ready to input into Lovable.dev's interface if it supports direct key input for projects.
        *   **macOS/Linux (Bash):** `echo 'export GEMINI_API_KEY="YOUR_API_KEY_HERE"' >> ~/.bashrc && source ~/.bashrc`
        *   **macOS/Linux (Zsh):** `echo 'export GEMINI_API_KEY="YOUR_API_KEY_HERE"' >> ~/.zshrc && source ~/.zshrc`
        *   **Windows:** Set it up via Environment Variables settings.
    4.  For general Gemini info: [Google Gemini](https://link.wncp.ai/gemini).
    *Security Note: Always keep your API keys confidential. Do not commit them to Git.*

**Step 2: Initialize Your Project in Lovable.dev**

1.  **Log in** to your Lovable.dev account.
2.  **Start a new project.**
3.  **Upload Wireframe/Design:** If you have a visual wireframe (e.g., a PNG image) for the AI Resume Builder's UI, upload it to Lovable.dev. This gives the AI visual context.
4.  **Initial UI Prompt:**
    Your first goal is to get the basic UI structure in place. You'll provide Lovable.dev with the code snippets and structure for the frontend.
    *   Open the `docs/wire-frame-code-prompt.md` file in this repository. This file contains the HTML, CSS, and JavaScript/TypeScript (React components) structure for the application.
    *   Start a chat with Lovable.dev for your new project. You can use a prompt like:

        ```
        Hi Lovable! Let's build the frontend for a single-page AI Resume Builder.
        The application will be built using Next.js and Tailwind CSS with React components.
        I have the initial code structure and components for the UI. Please help me set this up.

        Here's the main App component structure:
        [Paste the content of App.tsx from docs/wire-frame-code-prompt.md here]

        And here are the individual components:
        Header:
        [Paste the content of components/Header.tsx here]

        Section:
        [Paste the content of components/Section.tsx here]

        ... (continue this for all components in docs/wire-frame-code-prompt.md: TextAreaField, CustomizationSettings, GenerateButton, ResumePreview, ResumeHistory, PromptConfiguration, AdvancedSettings, APIConfiguration) ...

        And the necessary CSS:
        [Paste the content of index.css from docs/wire-frame-code-prompt.md here]

        And the Tailwind configuration:
        [Paste the content of tailwind.config.js here]

        The entry point will be index.tsx:
        [Paste the content of index.tsx here]

        Please generate the file structure and populate these files accordingly.
        The goal is to have a static frontend based on these components.
        ```
    *   **Note:** For very long content, you might need to paste the code snippets in parts or guide Lovable.dev component by component.

**Step 3: Feed Knowledge to Lovable.dev**

To enable Lovable.dev to understand the project's context for further development (like implementing logic or making changes):

1.  Locate the feature in Lovable.dev that allows you to add documents or text to its knowledge base for the project.
2.  Copy the entire content of `docs/product-requirements-doc.md` and add it to Lovable's knowledge base. This provides the AI with the "what" and "why" of the project.
3.  Copy the entire content of `docs/tech-stack.md` (the simplified, frontend-only version) and add it to Lovable's knowledge base. This informs the AI about the "how."

**Step 4: Iterative Development**

Now you can chat with Lovable.dev to:
*   Implement the client-side logic for API calls to Gemini (as outlined in `docs/tech-stack.md`).
*   Connect the UI elements to functionality (e.g., making the "Generate" button trigger the AI call).
*   Manage state (e.g., storing API keys or user inputs in LocalStorage).
*   Refine the UI and UX based on the PRD.

### Alternative Tools

If you're not using Lovable.dev, you can adapt this process:

*   **IDE with AI Plugins (e.g., VS Code + GitHub Copilot/Gemini Code Assist):**
    *   Set up your Next.js project locally.
    *   Use the AI plugin to help you write code, component by component, using the `docs/wire-frame-code-prompt.md` as a reference.
    *   Keep the `product-requirements-doc.md` and `tech-stack.md` open for reference or copy-paste relevant sections into prompts when asking the AI for help with specific features.
*   **Google AI Studio / Vertex AI:**
    *   Use these platforms to experiment with Gemini prompts. You can take the system prompt from `docs/wire-frame-code-prompt.md` (the `systemPrompt.md` section) or from the `tech-stack.md` and refine it.
    *   Then, integrate the working API calls into your locally built Next.js application.
*   **Replit:**
    *   These platforms often provide integrated AI features. You can start a new Next.js project and use their AI to help build out the components and logic, feeding it the context from the `docs` files.

## 📖 The Vibe Coding Philosophy

Vibe coding represents a paradigm shift in how we build software. Instead of writing code line-by-line, you describe what you want in plain English, and AI translates your vision into working software. From the `vibe-coder-guide.md`:

### Core Principles
- **Think Google homepage simplicity** - No signup, no complexity, just functionality
- **20-minute sprints** - From idea to working application in record time
- **Frontend-only architecture** - Everything runs in the browser for instant deployment
- **User-centric design** - Focus on solving real problems, not technical complexity

### The Two-Prompt Process
The guide outlines a simple yet powerful approach:
1. **Prompt 1 (15 minutes)**: Build the complete UI structure and layout
2. **Prompt 2 (5 minutes)**: Add AI functionality, interactivity, and polish

This approach has been tested and refined through multiple workshops, consistently delivering working applications in under 20 minutes.

## Repository Contents

*   `README.md`: This file - your comprehensive guide to AI-accelerated product development.
*   `docs/`:
    *   `product-requirements-doc.md`: The detailed Product Requirements Document for the AI Resume Builder, envisioning a more complete version with user accounts and Supabase.
    *   `tech-stack.md`: Describes the simplified, frontend-only architecture using LocalStorage, suitable for rapid prototyping and this workshop.
    *   `vibe-coder-guide.md`: A fun guide on the "vibe coding" development approach – rapid, intuitive, AI-assisted building.
    *   `wire-frame-code-prompt.md`: Contains the React (TypeScript) component code, CSS, and Tailwind configuration for the initial UI of the AI Resume Builder. This is intended to be used as a starting point with AI code generation tools.
    *   `wireframe-code/`: Directory containing all the component files referenced in the prompt guide.
*   `.gitignore`: Standard git ignore file.

## 🎓 Workshop Learning Outcomes

By working through this repository and building the AI Resume Builder, you will:

1. **Master AI-Assisted Development**: Learn to effectively communicate with AI tools to generate production-ready code
2. **Understand Modern Architecture**: See how Next.js, Tailwind, and AI APIs work together in a real application
3. **Practice Rapid Prototyping**: Experience the speed of going from idea to deployed application
4. **Build Portfolio Projects**: Create a functional tool you can showcase and continue developing
5. **Join a Community**: Connect with other PMs embracing AI-accelerated workflows

## 🏢 About WNCP AI

[WNCP AI](https://www.wncp.ai) is at the forefront of AI-accelerated product development. We help product managers, founders, and teams leverage cutting-edge AI tools to build better products faster.

### Our Mission
Transform how products are built by making AI tools accessible to everyone – not just developers. We believe the future of product management is AI-augmented, and we're here to help you get there.

### What We Offer
- **AI Tool Training**: Hands-on workshops teaching practical AI integration
- **Rapid Prototyping Services**: From idea to MVP in days, not months
- **AI Strategy Consulting**: Help your team adopt AI-accelerated workflows
- **Custom AI Solutions**: Bespoke tools tailored to your product needs

### Why WNCP AI?
- **500+ PMs Trained**: We've helped hundreds of product managers master AI tools
- **Real Results**: Our clients ship products 10x faster with AI assistance
- **Practical Focus**: Everything we teach is immediately applicable to your work
- **Continuous Innovation**: We stay on the cutting edge of AI product development

### Success Stories
- Product teams reducing development cycles from months to weeks
- Solo founders building MVPs without hiring developers
- Enterprise teams automating repetitive product tasks with AI
- PMs landing senior roles by showcasing AI-powered portfolios

## Next Steps After This Workshop

1. **Complete the Resume Builder**: Follow the guides to build your own version
2. **Customize and Deploy**: Make it your own and share with the community
3. **Explore More AI Tools**: Visit [WNCP AI](https://www.wncp.ai) for additional resources
4. **Join Our Community**: Connect with other AI-accelerated PMs
5. **Book a Consultation**: Discuss how AI can transform your specific workflow

---

<div align="center">
  <h3>🚀 Ready to Build Products 10x Faster?</h3>
  <p>This workshop is your gateway to AI-accelerated product development.</p>
  <a href="https://www.wncp.ai">
    <img src="https://img.shields.io/badge/Learn%20More%20at%20WNCP%20AI-BD1B04?style=for-the-badge&logo=rocket&logoColor=white" alt="Learn More">
  </a>
  <br><br>
  <p><strong>Join 500+ product managers</strong> who are shipping faster with AI</p>
  <a href="https://www.wncp.ai">Visit www.wncp.ai →</a>
</div>
