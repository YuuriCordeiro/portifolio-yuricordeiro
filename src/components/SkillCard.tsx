import React from 'react';

interface Skill {
  icon: string;
  title: React.ReactNode;
  description?: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
  className?: string;
  children?: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, className, children }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 ${className}`}>
      <h3 className="text-gray-900 dark:text-white text-xl font-semibold">{title}</h3>
      <div className="mt-5 flex flex-col gap-4 divide-y divide-gray-300 dark:divide-gray-700">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 py-3">
            <img
              src={skill.icon}
              alt={typeof skill.title === 'string' ? skill.title : ''}
              className="w-12 h-12 object-contain"
            />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{skill.title}</p>
              {skill.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {children && <div className="mt-5">{children}</div>}
    </div>
  );
};

export default SkillCard;
