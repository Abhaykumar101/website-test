import React from "react";

interface PopupMessageProps {
  onClose: () => void;
}

const PopupMessage: React.FC<PopupMessageProps> = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>Thank you for submitting the form!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupMessage;
