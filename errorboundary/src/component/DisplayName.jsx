const DisplayName = ({ name }) => {
  if (/\d/.test(name)) {
    throw new Error("Number is not allowed in name");
  }
  return <h1>{name}</h1>;
};

export default DisplayName;
