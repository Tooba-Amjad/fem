import React, { useState, useRef } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import '../style/AddProduct.css'

const AddMarketPage = () => {
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const [form, setForm] = useState({
    name: "",
    showInNavbar: false,
    navbarImage: null,
    mainImage: null,
    navbarDescription: "",
    sections: [],
  });

  const [currentSection, setCurrentSection] = useState({
    heading: "",
    description: "",
    image: null,
    list: [],
  });

  const [resetCount, setResetCount] = useState(0); // For forcing ReactQuill reset

  const sectionImageInputRef = useRef(null);

  const canAddSection =
    currentSection.heading.trim() !== "" &&
    currentSection.description.trim() !== "" &&
    currentSection.image !== null;

  const handleAddSection = () => {
    if (!canAddSection) {
      alert(
        "Please fill heading, description, and select an image before adding the section."
      );
      return;
    }

    setForm((prev) => ({
      ...prev,
      sections: [...prev.sections, currentSection],
    }));

    // Reset currentSection state
    setCurrentSection({
      heading: "",
      description: "",
      image: null,
      list: [],
    });

    // Increment resetCount to force ReactQuill reset
    setResetCount((prev) => prev + 1);

    if (sectionImageInputRef.current) {
      sectionImageInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.sections.length === 0) {
      alert("Please add at least one section before submitting.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("showInNavbar", form.showInNavbar);
      formData.append("navbarDescription", form.navbarDescription);
      if (form.navbarImage) formData.append("navbarImage", form.navbarImage);
      if (form.mainImage) formData.append("mainImage", form.mainImage);

      const sectionsWithImageKeys = form.sections.map((section, index) => {
        const imageKey = `sectionImage${index}`;
        formData.append(imageKey, section.image);

        return {
          heading: section.heading,
          description: section.description,
          list: section.list,
          imageKey,
        };
      });

      formData.append("sections", JSON.stringify(sectionsWithImageKeys));

      await axios.post(`${API_BASE_URL}/api/market/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Market added successfully!");

      setForm({
        name: "",
        showInNavbar: false,
        navbarImage: null,
        mainImage: null,
        navbarDescription: "",
        sections: [],
      });

      setCurrentSection({
        heading: "",
        description: "",
        image: null,
        list: [],
      });

      setResetCount((prev) => prev + 1);

      if (sectionImageInputRef.current) {
        sectionImageInputRef.current.value = "";
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Error adding market.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-title">Add Market</h2>

      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="form-input"
        required
      />

      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={form.showInNavbar}
          onChange={(e) => setForm({ ...form, showInNavbar: e.target.checked })}
        />
        <span>Show in Navbar</span>
      </label>

      {form.showInNavbar && (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setForm({ ...form, navbarImage: e.target.files[0] })}
            className="form-input mb-4"
            required
          />

          <input
            type="text"
            placeholder="Navbar Description"
            value={form.navbarDescription}
            onChange={(e) => setForm({ ...form, navbarDescription: e.target.value })}
            className="form-input mb-4"
            required
          />
        </>
      )}

      <label className="block font-medium">Main Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setForm({ ...form, mainImage: e.target.files[0] })}
        className="form-input"
        required
      />

      <div className="section-box">
        <h2 className="section-title">Add Section</h2>

        <input
          type="text"
          placeholder="Heading"
          value={currentSection.heading}
          onChange={(e) =>
            setCurrentSection({ ...currentSection, heading: e.target.value })
          }
          className="form-input mb-2"
        />

        <ReactQuill
          key={resetCount} // <-- Key added here to force reset
          value={currentSection.description}
          onChange={(value) =>
            setCurrentSection({ ...currentSection, description: value })
          }
          className="quill-editor mb-2"
        />

        <input
          ref={sectionImageInputRef}
          type="file"
          accept="image/*"
          onChange={(e) =>
            setCurrentSection({ ...currentSection, image: e.target.files[0] })
          }
          className="form-input mb-2"
        />

        <textarea
          placeholder="List items (comma separated)"
          value={currentSection.list.join(", ")}
          onChange={(e) =>
            setCurrentSection({
              ...currentSection,
              list: e.target.value.split(",").map((item) => item.trim()),
            })
          }
          className="form-input"
        />

        <button
          type="button"
          onClick={handleAddSection}
          disabled={!canAddSection}
          className="add-btn"
        >
          Add Section
        </button>
      </div>

      {form.sections.length > 0 && (
        <div className="section-summary">
          <h3 className="font-semibold">Added Sections:</h3>
          <ul className="list-disc ml-6">
            {form.sections.map((section, idx) => (
              <li key={idx}>
                <strong>{section.heading}</strong> — {section.description} (Image:{" "}
                {section.image?.name || "No image"})
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="submit"
        className="submit-btn"
        disabled={form.sections.length === 0}
      >
        Submit
      </button>
    </form>
  );
};

export default AddMarketPage;
