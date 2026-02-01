import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Drag & Drop your assets . We auto-Optimze formats and sizes.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'Optimzed models deliver output in seconds with great fidelity.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring product shots to life with short-form, social-ready Videos'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try the platform at no cost.',
        credits: 25,
        features: [
            '25 Credits',
            'Standard Quality',
            'No watermark',
            'Slower generation Speed',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        desc: 'Creators & small teams.',
        credits: 80,
        features: [
            '80 Credits ',
            'HD quality',
            'No watermark',
            'Video genration',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'Ultra',
        name: 'Ultra',
        price: '$99',
        desc: 'Scale across teams and agencies',
        credits: '300',
        features: [
            '300 Credits',
            'FHD Quality',
            'No Watermark',
            'Fast Generation speed',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does the AI generation work',
        answer: 'we leverage state-of-the diffusion models trained on millions of product images to blend your product into realistic scenes while preserving details,lighting and reflections.'
    },
    {
        question: 'Do I own the generated images ? ',
        answer: 'yes - you receive full commercial rights to any images and videos generated on the platform.Use them for ads, ecommerce, social media and more'
    },
    {
        question: 'Can i Cancel anytime?',
        answer: 'Yes - You can cancel from your dashboard. you will retain access through the end of your billing period.'
    },
    {
        question: 'What inpur formats do you support?',
        answer: 'We accept JPG, PNG, and WEBP. Outputs are high-resolution PNGs and MP4s optimized for social platforms'
    }
];

export const footerLinks = [
    {
        title: "QuickLinks",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQs", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];