import React from "react";
import SlotM from "./SlotM";

const Project1 = () => {
    return (
        <>
            <h3 className="slot_inner">🎰 Welcome to<span style={{ fontWeight: "bold" }}>Slot machine game</span>🎰</h3>

            <div className="slotmachine">
                <SlotM x="😄" y="😄" z="😄" />
                <hr />
                <SlotM x="🍓" y="🍌" z="🍎" />
                <hr />
                <SlotM x="💛" y="💛" z="💛" />
                <hr />
                <SlotM x="⚾" y="🏀" z="⚾" />
            </div>
        </>
        )
    };

export default Project1

