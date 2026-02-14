'use client'

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ValueProposition from '@/components/value-proposition'
import HowItWorks from '@/components/how-it-works'
import FeaturesSection from '@/components/features-section'
import VaultShowcase from '@/components/vault-showcase'
import PricingSection from '@/components/pricing-section'
import RoadmapSection from '@/components/roadmap-section'
import FAQSection from '@/components/faq-section'
import WhoIsItFor from '@/components/who-is-it-for'
import BeforeVsAfter from '@/components/before-vs-after'
import WhyPeopleUse from '@/components/why-people-use'
import EmotionalHook from '@/components/emotional-hook'
import NotForYou from '@/components/not-for-you'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <HowItWorks />
        <FeaturesSection />
        <VaultShowcase />
        <PricingSection />
        <RoadmapSection />
        <FAQSection />
        <WhoIsItFor />
        <BeforeVsAfter />
        <WhyPeopleUse />
        <EmotionalHook />
        <NotForYou />
      </main>
      <Footer />
    </div>
  )
}
