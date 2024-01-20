import React from 'react';

interface Prop {
  children? : React.ReactNode
  screen? : boolean
}

const Middle : React.FC<Prop> = ({ children, screen })=>{
  return (
    <div className={`relative ${screen ? "w-screen h-screen" : "w-full h-full"}`}>
      <div className={`fixed w-full right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2`}>
        {children}
      </div>
    </div>
  );
}

export default Middle;