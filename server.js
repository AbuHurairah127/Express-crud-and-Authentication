import express from "express";
const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
app.get("/", (req, res) => {
  console.log("Hello World at route /");
  res.send("Hello World");
});
app.get("/users", (req, res) => {
  // db
  let response = {
    statusCode: 200,
    data: [
      { id: 34, name: "sdf" },
      { id: 34, name: "sdf" },
    ],
    message: "orders successfully fetched",
  };
  res.send(response);

  // everytime call when we invoke get method of server
});
app.post("/user", (req, res) => {
  console.log("user data add");
  let response = {
    statusCode: 200,
    message: "user added",
  };
  res.json(response);

  // everytime call when we invoke get method of server
});
