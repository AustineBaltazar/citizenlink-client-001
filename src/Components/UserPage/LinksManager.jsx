import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const LinksManager = () => {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState({ link: "", description: "" });
  const [editLinkId, setEditLinkId] = useState(null);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    fetchLinks();
    decodeToken();
  }, []);

  const decodeToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.role);
    }
  };

  const fetchLinks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/link");
      setLinks(response.data);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  const createLink = async () => {
    try {
      // Check if the link starts with http:// or https://, if not, prepend it
      const linkToAdd =
        newLink.link.startsWith("http://") ||
        newLink.link.startsWith("https://")
          ? newLink.link
          : `http://${newLink.link}`;

      const response = await axios.post(
        "http://localhost:4000/api/link/add",
        { ...newLink, link: linkToAdd } // Use the validated link
      );
      setLinks([...links, response.data]);
      setNewLink({ link: "", description: "" });
    } catch (error) {
      console.error("Error creating link:", error);
    }
  };

  const updateLink = async (id, updatedLink) => {
    try {
      // Check if the updated link starts with http:// or https://, if not, prepend it
      const linkToUpdate =
        updatedLink.link.startsWith("http://") ||
        updatedLink.link.startsWith("https://")
          ? updatedLink.link
          : `http://${updatedLink.link}`;

      await axios.put(
        `http://localhost:4000/api/link/edit/${id}`,
        { ...updatedLink, link: linkToUpdate } // Use the validated link
      );
      setEditLinkId(null); // Exit edit mode
      // Update the links in state directly without fetching them again from the server
      setLinks(
        links.map((link) =>
          link._id === id ? { ...link, ...updatedLink } : link
        )
      );
    } catch (error) {
      console.error("Error updating link:", error);
    }
  };

  const deleteLink = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/link/${id}`);
      setLinks(links.filter((link) => link._id !== id));
    } catch (error) {
      console.error("Error deleting link:", error);
    }
  };

  const toggleEdit = (id) => {
    setEditLinkId(id === editLinkId ? null : id);
  };

  return (
    <div className="p-4">
      {userRole === "regional" && (
        <div className="mb-4 flex flex-col">
          <h3 className="text-lg font-bold mb-2">Add New Link</h3>
          <input
            type="text"
            placeholder="Link"
            value={newLink.link}
            onChange={(e) => setNewLink({ ...newLink, link: e.target.value })}
            className="border border-gray-300  rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={newLink.description}
            onChange={(e) =>
              setNewLink({ ...newLink, description: e.target.value })
            }
            className="border border-gray-300  rounded-md mb-2"
          />
          <button
            onClick={createLink}
            className="bg-blue-500 text-white  rounded-md hover:bg-blue-600"
          >
            Add Link
          </button>
        </div>
      )}
      <div>
        <ul>
          {links.map((link, index) => (
            <li key={link._id}>
              {editLinkId === link._id ? (
                <>
                  <input
                    type="text"
                    value={link.link}
                    onChange={(e) =>
                      setLinks(
                        links.map((l) =>
                          l._id === link._id
                            ? { ...l, link: e.target.value }
                            : l
                        )
                      )
                    }
                    className="border border-gray-300 px-2 py-1 rounded-md mb-2"
                  />
                  <input
                    type="text"
                    value={link.description}
                    onChange={(e) =>
                      setLinks(
                        links.map((l) =>
                          l._id === link._id
                            ? { ...l, description: e.target.value }
                            : l
                        )
                      )
                    }
                    className="border border-gray-300 px-2 py-1 rounded-md mb-2"
                  />
                  <button
                    onClick={() =>
                      updateLink(link._id, {
                        link: link.link,
                        description: link.description,
                      })
                    }
                    className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600"
                  >
                    Done
                  </button>
                </>
              ) : (
                <>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-red-700 transition-colors duration-300"
                  >
                    {index + 1}. {link.description}
                  </a>
                  {userRole === "regional" && (
                    <>
                      <button
                        onClick={() => toggleEdit(link._id)}
                        className="text-sm bg-blue-500 text-white px-1 py-1 rounded-md mr-1 ml-3 hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteLink(link._id)}
                        className="bg-red-500 text-sm text-white px-1 py-1 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LinksManager;
