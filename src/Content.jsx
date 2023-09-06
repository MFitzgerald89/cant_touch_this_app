// Libraries
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
// Components
import { CarWashesIndex } from "./CarWashesIndex";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { CarWashShow } from "./CarWashShow";
import { Account } from "./Account";

export function Content() {
  const [carWashes, setCarWashes] = useState([]);
  const [currentCarWash, setCurrentCarWash] = useState([]);
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isCarWashVisible, setIsCarWashVisible] = useState(false);
  const [currentUserShow, setCurrentUserShow] = useState([]);

  const handleIndexCarWashes = () => {
    console.log("handleIndexCarWashes");
    axios.get("http://localhost:3000/car_washes.json").then((response) => {
      console.log(response.data);
      setCarWashes(response.data);
    });
  };

  const handleCarWashShow = (place_id) => {
    setIsCarWashVisible(true);
    axios.get(`http://localhost:3000/car_washes/${place_id}}`).then(function (response) {
      setCurrentCarWash(response.data.result);
    });
  };

  const handleClose = () => {
    setIsSignupVisible(false);
    setIsCarWashVisible(false);
  };

  const handleUpdateLocation = (params) => {
    axios.patch(`http://localhost:3000/users/${localStorage.getItem("user_id")}.json`, params).then((response) => {
      handleIndexCarWashes();
      setCurrentUserShow(response.data);
    });
  };

  const handleUserShow = (params) => {
    axios.get(`http://localhost:3000/users/${localStorage.getItem("user_id")}.json`).then((response) => {
      setCurrentUserShow(response.data);
    });
  };

  const handleUpdateUser = (params, id) => {
    axios.patch(`http://localhost:3000/users/${id}.json`, params).then((response) => {
      handleIndexCoffeeShops();
      setCurrentUserShow(response.data);
    });
  };

  useEffect(handleIndexCarWashes, []);

  if (localStorage.jwt !== undefined) {
    useEffect(handleIndexCarWashes, []);
    useEffect(handleUserShow, []);
  }

  return (
    <div>
      <Routes>
        {localStorage.jwt === undefined ? (
          <>
            <Route path="/" element={<Login onSignup={setIsSignupVisible} />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <CarWashesIndex
                  carWashes={carWashes}
                  onShowCarWash={handleCarWashShow}
                  onUpdateLocation={handleUpdateLocation}
                  userData={currentUserShow}
                />
              }
            />
          </>
        )}
        <Route path="/account" element={<Account userData={currentUserShow} onUpdateUser={handleUpdateUser} />} />
      </Routes>

      <Modal show={isSignupVisible} onClose={handleClose}>
        <Signup />
      </Modal>

      <Modal show={isCarWashVisible} onClose={handleClose}>
        <CarWashShow carWash={currentCarWash} />
      </Modal>
    </div>
  );
}
