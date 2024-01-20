'use client'
import Image from "next/image";
import Link from "next/link";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import React, {useMemo, useState} from "react";
import PortalModal from "@/components/PortalModal";

interface Props {
  params?: { num: string }
}

const Main: React.FC<Props> = ({params}) => {
  const data = useMemo(() => ["1", "2", "3", "4", "5", "6"], [])
  const modalVal = useMemo(() => params?.num, [params?.num])
  const [isOpen, setIsOpen] = useState(!!modalVal)

  return (
    <div className={'bg-black px-[80px] pt-[80px]'}>
      {
        modalVal && (
          <PortalModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={`font-bold text-3xl`}>
              {`클릭한 숫자는 ${params?.num}`}
            </div>
          </PortalModal>
        )
      }
      <div className={`bg-white rounded-2xl py-[20px] px-[20px]`}>
        <p className={`border-b-2 border-black font-bold pb-2 px-3 mb-4`}>
          {`optional catch all modal`}
        </p>
        <div className={`w-full inline-flex justify-around`}>
          {
            data.map(el => {
              return (
                <div className={`rounded`} key={`ocam-${el}`}>
                  <Link href={`/oimg/${el}`}
                        className={`relative block rounded w-[80px] h-[80px] bg-yellow-950 font-bold text-white`}>
                    <div
                      className={`absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-white`}>{`${el}`}</div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Main;