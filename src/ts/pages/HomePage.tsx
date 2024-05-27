import Header from "@components/Header";
import Main from "@components/Main";
import Spotlight from "@components/Spotlight";

const HomePage = () => {
    return (
        <>
            <Spotlight />
            <div className="homepage p-4 lg:flex">
                <Header />
                <Main />
            </div >
        </>
    )
}
export default HomePage