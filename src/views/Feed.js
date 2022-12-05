import React from "react";
import Navbar from "../components/Navbar"
import FeedCard from "../components/Feed/FeedCard"
import { useNavigate } from "react-router-dom";

export default function Feed() {

    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <FeedCard />

        </div>

    );
}

