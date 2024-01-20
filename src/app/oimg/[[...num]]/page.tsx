import React from 'react';
import OMain from '@/components/OMain'

interface Prop {
  children? : React.ReactNode,
  params? : { num : string }
}

const Page : React.FC<Prop> = ({ children, params })=>{
  return (
    <OMain params={params}/>
  );
}

export default Page;