import Image from "next/image";
import DeleteTrash from "@/components/global/ikoner/DeleteTrash";
import BilletAntal from "./BilletAntal";
import useBookingStore from "@/store/bookingStore";

// Indhenter event, som blev sendt afsted fra popover som prop ( event={billet} )
const KurvCard = ({ event, art, undtagelser = false }) => {
  //matcher artworksID fra async api med object_number i smks api
  const matchedArtworks = event.artworkIds?.length
    ? art?.filter((artwork) => event.artworkIds.includes(artwork.object_number))
    : [];

  const sletBillet = useBookingStore((state) => state.sletBillet);

  return (
    <div className="flex flex-row gap-4 items-stretch mb-16">
      {/* =================== BILLEDE TIL TILHØRENDE ARRANGEMENT ==================== */}

      <div className="w-30 h-40 flex items-center border-1 border-gray-300 justify-center overflow-hidden">
        {event.matchedArtworks?.[0]?.image_thumbnail && (
          <Image
            alt="artwork"
            src={event.matchedArtworks[0].image_thumbnail}
            width={50}
            height={50}
            className="object-contain w-full h-auto"
          />
        )}
      </div>

      <div className="flex flex-col justify-between flex-1">
        {/* ======================= PRAKTISK INFORMATION ======================== */}
        <h2>{event.title}</h2>
        <p>{event.location.address}</p>
        <p>{event.date}</p>

        {/* ==================== PÅVIRKER BILLETTER I KURVEN ==================== */}
        {!undtagelser && (
          <div className="flex gap-20 self-end">
            {/* Sender parameter med id og antal, så BilletAntal kan påvirke antal billetter arrangement */}
            <BilletAntal id={event.id} antal={event.antal} event={event} />

            {/* ==================== SLETTER BILLETTER I KURVEN ==================== */}
            {/* Sender parameter med event.id, så id kan slette et helt event tilføjet til kurv */}
            <button
              className=" hover:text-red-600"
              onClick={() => sletBillet(event.id)}
            >
              <DeleteTrash />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default KurvCard;
