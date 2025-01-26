export default function Profile({ errors, data, setData }) {
  const { name, age, email } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="profile">
      <div>
        <label>Name: </label>
        <input type="text" value={name} name="name" onChange={handleChange} />
        {errors.name && <span className="error"> {errors.name} </span>}
      </div>
      <div>
        <label>Age: </label>
        <input type="number" value={age} name="age" onChange={handleChange} />
        {errors.age && <span className="error"> {errors.age} </span>}
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        {errors.email && <span className="error"> {errors.email} </span>}
      </div>
    </div>
  );
}
