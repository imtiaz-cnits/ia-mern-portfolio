const dotenv = require("dotenv");
const { MailtrapClient } = require("mailtrap");

dotenv.config();

exports.mailtrapClient = new MailtrapClient({
    token: process.env.MAILTRAP_TOKEN,
});

exports.sender = {
    email: "mailtrap@demomailtrap.com",
    name: "Rahat",
};
