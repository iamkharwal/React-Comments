/** @format */

import React, { useState } from "react";
import data from "../data";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Reply } from "./Reply";
import { Form } from "./Form";
import { format } from "timeago.js";

export const Comments = () => {
  const [comment, setcomment] = useState([]);
  const [show, setShow] = useState(false);

  const formData = (a) => {
    setShow(!show);
    setcomment(a);
  };

  return (
    <div className="container">
      <div className="comments">
        <h1>React Comments</h1>
        <div className={comment.length !== 0 ? "border-left lists" : "lists"}>
          <p>
            {data.author} // {data.points} points // {format(data.timestamp)}
          </p>
          <h3>
            {comment.length == 0 ? (
              <AiOutlinePlusCircle onClick={() => setcomment(data.replies)} />
            ) : (
              <AiOutlineMinusCircle onClick={() => setcomment([])} />
            )}{" "}
            {data.body}
          </h3>

          <button onClick={() => setShow(!show)}>Reply</button>
          <button>Share</button>
          {show ? <Form replies={data} getComment={formData} /> : ""}
          {comment.map((item) => (
            <Reply replies={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
