/** @format */

import React, { useRef } from "react";

export const Form = ({ replies, getComment }) => {
  const text = useRef();

  const submitComment = (e) => {
    e.preventDefault();

    let data = {
      id: "005",
      author: "Atul Kharwal",
      body: text.current.value,
      timestamp: new Date(),
      points: "4",
    };

    e.target[0].value = "";
    if (replies?.replies !== undefined) {
      replies.replies.push(data);
    } else {
      replies.replies = [data];
    }
    getComment(replies.replies);
  };

  return (
    <div>
      <form onSubmit={submitComment}>
        <input type="text" name="comment" ref={text} />
        <input type="submit" value="Add Comment" />
      </form>
    </div>
  );
};
