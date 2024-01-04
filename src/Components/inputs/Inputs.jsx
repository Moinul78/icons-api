import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../Context/GLobalProvider";

const Inputs = () => {
  const { icons, setInputIcons } = useContext(GlobalContext);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (inputValue.trim() === "") {
      setInputIcons([]);
      setFilteredData([]);
      return;
    }

    const filteredIcons = icons.filter((icon) =>
      icon.category.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filteredIcons);
    setInputIcons(filteredIcons);
  }, [inputValue, icons, setInputIcons]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className="w-8/12 mx-auto mt-3 mb-6">
      <form>
        <input
          type="text"
          name="name"
          value={inputValue}
          placeholder="Search"
          className="border-2 w-full p-4 rounded"
          onChange={handleInputChange}
        />
      </form>
      {filteredData.length === 0 && inputValue !== "" && (
        <p className="text-red-500 mt-2">No data found</p>
      )}
    </div>
  );
};

export default Inputs;
