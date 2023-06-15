import { Request, Response } from "express";
import cheerio from "cheerio";
import axios from "axios";
import { getSelectData } from "../repo/getSelectData.repo";
import { getTableData } from "../repo/getTableData.repo";

export const getResults = async (req: Request, res: Response) => {
  try {
    const { year, apiType, meetingKey, race } = req.body;
    const response = await axios(
      `https://www.formula1.com/en/results/jcr:content/resultsarchive.html/${year}/${apiType}${
        meetingKey && `/${meetingKey}`
      }${race && `/${race}`}.html`
    );

    // Load the HTML into Cheerio
    const $ = cheerio.load(response.data);

    const selectElements = $(".resultsarchive-filter-form-select");
    const selectData = getSelectData($, selectElements);

    const headTable = $(".resultsarchive-table");
    const { headData, bodyData } = getTableData($, headTable);

    const titleElement = $(".resultsarchive-content-header").html();

    res.status(200).send({
      status: true,
      selectData,
      tableData: { headData, bodyData },
      titleElement,
    });
  } catch (error) {
    //
  }
};
