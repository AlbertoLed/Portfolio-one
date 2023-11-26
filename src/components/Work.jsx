import Project from "./Project"
import { projects } from "../projects-info"

export default function Work() {
    return(
        <div className="bg-dark-secondary rounded-5xl py-10 flex justify-center">
            <section className="w-[86%] max-w-[1100.8px]] text-dark-neutral">
                <h2 className="font-jetbrains uppercase text-3xl text-center mb-10">My work</h2>
                <div className="space-y-10">
                    {projects.map(project => 
                    <Project
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    skills={project.skills}
                    site={project.site}
                    code={project.code}
                    img={project.img}
                    color={project.color}
                    />)}
                </div>
                
            </section>
        </div>
    )
}