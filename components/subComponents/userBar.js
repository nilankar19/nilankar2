export default function UserBar({
    mainClass,
    imgClass,
    src,
    Name,
    id,
    animation = false }) {
  return (
    <div className={mainClass ? mainClass : `section_1`}>
      <div className={animation ? animation : `p_Div_userIcon`}>
        <img
          className={imgClass}
          src={src ? src : ""}
          id="Avatar"
          alt="sd"
        />
      </div>
     {Name ?
      <div className={`p_Div_userEmail`}><div>{Name}</div> <div>{id}</div></div>
     :null}
     </div>
  );
}