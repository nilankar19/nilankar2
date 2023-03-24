export default function NavItem({href,isActive,children}){
    return (
      <li >
        <a href={href} className=" block px-5 font-sans font-extralight  hover:bg-slate-300">
          {children}
        </a>
      </li>
    );
}