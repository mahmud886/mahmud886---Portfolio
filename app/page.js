import Profile from "@/components/MainContent/Profile";
import About from "@/components/MainContent/About";
import Projects from "@/components/MainContent/Projects";
import Testimonials from "@/components/MainContent/Testimonials";
import Skills from "@/components/MainContent/Skills";
import WorkExperiences from "@/components/MainContent/WorkExperiences";
import Education from "@/components/MainContent/Education";
import Articles from "@/components/MainContent/Articles";
import Subscribe from "@/components/MainContent/Subscribe";

export default function Home() {
  return (
    <div className="w-full max-w-3xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
      {/* Profile */}
      <Profile/>
      {/* End Profile */}
      {/* About */}
      <About/>
      {/* End About */}

      {/* Skills */}
      <Skills/>
      {/* End Skills */}
      {/* Work Experience */}
      <WorkExperiences/>
      {/* End Work Experience */}
      {/* Education */}
      {/* Projects */}
      <Projects/>
      {/* End Projects */}
      {/* Testimonials */}
      <Testimonials/>
      {/* End Testimonials */}
      <Education/>
      {/* End Education */}
      {/* Articles */}
      <Articles/>
      {/* End Articles */}
      {/* Subscribe */}
      <Subscribe/>
      {/* End Subscribe */}
    </div>
  );
}
