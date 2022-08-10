import { ProfileScreen } from "../components/ProfileScreen";
import { ProfileScreenLoading } from "../components/Loading/ProfileScreenLoading";
import { useSearchBar } from "../contexts/SearchBarContext";
import Error404Video from "./../assets/404 error lost in space.mp4";

export function Home() {
    
    const { data } = useSearchBar();

    return (
        <>
            {!data ? (
                <ProfileScreenLoading/>
            ) : (
                data !== undefined ? (
                    <ProfileScreen 
                        userData={data}
                    />
                ) : (
                    <div className="flex items-start justify-center min-h-screen h-full">
                        <video src={Error404Video} autoPlay loop width={500} height={500}/>
                    </div>
                )
            )}
        </>
    )
}