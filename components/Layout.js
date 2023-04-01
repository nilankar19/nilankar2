export default function Layout({children}) {
    return(
        <div className="mlayout flex flex-col justify-start bg-white">
            {children}
        </div>
    )
}