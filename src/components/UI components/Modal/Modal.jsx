import s from './modal.module.css';
export default function Modal({ children, visibility, setVisibility }) {
  const rootClasses = [s.modal];
  if (visibility) {
    rootClasses.push(s.active);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisibility(false)}>
      <div className={s.moduleContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
