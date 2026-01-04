import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import WhatHappenedSection from '@/components/WhatHappenedSection';
import ReadStoriesSection from '@/components/ReadStoriesSection';
import BrownGallerySection from '@/components/BrownGallerySection';
import ContributeSection from '@/components/ContributeSection';
import PurposeSection from '@/components/PurposeSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main>
        <HeroSection />
        <WhatHappenedSection />
        <ReadStoriesSection />
        <BrownGallerySection />
        <ContributeSection />
        <PurposeSection />
      </main>
    </div>
  );
}
