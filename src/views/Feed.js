import React from "react";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom";

export default function Feed() {

    const navigate = useNavigate();

    return (
        <div>
            <Header />

        </div>

    );
}

