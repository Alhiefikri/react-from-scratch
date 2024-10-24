const Score = ({ score, setDisplay, setIndex }) => {
  const handleClick = () => {
    setDisplay("review");
    setIndex(0);
  };
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1 p-[15px]">
      <div className="text-copper text-center font-alfa text-[100px]">
        YOUR SCORE
      </div>
      <div className="flex h-[280px] w-[280px] items-center justify-center rounded-[280px] border-[6px] border-english-lavender font-alfa text-[120px] text-pastelPink">
        {Math.floor(score.score)}
      </div>
      <div className="flex gap-[100px] font-alfa text-[28px] text-english-lavender">
        <div>Benar : {score.true}</div>
        <div>Benar : {score.false}</div>
      </div>
      <div
        onClick={handleClick}
        className="bg-copper mt-4 flex cursor-pointer border-[6px] border-pastelPink p-2 font-alfa text-[32px] text-pastelPink hover:scale-110 hover:border-white hover:text-white"
      >
        Hasil Jawaban
      </div>
    </div>
  );
};

export default Score;
