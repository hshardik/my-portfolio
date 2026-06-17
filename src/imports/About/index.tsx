import imgPhotoJourney from "./aaea3f06c4cb2d8c548236d0dfe63431841d0725.png";
import imgProfile from "./72bb5e9ae0d5f3b9f1db8ff2601711832474eb5c.png";
import imgPhoto from "./79bdc79e6dad841d37f7b655e765059250d1a45a.png";
import imgPhotoExperience from "./b275054f100f3c1cbaaca1019487f4cad1c92839.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-[548px] relative">
      <p className="[word-break:break-word] font-['Road_Rage:Regular',sans-serif] leading-[0] min-w-[548px] not-italic relative shrink-0 text-[#1e1e1e] text-[64px] w-full">
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[64px]">{`About `}</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[64px]">Hardik</span>
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <Frame2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[64px] min-w-[548px] not-italic relative text-[#757575] text-[36px]">{`With 5+ years in design, I've worked on diverse projects, from mobile apps to web platforms, focusing on user-centered designs that are both visually appealing and practical.`}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip py-[64px] relative rounded-[24px] shrink-0 w-full" data-name="Content">
      <Frame />
    </div>
  );
}

function Journey() {
  return (
    <div className="bg-[#fffffe] relative rounded-[16px] shrink-0 w-full" data-name="Journey">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic p-[32px] relative size-full">
          <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1e1e1e] text-[36px] w-full">My Journey</p>
          <div className="font-['Segoe_UI:Regular',sans-serif] leading-[0] relative shrink-0 text-[#757575] text-[20px] w-full whitespace-pre-wrap">
            <p className="leading-[32px] mb-0">I began my career with a degree in Graphic Design from the University of California, Berkeley, where I discovered my love for user experience. Since then, I’ve worked with various startups and established companies, helping them transform their digital presence and improve user engagement.</p>
            <p className="leading-[32px] mb-0">​</p>
            <p className="leading-[32px]">Throughout my career, I’ve been driven by the belief that great design is the result of a deep understanding of both the user and the problem at hand. I specialize in taking complex ideas and translating them into intuitive, easy-to-use interfaces.</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PhotoJourney() {
  return (
    <div className="h-[300px] relative rounded-[16px] shrink-0 w-full" data-name="Photo-Journey">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPhotoJourney} />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-[548px] relative">
      <Journey />
      <PhotoJourney />
    </div>
  );
}

function Profile() {
  return (
    <div className="flex-[1_0_0] h-[845px] min-w-[548px] relative rounded-[16px]" data-name="Profile">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgProfile} />
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="min-w-[inherit] relative size-full" />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Frame3 />
      <Profile />
    </div>
  );
}

function Photo() {
  return (
    <div className="flex-[1_0_0] min-w-[548px] relative rounded-[16px] self-stretch" data-name="Photo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPhoto} />
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="min-w-[inherit] relative size-full" />
      </div>
    </div>
  );
}

function Experience1() {
  return (
    <div className="bg-[#fffffe] relative rounded-[16px] shrink-0 w-full" data-name="Experience">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start not-italic p-[32px] relative size-full">
          <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1e1e1e] text-[36px] w-full">Experience</p>
          <p className="font-['Segoe_UI:Regular',sans-serif] leading-[32px] relative shrink-0 text-[#757575] text-[20px] w-full">Over the years, I’ve collaborated with clients like ShopEase, FinTrack, and Insightly, working on everything from e-commerce platforms to SaaS dashboards. My approach combines creativity with a strong foundation in design principles and user research, ensuring that every project I undertake not only meets but exceeds expectations.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PhotoExperience() {
  return (
    <div className="h-[300px] relative rounded-[16px] shrink-0 w-full" data-name="Photo-Experience">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPhotoExperience} />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-[548px] relative" data-name="Experience">
      <Experience1 />
      <PhotoExperience />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Photo />
      <Experience />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[1120px] pb-[80px] relative shrink-0 w-full">
      <Content />
      <Row />
      <Row1 />
    </div>
  );
}

function Shape() {
  return <div className="absolute bg-[#1e1e1e] content-stretch flex h-[52px] items-center justify-center left-[133px] px-[24px] py-[16px] rounded-[200px] top-[8px] w-[117px]" data-name="Shape" />;
}

function Label() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[200px]" data-name="Label">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Segoe_UI:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[20px] text-center whitespace-nowrap">Home</p>
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[200px]" data-name="Label">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Segoe_UI:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">About</p>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[200px]" data-name="Label">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Segoe_UI:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[20px] text-center whitespace-nowrap">Projects</p>
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[200px]" data-name="Label">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Segoe_UI:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[20px] text-center whitespace-nowrap">Connect</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[10px] items-center pt-[128px] px-[64px] relative size-full" data-name="About">
      <Frame1 />
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-[#f7f7f7] left-[calc(50%+0.5px)] rounded-[67px] top-[24px] w-[509px]" data-name="Header/Desktop">
        <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
          <Shape />
          <Label />
          <Label1 />
          <Label2 />
          <Label3 />
        </div>
        <div aria-hidden className="absolute border-2 border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[67px]" />
      </div>
    </div>
  );
}