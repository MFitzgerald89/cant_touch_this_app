import axios from "axios";
import { useState, useEffect } from "react";
import { CarWashesIndex } from "./CarWashesIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  const [car_washes, setCarWashes] = useState([]);

  const handleIndexCarWashes = () => {
    console.log("handleIndexCarWashes");
    axios.get("http://localhost:3000/car_washes.json").then((response) => {
      console.log(response.data);
      setCarWashes(response.data);
    });
  };

  const handleUpdateLocation = (params) => {
    axios.patch(`/users/${localStorage.getItem("user_id")}.json`, params).then((response) => {
      handleIndexCoffeeShops();
      setCurrentUserShow(response.data);
    });
  };

  useEffect(handleIndexCarWashes, []);

  return (
    <div>
      <h1>Welcome to React!</h1>
      <CarWashesIndex
        carWashes={car_washes}
        // onShowCarWash={handleCarWashShow}
        onUpdateLocation={handleUpdateLocation}
        // userData={currentUserShow}
      />
      <Signup />
      <Login />
    </div>
  );
}
