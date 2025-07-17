import path from "path";
import fs from "fs";

const fetchHandler = async <T>(url: string): Promise<ActionResponse<T>> => {
  const fileContents = fs.readFileSync(path.join(process.cwd(), url), "utf8");

  return {
    success: true,
    data: JSON.parse(fileContents)
  };
};

export default fetchHandler;
