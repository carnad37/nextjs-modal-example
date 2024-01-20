'use client'

import React, {useCallback, useState} from 'react';
import Modal from "@/study/components/Modal";

interface Props {
    children? : React.ReactNode
}

const MyComp : React.FC<Props> = ({ children }) => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [rendering, setRendering] = useState('')

    const clickHandler = useCallback((e : React.MouseEvent<HTMLButtonElement>) => {
        setIsOpen(prev=>!prev)
    }, [setIsOpen]);

    return (
        <div>
            <div>
                <button onClick={clickHandler}>모달 컨트롤2</button>
            </div>
            <input onChange={e=>setRendering(e.target.value)} value={rendering}/>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} type={'push'}>
                안의 안
            </Modal>
        </div>
    );
}

export default MyComp;