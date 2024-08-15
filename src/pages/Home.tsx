import LeftSideBar from "@/components/LeftSideBar.tsx";
import MainContent from "@/components/MainContent.tsx";
import Preview from "@/components/Preview.tsx";

function Home() {
    return (
        <div className={"grid-templates-container p-2"}>
            <LeftSideBar/>
            <MainContent/>
            <Preview/>
        </div>
    );
}

export default Home;