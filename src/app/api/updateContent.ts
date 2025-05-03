// pages/api/updateContent.ts

import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { heroTitle, heroSubtitle, aboutText, productText } = req.body;

    const content = {
      heroTitle,
      heroSubtitle,
      aboutText,
      productText,
    };

    try {
      const filePath = path.resolve("./public/locales/en/content.json");
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error writing to file:", error);
      res.status(500).json({ success: false, message: "Failed to update content." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
