
import React from "react";

const GuestList = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
          <div className="modal">
              <h2 style={{height: "90vh"}}>Հյուրերի ցուցակն ու սեղանների դասավորությունը հասանելի կլինի 25․04․2025</h2>
            <button onClick={onClose} className="modal-close">X</button>
      </div>
    </div>
  );
};

export default GuestList;
