import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { CategoriesControlButtonComponent } from './component';
import { ModalContainer } from '../modal/container';
import { CategoriesControlContainer } from '../categoriesControl/container';

type Props = {
    className?: string;
}

export const CategoriesControlButtonContainer: FC<Props> = ({className}) => {
    const [showModal, setShowModal] = useState(false);

    const onOpen = () =>{
        setShowModal(true);
    }

    const onClose = () =>{
        setShowModal(false);
    }
    
    return (
        <>
            <CategoriesControlButtonComponent onOpen={onOpen} className={className}/>
            {showModal && <ModalContainer onClose={onClose}><CategoriesControlContainer /></ModalContainer>}
        </>
    );
}