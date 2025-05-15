import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { LatestWork } from "@/components/sections/latest-work";
import { StatusCard } from "@/components/sections/status-card";
import { Footer } from "@/components/layout/footer";
import { LocationMap } from "@/components/sections/locationMap";
import 'leaflet/dist/leaflet.css';
import '../app/globals.css';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />

      <main className="px-4 md:px-36 py-10 space-y-10">
        {/* Top Section: Location, Status, About */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Location Card */}
          <section className="bg-neutral-900 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <LocationMap />
          </section>

          {/* Status Card */}
          <div>
            <StatusCard />
          </div>

          {/* About Section */}
          <div>
            <AboutSection />
          </div>
        </div>

        {/* Experience & Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Experience */}
          <div>
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
