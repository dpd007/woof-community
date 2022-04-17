import "./css/Dashboard.css";
import Card from "./UI/Card";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
const DUMMY_LIST = [
  {
    id: 1,
    name: "ABC",
    profileImg: <PersonIcon />,
    dogDetails: [
      {
        name: "Rocky1",
        breed: "Siberian Husky",
        dogImage:
          "https://s167.daydaynews.cc/?url=https%3A%2F%2Fp9.pstatp.com%2Flarge%2Fpgc-image%2Fe0d54da408264ced98d5ffcabff55fc3",
      },
    ],
  },
  {
    id: 2,
    name: "DEF",
    profileImg: <PersonIcon />,
    dogDetails: [
      {
        name: "Rocky2",
        breed: "Siberian Husky2",
        dogImage:
          "https://s167.daydaynews.cc/?url=https%3A%2F%2Fp9.pstatp.com%2Flarge%2Fpgc-image%2Fe0d54da408264ced98d5ffcabff55fc3",
      },
    ],
  },
];
const Dashboard = () => {
  const [list, setList] = useState(DUMMY_LIST);
  return (
    <div className="dashboard__main m-3">
      {/* <Card list={DUMMY_LIST} /> */}
      {list.map((item) => (
        <Card
          id={item.id}
          key={item.id}
          personName={item.name}
          personImg={item.profileImg}
          dogDetails={item.dogDetails}
        />
      ))}
    </div>
  );
};

export default Dashboard;
