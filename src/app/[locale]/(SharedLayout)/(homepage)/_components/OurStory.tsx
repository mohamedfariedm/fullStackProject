"use client";
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

function OurStory() {
  const { t } = useTranslation("homepage");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Manually play the video
      videoRef.current.controls = true; // Show video controls
      setIsPlaying(true);
    }
  };

  return (
    <div className="main-container flex flex-col gap-6 md:gap-0 md:flex-row xl:w-[1110px] justify-between items-center flex-nowrap relative mx-auto my-0">
      {/* Text Content */}
      <div className="flex w-full md:w-[479px] flex-col gap-[16px] justify-center items-end shrink-0 flex-nowrap relative z-[1]">
        <span className="md:h-[36px] self-stretch shrink-0 basis-auto text-[20px] font-bold leading-[36px] text-[#f8992f] relative text-start whitespace-nowrap z-[2]">
          {t("our_story.title")}
        </span>
        <span className="flex w-full md:w-[479px] md:h-[145px] items-start shrink-0 text-[16px] font-medium leading-[29.12px] text-[#dbdbdb] relative z-[3]">
          {t("our_story.description")}
        </span>
      </div>

      {/* Video Container */}
      <div
        style={{ backgroundImage: `url(/assets/images/story/rectangle.svg)` }}
        className="w-full md:w-[447.5px] h-[288px] shrink-0 bg-cover bg-no-repeat relative flex justify-center items-center"
      >
        {/* Video Element */}
        <video
          ref={videoRef} // Attach ref to video
          className="w-full h-full absolute bottom-2 left-2 object-cover rounded-2xl overflow-hidden"
        >
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1450121354152311330/123101afe10c31979378b721554c82bc5339353e?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uG53BbVIK8wTPGMp1CEaZEvQ7F48tOX0maaMX0vKcktihvkd489Wl1lYpG9lJEHgjhHX1QZlqqnWyXzTaO7y5jkObS3X~EAf-~ZtCcfTHe8JmlfDNtycpgU~lVf7fK2fBhTXgcPaR5L9ZlAYsldDIAhkesOPBm5X18DliaLKlVdL-BQo87qOgD-4Kz1oIK4miPF0LqfbaXqo1WnHagNf0nOsMSZu4rV8ED7wEhkj9y6oqmao3cBeHlcpcm00jdjXtlgHrX1m~xzqhfYYj7MO5MsU-QLnUyaBw0q98n5KbNLIeM7SPEvsAhMkx84uXrxJBwfUGhG2kc5ahwuBBmn5rw__"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        {!isPlaying && (
          <div className="absolute w-full h-full left-2 bottom-2 flex justify-center items-center bg-[#00000062]">
            <button
              className="absolute w-[56px] h-[56px] flex justify-center items-center cursor-pointer"
              onClick={handlePlay} // Call handlePlay function
            >
              <span
                className="w-full h-full bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(/assets/images/story/play.svg)` }}
              ></span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OurStory;
