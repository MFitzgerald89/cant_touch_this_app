import "./CarWashShow.scoped.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export function CarWashShow(props) {
  return (
    <div id="car-washes-show">
      {/* Website/Name */}
      {props.car_washes.website ? (
        <a href={props.car_washes.website}>{props.car_washes.name}</a>
      ) : (
        <span>No website available</span>
      )}
      {/* Number */}
      {props.car_washes.formatted_phone_number ? (
        <>
          <p>
            <FontAwesomeIcon className="fa-phone" icon={faPhone} size="xs" style={{ marginRight: "5px" }} />
            <small>{props.car_washes.formatted_phone_number}</small>
          </p>
        </>
      ) : (
        <></>
      )}
      {/* Hours */}
      <p style={{ marginBottom: "0px" }}>
        <strong>Car Wash Hours</strong>
      </p>
      {props.carWash?.opening_hours ? (
        props.carWash.opening_hours.weekday_text.map((day) => (
          <div key={props.carWash.opening_hours.weekday_text.indexOf(day)} className="hours">
            <p>{day}</p>
          </div>
        ))
      ) : (
        <></>
      )}
      {/* Reviews */}
      <p>
        <strong>Reviews</strong>
      </p>
      {props.carWash?.reviews ? (
        props.carWash.reviews.map((review) => (
          <div key={props.carWash.reviews.indexOf(review)}>
            <p style={{ margin: "0px" }}>{review.text}</p>
            <p style={{ marginTop: "0px", fontWeight: "bold" }}>- {review.author_name}</p>
          </div>
        ))
      ) : (
        <>
          <p>No reviews</p>
        </>
      )}
    </div>
  );
}
