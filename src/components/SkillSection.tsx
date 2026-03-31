type SkillSectionProps = {
  icon: React.ReactNode;
  name: string;
  level: number;
  color: string;
};
const SkillSection = ({ icon, name, level, color }: SkillSectionProps) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="text-4xl" style={{ color: color }}>
        {icon}
      </div>

      <div className="w-full">
        <p className="text-white font-semibold mb-1">{name}</p>
        <div className="w-full bg-gray-700 h-42rounded-full overflow-hidden ">
          <div
            className="h-2 rounded-full transition-all duration-1000"
            style={{ width: `${level}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>

      <span className="text-white font-bold ml-3">{level}%</span>
    </div>
  );
};

export default SkillSection;
