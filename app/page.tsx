'use client';

import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import ClinicalResultsSection from "@/components/ClinicalResultsSection";
import EmotionalIntroSection from "@/components/EmotionalIntroSection";
import WhatIsAyurvedaSection from "@/components/WhatIsAyurvedaSection";
import HairHealthClinicalSection from "@/components/HairHealthClinicalSection";
import NailNManeProductSection from "@/components/NailNManeProductSection";
import PractitionerRecommendationSection from "@/components/PractitionerRecommendationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HairTypeSecretSection from "@/components/HairTypeSecretSection";
import NourishmentHighlightSection from "@/components/NourishmentHighlightSection";
import TrustHighlightSection from "@/components/TrustHighlightSection";
import ExpertRecommendationSection from "@/components/ExpertRecommendationSection";
import ClinicalStudySection from "@/components/ClinicalStudySection";
import IngredientsComplex3Section from "@/components/IngredientsComplex3Section";
import HowToConsumeSection from "@/components/HowToConsumeSection";
import TextReviews from "@/components/TextReviews";
import PurchaseOptionsSection from "@/components/PurchaseOptionsSection";
import ComparisonTableSection from "@/components/ComparisonTableSection";
import NailsBenefitsSection from "@/components/NailsBenefitsSection";
import SmartDealSection from "@/components/SmartDealSection";
import SafetyQualitySection from "@/components/SafetyQualitySection";
import FAQSection from "@/components/FAQSection";
import ReferencesSection from "@/components/ReferencesSection";

const NailNManePage = () => {
  return (
    <main className="font-merriweather bg-[#f9f9f9] text-[#2c2c2c]">
      <Header />
      <ClinicalResultsSection />
      <EmotionalIntroSection />
      <WhatIsAyurvedaSection />
      <HairHealthClinicalSection />
      <NailNManeProductSection />
      <PractitionerRecommendationSection />
      <TestimonialsSection />
      <HairTypeSecretSection />
      <NourishmentHighlightSection />
      <TrustHighlightSection />
      <ExpertRecommendationSection />
      <ClinicalStudySection />
      <IngredientsComplex3Section />
      <HowToConsumeSection />
      <TextReviews />
      <PurchaseOptionsSection />
      <ComparisonTableSection />
      <NailsBenefitsSection />
      <SmartDealSection />
      <SafetyQualitySection />
      <FAQSection />
      <ReferencesSection />
      <Footer />
    </main>
  );
};

export default NailNManePage;
