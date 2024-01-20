import React from 'react';

interface Prop {
  children? : React.ReactNode
}

const Default : React.FC<Prop> = ({ children })=>{
  return null
}

export default Default;