"use client";

import { useEffect, useState } from "react";
import { BenefitsSection } from "../components/BenefitsSection";
import { ChatWidget } from "../components/ChatWidget";
import { ContactSection } from "../components/ContactSection";
import { GallerySection } from "../components/GallerySection";
import { HeroSection } from "../components/HeroSection";
import { InfoSection } from "../components/InfoSection";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [submitState, setSubmitState] = useState("idle");

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeMenu = () => setNavOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setSubmitState("sending");

    window.setTimeout(() => {
      event.currentTarget.reset();
      setSubmitState("done");

      window.setTimeout(() => {
        setSubmitState("idle");
      }, 2200);
    }, 1200);
  };

  const submitLabel =
    submitState === "sending"
      ? "Odesila se..."
      : submitState === "done"
        ? "Zprava uspesne odeslana"
        : "Odeslat zpravu";

  return (
    <>
      <div className="site-bg" aria-hidden="true" />

      <SiteHeader
        navOpen={navOpen}
        onToggle={() => setNavOpen((current) => !current)}
        onNavigate={() => setNavOpen(false)}
      />

      <main>
        <HeroSection />
        <InfoSection />
        <GallerySection />
        <BenefitsSection />
        <ContactSection
          submitLabel={submitLabel}
          submitState={submitState}
          onSubmit={handleContactSubmit}
        />
      </main>

      <SiteFooter />
      <ChatWidget
        chatOpen={chatOpen}
        onToggle={() => setChatOpen((current) => !current)}
        onClose={() => setChatOpen(false)}
      />
    </>
  );
}
