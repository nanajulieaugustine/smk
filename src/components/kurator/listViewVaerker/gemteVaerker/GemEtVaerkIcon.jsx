"use client";
import useArtworkStore from "@/store/kuratorStore";


const GemEtVaerkIcon = ({ vaerk }) => {
  const gemteVaerker = useArtworkStore((state) => state.gemteVaerker);
  const addVaerk = useArtworkStore((state) => state.addVaerk);
  const sletVaerk = useArtworkStore((state) => state.sletVaerk);

  const isSaved = gemteVaerker.some(
    (item) => item?.object_number === vaerk.object_number
  );
  
  const handleSavedToggle = () => {
    if (isSaved) {
      sletVaerk(vaerk.object_number);
    } else {
      addVaerk(vaerk);
    }
  };

  return (
    <div className="relative top-15 -left-20">
          <input
        className="w-5 h-5"
        type="checkbox"
        checked={isSaved}          // styret af Zustand. Uden denne syntaks af checkbox, vil den altid vælge første item som checked
        onChange={handleSavedToggle} // toggle-funktion
      />
    </div>
  );
};

export default GemEtVaerkIcon;
