import { IProject } from '@/types';

const ProjectThumbnail = ({ project }: { project: IProject }) => {
    return (
        <div className="w-full h-full bg-background-light flex flex-col justify-center px-6 py-8 aspect-[3/2]">
            <h5 className="text-2xl font-anton mb-3">{project.title}</h5>
            <p className="text-sm text-muted-foreground mb-5 line-clamp-3">
                {project.description?.replace(/<[^>]*>/g, '').slice(0, 100)}
                ...
            </p>
            <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                    <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-muted-foreground/30 text-muted-foreground"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectThumbnail;
