'use client';

import React from "react";

import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";
import HairTypeSecretSection from "@/components/HairTypeSecretSection.js";
import NourishmentHighlightSection from "@/components/NourishmentHighlightSection.js";
import TrustHighlightSection from "@/components/TrustHighlightSection.js";
import ExpertRecommendationSection from "@/components/ExpertRecommendationSection.js";
import ClinicalStudySection from "@/components/ClinicalStudySection.js";
import IngredientsComplex3Section from "@/components/IngredientsComplex3Section.js";
import HowToConsumeSection from "@/components/HowToConsumeSection.js";
import TextReviews from "@/components/TextReviews.js";
import PurchaseOptionsSection from "@/components/PurchaseOptionsSection.js";
import ComparisonTableSection from "@/components/ComparisonTableSection.js";
import NailsBenefitsSection from "@/components/NailsBenefitsSection.js";
import SmartDealSection from "@/components/SmartDealSection.js";
import SafetyQualitySection from "@/components/SafetyQualitySection.js";
import FAQSection from "@/components/FAQSection.js";
import ReferencesSection from "@/components/ReferencesSection.js";

const NailNManePage = () => {
  return (
    <main className="font-merriweather bg-[#f9f9f9] text-[#2c2c2c]">
      <Header />
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
