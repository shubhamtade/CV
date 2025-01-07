import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update, remove } from "firebase/database";
import { app } from "../utils/Firebase.js";
import { supabase } from "../utils/supabase.js";

const ShowList = () => {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: "",
    name: "",
    email: "",
    section: "",
    uploadUrl: "",
  });

  useEffect(() => {
    const db = getDatabase(app);
    const usersRef = ref(db, "users");

    onValue(usersRef, (snapshot) => {
      const users = snapshot.val();
      const userList = [];

      for (let id in users) {
        userList.push({ id, ...users[id] });
      }

      setData(userList);
    });
  }, []);

  const handleEditClick = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const userRef = ref(db, "users/" + currentUser.id);

    await update(userRef, {
      name: currentUser.name,
      email: currentUser.email,
      section: currentUser.section,
    });

    if (currentUser.file) {
      const fileExtension = currentUser.file.name.split(".").pop();
      const fileName = `${currentUser.id}.${fileExtension}`;
      const { data, error: uploadError } = await supabase.storage
        .from("shubham")
        .upload(`public/${fileName}`, currentUser.file, { upsert: true });
      if (uploadError) {
        console.error("Error uploading file:", uploadError);
        return;
      } else {
        const { data, error } = await supabase.storage
          .from("shubham")
          .getPublicUrl(`public/${fileName}`);
        if (error) {
          console.error("Error getting public URL:", error);
          return;
        }
        await update(userRef, {
          uploadUrl: data.publicUrl,
        });
        setCurrentUser({ ...currentUser, uploadUrl: data.publicUrl });
      }
    }

    setEditing(false);
  };

  const handleDeleteClick = async (id) => {
    const db = getDatabase(app);
    const userRef = ref(db, "users/" + id);
    const emailRef = ref(db, "emails/" + id);

    const user = data.find((user) => user.id === id);
    if (user && user.uploadUrl) {
      const fileName = user.uploadUrl.split("/").pop();
      const { error } = await supabase.storage
        .from("shubham")
        .remove([`public/${fileName}`]);
      if (error) {
        console.error("Error deleting file:", error);
        return;
      }
    }

    await remove(userRef);
    await remove(emailRef);
  };

  return (
    <section>
      <h1 className="text-center mb-5 text-2xl font-bold">List of Students</h1>
      <table className="w-full">
        <thead className="bg-green-400 text-white border border-green-400 ">
          <tr className="text-center">
            <th className="py-2 px-4 ">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Class</th>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={`text-center ${
                index === data.length - 1 ? "rounded-b-lg" : ""
              }`}
            >
              <td className="py-2 px-4 border border-black">{item.id}</td>
              <td className="py-2 px-4 border border-black">{item.name}</td>
              <td className="py-2 px-4 border border-black">{item.email}</td>
              <td className="py-2 px-4 border border-black">{item.section}</td>
              <td className="py-2 px-4 border border-black">
                {item.uploadUrl && (
                  <img
                    src={item.uploadUrl}
                    alt="User"
                    className="w-16 h-16 mx-auto"
                  />
                )}
              </td>
              <td className="py-2 px-4 border border-black">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => handleEditClick(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  onClick={() => handleDeleteClick(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editing && (
        <section className="w-full mt-5">
          <h2 className="text-center mb-5 text-2xl font-bold">Edit Student</h2>
          <form onSubmit={handleUpdate} className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-1 bg-green-400 text-center rounded-lg">
              <label htmlFor="name" className="text-[14px] text-white">
                Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="flex-1 pl-5 pr-20 py-2 rounded-b-lg outline-none"
                name="name"
                value={currentUser.name}
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-1 bg-green-400 text-center rounded-lg">
              <label htmlFor="email" className="text-[14px] text-white">
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                className="flex-1 pl-5 pr-20 py-2 rounded-b-lg outline-none"
                name="email"
                value={currentUser.email}
                placeholder="Enter your email"
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
                  onChange={handleChange}
                  type="text"
                  className="flex-1 pl-5 pr-20 py-2 outline-none"
                  name="section"
                  value={currentUser.section}
                  placeholder="Enter your section"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-green-400 text-center rounded-lg">
              <label htmlFor="file" className="text-[14px] text-white">
                Image
              </label>
              <input
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, file: e.target.files[0] })
                }
                type="file"
                className="flex-1 pl-5 pr-20 py-2 outline-none"
                name="file"
              />
              {currentUser.uploadUrl && (
                <img
                  src={currentUser.uploadUrl}
                  alt="User"
                  className="w-16 h-16 mx-auto mt-2"
                />
              )}
            </div>
            <button
              type="submit"
              className="bg-black py-2 rounded-md hover:bg-transparent hover:text-black hover:border hover:border-black text-white font-bold"
            >
              Update
            </button>
          </form>
        </section>
      )}
    </section>
  );
};

export default ShowList;
