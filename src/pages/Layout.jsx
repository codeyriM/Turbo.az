import { Outlet, Link } from "react-router-dom";
import './Layout.scss'
import Header from "../components/Header/Header";


export default function Layout() {
    return (

        <div>
            <div className="advertisingTop">
                <img src="/assets/Home/reklam.png" alt="" />
            </div>
            <Header />

            <Outlet />
        </div>
    )
}