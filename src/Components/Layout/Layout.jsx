import { Outlet } from 'react-router-dom'
import SwitchTheme from '../SwitchTheme/SwitchTheme'
import { FloatingDock } from '../FloatingDock/FloatingDock'
import {
  IconHome,
  IconUser,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedinFilled,
  IconFolder,
} from "@tabler/icons-react";


const dockItems = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "/",
  },
  {
    title: "About",
    icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "/about",
  },
  {
    title: "Projects",
    icon: <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "/myWorks",
  },
  {
    title: "Contact",
    icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "/contact",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://github.com/anber-alaa",
  },
  {
    title: "Linkedin",
    icon: <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://www.linkedin.com/in/anber-alaa-281626336/",
  },
];


export default function Layout() {
    return (
        <>
        <Outlet/>
        <SwitchTheme/>
        <FloatingDock
            items={dockItems}
            desktopClassName="shadow-2xl border border-neutral-200 dark:border-neutral-800 relative bottom-10"
            mobileClassName=""
            />
        </>
    )
}
