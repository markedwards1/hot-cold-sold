import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_COMMUNICATION } from "../../utils/mutations";

import Auth from "../../utils/auth";
const CommentForm = (  ) => {
  const { clientId } = useParams();
  const [type, setType] = useState("");
  const [text, setText] = useState("");

  const [addCommunication] = useMutation(ADD_COMMUNICATION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addCommunication({
        variables: {
          clientId,
          type,
          text,
        },
      });
      setType("");
      setText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "type") {
      setType(value);
    } else if (name === "text") {
      setText(value);
    }
  };

  return (
    <div>
      <h4>Enter Communication</h4>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="type"
                placeholder="Phone, text, email"
                value={type}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="text"
                placeholder="How did it go?"
                value={text}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Communication
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
