import React from 'react';
import Link from "next/link";
import {MainData} from "@/type/main";


interface Prop {
  children? : React.ReactNode,
  mainData: MainData,
  dataList: string[]
}

const MainCommon : React.FC<Prop> = ({ children, mainData, dataList })=>{
  return (
    <div className={`bg-white rounded-2xl py-[20px] px-[20px] mx-[10%] max-sm:mx-[5%]`}>
      <p className={`border-b-2 border-black font-bold pb-2 px-3 mb-4`}>
        {mainData.title}
      </p>
      <div className={`w-full flex flex-wrap justify-around max-[700px]:flex-col max-[700px]:h-[200px] max-[700px]:items-center`}>
        {
          dataList.map(el => {
            return (
              <Link href={`/${mainData.url}/${el}`} key={`${mainData.url}-${el}`}
                    className={`relative block rounded w-[80px] h-[80px] ${mainData.color} font-bold text-white `}>
                <div
                  className={`absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-white`}>{`${el}`}</div>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}

export default MainCommon;