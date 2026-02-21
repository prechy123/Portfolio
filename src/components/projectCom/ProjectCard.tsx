const ProjectCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-all">
      {children}
    </div>
  );
};

export default ProjectCard;
