import ReactDOM from "react-dom";

export default function Modal({
  title,
  content,
  show = false,
  onClose = () => {},
  onConfirm = () => {},
  confirmText,
}) {
  return (
    show &&
    ReactDOM.createPortal(
      <>
        {/* Modale */}
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                ></button>
              </div>
              <div className="modal-body">{content}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Chiudi
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onConfirm}
                >
                  {confirmText}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay Bootstrap */}
        <div className="modal-backdrop fade show"></div>
      </>,
      document.body
    )
  );
}
