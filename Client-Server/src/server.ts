import * as express from "express";
import axios from "axios";

const app = express.default(); 

app.get("/", async (req, res) => {
  try {
    // Fetch data using the client (you can use your `client.ts` logic here)
    const response = await axios.get("http://localhost:3000/users");
    const users = response.data;

    // Generate HTML to display data
    let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Users</title>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
            table {
              border-collapse: collapse;
              width: 50%;
              margin: 20px auto;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: center;
            }
            th {
              background-color: #f4f4f4;
            }
          </style>
        </head>
        <body>
          <h1 style="text-align: center;">User List</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
    `;

    // Populate table rows with user data
    users.forEach((user: any) => {
      html += `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
        </tr>
      `;
    });

    html += `
            </tbody>
          </table>
        </body>
      </html>
    `;

    // Send HTML as response
    res.send(html);
  } catch (error) {
    res.status(500).send("Error fetching user data");
  }
});

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Dmytro" }, { id: 2, name: "Ana" }]);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});