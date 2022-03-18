/** @format */

import React, { useState } from "react";
import { Form } from "./Form";
import { format } from "timeago.js";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export const Reply = ({ replies }) => {
  const [comment, setcomment] = useState([]);
  const [show, setShow] = useState(false);

  const formData = (a) => {
    setShow(!show);
    setcomment(a);
  };

  return (
    <>
      <div className="reply">
        <div className={comment.length !== 0 ? "border-left lists" : "lists"}>
          <p>
            {replies.author} // {replies.points} points //{" "}
            {format(replies.timestamp)}
          </p>
          <h3>
            {replies?.replies ? (
              comment.length == 0 ? (
                <AiOutlinePlusCircle
                  onClick={() => setcomment(replies.replies)}
                />
              ) : (
                <AiOutlineMinusCircle onClick={() => setcomment([])} />
              )
            ) : null}{" "}
            {replies.body}
          </h3>
          <button onClick={() => setShow(!show)}>Reply</button>
                
          <button>Share</button>

          {show ? <Form replies={replies} getComment={formData} /> : ""}
          {comment.map((item) => (
            <Reply replies={item} />
          ))}
        </div>
      </div>
    </>
  );
};
