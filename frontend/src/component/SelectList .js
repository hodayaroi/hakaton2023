import React from "react";
import { useState } from "react";
import "./SelectList.css";
import Products from "./Products";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SelectList = () => {
  const navigate = useNavigate();
  const itemList = [
    {
      id: 1,
      category: "ריהוט וכלי בית",
      subCategory: ["כיסאות", "שולחנות", "מיטות ומזרנים", "סלון"],
    },
    {
      id: 2,
      category: "מוצרי חשמל",
      subCategory: ["תנורי אפייה","מצלמות", "מקררים", "מגהצים"],
    },
    { id: 3, category: "רכבים", subCategory: ["פרטי", "מסחרי", "אופנועים"] },
    {
      id: 4,
      category: "עסקים למכירה/מסירה",
      subCategory: ["מסעדות", "חנויות", "משרדים"],
    },
    { id: 5, category: "ספורט", subCategory: ["כדורגל", "טניס", "שחייה"] },
    {
      id: 6,
      category: "סלולרי",
      subCategory: ["סמארטפונים", "טאבלטים", "אביזרים"],
    },
    {
      id: 7,
      category: "לתינוק ולילד",
      subCategory: ["עגלות", "כסאות בטיחות", "מוצצים"],
    },
    {
      id: 8,
      category: "קונסולות משחק",
      subCategory: ["PlayStation", "Xbox", "Nintendo"],
    },
    {
      id: 9,
      category: "מחשבים וציוד נלווה",
      subCategory: ["מחשבים ניידים", "מדפסות", "מקלדות"],
    },
    {
      id: 10,
      category: "לגינה",
      subCategory: ["גינה פנימית", "גינת חוץ", "ציוד גינה"],
    },
  ];
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    location: "",
    status: "",
    price: "",
    link: "",
  });

  const location = ["מרכז", "דרום", "צפון", "השרון"];
  const statusProduct = [
    "לא רלוונטי",
    "דרוש תיקון/שיפוץ",
    "משומש",
    "כמו חדש",
    "חדש באריזה",
  ];
  let [filteredData, setfilteredData] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);
  const handleSearch = () => {
    // Here you can implement your search logic based on the formData
    console.log(formData);

    // GET request using fetch inside useEffect React hook
    fetch(
      `http://localhost:8000/api/v1/tasks/${formData.category}/${formData.subCategory}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // const priceValue = parseInt(data[0][3].replace(" ₪", ""));
        // parseInt(item[3].replace(" ₪", ""));
        const dataP = data?.map((item) => {
          const updatedItem = [...item]; // Create a copy of the sublist
          updatedItem[3] = parseInt(item[3].replace(" ₪", "")); // Update the third element to an empty string
          return updatedItem;
        });
        // console.log(dataP);

        //         // Get the reference to the "results" div
        // var resultsDiv = document.getElementById("results");

        // // Create a table element
        // var table = document.createElement("table");

        // // Iterate over each row in the dataP array
        // for (var i = 0; i < dataP.length; i++) {
        //   var rowData = dataP[i];

        //   // Create a new table row
        //   var row = document.createElement("tr");

        //   // Iterate over each cell in the row
        //   for (var j = 0; j < rowData.length; j++) {
        //     var cellData = rowData[j];

        //     // Create a new table cell
        //     var cell = document.createElement("td");

        //     // Set the cell's text content to the corresponding data
        //     cell.textContent = cellData;

        //     // Append the cell to the current row
        //     row.appendChild(cell);
        //   }

        //   // Append the row to the table
        //   table.appendChild(row);
        // }

        // // Append the table to the "results" div
        // resultsDiv.appendChild(table);

        // // Show the "results" div
        // resultsDiv.style.display = "block";
        // resultsDiv.style.display = "none";

        // Handle the retrieved data
        filteredData = dataP.filter((item) => item[3] <= formData.price);
        setfilteredData(filteredData);
        navigate('/product', { state: { filteredData } });
        console.log(filteredData);
        //" ₪"
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error
        // ...
      });

    // Reset the form data after search if needed
    setFormData({
      category: "",
      subCategory: "",
      location: "",
      status: "",
      price: "",
    });
  };

  return (
    <div>
      <div className="select-container">
        <div className="select-container-item">
          <label htmlFor="category">קטגוריה</label>
          <select
            id="category"
            name="category"
            className="category-select"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="" className="gray-option">
              -- בחר קטגוריה --
            </option>
            {itemList.map((item) => (
              <option key={item.id} value={item.category}>
                {item.category}
              </option>
            ))}
          </select>
        </div>
        <div className="select-container-item">
          <label htmlFor="subCategory">תת קטגוריה</label>
          <select
            id="subCategory"
            name="subCategory"
            className="sub-category-select"
            value={formData.subCategory}
            onChange={handleInputChange}
          >
            <option value="">-- בחר תת קטגוריה --</option>
            {itemList.map((item) => {
              if (item.category === formData.category) {
                return item.subCategory.map((subCategory) => (
                  <option key={subCategory} value={subCategory}>
                    {subCategory}
                  </option>
                ));
              }
              return null;
            })}
          </select>
        </div>
        <div className="select-container-item">
          <label htmlFor="location">איזור בארץ</label>
          <select
            id="location"
            name="location"
            className="location-select"
            value={formData.location}
            onChange={handleInputChange}
          >
            <option value="">-- בחר איזור --</option>
            {location.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="select-container-item">
          <label htmlFor="status">מצב מוצר</label>
          <select
            id="status"
            name="status"
            className="status-select"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="">-- בחר מצב --</option>
            {statusProduct.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="select-container-item">
          <label htmlFor="priceRange">טווח מחירים</label>
          <input
            type="number"
            name="price"
            id="priceRange"
            min="1"
            max="50000"
            value={formData.price}
            placeholder="הזן מספר עד 50,000"
            onChange={handleInputChange}
            className="price-range-input"
          />
        </div>
        <div className="search-button-container">
          <button className="search-button" onClick={handleSearch}>
            חיפוש
          </button>
          {filteredData.length > 0 ? (
            <Products filteredData={filteredData} />
          ) : null}
        </div>
      </div>
      <div id="results"></div>
    </div>
  );
};

export default SelectList;
