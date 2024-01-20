'use client'
import Image from "next/image";
import Link from "next/link";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import React, {useMemo, useState} from "react";
import PortalModal from "@/components/PortalModal";
import {MainData} from "@/type/main";
import MainCommon from "@/components/MainCommon";
import PrintText from "@/components/PrintText";

interface Props {
  params?: { num: string }
}

const Main: React.FC<Props> = ({params}) => {
  const data = useMemo(() => ["1", "2", "3", "4", "5", "6"], [])
  const modalVal = useMemo(() => params?.num, [params?.num])
  // const [isOpen, setIsOpen] = useState(!!modalVal)
  const mainData : MainData = useMemo(()=>{
      return {
        url : `oimg`,
        title : `optional catch all modal`,
        color : "bg-yellow-950"
      }
    } ,[])

  return (
    <>
      {
        modalVal && (
          <PortalModal
            // isOpen={isOpen}
            // setIsOpen={setIsOpen}
          >
            <PrintText num={params?.num || ''}/>
          </PortalModal>
        )
      }
      <MainCommon mainData={mainData} dataList={data}></MainCommon>
    </>
  );
}

export default Main;