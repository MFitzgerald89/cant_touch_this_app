export function Account(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateUser(params, props.userData.id);
  };
  return (
    <div className="account-show">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h3 style={{ marginBottom: "40px" }}>{props.userData.name}</h3>
          <div className="form-group row" style={{ marginBottom: "30px" }}>
            <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">
              Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                defaultValue={props.userData.name}
                name="name"
              />
            </div>
          </div>
          <div className="form-group row" style={{ marginBottom: "30px" }}>
            <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">
              Email
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                defaultValue={props.userData.email}
                name="email"
              />
            </div>
          </div>
          <div className="form-group row" style={{ marginBottom: "30px" }}>
            <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">
              City
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                defaultValue={props.userData.city}
                name="city"
              />
            </div>
          </div>
          <div className="form-group row" style={{ marginBottom: "40px" }}>
            <label htmlFor="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm">
              State
            </label>
            <div className="col-sm-9">
              <input
                list="states"
                type="text"
                className="form-control form-control-sm"
                id="colFormLabelSm"
                defaultValue={props.userData.state}
                name="state"
              />
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
          </div>
          <div className="form-group text-center">
            <button className="btn btn-secondary btn-sm" type="submit" style={{ width: "50%" }}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
