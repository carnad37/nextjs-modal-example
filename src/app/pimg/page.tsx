import React from 'react';
import PMain from '@/components/PMain'
import Middle from "@/components/Middle";
interface Prop {
  children? : React.ReactNode
}

const Page : React.FC<Prop> = ({ children })=>{
  return (
    <Middle screen={true}>
      <PMain/>
    </Middle>
  );
}

export default Page;