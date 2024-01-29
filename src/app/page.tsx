/* eslint-disable @next/next/no-img-element */
import LandingHeroSection from "@/components/LandingHero";
import ImageSection from "@/components/ImageSection";
import LandingAboutUsSection from "@/components/LandingAboutUs";
import CompanyBenefitsSection from "@/components/CompanyBenefits";
import ProvidedServicesSection from "@/components/ProvidedServices";
import LandingContact from "@/components/LandingContact";
import LandingProjectsSection from "@/components/LandingProjects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <LandingHeroSection />
      <ImageSection>
        <Image
          src="/LandingImage.jpg"
          width="1440"
          height="626"
          fetchPriority="high"
          priority={true}
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
