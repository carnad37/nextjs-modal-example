import React from 'react';
import ParallelModal from "@/components/ParallelModal";
 
interface Prop {
  children? : React.ReactNode,
  params? : { num : string }
}
 
const Page : React.FC<Prop> = ({ children, params })=>{
  return (
    <ParallelModal>
      <div className={`font-bold text-3xl`}>
        {`클릭한 숫자는 ${params?.num}`}
      </div>
    </ParallelModal>
);}
 
export default Page;