import React, { useState } from "react";
import { getDatabase, ref, set, get, child } from "firebase/database"; // for realtime database
import { app } from "../utils/Firebase.js";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fievjcylfyyuhyofzevu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZXZqY3lsZnl5dWh5b2Z6ZXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNDc2MTAsImV4cCI6MjA1MTcyMzYxMH0.S6m6O2h6__4nMl1NJmxVaNjA9IoakiwskXCNwtQGlxw";
const supabase = createClient(supabaseUrl, supabaseKey);
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [section, setSection] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const [uploadUrl, setUploadUrl] = useState("");
  const navigate = useNavigate();

  const testSupabase = async () => {
    // Fetching todos from the 'todos' table
    try {
      let { data: todos, error } = await supabase.from("todos").select("*");
      console.log(todos);
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const dbRef = ref(db);
    try {
      const snapshot = await get(child(dbRef, "users"));
      const users = snapshot.val();
      const emailExists =
        users && Object.values(users).some((user) => user.email === email);
      if (emailExists) {
        setError("This email is already registered.");
        return;
      }
      const id = Date.now().toString();
      if (file) {
        const fileExtension = file.name.split(".").pop(); // Get the file extension without using 'path'
        const fileName = `${id}.${fileExtension}`;
        const { data, error: uploadError } = await supabase.storage
          .from("shubham")
          .upload(`public/${fileName}`, file, { upsert: true });
        if (uploadError) {
          console.error("Error uploading file:", uploadError);
          setError("Error uploading file. Please try again.");
          return;
        } else {
          const { data, error } = await supabase.storage
            .from("shubham")
            .getPublicUrl(`public/${fileName}`);
          if (error) {
            console.error("Error getting public URL:", error);
            setError("Error getting public URL. Please try again.");
            return;
          }
          setUploadUrl(data.publicUrl);
          console.log(data.publicUrl);

          await set(ref(db, "users/" + id), {
            id,
            name,
            email,
            section: "Section-" + section,
            uploadUrl: data.publicUrl,
          });
        }
      } else {
        await set(ref(db, "users/" + id), {
          id,
          name,
          email,
          section: "Section-" + section,
          uploadUrl,
        });
      }
      await set(ref(db, "emails/" + id), email);
      navigate("/server/show-list");
    } catch (error) {
      console.error("Error checking users:", error);
      setError("Error checking users. Please try again.");
    }
  };

  return (
    <section className="w-1/2">
      <h1 className="text-center mb-5 text-2xl font-bold">Student form</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-5 w-full"
      >
        <div className="flex flex-col gap-1 bg-green-400 text-center rounded-lg">
          <label htmlFor="name" className="text-[14px] text-white">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="flex-1 pl-5 pr-20 py-2 rounded-b-lg outline-none"
            name="name"
            placeholder="Enter your name"
            value={name}
          />
        </div>
        <div className="flex flex-col gap-1 bg-green-400 text-center rounded-lg">
          <label htmlFor="email" className="text-[14px] text-white">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="flex-1 pl-5 pr-20 py-2 rounded-b-lg outline-none"
            name="email"
            placeholder="Enter your email"
            value={email}
          />
        </div>
        <div className="flex flex-col gap-1 bg-green-400 text-center rounded-lg">
          <label htmlFor="section" className="text-[14px] text-white">
            Class
          </label>
          <div className="flex justify-center items-center">
            <span className="px-4 py-2 bg-white text-black font-bold">
              Section -
            </span>
            <input
              onChange={(e) => setSection(e.target.value)}
              type="text"
              className="flex-1 pl-5 pr-20 py-2 outline-none"
              name="section"
              placeholder="Enter your section"
              value={section}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-green-400 text-center rounded-lg">
          <label htmlFor="upload" className="text-[14px] text-white">
            Upload Image
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            className="flex-1 pl-5 pr-20 py-2 outline-none"
            name="upload"
            placeholder="Upload your file"
          />
        </div>
        <button
          type="submit"
          className="bg-black py-2 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black text-white font-bold"
        >
          Submit
        </button>
      </form>

      <button
        onClick={() => {
          testSupabase();
        }}
      >
        click me
      </button>
    </section>
  );
};

export default Register;
