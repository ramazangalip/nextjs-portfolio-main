import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ title, description, gitUrl }) => {
  return (
    <div className="bg-[#181818] p-6 rounded-xl hover:bg-[#252525] transition-all duration-300 h-full flex flex-col">
      <div className="flex-grow">
        <h5 className="text-xl font-semibold mb-2 text-white line-clamp-1">{title}</h5>
        {description && (
          <p className="text-[#ADB7BE] line-clamp-2 mb-4">{description}</p>
        )}
      </div>
      <div className="mt-auto">
        <Link
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#ADB7BE] hover:text-white transition-colors"
        >
          <CodeBracketIcon className="h-5 w-5" />
          <span>GitHub</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
