const ProjectCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/60 dark:from-indigo-950/50 dark:to-slate-900 rounded-lg hover:scale-105 transition-transform border border-indigo-200 dark:border-indigo-800 shadow-sm">{children}</div>;
};

export default ProjectCard;
