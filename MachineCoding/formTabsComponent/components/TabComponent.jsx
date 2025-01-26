import { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

export default function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: ["coding"],
    theme: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const error = {};
        if (!data.name || data.name.length < 2) {
          error.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          error.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          error.email = "Email is not valid";
        }

        setErrors(error);
        return error.name || error.age || error.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => true,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const handlePrev = () => {
    setActiveTab((prevState) => prevState - 1);
  };

  const handleNext = () => {
    if (tabs[activeTab].validate()) setActiveTab((prevState) => prevState + 1);
  };
  const handleSubmit = () => {
    console.log("FinalData: ", data);
  };

  let ActiveTabComponent = tabs[activeTab].component;
  return (
    <div>
      <div className="tabs-container">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className={`tab ${activeTab === idx ? "active-tab" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="component-container">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>

      {activeTab !== 0 && (
        <button className="prev" onClick={handlePrev}>
          Prev
        </button>
      )}

      {activeTab !== tabs.length - 1 && (
        <button className="next" onClick={handleNext}>
          Next
        </button>
      )}

      {activeTab === tabs.length - 1 && (
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
}
