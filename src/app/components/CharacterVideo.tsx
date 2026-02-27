const image_d50caf71142aae432531d28676918ccac81e85f8 =
  "https://via.placeholder.com/200x200.png?text=AI+Character";
import { useState } from "react";

interface CharacterVideoProps {
  videoSrc: string;
  imageSrc: string;
}

export default function CharacterVideo({ videoSrc, imageSrc }: CharacterVideoProps) {
  const [useVideo, setUseVideo] = useState(true);

  return (
    <div className="relative size-full overflow-visible">
      {useVideo ? (
        <video 
          autoPlay 
          className="absolute h-full left-1/2 -translate-x-1/2 max-w-none top-0 w-full object-contain" 
          controlsList="nodownload" 
          loop 
          muted
          playsInline
          onError={() => setUseVideo(false)}
        >
          <source src={videoSrc} />
        </video>
      ) : (
        <img 
          alt="AI Coach Character" 
          className="absolute h-full left-1/2 -translate-x-1/2 max-w-none top-[8px] w-full object-contain scale-[1.2]" 
          src={image_d50caf71142aae432531d28676918ccac81e85f8}
        />
      )}
    </div>
  );
}