import Image from "next/image";
import Link from "next/link";

import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

import SidebarItem from "./SidebarItem";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

type MenuItem = {
  label: string;
  href: string;
  iconSrc: string;
};

const Sidebar = ({ className }: Props) => {
  const menuItems: Array<MenuItem> = [
    { label: "Learn", href: "/learn", iconSrc: "" },
    { label: "Leaderboard", href: "/leaderboard", iconSrc: "" },
    { label: "Quests", href: "/quests", iconSrc: "" },
    { label: "Shop", href: "/shop", iconSrc: "" },
  ];
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href={"/learn"}>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src={"./images/mascot.svg"}
            alt={"logo"}
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        {menuItems.map((item: MenuItem) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
