import { BsBoxArrowUpRight } from "react-icons/bs";

function ProjectCard({ project }) {
  const stackItems = project.stack
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <article className="border-[#1b2c68a0] relative flex h-full w-full flex-col rounded-lg border bg-[#0b102a] p-5 transition-all duration-300 hover:border-violet-500/70 hover:bg-[#0d1230] sm:p-6">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />

      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold leading-snug text-[#16f2b3]">
            {project.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-orange-300">
            {project.role}
          </p>
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/40 text-violet-200 transition-colors hover:border-[#16f2b3] hover:text-[#16f2b3]"
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name}`}
          >
            <BsBoxArrowUpRight size={15} />
          </a>
        )}
      </div>

      <p className="flex-1 text-sm leading-6 text-gray-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {stackItems.map((item) => (
          <span
            key={item}
            className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
