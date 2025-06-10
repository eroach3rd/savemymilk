import React from 'react';
import { Check, ClipboardCopy } from 'lucide-react';
interface ResumePreviewProps {
  onCopy: () => void;
  hasCopied: boolean;
}
export const ResumePreview = ({
  onCopy,
  hasCopied
}: ResumePreviewProps) => {
  const handleCopy = () => {
    const resumeText = document.getElementById('resume-preview')?.innerText || '';
    navigator.clipboard.writeText(resumeText).then(() => {
      onCopy();
    });
  };
  return <div className="border border-red-700/50 rounded-xl mb-6 p-5 bg-red-50/30">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-zinc-800">
          ✨ Your AI-Optimized Resume
        </h3>
        <button onClick={handleCopy} className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-300 text-zinc-700 font-semibold rounded-lg hover:bg-zinc-100 transition-colors duration-200">
          {hasCopied ? <>
              <Check className="h-5 w-5 text-green-500" />
              <span>Copied!</span>
            </> : <>
              <ClipboardCopy className="h-5 w-5" />
              <span>Copy</span>
            </>}
        </button>
      </div>
      <div id="resume-preview" className="p-6 bg-white border border-zinc-200 rounded-lg min-h-[300px] text-sm leading-relaxed space-y-4">
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
    </div>;
};