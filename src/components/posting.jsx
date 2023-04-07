import React from "react";

export default function Posting (props) {
    const  {post} = props;
    const { title, description, price, imageURL} = post;

    return <div className="posting">
<h1 className="posting-title">{title}</h1>
<img src={imageURL} alt={description} />
<div>
    <label>Price</label>
    <span>{price}</span>
</div>
<div>
    <label>Description</label>
    <p>{description}</p>
</div>
    </div>
}