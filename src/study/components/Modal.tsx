'use client'
import Image from "next/image";
import Link from "next/link";
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useMemo, useState, Dispatch, SetStateAction, useCallback} from "react";
import ReactDOM from "react-dom"
import ModalDetail from "@/study/components/ModalDetail";

interface Props {
    children? : React.ReactNode
    isOpen : boolean
    setIsOpen? : Dispatch<SetStateAction<boolean>>
    type? : 'route' | 'push'
}

const Modal : React.FC<Props> = ({ children, isOpen, setIsOpen, type }) => {
    return (
        <>
            {
                isOpen && (
                    <ModalDetail isOpen={isOpen} setIsOpen={setIsOpen} type={type}>
                        {children}
                    </ModalDetail>
                )
            }
        </>
    )
}

export default Modal;
