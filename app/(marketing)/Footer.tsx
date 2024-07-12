import React from "react";
import Flag from "react-world-flags";

import { Button } from "@/components/ui/button";

interface Language {
  code: string;
  name: string;
}

export const Footer = () => {
  const languages: Array<Language> = [
    { name: "Croatian", code: "hr" },
    { name: "Spanish", code: "es" },
    { name: "French", code: "fr" },
    // { name: "English", code: "us" },
    { name: "Italian", code: "it" },
    { name: "Japanese", code: "jp" },
  ];
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg max-auto flex items-center justify-evenly h-full">
        {languages.map(
          (language, index): React.ReactNode => (
            <Button
              key={index}
              className="w-full"
              size={"lg"}
              variant={"ghost"}
            >
              <div className="w-[40px] h-[32px] mr-4 rounded-md">
                <Flag code={language.code} />
              </div>
              {language.name}
            </Button>
          )
        )}
      </div>
    </footer>
  );
};
