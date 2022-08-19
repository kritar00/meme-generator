import React from "react";

export default function Meme() {
    return (
        <main className="meme--wrapper">
            <form>
                <div className="input--container">
                    <input type={"text"} id="header" name="header" placeholder="text in here" />
                    <input type={"text"} id="footer" name="footer" placeholder="text in here" />
                </div>
                <button type="button">Get a new meme image</button>
            </form>
        </main>
    )
}