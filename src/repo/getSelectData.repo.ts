export const getSelectData = ($, selectElements) => {
  const selectData = {};
  let optionData = [];
  // Select all the <select> elements
  // Iterate over the selectElements array
  selectElements.each((index, element) => {
    optionData = [];
    // Get the name attribute of each <select> element
    const nameAttribute = $(element).attr("name");

    // Get the optionData within the <select> element
    const options = $(element).find("option");

    // Iterate over the optionData array
    options.each((index, option) => {
      // Get the value and text of each option
      const value = $(option).attr("value");
      const text = $(option).text();
      optionData.push({ value, text });
    });
    selectData[nameAttribute] = optionData;
  });
  return selectData;
};
