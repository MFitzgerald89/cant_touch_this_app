import { useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from "@react-google-maps/api";

// Icon Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export function CarWashesIndex(props) {
  const [carWashInfoWindow, setCarWashInfoWindow] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateLocation("location");
    event.target.reset();
  };

  // setting google maps height and width
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  return (
    <div className="car-washes-index">
      <div className="row">
        <div className="col-sm-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-5" style={{ padding: "5px" }}>
                <input className="form-control form-input" type="text" name="city" placeholder="City" />
              </div>
              <div className="col-sm-5" style={{ padding: "5px" }}>
                <input className="form-control form-input" type="text" name="state" placeholder="State" list="states" />

                <datalist id="states">
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arkansas</option>
                  <option>California</option>
                  <option>Connecticut</option>
                  <option>Delaware</option>
                  <option>Florida</option>
                  <option>Georgia</option>
                  <option>Hawaii</option>
                  <option>Idaho</option>
                  <option>Illinois</option>
                  <option>Indiana</option>
                  <option>Iowa</option>
                  <option>Kansas</option>
                  <option>Kentucky</option>
                  <option>Louisiana</option>
                  <option>Maine</option>
                  <option>Maryland</option>
                  <option>Massachusetts</option>
                  <option>Michigan</option>
                  <option>Minnesota</option>
                  <option>Mississippi</option>
                  <option>Missouri</option>
                  <option>Montana</option>
                  <option>Nebraska</option>
                  <option>Nevada</option>
                  <option>New Hampshire</option>
                  <option>New Jersey</option>
                  <option>New Mexico</option>
                  <option>New York</option>
                  <option>North Carolina</option>
                  <option>North Dakota</option>
                  <option>Ohio</option>
                  <option>Oklahoma</option>
                  <option>Oregon</option>
                  <option>Pennsylvania</option>
                  <option>Rhode Island</option>
                  <option>South Carolina</option>
                  <option>South Dakota</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Utah</option>
                  <option>Vermont</option>
                  <option>Virginia</option>
                  <option>Washington</option>
                  <option>West Virginia</option>
                  <option>Wisconsin</option>
                  <option>Wyoming</option>
                </datalist>
              </div>
              <button
                type="submit"
                className="col-sm-1 btn-lg search-button submit"
                style={{ backgroundColor: "transparent", border: "none", padding: "0" }}
              >
                <FontAwesomeIcon className="fa-magnifying-glass" icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>
          <div className="left">
            {props?.carWashes && props.carWashes.length > 0 ? (
              props.carWashes.map((carwash) => (
                <div key={carwash.place_id}>
                  <div className="row">
                    <div
                      className="child-row"
                      onClick={() => {
                        setCarWashInfoWindow(carwash);
                      }}
                    >
                      <p>
                        <strong>{carwash.name}</strong>
                        <button
                          style={{
                            marginRight: "20px",
                            float: "right",
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                          onClick={() => props.onShowCarWash(carwash.place_id)}
                        >
                          <FontAwesomeIcon
                            className="fa-circle-info"
                            icon={faCircleInfo}
                            style={{ color: "rgba(83,81,81)", marginRight: "10px" }}
                          />
                        </button>
                      </p>
                      <p>
                        <small>Address: {carwash.formatted_address}</small>
                      </p>
                      <p>
                        <small>Rating: {carwash.rating}</small>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
            <div className="row">
              <div className="child-row"></div>
            </div>
          </div>
        </div>
        <div className="col-sm-7">
          {props.userData && props.userData.latitude > 0 ? (
            <GoogleMap
              mapContainerStyle={mapStyles}
              center={{ lat: parseFloat(props.userData.latitude), lng: parseFloat(props.userData.longitude) }}
              zoom={13}
            >
              {/* Add Markers */}
              {props?.carWashes && props.carWashes.length > 0 ? (
                props.carWashes.map((carwash) => (
                  <div key={carwash.place_id}>
                    <MarkerF
                      position={carwash.geometry.location}
                      onClick={() => {
                        setCarWashInfoWindow(carwash);
                      }}
                    ></MarkerF>
                  </div>
                ))
              ) : (
                <></>
              )}
              {carWashInfoWindow && (
                <InfoWindowF
                  position={carWashInfoWindow.geometry.location}
                  onCloseClick={() => {
                    setCarWashInfoWindow(null);
                  }}
                >
                  <div>
                    <p>
                      <strong>{carWashInfoWindow.name}</strong>
                    </p>
                    <p>{carWashInfoWindow.formatted_address}</p>
                    <p>Status: {carWashInfoWindow.business_status}</p>
                  </div>
                </InfoWindowF>
              )}
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
