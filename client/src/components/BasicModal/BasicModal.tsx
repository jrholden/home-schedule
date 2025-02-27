import { ReactNode, FC } from 'react';
import styles from '@components/BasicModal/BasicModal.module.css';
export interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  subheader?: string;
  text?: string;
  children?: ReactNode;
  titleSection?: ReactNode;
  actionsSection?: ReactNode;
}

const BasicModal: FC<BasicModalProps> = ({ open, handleClose, title, text, actionsSection, titleSection, children }) => {
  if (!open) return null;
  console.log(styles.modalOverlay);
  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          {titleSection ? titleSection : <h2>{title}</h2>}
          <button className={`${styles.modalClose} ${styles.modalCloseBtn}`} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          {text && <p>{text}</p>}
          {children}
        </div>
        {actionsSection && <div className={styles.modalActions}>{actionsSection}</div>}
      </div>
    </div>
  );
};

export default BasicModal;
