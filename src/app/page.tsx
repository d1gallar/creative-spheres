/* eslint-disable @next/next/no-img-element */
import LandingHeroSection from "@/components/LandingHero";
import ImageSection from "@/components/ImageSection";
import LandingAboutUsSection from "@/components/LandingAboutUs";
import CompanyBenefitsSection from "@/components/CompanyBenefits";
import ProvidedServicesSection from "@/components/ProvidedServices";
import LandingContact from "@/components/LandingContact";
import LandingProjectsSection from "@/components/LandingProjects";

export default function Home() {
  return (
    <div className="w-full h-full">
      <LandingHeroSection />
      <ImageSection>
        <img
          src="/LandingImage.jpg"
          alt="Man working at a studio"
          className="w-full h-auto"
        />
      </ImageSection>
      <LandingAboutUsSection />
      <CompanyBenefitsSection />
      <ProvidedServicesSection />
      <LandingProjectsSection />
      <LandingContact />
    </div>
  );
}
