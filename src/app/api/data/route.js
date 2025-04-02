import fs from "fs";
import path from "path";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type"); // Get data type (products, contacts, finishes)

  if (!type) {
    return new Response(JSON.stringify({ error: "Missing data type" }), { status: 400 });
  }

  const filePath = path.join(process.cwd(), "src", "data", `${type}.json`);

  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify({ items: [] }, null, 2), "utf-8");
    }
    const jsonData = fs.readFileSync(filePath, "utf-8");
    return new Response(jsonData, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to read data" }), { status: 500 });
  }
}

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  if (!type) {
    return new Response(JSON.stringify({ error: "Missing data type" }), { status: 400 });
  }

  const filePath = path.join(process.cwd(), "src", "data", `${type}.json`);
  
  try {
    const newData = await req.json();
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), "utf-8");
    return new Response(JSON.stringify({ message: "Data updated successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to write data" }), { status: 500 });
  }
}
