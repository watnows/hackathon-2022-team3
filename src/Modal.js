import { Liquoredit } from "./Liquoredit";
import { Liquorslider } from "./Liquorslider";
import "./App.css"

const Modal = ({ show, close }) => {
  if (show) {
    return (
      <div>
        {
          <div className={`modal__overlay ${show && "is-opened"}`}>
            <>
              <div className="modal" >
                <h1> リキュール名 </h1>
                <button className="close" onClick={() => close()}>
                  x close
                </button>

                <div onClick={(e) => e.stopPropagation()}>
                  <main>
                    <Liquoredit></Liquoredit>
                    <Liquorslider></Liquorslider>
                  </main>
                  <footer>
                    <button className="submit" onClick={() => close()}>Submit Sample</button>
                  </footer>
                </div>
              </div>
            </>
          </div>
        }
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;