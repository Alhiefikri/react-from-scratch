const Start = ({ setDisplay }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 font-alfa">
      <div className="font-aclonica text-[120px] text-english-lavender">
        QUIZ APP
      </div>
      <div
        onClick={() => setDisplay("question")}
        className="bg-copper cursor-pointer rounded-xl border-[6px] border-pastelPink px-5 text-[48px] text-pastelPink hover:scale-110 hover:border-white hover:text-white"
      >
        START
      </div>
      <div className="text-center text-[24px] text-english-lavender">
        “Don’t let the setbacks define you <br /> let them be stepping stones to
        triumph.”
      </div>
    </div>
  );
};

export default Start;
