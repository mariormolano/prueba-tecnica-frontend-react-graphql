import AppLogo from "../atoms/appLogo";
import AppTitle from "../atoms/appTitle";

const TitleBar = () => {
    return (
        <div className="title-bar-container">
            <AppLogo />
            <AppTitle />
        </div>
    );
};
export default TitleBar;