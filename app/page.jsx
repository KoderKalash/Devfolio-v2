import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { LatestWork } from "@/components/sections/latest-work";
import { StatusCard } from "@/components/sections/status-card";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />

      <main className="px-4 md:px-16 py-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: Location & Status */}
          <div className="space-y-4">
            <StatusCard />
          </div>

          {/* Center: About */}
          <div className="col-span-1 md:col-span-2">
            <AboutSection />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Experience */}
          <div className="md:col-span-1">
            <ExperienceSection />
          </div>

          {/* Projects */}
          <div className="md:col-span-2">
            <ProjectsSection />
          </div>
        </div>

        {/* Latest Work */}
        <LatestWork />
      </main>

      <Footer />
    </div>
  );
}
