import { useState } from "react";

const ProfileCard = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={profile.name} // Perbaiki typo: ganti profile.nmae menjadi profile.name
          onChange={handleChange}
          placeholder="Input your Name"
          style={{
            padding: "10px",
            fontSize: "1.2em",
            marginBottom: "20px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Input your Email"
          style={{
            padding: "10px",
            fontSize: "1.2em",
            marginBottom: "20px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </label>
      <h1>Hello, Guys!</h1>
      <p>My Name is: {profile.name}</p>
      <p>My Email is: {profile.email}</p>
    </div>
  );
};

export default ProfileCard;
