import Title from './Title';
import { useRef } from 'react';
import { PricingTable } from '@clerk/clerk-react';

export default function Pricing() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    return (
        <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="Pricing"
                    heading="Pricing plans"
                    description="Our pricing plans are simple, transparent and flexible. choose the plan that best suits your needs"
                />

                <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto">
                    <PricingTable appearance={{
                        variables: {
                            colorBackground:'none'
                        },
                        elements: {
                            pricingTableCardBody:'bg-white/6',
                            pricingTableCardHeader: 'bg-white/10',
                            switchThumb: 'bg-white'
                        }
                    }}/>
                </div>
            </div>
        </section>
    );
};