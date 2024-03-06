import { FC } from 'react';
import styles from './styles.module.scss';
import { Textarea } from '../textarea/component';
import { Button } from '../button/component';
import ArrowIcon from '@public/arrowIcon.svg'
import clsx from 'clsx';

type Props = {
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
    className?: string;
}

export const CardAnswerFormComponent: FC<Props> = ({onChange, value, className}) => {
    return (
        <form className={clsx(styles.answerForm, className)}>
            <Textarea className={styles.answerFormTextarea} value={value} onChange={onChange} id='answer' placeholder='Type answer here...'/>
            <div className={styles.answerFormControl}>
                <Button variant='Push' className={styles.answerFormButtonLeft}><ArrowIcon/></Button>
                <Button variant='Push' className={styles.answerFormSubmit} type='submit'>Answer</Button>
                <Button variant='Push' className={styles.answerFormButtonRight}><ArrowIcon/></Button>
            </div>
        </form>
    );
}