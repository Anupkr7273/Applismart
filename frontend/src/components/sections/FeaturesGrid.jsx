// src/components/sections/FeaturesGrid.jsx
import {
    DocumentTextIcon,
    PencilSquareIcon,
    EnvelopeIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { FeatureCard } from '../ui/FeatureCard';

export const FeaturesGrid = () => {
    const features = [
        {
            icon: <DocumentTextIcon className="w-6 h-6" />,
            title: "Tailored Resumes",
            description: "Align your resume to any job description in seconds using AI.",
            gradient: "from-primary to-indigo-700"
        },
        {
            icon: <PencilSquareIcon className="w-6 h-6" />,
            title: "Bullet Rewriter",
            description: "Get quantified STAR-based bullet points — rewritten by GPT.",
            gradient: "from-success to-emerald-700"
        },
        {
            icon: <EnvelopeIcon className="w-6 h-6" />,
            title: "Instant Cover Letters",
            description: "Personalised letters generated with one click.",
            gradient: "from-accent to-amber-700"
        },
        {
            icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
            title: "Interview Prep",
            description: "Prepare with resume-specific mock questions from AI.",
            gradient: "from-violet-500 to-purple-700"
        }
    ];

    return (
        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="text-center max-w-3xl mx-auto">
                <h2
                    className="text-3xl sm:text-4xl font-bold"
                    style={{
                        background: 'linear-gradient(to right, #4F46E5, #F59E0B)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        display: 'inline-block' /* Required for some browsers */
                    }}
                >
                    Built for Better Job Outcomes.
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-100">
                    AI-powered tools designed to maximize your hiring potential
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};