"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * The site used to be one long page, so old links point at /#section.
 * A server redirect cannot see the hash, so this maps each old anchor to the
 * page that now holds that content. #home and #contact still exist on home.
 */
const moved: Record<string, string> = {
  "#projects": "/work",
  "#work": "/work",
  "#it-reports": "/work/airchain#it-reports",
  "#experience": "/about#experience",
  "#community": "/community",
  "#physical-ai": "/physical-ai",
  "#writing": "/writing",
  "#about": "/about",
  "#stack": "/about#stack",
  "#mission": "/about#mission",
  "#side-quests": "/side-quests",
  "#gallery": "/side-quests#gallery",
};

export default function HashRedirect() {
  const router = useRouter();
  useEffect(() => {
    const target = moved[window.location.hash];
    if (target) router.replace(target);
  }, [router]);
  return null;
}
