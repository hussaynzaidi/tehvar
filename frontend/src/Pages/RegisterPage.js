import { redirect, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Register from "../Components/Register";
import "../css/Comp.css"

export default function Home() {
    return (
        <>
            <Header/>
            <Register/>
        </>
    )
}