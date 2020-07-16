import React from "react";
import firebase from "./firebase";
// import Example from "./modal/modal";
import "./App.css";

const Terminal = ({ userData }) => {
    const [name, setname] = React.useState("");
    const [batch, setbatch] = React.useState("");
    const [company, setcompany] = React.useState("");
    const [position, setposition] = React.useState("");
    const [salary, setsalary] = React.useState("");
    const [description, setdescription] = React.useState("");
    const [placed, setplaced] = React.useState("");
    const [require, setrequire] = React.useState("");
    const userID = userData.id;
    const Username = userData.displayName;

    const addDataHandler = (e) => {
        e.preventDefault();

        const db = firebase.firestore();
        db.collection("placement")
            .add({
                approve: false,
                name: name,
                batch: batch,
                company: company,
                position: position,
                salary: salary,
                description: description,
                placed: true,
                requirements: require,
            })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    };
    const handleOptionChange = (e) => {
        // placed: changeEvent.target.value
        setplaced(e.target.value);
    };
    return (
        <div className="window">
            <div className="title-bar">
                <div className="content">
                    <h1>Registration Form</h1>

                    <div className="content">
                        <form id="add-cafe-form">
                            <input
                                id="forminput"
                                type="text"
                                name="name"
                                value={Username}
                                placeholder="Name"
                                onChange={(e) => setname(e.target.value)}
                            />
                            <input
                                id="forminput"
                                type="text"
                                name="batch"
                                placeholder="Batch"
                                onChange={(e) => setbatch(e.target.value)}
                            />
                            <input
                                id="forminput"
                                type="text"
                                name="company"
                                placeholder="Company"
                                onChange={(e) => setcompany(e.target.value)}
                            />
                            <input
                                id="forminput"
                                type="text"
                                name="require"
                                placeholder="Please mention the requirements.."
                                onChange={(e) => setrequire(e.target.value)}
                            />
                            <input
                                id="forminput"
                                type="text"
                                name="position"
                                placeholder="Position"
                                onChange={(e) => setposition(e.target.value)}
                            />
                            <input
                                id="forminput"
                                type="text"
                                name="salary"
                                placeholder="Salary"
                                onChange={(e) => setsalary(e.target.value)}
                            />
                            <p id="question">
                                Were You selected for the Interviews?
                            </p>
                            <label id="radiolabel">
                                <input
                                    type="radio"
                                    value="Yes"
                                    checked={placed === "Yes"}
                                    onChange={handleOptionChange}
                                />
                                Yes
                            </label>

                            <label id="radiolabel">
                                <input
                                    type="radio"
                                    value="No"
                                    checked={placed === "No"}
                                    onChange={handleOptionChange}
                                />
                                No
                            </label>

                            <textarea
                                name="description"
                                placeholder="Description"
                                id="forminput"
                                onChange={(e) => setdescription(e.target.value)}
                            ></textarea>
                            <button id="myBtn" onClick={addDataHandler}>
                                Submit
                            </button>
                            {/* <Example /> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
