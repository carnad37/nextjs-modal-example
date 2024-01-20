import React from 'react';
import OMain from '@/components/OMain'
import Middle from "@/components/Middle";

interface Prop {
  children? : React.ReactNode,
  params? : { num : string }
}

const Page : React.FC<Prop> = ({ children, params })=>{
  return (
    <Middle screen={true}>
      <OMain params={params}/>
    </Middle>
  );
}

export default Page;