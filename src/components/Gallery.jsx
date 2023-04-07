import React from "react";
import Posting from "./posting";
import { postings } from "../postings";

export default function Gallery() {
    return <div className="gallery">
        <h1>my gallery</h1>
        {postings.map(p => <Posting post={p} />)}
        <Posting post={postings[0]} />
    </div>
}