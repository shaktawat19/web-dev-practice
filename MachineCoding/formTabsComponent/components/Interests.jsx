export default function Interests({ data, setData }) {
  const { interests } = data;

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        interests: checked
          ? [...prevState.interests, name]
          : prevState.interests.filter((elem) => elem !== name),
      };
    });
  };
  return (
    <div className="">
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="reading"
            checked={interests.includes("reading")}
          />
          Reading
        </label>
      </div>
    </div>
  );
}
