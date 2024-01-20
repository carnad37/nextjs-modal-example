import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";
import Main from "@/components/Main";
import Modal from "@/study/components/Modal";
import MyComp from "@/study/components/MyComp";

interface PropTypes {
    children?: React.ReactNode,
    params? : { modal : string[] },
    searchParams? : object[],
}

const Page : React.FC<PropTypes> = (props) => {

    let isModalOpen = !!props.params?.modal
    const data = ["5", "6", "7", "8"]
    return (
        <div className={`relative h-full`}>
            <Link href={`/modal/1`}>링크</Link>
            그냥입니다.
            <Modal isOpen={!!props.params?.modal} type={'route'} >
                <MyComp/>
            </Modal>
        </div>
    );
}

export default Page;