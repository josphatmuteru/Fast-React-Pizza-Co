import { Link } from 'react-router-dom';

function Button({ disabled, children, to, type, onClick }) {
  const base =
    'text-sm transtion-colors duration 300 active:bg-slate inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';
  const styles = {
    primary: base + ' px-4 py-3  md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'text-sm border-2 border-stone-300 px-4 py-2.5  md:px-6 md:py-3.5 transtion-colors duration 300  inline-block rounded-full  text-stone-400   hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 font-semibold uppercase tracking-wide focus:outline-none',
    round: base + ' px-2.5 py-1  md:px-3.5 md:py-2 text-sm',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
