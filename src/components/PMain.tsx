'use client'
import Image from "next/image";
import Link from "next/link";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import React, {useMemo} from "react";
import {MainData} from "@/type/main";
import MainCommon from "@/components/MainCommon";

export default function Main() {
  const data = useMemo(() => ["1", "2", "3", "4", "5", "6"], [])
  const mainData : MainData = useMemo(()=>{
    return {
      url : `pimg`,
      title : `parallel routes modal`,
      color : `bg-gray-700`
    }
  } ,[])

  return (
      <MainCommon mainData={mainData} dataList={data}></MainCommon>
  );
}
