import React from 'react';
import { useMotionValue } from "framer-motion";
import DockItem from "./DockItem";

const apps = [
    {
      id: "launchpad",
      title: "Launchpad",
      desktop: false,
      img: "/img/icons/launchpad.png",
    //   link: 'https://github.com/Doctor-DC'
    },
    {
        id: "bear",
        title: "Bear",
        desktop: false,
        img: "/img/icons/bear.png",
        // link: 'https://github.com/Doctor-DC'
    },
    {
        id: "safari",
        title: "Safari",
        desktop: false,
        img: "/img/icons/safari.png",
    },
    {
        id: "vscode",
        title: "Vscode",
        desktop: false,
        img: "/img/icons/vscode.png",
    },
    {
        id: "terminal",
        title: "Terminal",
        desktop: false,
        img: "/img/icons/terminal.png",
    },
    {
        id: "github",
        title: "Github",
        desktop: false,
        img: "/img/icons/github.png",
    },
    {
        id: "facetime",
        title: "Facetime",
        desktop: false,
        img: "/img/icons/facetime.png",
        link: 'https://github.com/Doctor-DC'
    },
]

interface DockProps {
  open?: (id: string) => void;
  showApps?: {
    [key: string]: boolean;
  };
  showLaunchpad?: boolean;
  toggleLaunchpad?: (target: boolean) => void;
  hide?: boolean;
}

export default function Dock({
  open,
  showApps,
  showLaunchpad,
  toggleLaunchpad,
  hide
}: DockProps) {
  const dockSize = 50
  const dockMag = 2

  const openApp = (id: string) => {
    if (id === "launchpad") toggleLaunchpad(!showLaunchpad);
    else {
      toggleLaunchpad(false);
    //   open(id);
    }
  };

  const mouseX = useMotionValue<number | null>(null);

  return (
    <div
      className={`dock w-full sm:w-max fixed left-0 right-0 mx-auto bottom-1 ${
        hide ? "z-0" : "z-50"
      } overflow-x-scroll sm:overflow-x-visible`}
    >
      <ul
        className="mx-auto w-max px-2 space-x-2 flex backdrop-blur-2xl c-border-400/40 c-bg-white/20"
        border="1 rounded-none sm:rounded-xl"
        onMouseMove={(e) => mouseX.set(e.nativeEvent.x)}
        onMouseLeave={() => mouseX.set(null)}
        style={{
          height: `${(dockSize as number) + 15}px`
        }}
      >
        {apps.map((app) => (
          <DockItem
            key={`dock-${app.id}`}
            id={app.id}
            title={app.title}
            img={app.img}
            mouseX={mouseX}
            desktop={app.desktop}
            openApp={openApp}
            isOpen={app.desktop && showApps[app.id]}
            link={app.link}
            dockSize={dockSize as number}
            dockMag={dockMag as number}
          />
        ))}
      </ul>
    </div>
  );
}
