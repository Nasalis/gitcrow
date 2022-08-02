import { TwitterLogo } from "phosphor-react";

interface Props {
  image: string;
  name: string;
}

export function ContributorItem({image, name}: Props) {
  return (
    <li className="flex items-center justify-start w-full gap-3">
      <img 
        className="w-10 h-10 rounded-full"
        src={image} 
        alt="Contributor's image" 
      />
      <div className="flex flex-col">
        <span className="text-white-100 text-opacity-75 text-base font-medium">
          {name}
        </span> 
        <footer>
          <TwitterLogo weight="fill" color="#1DA1F2"/>
        </footer>
      </div>
    </li>
  )
}