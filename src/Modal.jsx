export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button
            className="close"
            type="button"
            onClick={props.onClose}
            style={{ marginRight: "20px", marginTop: "10px" }}
          >
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
