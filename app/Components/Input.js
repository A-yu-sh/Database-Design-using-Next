"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Input = () => {
  const [task, setTask] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!task && !desc) {
      alert("Missing Required Fields");
    }

    try {
      const res = await fetch("http://localhost:3000/api/Data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task, desc }),
      });

      if (res.ok) {
        setDesc("");
        setTask("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center ">
      <input
        type="text"
        className="border-black outline-black"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <input
        type="text"
        className="border-black outline-black"
        placeholder="Enter task Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <button className="bg-gray-300 p-2 rounded-lg" onClick={HandleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default Input;
