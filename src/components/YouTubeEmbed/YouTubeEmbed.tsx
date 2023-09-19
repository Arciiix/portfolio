"use client";

import useWindowDimensions from "@/hooks/ui/useWindowDimensions";

interface YouTubeEmbedProps {
  title: string;
  url: string;
}

export default function YouTubeEmbed({ url, title }: YouTubeEmbedProps) {
  const { innerWidth } = useWindowDimensions();

  return (
    <iframe
      className="mx-auto"
      width={innerWidth * 0.8 + "px"}
      height={(innerWidth * 0.8 * 9) / 16 + "px"}
      src={url}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  );
}
