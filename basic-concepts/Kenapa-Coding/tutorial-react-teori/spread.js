const myProfile = {
  name: "Alhie",
  hobby: "coding",
  agama: "Islam",
};
const { name, hobby, agama } = myProfile;
console.log(name, hobby, agama);

const updatePofile = {
  name: "Mas Boy",
  "Makanan Favorit": "Ayam Bakar",
};

const myupdatedProfile = { ...updatePofile, ...myProfile };
console.log(myupdatedProfile);
