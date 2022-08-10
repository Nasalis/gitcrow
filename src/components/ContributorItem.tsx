import { TwitterLogo } from "phosphor-react";

interface Props {
  collaborator: {
    avatarUrl: string;
    name: string;
    twitterUsername: string;
    websiteUrl: string;
    url: string;
  }
}

export function ContributorItem({collaborator}: Props) {

  return (
    <li className="relative flex items-center rounded-lg justify-start w-full h-24 gap-3 bg-white-200 dark:bg-black-100 hover:bg-[#f1f1f1] dark:hover:bg-black-200">
      <div className="flex items-center w-full h-full gap-3 p-3 transition-all overflow-hidden hover:scale-95">
        <img 
          className="w-10 h-10 rounded-full z-10"
          src={collaborator.avatarUrl} 
          alt="Contributor's image" 
        />
        <div className="flex flex-col z-10">
          <a 
            href={collaborator.url} 
            target="_blank" 
            className="text-black-100 dark:text-white-100 text-opacity-75 text-base font-medium cursor-pointer hover:underline"
          >
            {collaborator.name}
          </a>
          <footer className="mt-2">
            {collaborator.twitterUsername ? (
              <a 
                href={`https://twitter.com/${collaborator.twitterUsername}`} 
                target="_blank"                
                className="flex items-center text-black-100 dark:text-white-100 text-xs gap-x-2 cursor-pointer hover:underline"
              >
                <TwitterLogo weight="fill" color="#1DA1F2"/>
                <span>
                  {collaborator.twitterUsername}
                </span>
              </a>
            ) : null}
          </footer>
        </div>
      </div>
    </li>
  )
}