import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { AddNewCategoryButtonComponent } from './component';
import { AddNewCategoryContainer } from '../addNewCategory/container';
import { useDispatch } from 'react-redux';
import { addCategory } from '@/redux/ui/categories';

export const AddNewCategoryButtonContainer: FC = ({}) => {
    const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
    const dispatch = useDispatch();

    const onClick = () =>{
        setShowNewCategoryInput(!showNewCategoryInput);
    }

    const onSubmit = (category: string) => {
        dispatch(addCategory(category));

        setShowNewCategoryInput(false)
    }
    
    return (
        <div className={styles.button}>
            <AddNewCategoryButtonComponent onClick={onClick}/>
            {showNewCategoryInput && <AddNewCategoryContainer onSubmit={onSubmit} onClose={() => setShowNewCategoryInput(false)} className={styles.buttonPopup}/>}
        </div>
    );
}