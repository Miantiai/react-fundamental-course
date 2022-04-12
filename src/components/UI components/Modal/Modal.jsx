import s from './modal.module.css';
export default function Modal({ children, modal, setModal }) {
  const rootClasses = [s.modal];
  if (modal) {
    rootClasses.push(s.active);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
      <div className={s.moduleContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
