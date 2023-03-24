export default function Nav({children}){
    return(
        <nav className=" flex text-sm w-4/5 h-full  font-medium ">
            <ul className="flex relative  space-x-reverse">
                {children}
            </ul>
            <div>asdf</div>
        </nav>
    )
}