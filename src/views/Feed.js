import React from "react";
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";

export default function Feed() {

    const navigate = useNavigate();

    return (
        <div>
            <Navbar />

        </div>

    );
}

