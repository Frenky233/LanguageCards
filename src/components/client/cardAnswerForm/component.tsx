import { FC, RefObject } from 'react';
import styles from './styles.module.scss';
import { Textarea } from '../textarea/component';
import { Button } from '../button/component';
import ArrowIcon from '@public/arrowIcon.svg'
import clsx from 'clsx';

type Props = {
    onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    getNextCard: () => void;
    textareaRef: RefObject<HTMLTextAreaElement>;
    submitButtonRef: RefObject<HTMLButtonElement>;
    className?: string;
}

export const CardAnswerFormComponent: FC<Props> = ({onSubmit, getNextCard, textareaRef, submitButtonRef, className}) => {
    return (
        <form className={clsx(styles.answerForm, className)}>
            <Textarea autoFocus={true} forwardRef={textareaRef} className={styles.answerFormTextarea} id='answer' placeholder='Type answer here...'/>
            <div className={styles.answerFormControl}>
                <Button forwardRef={submitButtonRef} onClick={onSubmit} variant='Push' className={styles.answerFormSubmit} type='submit'>Answer</Button>
                <Button onClick={getNextCard} variant='Push' className={styles.answerFormButtonRight}><ArrowIcon/></Button>
            </div>
        </form>
    );
}