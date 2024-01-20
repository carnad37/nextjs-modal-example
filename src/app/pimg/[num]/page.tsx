import React from 'react';

interface Prop {
  children? : React.ReactNode
}

const Page : React.FC<Prop> = ({ children })=>{
  return (
    <div>
      모달이 아닙니다
    </div>
);}

export default Page;