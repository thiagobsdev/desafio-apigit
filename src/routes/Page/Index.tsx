import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Index";



export default function Page () {
    return (
        <>
        <Header />
        <Outlet />
        </>
    );
}