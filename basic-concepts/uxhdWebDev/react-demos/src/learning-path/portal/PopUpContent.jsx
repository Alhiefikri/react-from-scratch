const PopUpContent = ({ copied }) => {
  return (
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "2rem" }}>
          Coppied to Clipboard
        </div>
      )}
    </section>
  );
};
export default PopUpContent;
