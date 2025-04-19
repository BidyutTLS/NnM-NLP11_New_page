import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HairTypeSecretSection from "@/components/HairTypeSecretSection";
import NourishmentHighlightSection from "@/components/NourishmentHighlightSection";
import TrustHighlightSection from "@/components/TrustHighlightSection";
import ExpertRecommendationSection from "@/components/ExpertRecommendationSection";
import ClinicalStudySection from "@/components/ClinicalStudySection";
import IngredientsComplex3Section from "@/components/IngredientsComplex3Section";
import HowToConsumeSection from "@/components/HowToConsumeSection";
import TextReviewsSection from "@/components/TextReviewsSection";
import PurchaseOptionsSection from "@/components/PurchaseOptionsSection";
import BangForBuckComparisonSection from "@/components/BangForBuckComparisonSection";
import NailBenefitsSection from "@/components/NailBenefitsSection";
import UrgencyBuyNowSection from "@/components/UrgencyBuyNowSection";
import SafetyAssuranceSection from "@/components/SafetyAssuranceSection";
import FaqSection from "@/components/FaqSection";
import ReferencesSection from "@/components/ReferencesSection";

const NailNManePage = () => {
  return (
    <main className="font-merriweather bg-[#f9f9f9] text-[#2c2c2c]">
      <Header />
      <HeroSection />
      <HairTypeSecretSection />
      <NourishmentHighlightSection />
      <TrustHighlightSection />
      <ExpertRecommendationSection />
      <ClinicalStudySection />
      <IngredientsComplex3Section />
      <HowToConsumeSection />
      <TextReviewsSection />
      <PurchaseOptionsSection />
      <BangForBuckComparisonSection />
      <NailBenefitsSection />
      <UrgencyBuyNowSection />
      <SafetyAssuranceSection />
      <FaqSection />
      <ReferencesSection />
      <Footer />
    </main>
  );
};

export default NailNManePage;
