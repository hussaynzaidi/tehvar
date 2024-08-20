import { redirect, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Login from "../Components/Login";

export default function Home() {
    return (
        <>
            <Header/>
            <Login/>
        </>
    )
}