import { HoverCard } from "../HoverCard";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgPhotoJourney from "../../../imports/About/WorkPlan.png";
import imgProfile from "../../../imports/About/Hardik_Profile.png";
import imgPhoto from "../../../imports/About/ProductPlanning.png";
import imgPhotoExperience from "../../../imports/About/DesignBooks.png";

export function AboutSection() {
  return (
    <section className="w-full flex flex-col gap-6">

      {/* Hero */}
      <div className="flex flex-wrap gap-6 items-start w-full py-8">
        <div className="flex-1 min-w-[320px]">
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "64px", lineHeight: "1", color: "#1e1e1e" }}>
            <span style={{ fontWeight: 700 }}>About </span>
            <span style={{ fontWeight: 400 }}>Hardik</span>
          </p>
        </div>
        <p className="flex-1 min-w-[300px]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "28px", fontWeight: 400, color: "#757575", lineHeight: "1.6" }}>
          With 3+ years building and managing technical teams, I've worked on diverse projects, from mobile apps to web platforms, focusing on user-centered products that are both visually appealing and practical.
        </p>
      </div>

      {/* Row 1: Journey + Journey photo | Profile */}
      <div className="flex flex-wrap gap-6 items-start w-full">
        {/* Left column */}
        <div className="flex flex-col gap-6 flex-1 min-w-[320px]">
          <HoverCard className="w-full p-8 flex flex-col gap-5">
            <h3 style={{ fontFamily: "'Roboto', sans-serif", fontSize: "32px", fontWeight: 700, color: "#1e1e1e" }}>
              My Journey
            </h3>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", fontWeight: 400, color: "#757575", lineHeight: "1.8" }}>
              I began my career with a degree in Computer Science from the University of Texas, Arlington, where I discovered my love for technology. Since then, I've worked with various startups and established companies, helping them transform their products, features and improve user engagement.
            </p>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", fontWeight: 400, color: "#757575", lineHeight: "1.8" }}>
              Throughout my career, I've been driven by the belief that great products are the result of a deep understanding of both the user and the problem at hand. I specialize in taking complex ideas and translating them into defined prouct roadmaps, managing technical teams, and ensuring successful delivery of innovative solutions.
            </p>
          </HoverCard>

          <HoverCard className="w-full h-[300px] overflow-hidden p-0">
            <ImageWithFallback
              src={imgPhotoJourney}
              alt="Journey photo"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </HoverCard>
        </div>

        {/* Right column — tall profile photo */}
        <HoverCard className="flex-1 min-w-[320px] h-[580px] overflow-hidden p-0">
          <ImageWithFallback
            src={imgProfile}
            alt="Hardik profile"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </HoverCard>
      </div>

      {/* Row 2: Photo | Experience + Experience photo */}
      <div className="flex flex-wrap gap-6 items-start w-full">
        {/* Left — landscape photo */}
        <HoverCard className="flex-1 min-w-[320px] h-[580px] overflow-hidden p-0">
          <ImageWithFallback
            src={imgPhoto}
            alt="Design work photo"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </HoverCard>

        {/* Right column */}
        <div className="flex flex-col gap-6 flex-1 min-w-[320px]">
          <HoverCard className="w-full p-8 flex flex-col gap-5">
            <h3 style={{ fontFamily: "'Roboto', sans-serif", fontSize: "32px", fontWeight: 700, color: "#1e1e1e" }}>
              Experience
            </h3>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", fontWeight: 400, color: "#757575", lineHeight: "1.8" }}>
              Over the years, I've worked with Amazon, Swivu, and CodePath, working on everything from conversational AI, to ed-tech, SaaS start-ups. My approach combines creativity with a strong foundation in first principles technical thinking, sytem architecture, and user research, ensuring that every project I undertake not only meets but exceeds expectations.
            </p>
          </HoverCard>

          <HoverCard className="w-full h-[300px] overflow-hidden p-0">
            <ImageWithFallback
              src={imgPhotoExperience}
              alt="Experience photo"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </HoverCard>
        </div>
      </div>

    </section>
  );
}
