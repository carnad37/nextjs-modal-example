'use client'
import Image from "next/image";
import Link from "next/link";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import {useMemo} from "react";
import OMain from "@/components/OMain";
import PMain from "@/components/PMain";
import {MainData} from "@/type/main";

export default function Main() {
  const data = useMemo(() => ["1", "2", "3", "4", "5", "6"], [])
  const drawList : MainData[] = [{
    url : "pimg",
    title : `parallel routes\nmodal Test`,
  }, {
    url : "oimg",
    title : `optional catch all\nmodal Test`
  }]
  return (
    <div className={'w-screen h-full pt-[40px]'}>
      <div className={`mx-[10%] max-sm:mx-[5%] mb-6 max-sm:mb-2`}>
        <div className={`inline-flex flex-wrap h-[140px] w-full max-sm:h-[240px] justify-between`}>
        {
          drawList.map(el=>{
            return (
              <Link className={`bg-white block rounded-2xl w-[45%] max-sm:w-[100%] max-sm:h-[100px] py-[20px] px-[20px] relative`} key={el.url} href={`/${el.url}`}>
                <div className={`font-bold text-[18px] text-center absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2`}>
                  <pre>{el.title}</pre>
                </div>
              </Link>
            )
          })
        }
        </div>
      </div>
      <div className={`mb-8 max-sm:mb-6`}>
        <PMain/>
      </div>
      <div>
        <OMain />
      </div>
    </div>
  );
}
