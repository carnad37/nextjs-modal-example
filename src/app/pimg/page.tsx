import React from 'react';
import PMain from '@/components/PMain'
interface Prop {
  children? : React.ReactNode
}

const Page : React.FC<Prop> = ({ children })=>{
  return (
    <PMain/>
  );
}

export default Page;