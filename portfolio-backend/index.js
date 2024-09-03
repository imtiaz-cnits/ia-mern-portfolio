const app = require("./app");
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    console.log(`App is running at port ${PORT}`);
})