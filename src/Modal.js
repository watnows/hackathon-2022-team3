import { Liquoredit } from "./Liquoredit";

const Modal = ({ show, close }) => {
    return (
      <div>
       {
       show ?
       
       <>
          <div className="modal">
         
              <h1> Modal </h1>
              <button className="close" onClick={() => close()}>
               x close
              </button>

<div onClick={(e) => e.stopPropagation()}>
            <main>
            <Liquoredit></Liquoredit>
            </main>
            <footer>
              <button className="submit" onClick={() => close()}>Submit Sample</button>
            </footer>
             </div>
          </div>
        </>
        : null
       }
      </div>
    );
  };
  
  export default Modal;