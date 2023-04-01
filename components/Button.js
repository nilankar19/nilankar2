
export default function Buttons({label, handleClick, style}) {
  return (
    <button className={style ? style : "bg-slate-700 w-20 font-normal rounded-md text-center" } onClick={handleClick}>
      {label}
    </button>
  );
}
