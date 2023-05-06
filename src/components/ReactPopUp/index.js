import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const overlayStyles = {
  backgroundColor: 'beige',
}

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button className="trigger-button" type="button">
          Trigger
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <div>
          <div>
            <p>React is a popular and widely used programming language</p>
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button>
        </div>
      )}
    </Popup>
  </div>
)
export default ReactPopUp
