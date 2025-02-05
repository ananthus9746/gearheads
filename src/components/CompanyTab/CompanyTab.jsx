import { useState } from "react";

const tabContents = [
  {
    title: "Mission",
    description:
      "At Gear Heads Auto Garage, our mission is to provide high-quality, reliable automotive services with a commitment to excellence, integrity, and customer satisfaction. We strive to keep vehicles running smoothly and safely on the road.",
  },
  {
    title: "Vision",
    description:
      "Our vision at Gear Heads Auto Garage is to be the go-to destination for all automotive repair and maintenance needs. We aim to set industry standards with cutting-edge technology, skilled technicians, and exceptional customer service.",
  },
  {
    title: "History",
    description:
      "Gear Heads Auto Garage was founded with a passion for cars and a commitment to quality service. Over the years, we have built a reputation for reliability, expertise, and customer trust, becoming a respected name in the automotive industry.",
  },
];

const CompanyTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="company-tab">
        <ul className="tabs">
          {tabContents?.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? "active-tab" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        <div className="tabs-content">
          <div className="list">
            <div className="ak-section-heading ak-style-1 ak-type-1">
              <div className="background-text">About Company</div>
              <h3 className="desp">{tabContents[activeTab].description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTab;
