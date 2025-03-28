import React from "react";

export default function Question({ children }) {
  return (
    <div  className="text-black font-medium text-2xl "
      key={children}
    >
     <h3 className="text-center">
       <p className="text-center">
        {children}
        </p>
      </h3>
    </div>
  );
}
