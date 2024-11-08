import { useState } from "react";

export default function Users() {
  const [usersList, setUsersList] = useState([]);
  const [pending, setPending] = useState(false);

  async function fetchAllUsers() {
    try {
      setPending(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();

      if (result?.users) {
        setUsersList(result.users);
        setPending(false);
      } else {
        setUsersList([]);
      }

      console.log(usersList);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  //   useEffect(() => {
  //     fetchAllUsers();
  //   }, []);

  if (pending) return <h1>fetching users! Please Wait</h1>;

  //   function handleFetchListOfUsers() {
  //     fetchAllUsers();
  //   }

  return (
    <div>
      <h1>All Users List</h1>
      <button onClick={fetchAllUsers}>Fetch Users List</button>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((userItem) => (
            <li key={userItem.id}>
              <p>
                {" "}
                {userItem?.firstName} {userItem?.lastName}{" "}
              </p>
            </li>
          ))
        ) : (
          <h1>No Users Found</h1>
        )}
      </ul>
    </div>
  );
}
