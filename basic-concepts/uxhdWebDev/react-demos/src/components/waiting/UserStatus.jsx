const UserStatus = ({ logedIn, isAdmin }) => {
  return (
    <div>
      {logedIn && isAdmin && <p>Welcome Admin</p>}
      {logedIn && !isAdmin && <p>Welcome User</p>}
    </div>
  );
};
export default UserStatus;
