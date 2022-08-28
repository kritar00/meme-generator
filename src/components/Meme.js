import React, { useState } from "react";
import memesData from "../memesData.js"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);
    // console.log(allMemeImages);
    function getMemeImage() {
        let allMemeImagesClone = allMemeImages.data.memes.slice();
        const randomNumber = Math.floor(Math.random() * allMemeImagesClone.length)
        // setMemeImage(memesArray[randomNumber].url)
        setMeme(prevMeme => {
            return (
                {
                    ...prevMeme,
                    randomImage: allMemeImagesClone[randomNumber].url
                }
            )
        })
    }
    console.log(meme);
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (meme.randomImage === "")
            return
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <main className="meme--wrapper">
            <form>
                <div className="input--container">
                    <input type={"text"} id="header" value={meme.topText} name="topText" onChange={handleChange} placeholder="Top text in here" />
                    <input type={"text"} id="footer" value={meme.bottomText} name="bottomText" onChange={handleChange} placeholder="Bottom text in here" />
                </div>
                <button onClick={getMemeImage} type="button">Get a new meme image</button>
            </form>
            <div className="meme">
                <img style={meme.randomImage ? { display: "block" } : { display: "none" }} src={meme.randomImage} className="meme--image" alt="just-meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}