import React from "react";

type Repository = {
  name: string;
  language: string | null;
  stars: number;
  forks: number;
  description: string;
  updatedBy: string;
  updatedDays: number;
};

const RepoCard: React.FC<{ repositorie: Repository }> = ({ repositorie }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{repositorie.name}</h3>
        <div className="flex items-center space-x-2">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-400 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {repositorie.stars}
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 text-gray-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {repositorie.forks}
          </span>
        </div>
      </div>
      {repositorie.language && (
        <span className="text-sm text-blue-600 mb-2 inline-block">
          {repositorie.language}
        </span>
      )}
      <p className="text-sm text-gray-600 mb-4">{repositorie.description}</p>
    </div>
    <div className="flex items-center text-sm text-gray-500">
      <img
        src={`https://github.com/identicons/${repositorie.updatedBy}.png`}
        alt={repositorie.updatedBy}
        className="w-5 h-5 rounded-full mr-2"
      />
      <span>
        {repositorie.updatedBy} · Updated {repositorie.updatedDays} days ago
      </span>
    </div>
  </div>
);

const dummyReposData = [
  {
    name: "Portfolio",
    language: "JavaScript",
    stars: 18,
    forks: 2,
    description: "Simple Tailwindcss + Shadcn UI Portfolio",
    updatedBy: "Lufixy",
    updatedDays: 40,
  },
  {
    name: "ciaey",
    language: "JavaScript",
    stars: 3,
    forks: 2,
    description: "A simple site made for selling cheap...",
    updatedBy: "Lufixy",
    updatedDays: 156,
  },
  {
    name: "blog",
    language: null,
    stars: 1,
    forks: 0,
    description: "blog has no description",
    updatedBy: "Lufixy",
    updatedDays: 140,
  },
  {
    name: "proxy-list",
    language: null,
    stars: 1,
    forks: 0,
    description: "proxy-list has no description",
    updatedBy: "Lufixy",
    updatedDays: 145,
  },
  {
    name: "Discord-Auth-Bot",
    language: null,
    stars: 0,
    forks: 0,
    description: "Backup your servers like channels, ...",
    updatedBy: "Lufixy",
    updatedDays: 81,
  },
];

const GitHubRepositories: React.FC<{ repositories?: Repository[] }> = ({
  repositories = dummyReposData,
}) => {
  return (
    <div className="bg-purple-100 p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <svg className="w-8 h-8 mr-2" viewBox="0 0 16 16" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
        Github repositories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repositories.map((repo, index) => (
          <RepoCard key={index} repositorie={repo} />
        ))}
      </div>
    </div>
  );
};

export default GitHubRepositories;

// Usage example:
// <GitHubRepositories />
// Or with custom data:
// <GitHubRepositories repositories={customReposData} />
