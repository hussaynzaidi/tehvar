import { redirect, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import Statistics from "../Components/Stats";
import EventSchedule from "../Components/EventSchedule";
import Speakers from "../Components/Speakers";
import AboutUs from "../Components/AboutUs";
import EventDetails from "../Components/EventDetails";

export default function Home() {
    return (
        <>
            <Header/>
            <h1>HOME</h1>
            <HeroSection/>
            <EventDetails/>
            <Statistics/>
            <AboutUs/>
            <EventSchedule/>
            <Speakers/>
        </>
    )
}