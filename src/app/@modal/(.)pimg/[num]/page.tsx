import React from 'react';
import ParallelModal from "@/components/ParallelModal";
import PrintText from "@/components/PrintText";
 
interface Prop {
  children? : React.ReactNode,
  params? : { num : string }
}
 
const Page : React.FC<Prop> = ({ children, params })=>{
  return (
    <ParallelModal>
      <PrintText num={params?.num || ''}/>
    </ParallelModal>
);}
 
export default Page;