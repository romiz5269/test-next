import React, { FC, MutableRefObject, useRef } from "react";
import usePodcastPlayer from "../../hooks/usePodcastPlayer";
import PodcastControl from "../PodcastControl/PodcastControl";

interface PodcastPlayerProps {
  src: string;
}
const PodcastPlayer: FC<PodcastPlayerProps> = ({ src }) => {
  const audioElement = useRef<HTMLMediaElement | HTMLAudioElement>(null);
  const {
    playerState,
    toggleMute,
    togglePlay,
    handleUpdateTime,
    handleTimeForward,
    handleTimeBackward,
    handleVideoProgress,
  } = usePodcastPlayer(audioElement);

  return (
    <div className="w-full h-full  relative">
      <div className="absolute bottom-10 w-full px-5">
        <audio
          ref={audioElement}
          src={src}
          muted={playerState.isMuted}
          onTimeUpdate={handleUpdateTime}
        />

        <PodcastControl
          playerState={playerState}
          togglePlay={togglePlay}
          handleTimeBackward={handleTimeBackward}
          handleTimeForward={handleTimeForward}
          handleVideoProgress={handleVideoProgress}
        />
      </div>
    </div>
  );
};

export default PodcastPlayer;
