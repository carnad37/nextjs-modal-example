'use client'

import React, {useCallback, useEffect, useMemo, useState, Dispatch, SetStateAction} from 'react';
import {useRouter} from "next/navigation";
import ReactDOM from "react-dom";

interface Prop {
  children? : React.ReactNode,
  isOpen? : boolean,
  setIsOpen? : Dispatch<SetStateAction<boolean>>
}

const PortalModal : React.FC<Prop> = ({ children, setIsOpen, isOpen })=>{
  const router = useRouter()

  const [modalEl, setModalEl] = useState<HTMLElement | null>(null)

  const modalClose = useCallback(()=>{
    if (setIsOpen) {
      setIsOpen(false)
    } else {
      router.back()
    }
  },[setIsOpen, router])

  const draw = useMemo(()=>(
    <>
      <div id={`modal-layout`} onClick={modalClose} className={`absolute w-full h-screen bg-black opacity-20 top-0 left-0`}></div>
      <div className={`fixed bg-white bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-center w-[500px] h-[300px] mx-auto`}>
        <div className={`relative w-full h-full`}>
          <div className={`absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2`}>
            {children}
          </div>
        </div>
      </div>
    </>
  ),[children, modalClose])

  useEffect(() => {
    setModalEl(document.getElementById('modal-root'))
  }, []);

  return (
    modalEl && isOpen && ReactDOM.createPortal(draw, modalEl)
  );
}

export default PortalModal;