'use client'

import React, {useCallback, useState} from 'react';
import Modal from "@/study/components/Modal";
import MyComp2 from "@/study/components/MyComp2";

interface Props {
    children? : React.ReactNode
}

const MyComp : React.FC<Props> = ({ children }) => {

    const [ isOpen, setIsOpen ] = useState(false)

    const clickHandler = useCallback((e : React.MouseEvent<HTMLButtonElement>) => {
        setIsOpen(prev=>!prev)
    }, [setIsOpen]);

    return (
        <div>
            <div>
                <button onClick={clickHandler}>모달 컨트롤1</button>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} type={'push'}>
                <MyComp2/>
            </Modal>
        </div>
    );
}

export default MyComp;