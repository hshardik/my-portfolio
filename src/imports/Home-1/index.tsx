import svgPaths from "./svg-y9hmecisye";
import imgPhoto1 from "./36c5f879e8c365a9147f0bf71f55389924110dfb.png";
import imgThumbnail from "./5144fb24ffd2c1f846d18b05dad5505a34bbaf58.png";
import imgFrame1321315902 from "./d4a7e0f1da594e1f45f8f672f344280bad4db4f7.png";

function Hero() {
  return (
    <div className="[word-break:break-word] content-start flex flex-wrap gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Hero">
      <p className="flex-[1_0_0] font-['Numans:Regular',sans-serif] min-w-[548px] relative text-[#1e1e1e] text-[64px]">
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Hi, I’m
        </span>
        <span className="font-['Roboto:Light',sans-serif] font-light leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` `}</span>
        <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Hardik
        </span>
      </p>
      <p className="flex-[1_0_0] font-['Souliyo_Unicode:Regular',sans-serif] min-w-[548px] relative text-[#757575] text-[36px]">
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          a
        </span>
        <span className="font-['Roboto:Light',sans-serif] font-light leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` `}</span>
        <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          UI/UX Designer
        </span>
        <span className="font-['Roboto:Light',sans-serif] font-light leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          based in
        </span>
        <span className="font-['Roboto:Light',sans-serif] font-light leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` `}</span>
        <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Los Angeles
        </span>
        <span className="font-['Roboto:Light',sans-serif] font-light leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`. `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`With over `}</span>
        <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          3 years of experience
        </span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[64px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          , I specialize in creating user-friendly digital products that solve real-world problems.
        </span>
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip py-[64px] relative rounded-[24px] shrink-0 w-full" data-name="Content">
      <Hero />
    </div>
  );
}

function AboutMe() {
  return (
    <div className="bg-[#fffffe] flex-[1_0_0] min-w-[706px] relative rounded-[16px]" data-name="About Me">
      <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] not-italic p-[32px] relative size-full">
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Segoe_UI:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#1e1e1e] text-[36px] w-full">About Me</p>
          <div className="font-['Segoe_UI:Regular',sans-serif] leading-[0] relative shrink-0 text-[#757575] text-[20px] w-full whitespace-pre-wrap">
            <p className="leading-[32px] mb-0">{`I’m a UI/UX designer with a passion for solving complex problems through intuitive design. My journey started 5 years ago, and since then, I've worked with startups and established brands to bring their visions to life.`}</p>
            <p className="leading-[32px] mb-0">​</p>
            <p className="leading-[32px]">{`Over the years, I've had the privilege of working with companies like ShopEase, FinTrack, and Insightly, focusing on user-centric design solutions.`}</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Photo() {
  return (
    <div className="flex-[1_0_0] h-[369px] min-h-[369px] min-w-[356px] relative rounded-[16px]" data-name="Photo-1">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPhoto1} />
      <div className="flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="min-h-[inherit] min-w-[inherit] relative size-full" />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <AboutMe />
      <Photo />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[36px] text-ellipsis whitespace-nowrap">ShopEase</p>
      <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Button / Icon">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-2.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
              <path d={svgPaths.p1b259a00} fill="var(--fill-0, white)" id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.18%_33.48%_33.48%_33.18%]" data-name="Icon">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M10 2L18 10L10 18M18 10H2" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[12px] w-full" data-name="Thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[#eee4ff] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgThumbnail} />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Mobile</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Application</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">E-Commerce</p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Tags">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px relative w-full" data-name="Content">
      <Thumbnail />
      <Tags />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[36px] text-ellipsis whitespace-nowrap">Insightly</p>
      <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Button / Icon">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-2.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
              <path d={svgPaths.p1b259a00} fill="var(--fill-0, white)" id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.18%_33.48%_33.48%_33.18%]" data-name="Icon">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M10 2L18 10L10 18M18 10H2" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Web 3.0</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">HTML</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Dashboard</p>
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Tags">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[64px] w-full">💡</p>
      <p className="[word-break:break-word] font-['Segoe_UI:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#757575] text-[20px] w-full">Developed a SaaS-based analytics dashboard for Insightly, focusing on providing actionable insights through a user-centric design. The dashboard improved data accessibility and was adopted by 80% of users within the first three months.</p>
      <Tags1 />
    </div>
  );
}

