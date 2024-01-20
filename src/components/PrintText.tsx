'use client'
import React, {useCallback} from 'react';
import {useRouter} from "next/navigation";

interface Prop {
  children? : React.ReactNode,
  num: string
}

const PrintText : React.FC<Prop> = ({ children, num })=>{
  const router = useRouter()
  const backHandler = useCallback(()=>{
    router.back()
  }, [router])
  const redirectHandler = useCallback(()=>{
    location.reload()
  }, [])
  return (
    <div className={`font-bold text-3xl`}>
      <div className={`mb-4`}>{`클릭한 숫자는 ${num}`}</div>
      <button className={`rounded-3xl px-2.5 bg-gray-700 text-white text-[14px] mr-2`} onClick={backHandler}>뒤로가기</button>
      <button className={`rounded-3xl px-2.5 bg-black text-white text-[14px]`} onClick={redirectHandler}>새로고침</button>
    </div>
  );
}

export default PrintText;