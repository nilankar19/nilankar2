import ProjectCards from "./ProjectsCard"


export default function Projects({children}) {

    return(
        <div className="projects flex flex-col ml-60  ">
            {children}
        </div>
    )
}