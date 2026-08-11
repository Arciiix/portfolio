interface YouTubeEmbedProps {
  title: string;
  url: string;
}

export default function YouTubeEmbed({ url, title }: YouTubeEmbedProps) {
  return (
    <div className="glass-panel mx-auto w-full max-w-4xl overflow-hidden rounded-[1.75rem] p-2 md:p-3">
      <div className="relative w-full overflow-hidden rounded-[1.25rem] bg-black pt-[56.25%]">
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  );
}
