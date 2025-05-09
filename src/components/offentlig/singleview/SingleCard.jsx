import Image from "next/image";
import HeroImgText from "./HeroImgText";
import PraktiskInfo from "./PraktiskInfo";
import CoverFlow from "./CoverFlow";
import SamledeImg from "./SamledeImg";

const SingleCard = ({ event }) => {
  return (
    <article className="grid gap-40">
      {/* Herunder importeres hero med overskrift ovenpå image */}
      <HeroImgText event={event} />

      {/* Beskrivelse af event */}
      <div className="flex justify-between max-w-[50rem] mx-auto">
        <h1 className="w-1/2 break-words">{event.title}</h1>
        <p className="w-1/2 break-words">{event.description}</p>
      </div>

      {/* Herunder importeres information om lokation og pris */}
      <PraktiskInfo event={event} />

      {/* Herunder importeres de tre værker i bunden af card */}
      <CoverFlow event={event} />
    </article>
  );
};

export default SingleCard;
