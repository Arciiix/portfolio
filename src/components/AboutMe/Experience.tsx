import React, { ReactNode } from "react";

type ExperienceProps = {
  title: ReactNode;
  dates: ReactNode;
  description: ReactNode;
};

export default function Experience({
  title,
  dates,
  description,
}: ExperienceProps) {
  return (
    <div className="mb-10 ml-6">
      <h3 className="flex items-center mb-1 text-lg font-semibold text-teal-400">
        {title}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
        {dates}
      </time>
      <p className="mb-4 text-base font-normal text-gray-200">{description}</p>
    </div>
  );
}
