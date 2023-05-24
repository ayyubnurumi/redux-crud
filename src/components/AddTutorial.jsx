import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTutorial } from "../slice/tutorials";

export const AddTutorial = () => {
  const navigate = useNavigate();
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };

  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    const { title, description } = tutorial;

    dispatch(createTutorial({ title, description }))
      .unwrap()
      .then((data) => {
        console.log(data);
        setTutorial({
          id: data.id,
          title: data.title,
          description: data.description,
          published: data.published,
        });
        setSubmitted(true);
        navigate("/tutorial")
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Addddd
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorial.title || ""}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorial.description || ""}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submitttt
          </button>
        </div>
      )}
    </div>
  );
};
