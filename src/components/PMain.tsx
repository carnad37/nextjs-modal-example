'use client'
import Image from "next/image";
import Link from "next/link";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import {useMemo} from "react";

export default function Main() {
  const data = useMemo(() => ["1", "2", "3", "4", "5", "6"], [])
  return (
    <div className={'bg-black px-[80px] pt-[80px]'}>
      <div className={`bg-white rounded-2xl py-[20px] px-[20px] mb-4`}>
        <p className={`border-b-2 border-black font-bold pb-2 px-3 mb-4`}>
          {`parallel routes modal`}
        </p>
        <div className={`w-full inline-flex justify-around`}>
          {
            data.map(el => {
              return (
                <div className={`rounded`} key={`prm-${el}`}>
                  <Link href={`/pimg/${el}`}
                        className={`relative block rounded w-[80px] h-[80px] bg-gray-700 font-bold text-white`}>
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
