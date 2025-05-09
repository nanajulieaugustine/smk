const SecondaryButton = ({ children }) => {
  return (
    <button className="py-3 px-2 flex gap-2 text-center border-1 border-(--black) w-full items-center justify-center mt-5 hover:underline  hover:scale-103 transition-all duration-300">
      {children}
    </button>
  );
};

export default SecondaryButton;
