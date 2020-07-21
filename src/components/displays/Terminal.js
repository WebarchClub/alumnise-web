import React from "react";
import firebase from "./firebase";
import "../.././style/form.css";

const Terminal = ({ userData }) => {
    const [name, setname] = React.useState(userData.displayName);
    const [batch, setbatch] = React.useState("");
    const [company, setcompany] = React.useState("");
    const [position, setposition] = React.useState("");
    const [salary, setsalary] = React.useState("");
    const [description, setdescription] = React.useState("");
    const [placed, setplaced] = React.useState("");
    const [require, setrequire] = React.useState("");
    const userID = userData.id;
    const Username = userData.displayName;
    const email=  JSON.stringify(userData.emails);
    const addDataHandler = (e) => {
        e.preventDefault();
        const today = new Date();
        const db = firebase.firestore();
        db.collection("posts")
            .add({
                approve: false,
                name: name,
                batch: batch,
                company: company,
                position: position,
                salary: salary,
                description: description,
                placed: placed,
                requirements: require,
                id: userID,
                time:today,
                email: email
            })
            .then(function () {
                document.getElementById("terminal").reset();
                setbatch("");
                setcompany("");
                setposition("");
                setsalary("");
                setdescription("");
                setplaced("");
                setrequire("");
                alert("Your response has been submitted for approval");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    };
    const handleOptionChange = (e) => {
        setplaced(e.target.value);
    };
    return (
        <div className="window">
            <div className="title-bar">
                <div className="content">
                    <form id="terminal">
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
                            placeholder="Minimum Requirements for the position"
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
                            placeholder="Salary range"
                            onChange={(e) => setsalary(e.target.value)}
                        />
                        <textarea
                            name="description"
                            placeholder="Your placement experience for that company"
                            id="forminput"
                            rows="5"
                            onChange={(e) => setdescription(e.target.value)}

                        ></textarea>
                        <p id="question">
                            Did you get the job?
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
                            <br/>
                        <button id="myBtn" onClick={addDataHandler}>
                            Submit
                            </button>
                        {/* <Example /> */}
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Terminal;