function Projects() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="Projects-1">
      <div className="bg-[#fffffe] flex-[1_0_0] h-[424px] min-w-[548px] relative rounded-[16px]" data-name="Animation / Content">
        <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] p-[32px] relative size-full">
            <Title />
            <Content1 />
          </div>
        </div>
        <div aria-hidden className="absolute border-2 border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-[#fffffe] flex-[1_0_0] min-w-[548px] relative rounded-[16px]" data-name="Animation / Content">
        <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] p-[32px] relative size-full">
            <Title1 />
            <Content2 />
          </div>
        </div>
        <div aria-hidden className="absolute border-2 border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[36px] text-ellipsis whitespace-nowrap">FinTrack</p>
      <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Button / Icon">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-2.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
              <path d={svgPaths.p1b259a00} fill="var(--fill-0, white)" id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.18%_33.48%_33.48%_33.18%]" data-name="Icon">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M10 2L18 10L10 18M18 10H2" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Web</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Case Study</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Finance</p>
    </div>
  );
}

function Tags2() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Tags">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[64px] w-full">️🌱</p>
      <p className="[word-break:break-word] font-['Segoe_UI:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#757575] text-[20px] w-full">{`Designed and developed the UI/UX for FinTrack, a mobile banking application focused on financial management. The app's intuitive interface led to a 30% increase in daily active users and improved user satisfaction scores by 22%.`}</p>
      <Tags2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-w-px not-italic overflow-hidden relative text-[#1e1e1e] text-[36px] text-ellipsis whitespace-nowrap">ConnectMe</p>
      <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Button / Icon">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-2.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
              <path d={svgPaths.p1b259a00} fill="var(--fill-0, white)" id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.18%_33.48%_33.48%_33.18%]" data-name="Icon">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M10 2L18 10L10 18M18 10H2" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[12px] w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame1321315902} />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Mobile</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Application</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[80px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Segoe_UI:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Social</p>
    </div>
  );
}

function Tags3() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Tags">
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px relative w-full" data-name="Content">
      <Frame />
      <Tags3 />
    </div>
  );
}

function Projects1() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="Projects-2">
      <div className="bg-[#fffffe] flex-[1_0_0] min-w-[464px] relative rounded-[16px]" data-name="Animation / Content">
        <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center justify-center min-w-[inherit] p-[32px] relative size-full">
            <Title2 />
            <Content3 />
          </div>
        </div>
        <div aria-hidden className="absolute border-2 border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-[#fffffe] flex-[1_0_0] h-[456px] min-w-[632px] relative rounded-[16px]" data-name="Animation / Content">
        <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center justify-center min-w-[inherit] p-[32px] relative size-full">
            <Title3 />
            <Content4 />
          </div>
        </div>
        <div aria-hidden className="absolute border-2 border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[1120px] pb-[80px] relative shrink-0 w-full">
      <Content />
      <Row />
      <Projects />
      <Projects1 />
    </div>
  );
}

function Shape() {
  return <div className="absolute bg-[#1e1e1e] content-stretch flex h-[52px] items-center justify-center left-[8px] px-[24px] py-[16px] rounded-[200px] top-[8px] w-[117px]" data-name="Shape" />;
}

function Label() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[200px]" data-name="Label">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Segoe_UI:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">Home</p>
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
          <p className="[word-break:break-word] font-['Segoe_UI:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[20px] text-center whitespace-nowrap">About</p>
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

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[24px] items-center pt-[128px] px-[64px] relative size-full" data-name="Home">
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