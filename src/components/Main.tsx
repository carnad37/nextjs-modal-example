'use client'
import Image from "next/image";
import Link from "next/link";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import {useMemo} from "react";
import OMain from "@/components/OMain";
import PMain from "@/components/PMain";

export default function Main() {
  const data = useMemo(() => ["1", "2", "3", "4", "5", "6"], [])
  return (
    <div className={'w-screen h-full px-[200px] pt-[80px]'}>
      <div className={`inline-flex w-full h-[150px] justify-around`}>
        <Link href={'/pimg'}>
          <div className={`bg-white rounded-2xl w-[200px] h-full py-[20px] px-[20px] relative`}>
            <div className={`font-bold text-[18px] text-center absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2`}>
              <pre>{`parallel routes\nmodal Test`}</pre>
            </div>
          </div>
        </Link>
        <Link href={'/oimg'}>
          <div className={`bg-white rounded-2xl w-[200px] h-full py-[20px] px-[20px] relative`}>
            <div className={`font-bold text-[17px] text-center absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2`}>
          <pre>
            {`optional catch all\nmodal Test`}
          </pre>
            </div>
          </div>
        </Link>
      </div>
      <PMain/>
      <OMain  />
    </div>
  );
}
