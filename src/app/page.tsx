import { headers } from "next/headers";
import StarfieldBackground from "@/components/StarfieldBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { currentRole, experienceLabel } from "@/data/experienceYears";

export default async function Home() {
  // Derive the deploy host so project demo subdomains resolve correctly
  // (e.g. krishna.lol → x.krishna.lol) without hardcoding the domain.
  const headerList = await headers();
  const rawHost = headerList.get("host") ?? "krishna.lol";
  // Strip any leading subdomain port and "www." for clean subdomain links.
  const host = rawHost.replace(/^www\./, "");

  return (
    <>
      <StarfieldBackground />
      <Navbar />
      <main>
        {/* Computed per request so it ticks over on its own as time passes. */}
        <Hero experience={experienceLabel()} currentRole={currentRole()} />
        <Skills />
        <Experience />
        <Projects host={host} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
