# AI-Accelerated Product Management Companion Repository

Welcome to the companion repository for the talk on **AI-Accelerated Product Management**!

This repository contains resources, code examples, and links discussed during the presentation. Our goal is to provide you with practical tools and knowledge to leverage AI in your product management workflows.

## About the Talk

This talk explores how Artificial Intelligence, particularly Large Language Models (LLMs) and generative AI tools, can revolutionize various aspects of product management. From ideation and market research to user story generation and roadmap planning, AI offers powerful capabilities to enhance efficiency, creativity, and data-driven decision-making.

## Getting Started

To make the most of the examples and tools discussed, you might need access to certain AI services. Below are instructions on how to get started with some of the key platforms mentioned.

### 1. Google Gemini API Key

Google's Gemini models are a family of powerful multimodal AI models. Accessing them via an API allows you to integrate their capabilities into your own applications and workflows.

**How to get a Gemini API Key:**

1.  **Visit the Google AI for Developers portal:** Go to [Get a Gemini API key](https://link.wncp.ai/gemini-api-key).
2.  **Create a key in Google AI Studio:** Follow the instructions on the page to create your API key. This usually involves signing in with your Google account and creating a new project or using an existing one.
3.  **Set up your API Key:**
    *   For security, it is crucial **not to hardcode your API key directly into your code** or check it into version control.
    *   The recommended way is to set it up as an environment variable.
        *   **For macOS/Linux (Bash):**
            ```bash
            echo 'export GEMINI_API_KEY="YOUR_API_KEY_HERE"' >> ~/.bashrc
            source ~/.bashrc
            ```
        *   **For macOS/Linux (Zsh):**
            ```bash
            echo 'export GEMINI_API_KEY="YOUR_API_KEY_HERE"' >> ~/.zshrc
            source ~/.zshrc
            ```
            Replace `"YOUR_API_KEY_HERE"` with the actual key you obtained.
        *   **For Windows:**
            1.  Search for "Environment Variables" in the system settings.
            2.  Click on "Environment Variables...".
            3.  Under "User variables" or "System variables", click "New...".
            4.  Set the "Variable name" to `GEMINI_API_KEY`.
            5.  Set the "Variable value" to your actual API key.
            6.  Click OK on all dialogs. You might need to restart your terminal or IDE for the changes to take effect.
4.  **Verify your setup (Optional but Recommended):**
    You can use a `curl` command to send your first request and verify that your API key is working correctly:
    ```bash
    curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}" \
      -H 'Content-Type: application/json' \
      -X POST \
      -d '{
        "contents": [
          {
            "parts": [
              {
                "text": "Write a story about a magic backpack."
              }
            ]
          }
        ]
      }'
    ```
    (Note: The model name `gemini-1.5-flash` is used here as an example; refer to the [Gemini documentation](https://ai.google.dev/docs/models/gemini) for the latest models.)

*   For more general information about Google Gemini, visit: [Google Gemini](https://link.wncp.ai/gemini)

**Important Security Reminders for your Gemini API Key:**
*   Keep your API key confidential.
*   Do NOT commit it to source control (like Git).
*   Consider using API key restrictions if available to limit its scope.

### 2. Lovable.dev Account

Lovable.dev is a platform that allows you to create applications and websites by chatting with AI. It's a great example of how AI can be used to accelerate development and bring ideas to life quickly.

**How to get a Lovable.dev Account:**

1.  **Visit the Lovable.dev website:** Go to [Lovable.dev](https://link.wncp.ai/lovable-ref).
2.  **Sign Up:** Look for a "Get started" or "Sign up" button and follow the registration process to create your account.

---

We hope you find these resources helpful. Happy innovating! 