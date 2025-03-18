import React from "react";
import "./App.css";
import Dock from "./blocks/Components/Dock/Dock";
import Waves from "./blocks/Backgrounds/Waves/Waves";
import BlurText from "./blocks/TextAnimations/BlurText/BlurText";
import { VscHome, VscProject } from "react-icons/vsc";
import { SiAboutdotme } from "react-icons/si";
import { FaCode, FaBook } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import ASCIIText from "./blocks/TextAnimations/ASCIIText/ASCIIText";
import TypedText from "./blocks/typed";
import TiltedCard from "./blocks/Components/TiltedCard/TiltedCard";
import ScrollFloat from "./blocks/TextAnimations/ScrollFloat/ScrollFloat";
import ScrollReveal from "./blocks/TextAnimations/ScrollReveal/ScrollReveal";
import CircularGallery from "./blocks/Components/CircularGallery/CircularGallery";
import FlowingMenu from "./blocks/Components/FlowingMenu/FlowingMenu";
import SpotlightCard from './blocks/Components/SpotlightCard/SpotlightCard';
import InfiniteMenu  from './blocks/Components/InfiniteMenu/InfiniteMenu';







function App() {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => scrollToSection("#home"),
    },
    {
      icon: <SiAboutdotme size={40} />,
      label: "About",
      onClick: () => scrollToSection("#about"),
    },
    {
      icon: <FaCode size={18} />,
      label: "Tech Stack",
      onClick: () => scrollToSection("#tech"),
    },
    {
      icon: <FaBook size={18} />,
      label: "Education & Experience",
      onClick: () => scrollToSection("#education"),
    },
    {
      icon: <VscProject size={18} />,
      label: "Portfolio",
      onClick: () => scrollToSection("#portfolio"),
    },
    {
      icon: <MdLocalPhone size={18} />,
      label: "Contact",
      onClick: () => scrollToSection("#contact"),
    },
  ];

  const portfolioItems = [
    {
      image: 'https://media.licdn.com/dms/image/v2/D4D2DAQH3iD0Sr5lfoA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1727110298979?e=1742824800&v=beta&t=fEdAqh6jU7B76DFvxoThg59YDHqsQzuJ4FgP_V48Jno',
      link: 'https://gitlab.com/team-14-aac',
      title: 'Bicara AAC',
      description: ''
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D4E2DAQFWlNm4-bA4gQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722953519268?e=1742824800&v=beta&t=EoXT9BaeiXLhvb06PKDOUcBX8GKsgroDarXV4q_fPx4',
      link: 'https://apps.apple.com/id/app/powercals/id6550904319',
      title: 'PowerCals',
      description: ''
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/D562DAQFVJZobRlCjAQ/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1720106787797?e=1742824800&v=beta&t=aFGFctP-PSK1njvZAk43HzkFFqSeAMpl2FvESE5L0to',
      link: 'https://github.com/tandyys/MiniChallenge2-MonkStudio',
      title: 'Item 3',
      description: 'Pawpals'
    },
    {
      image: 'https://christiangunawanportfolio.netlify.app/Assets/Screenshot_5.png',
      link: 'https://adex-legends-christian-gunawan-2540115521.netlify.app/',
      title: 'Adex Legends',
      description: ''
    },
    {
      image: 'https://christiangunawanportfolio.netlify.app/Assets/Screenshot_8.png',
      link: 'https://www.figma.com/proto/HuDgSnlEMSAkRbY9BxZ9eW/Kelana-App?node-id=159-2825&scaling=min-zoom&page-id=159%3A1110&starting-point-node-id=159%3A2825&show-proto-sidebar=1',
      title: 'Kelana Web UI',
      description: ''
    },

    {
      image: 'https://christiangunawanportfolio.netlify.app/Assets/Screenshot_9.png',
      link: 'https://www.figma.com/proto/HuDgSnlEMSAkRbY9BxZ9eW/Kelana-App?node-id=36-1482&scaling=min-zoom&page-id=32%3A300&starting-point-node-id=36%3A1482',
      title: 'Kelana Mobile App UI',
      description: ''
    },

    {
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQFQ46sNB9UhCw/feedshare-shrink_1280/B4EZS2BtUKHoAo-/0/1738220691292?e=1745452800&v=beta&t=8QJsYEq21j-lY4Mue9SVztGDZArvuFAo8_Un_pEysCo',
      link: 'https://apps.apple.com/id/app/hanvest/id6736584037',
      title: 'Hanvest',
      description: ''
    },

    {
      image: 'https://christiangunawanportfolio.netlify.app/Assets/Screenshot_9.png',
      link: 'https://piscis-aquarium-christian-gunawan-2540115521.netlify.app/',
      title: 'Piscis Aquarium',
      description: ''
    }
  ];npm 


  const demoItems = [
    {
      link: "#",
      text: "SMA TARAKANITA",
      image: "https://ppdb.tarakanitatgr.or.id/image/gedungsmacr.jpg",
      year: "Math Science",
    },
    {
      link: "#",
      text: "BINA NUSANTARA",
      image:
        "https://binus.ac.id/wp-content/uploads/2019/08/WhatsApp-Image-2020-09-24-at-3.47.56-PM.jpeg",
      year: "Computer Science ",
    },
    {
      link: "#",
      text: "BNCC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9b9lVVFJtYRrjU1Y_QD1xYnc-nYvzY3lBaA&s",
      year: "UI UX",
    },
    {
      link: "#",
      text: "HIMTI",
      image:
        "https://student-activity.binus.ac.id/himti/wp-content/uploads/sites/13/2022/08/Banner-HIMTI-2022.gif",
      year: "Creative N Design",
    },
    {
      link: "#",
      text: "Apple Developer Academy",
      image:
        "https://developeracademy.apps.binus.ac.id/wp-content/uploads/2024/04/LockupLogo.png",
      year: "iOS Developer",
    },
  ];

  return (
    <div className="app-container">
      <Waves
        lineColor="#fff"
        backgroundColor="rgba(255, 255, 255, 0)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={50}
      />

      <div id="home" className="home">
        <div className="ASCIIText-container">
          <ASCIIText text="HI!" enableWaves={true} asciiFontSize={8} />
        </div>
        <div className="welcome-text-container">
          <div className="name-container">
            <TiltedCard
              imageSrc="https://media.licdn.com/dms/image/v2/D4D03AQFaPx2vNoDhoQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727110079400?e=1747872000&v=beta&t=oFXVap_50ixoOPlMzr1Tflpdd5QBYPacG9wODPYGr7k"
              altText="Profile Picture"
              captionText="Profile Picture"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
            <div className="blurtext-container">
              <BlurText
                text="I'm Christian Gunawan"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
                style={{ padding: 0, margin: 0 }}
              />
            </div>
          </div>

          <div className="branding-container">
            <TypedText />
          </div>
        </div>
      </div>

      <div id="about" className="about">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.1}
        >
          About Me
        </ScrollFloat>
        <div className="scroll-reveal-container">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={8}
        >
          I am a dedicated undergraduate student pursuing a major in computer
          science with a minor in software engineering and a mobile developer at
          Apple Developer Academy @ BINUS, blending my passion for technology
          with a strong academic foundation. My coursework has equipped me with
          a comprehensive understanding of computer science concepts and the
          practical skills needed for software development. With a desire to
          create innovative solutions and contribute to the ever-evolving tech
          landscape, I am enthusiastic about exploring opportunities in the
          industry and collaborating with like-minded professionals.
        </ScrollReveal>
        </div>
      </div>
      <div className="tech" id="tech">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.1}
        >
          Tech Stack
        </ScrollFloat>

        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </div>

      <div className="education" id="education">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.1}
        >
          Education & Experience
        </ScrollFloat>
        <div style={{ height: "600px", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>
      </div>

      <div className="portfolio" id="portfolio">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.1}
        >
          Portfolio
        </ScrollFloat>
        </div>

        <div style={{ height: '800px', position: 'relative' }}>
  <InfiniteMenu items={portfolioItems}/>
</div>
      


      <div className="contact" id="contact">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.1}
        >
          Contact Person
        </ScrollFloat>

        
        <div class="card-container">
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div class="frost-card">
            <div class="card-title">Explore My CV</div>
            <div class="card-description">Click the button below to Explore my CV.</div>
            <a href="https://drive.google.com/file/d/1YxrguP3zgHpQS1p5F8rMxbFmlqgROmjQ/view?usp=sharing" class="card-button">Discover Here</a>
        </div>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div class="frost-card">
            <div class="card-title">Explore My linkedin</div>
            <div class="card-description">Click the button below to Explore my linkedin.</div>
            <a href="https://www.linkedin.com/in/christian404/" class="card-button">Explore Here</a>
        </div>
        </SpotlightCard>
    </div>


      </div>

      <Dock
        items={items}
        panelHeight={70}
        baseItemSize={50}
        magnification={80}
      />
    </div>
  );
}

export default App;
