const URL = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  //   deStructure the object
  const person = data.results[0];
  const { first, last } = person.name;
  const { email } = person;
  const { age } = person.dob;
  const { password } = person.login;
  const { large: image } = person.picture;
  const {
    street: { number, name },
  } = person.location;
  const { phone } = person;

  return {
    image,
    name: `${first} ${last}`,
    email,
    age,
    street: `${number} ${name}`,
    phone,
    password,
  };
};

export default getUser;
