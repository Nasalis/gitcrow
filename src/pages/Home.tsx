import { ProfileScreen } from "../components/ProfileScreen";
import { ProfileScreenLoading } from "../components/ProfileScreenLoading";
import { useSearchBar } from "../contexts/SearchBarContext";
import Error404Video from "./../assets/404 error lost in space.mp4";
import { Repository } from "./Repository";


export function Home() {
    
    const {
        allContributions,
        topLanguages,
        topLanguagesTotalSize,
        userData,
        loading
    } = useSearchBar();

    return (
        <>
            {/* {loading ? (
                <ProfileScreenLoading/>
            ) : (
                userData.data !== undefined ? (
                    <ProfileScreen 
                        allContributions={allContributions} 
                        topLanguages={topLanguages} 
                        topLanguagesTotalSize={topLanguagesTotalSize} 
                        userData={userData}
                    />
                ) : (
                    <div className="flex items-start justify-center min-h-screen h-full">
                        <video src={Error404Video} autoPlay loop width={500} height={500}/>
                    </div>
                )
            )} */}
            <Repository/>
        </>
    )
}