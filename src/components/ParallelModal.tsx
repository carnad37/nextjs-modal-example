'use client'

import React, {useCallback} from 'react';
import {useRouter} from "next/navigation";

interface Prop {
  children? : React.ReactNode
}

const ParallelModal : React.FC<Prop> = ({ children })=>{
  const router = useRouter()
  const modalClose = useCallback((e : React.MouseEvent<HTMLDivElement>)=>{
    e.preventDefault()
    router.back()
  },[router])
  return (
    <>
      <div id={`modal-layout`} onClick={modalClose} className={`fixed w-full h-full bg-black opacity-20 top-0 left-0`}></div>
      <div className={`fixed bg-white bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-center w-[500px] h-[300px] mx-auto`}>
        <div className={`relative w-full h-full`}>
          <div className={`absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default ParallelModal;