'use client'

import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useMemo, useState, Dispatch, SetStateAction, useCallback} from "react";
import ReactDOM from "react-dom"

interface Props {
    children? : React.ReactNode
    isOpen : boolean
    setIsOpen? : Dispatch<SetStateAction<boolean>>
    type? : 'route' | 'push'
}

let popStateStack : (()=>void)[] = []
const emptyStack = ()=>{}
const closeEvent = (ev : PopStateEvent) => {
    // forward 해줬던적이 있으면 history
    const modalKey = ev.state.modalKey || 0
    if (modalKey === 0 && popStateStack.length === 0) {
        console.log('remove')
        window.removeEventListener('popstate', closeEvent)
        return
    }
    if (modalKey < popStateStack.length) {
        // console.log("back")
        const popCloseEvent = popStateStack.pop()
        if (popCloseEvent === emptyStack) {
            // 다중 모달 history제거까지 재귀
            const backCount = popStateStack.filter(el=>el === emptyStack).length
            // console.log(backCount)
            // history.go(backCount * -1)
            history.back()
        } else if (popCloseEvent) {
            popCloseEvent()
        }
    } else {
        // 앞으로가기를 실행한적이 있는것. 바로 뒤로가야함.
        // console.log('forward')
        popStateStack.push(emptyStack)
    }
};

// const closeEvent = (ev : PopStateEvent) => {
//     const popCloseEvent = popStateStack.pop()
//     if (popCloseEvent) {
//         popCloseEvent()
//     } else {
//         window.removeEventListener('popstate', closeEvent)
//     }
// };

const ModalDetail : React.FC<Props> = ({ children, isOpen, setIsOpen, type }) => {
    const pathname = usePathname()
    // const [push, setPush] = useState(false)

    const [modalEl, setModalEl] = useState<HTMLElement | null>(null)
    const [layoutFlag, setLayoutFlag] = useState(true)

    const closeModal = useCallback(()=>{
        if (type === 'push' && setIsOpen) {
            setIsOpen(false)
        }
    },[])

    // modalKey 값을두면 좀더 깔끔하게 callback 관리가 가능하다.
    // useEffect(() => {
    //     const tIdx = popStateStack.indexOf(closeModal)
    //     if (tIdx >= 0) {
    //         popStateStack[tIdx] = closeModal
    //     }
    // }, [setIsOpen]);

    useEffect(() => {
        setModalEl(document.getElementById('modal-root'))
        setLayoutFlag(!!document.getElementById('modal-layout'))
        if (type === 'push' && setIsOpen) {
            popStateStack.push(closeModal)
            window.addEventListener('popstate', closeEvent)
            history.pushState({ modalKey : popStateStack.length}, '', pathname)
        }
    }, []);

    const render = (
        <div>
            { layoutFlag || <div id={`modal-layout`} className={`absolute w-full h-screen bg-black opacity-20 top-0 left-0`}></div> }
            <div className={`absolute bg-white top-1/2 left-1/2 text-center w-[100px] h-[100px] z-10 mx-auto`}>
                {children}
            </div>
        </div>
    );
    return (
        <div>
            {
                modalEl && isOpen && ReactDOM.createPortal(render, modalEl)
            }
        </div>
    )
}

export default ModalDetail;
