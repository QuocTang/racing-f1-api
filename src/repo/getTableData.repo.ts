export const getTableData = ($, element) => {
  const headData = [];
  let trData = {};
  const bodyData = [];

  const headElement = $(element).find("th");
  headElement.each((_, item) => {
    const text = $(item).text();
    headData.push({ text });
  });

  const bodyElement = $(element).find("tbody");
  const trElement = $(bodyElement).find("tr");
  trElement.each((_, item) => {
    const tdElement = $(item).find("td");
    trData = {};
    tdElement.each((index, item) => {
      const text = $(item).text();
      trData[headData[index].text] = text;
    });
    bodyData.push(trData);
  });

  return { headData, bodyData };
};
