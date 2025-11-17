import Hero from "@/components/hero";
import TrustedBy from "@/components/trustedby";
import Services from "@/components/services";
import VisualHighlights from "@/components/visualhighlights";
import HowWeWork from "@/components/howweeork";
import CaseStudies from "@/components/casestudies";
import TestimonialCarousel from "@/components/testonomial";
import Faqs from "@/components/faqs";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <VisualHighlights />
      <HowWeWork />
      <CaseStudies />
      <TestimonialCarousel />
      <Faqs />
      <CTA />
    </>
  );
}
