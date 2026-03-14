import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/landing/Hero"
import { ValueProps } from "@/components/landing/ValueProps"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { WhyUs } from "@/components/landing/WhyUs"
import { CTA } from "@/components/landing/CTA"
import { ServicesPreview } from "@/components/landing/ServicePreview"
import { FAQSection } from "@/components/landing/FAQSection"


export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <WhyUs />
      <ServicesPreview />
      <CTA />
      <FAQSection />
      <Footer />
    </>
  )
}
