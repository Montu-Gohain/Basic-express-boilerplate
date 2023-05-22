const app = require("express")();

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Express server is running at an EC2 Instance",
  });
});

const PORT = process.env.PORT || 6060;

app.listen(PORT, (req, res) => console.log(`Server listening on ${PORT}`));
