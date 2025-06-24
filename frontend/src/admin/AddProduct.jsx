import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Spreadsheet from "react-spreadsheet";
import '../style/AddProduct.css'
const AddProductForm = () => {
  const [title, setTitle] = useState("");
const [allProducts, setAllProducts] = useState([]);
const [selectedSubpages, setSelectedSubpages] = useState([]); 
  const [description, setDescription] = useState("");
  const [featureType, setFeatureType] = useState("list");
  const [featuresList, setFeaturesList] = useState("");
  const [featuresDescription, setFeaturesDescription] = useState("");
  const [applicableMarkets, setApplicableMarkets] = useState([]);
  const [heroImage, setHeroImage] = useState(null);
  const [isNavbar, setIsNavbar] = useState(false);
  const [navbarDescription, setNavbarDescription] = useState("");
  const [navbarImage, setNavbarImage] = useState(null);
  const [markets, setMarkets] = useState([]);

  const [showTablePrompt, setShowTablePrompt] = useState(false);
  const [tableRows, setTableRows] = useState(1);
  const [tableCols, setTableCols] = useState(1);
  const [tableHeadingInput, setTableHeadingInput] = useState("");

  const [technicalTables, setTechnicalTables] = useState([]);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/market`);
        const data = await response.json();
        setMarkets(data);
      } catch (err) {
        console.error("Failed to fetch markets", err);
      }
    };
      const fetchProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product`);
      const data = await response.json();
      setAllProducts(data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };
    fetchMarkets();
    fetchProducts();
  }, []);

  const handleHeroImageChange = (e) => {
    if (e.target.files.length > 0) setHeroImage(e.target.files[0]);
  };

  const handleNavbarImageChange = (e) => {
    if (e.target.files.length > 0) setNavbarImage(e.target.files[0]);
  };

  const handleHeadingChange = (index, newHeading) => {
    const updatedTables = [...technicalTables];
    updatedTables[index].heading = newHeading;
    setTechnicalTables(updatedTables);
  };

  const handleTableChange = (index, newData) => {
    const updatedTables = [...technicalTables];
    updatedTables[index].data = newData;
    setTechnicalTables(updatedTables);
  };

  const addTable = (rows, cols, heading = "") => {
    const newData = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({ value: "" }))
    );
    const newTable = {
      id: technicalTables.length + 1,
      heading: heading,
      data: newData,
    };
    setTechnicalTables([...technicalTables, newTable]);
  };

  const removeTable = (id) => {
    setTechnicalTables(technicalTables.filter((table) => table.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let features = [];
    if (featureType === "list") {
      features = featuresList.split(",").map((f) => f.trim()).filter(Boolean);
    } else {
      features = [featuresDescription];
    }

    const apiUrl = import.meta.env.VITE_API_URL;
    const formData = new FormData();

    const transformedTables = technicalTables.map((table) => ({
      heading: table.heading || "",
      data: table.data.map((row) => row.map((cell) => String(cell.value || ""))),
    }));

    formData.append("title", title);
  

    formData.append("description", description);
    formData.append("features", JSON.stringify(features));
    formData.append("technicalTables", JSON.stringify(transformedTables));

    applicableMarkets.forEach((marketId) =>
      formData.append("applicableMarkets", marketId)
    );
    selectedSubpages.forEach((subpageId) => formData.append("subpages", subpageId));

    if (heroImage) formData.append("heroImage", heroImage);
    formData.append("isNavbar", isNavbar);

    if (isNavbar) {
      formData.append("navbarDescription", navbarDescription);
      if (navbarImage) formData.append("navbarImage", navbarImage);
    }

    try {
      const response = await fetch(`${apiUrl}/api/product`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Product added successfully!");
      } else {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { message: "Unknown error occurred" };
        }
        alert("Failed to add product: " + errorData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <label>Title *</label>
      <input
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />

     

      <label>Description *</label>
      <ReactQuill value={description} onChange={setDescription} theme="snow" />

      <label>Features Type</label>
      <select value={featureType} onChange={(e) => setFeatureType(e.target.value)}>
        <option value="list">List</option>
        <option value="description">Description</option>
      </select>

      {featureType === "list" && (
        <>
          <label>Features (comma separated)</label>
          <input
            type="text"
            value={featuresList}
            onChange={(e) => setFeaturesList(e.target.value)}
            placeholder="Feature1, Feature2, Feature3"
          />
        </>
      )}

      {featureType === "description" && (
        <>
          <label>Features Description</label>
          <ReactQuill
            value={featuresDescription}
            onChange={setFeaturesDescription}
            theme="snow"
          />
        </>
      )}

      <label>Hero Image</label>
      <input type="file" accept="image/*" onChange={handleHeroImageChange} />

      <label>Applicable Markets</label>
      <select
        multiple
        value={applicableMarkets}
        onChange={(e) => {
          const selectedOptions = Array.from(e.target.selectedOptions).map((o) => o.value);
          setApplicableMarkets(selectedOptions);
        }}
      >
        {markets.map((market) => (
          <option key={market._id} value={market._id}>
            {market.name}
          </option>
        ))}
      </select>

      <label>
        <input
          type="checkbox"
          checked={isNavbar}
          onChange={(e) => setIsNavbar(e.target.checked)}
        />{" "}
        Show in Navbar
      </label>

      {isNavbar && (
        <>
          <label>Navbar Description</label>
          <ReactQuill
            value={navbarDescription}
            onChange={setNavbarDescription}
            theme="snow"
          />

          <label>Navbar Image</label>
          <input type="file" accept="image/*" onChange={handleNavbarImageChange} />
        </>
      )}
<label>Subpages (Select related products)</label>
<div style={{ maxHeight: 150, overflowY: "auto", border: "1px solid #ccc", padding: 10, marginBottom: 20 }}>
  {allProducts.length === 0 ? (
    <p>No products available</p>
  ) : (
    allProducts.map((product) => (
      <div key={product._id} style={{ marginBottom: 5 }}>
        <label>
          <input
            type="checkbox"
            value={product._id}
            checked={selectedSubpages.includes(product._id)}
            onChange={(e) => {
              const id = e.target.value;
              if (e.target.checked) {
                setSelectedSubpages([...selectedSubpages, id]);
              } else {
                setSelectedSubpages(selectedSubpages.filter((sid) => sid !== id));
              }
            }}
          />
          {" "}{product.title}
        </label>
      </div>
    ))
  )}
</div>

      <button type="button"  className="add-btn" onClick={() => setShowTablePrompt(true)} style={{ marginBottom: 10 }}>
        Do you want to add a table?
      </button>

      {showTablePrompt && (
        <div style={{ marginBottom: 20, border: "1px solid #ccc", padding: 10 }}>
          <label>Table Heading:</label>
          <input
            type="text"
            value={tableHeadingInput}
            onChange={(e) => setTableHeadingInput(e.target.value)}
          />

          <div style={{ marginTop: 10 }}>
            <label>No. of Rows:</label>
            <input
              type="number"
              value={tableRows}
              onChange={(e) => setTableRows(parseInt(e.target.value))}
              min="1"
              style={{ width: 60, marginRight: 10 }}
            />

            <label>No. of Columns:</label>
            <input
              type="number"
              value={tableCols}
              onChange={(e) => setTableCols(parseInt(e.target.value))}
              min="1"
              style={{ width: 60 }}
            />
          </div>

          <button
            type="button"
            className="add-btn"
            onClick={() => {
              addTable(tableRows, tableCols, tableHeadingInput);
              // setShowTablePrompt(false);
              setTableRows(1);
              setTableCols(1);
              setTableHeadingInput("");
            }}
            style={{ marginTop: 10 }}
          >
            Add Table
          </button>
        </div>
      )}

      {technicalTables.map((table, index) => (
        <div key={table.id} style={{ marginBottom: "20px" }}>
          <label>Table Heading:</label>
          <input
            type="text"
            value={table.heading || ""}
            onChange={(e) => handleHeadingChange(index, e.target.value)}
            style={{ display: "block", marginBottom: "10px" }}
          />

          <Spreadsheet
            data={table.data}
            onChange={(newData) => handleTableChange(index, newData)}
          />

          <button
            type="button"
            className="remove-btn"
            onClick={() => removeTable(table.id)}
            style={{ marginTop: "10px", color: "red" }}
          >
            Remove Table
          </button>
        </div>
      ))}

      <button className="submit-btn" type="submit">Submit</button>
    </form>
  );
};

export default AddProductForm;
