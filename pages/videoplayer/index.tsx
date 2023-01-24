import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PodcastPlayer from "../../src/components/PodcastPlayer/PodcastPlayer";

const Video: NextPage = () => {
    const router=useRouter()
    console.log(router)
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-center">
      <div className="w-3/5 h-[400px] player-banner relative rounded-3xl">
        <PodcastPlayer src="https://dls.music-fa.com/tagdl/ali/Yasan%20-%20Eshghe%20Man%20(320).mp3" />
      </div>
    </div>
  );
};

export default Video;
