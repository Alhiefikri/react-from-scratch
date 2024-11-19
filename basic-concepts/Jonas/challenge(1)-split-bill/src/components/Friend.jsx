import Button from "./Button";

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id == friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          Anda berhutang kepada {friend.name} sebesar Rp{" "}
          {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} berhutang kepada anda sebesar Rp{" "}
          {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance == 0 && <p>Anda dan {friend.name} tidak berhutang</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Tutup" : "Pilih"}
      </Button>
    </li>
  );
}

export default Friend;
