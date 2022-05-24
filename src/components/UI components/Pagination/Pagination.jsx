import { getPagesArray } from '../../../utils/pages';
import s from './pagination.module.css';

export default function Pagination({ totalPages, page, changePage }) {
  const pagesArray = getPagesArray(totalPages);
  return (
    <div className={s.pageWrapper}>
      {pagesArray.map((p) => (
        <span
          className={p === page ? [s.page, s.page__current].join(' ') : s.page}
          key={p}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
}
