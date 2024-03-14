import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { AddNewCategoryButtonComponent } from './component';
import { AddNewCategoryContainer } from '../addNewCategory/container';

export const AddNewCategoryButtonContainer: FC = ({}) => {
    const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

    const onClick = () =>{
        setShowNewCategoryInput(!showNewCategoryInput);
    }
    
    return (
        <div className={styles.button}>
            <AddNewCategoryButtonComponent onClick={onClick}/>
            {showNewCategoryInput && <AddNewCategoryContainer onClose={() => setShowNewCategoryInput(false)} className={styles.buttonPopup}/>}
        </div>
    );
}