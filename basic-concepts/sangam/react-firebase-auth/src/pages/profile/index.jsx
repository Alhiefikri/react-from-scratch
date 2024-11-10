import { useContext } from "react";
import { AuthContext } from "../../context";

function ProfilePage() {
  const { user, handleLogout } = useContext(AuthContext);

  console.log(user);

  return (
    <div>
      <h3>Welcome {user.displayName}</h3>
      <p>Your email is {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProfilePage;
