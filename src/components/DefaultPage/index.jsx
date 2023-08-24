import { Outlet } from "react-router-dom";
import Header from "../Header";

const DefaultPage = ({ children, onSearch }) => {
    return (
        <main>
            <Header onSearch={onSearch} />
            <Outlet />
            {children}
        </main>
    );
}
 
export default DefaultPage;