import React, { useState } from "react";
import memesData from "../memesData.js"

export default function Meme() {

    const [memeImage, setMemeImage] = useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)

    }

    return (
        <main className="meme--wrapper">
            <form>
                <div className="input--container">
                    <input type={"text"} id="header" name="header" placeholder="text in here" />
                    <input type={"text"} id="footer" name="footer" placeholder="text in here" />
                </div>
                <button onClick={getMemeImage} type="button">Get a new meme image</button>
            </form>
                <img style={memeImage ? {display:"block"} : {display:"none"}} src={memeImage} className="meme--image" alt="just-meme" />
        </main>
    )   
}