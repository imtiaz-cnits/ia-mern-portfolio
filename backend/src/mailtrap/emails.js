const {
    PASSWORD_RESET_REQUEST_TEMPLATE,
    PASSWORD_RESET_SUCCESS_TEMPLATE,
    VERIFICATION_EMAIL_TEMPLATE,
} = require("./emailTemplates");
const { mailtrapClient, sender } = require("./mailtrap.config.js");

exports.sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace(
                "{verificationCode}",
                verificationToken
            ),
            category: "Email Verification",
        });

        console.log("Email Sent successfully", response);
    } catch (err) {
        console.error(`Error sending verification email: ${err}`);
        throw new Error(`Error sending verification email: ${err}`);
    }
};

exports.sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "44763d72-40fc-4272-8891-94c6587946a9",
            template_variables: {
                company_info_name: "Auth Company",
                name: name,
                company_info_address: "Test_Company_info_address",
                company_info_city: "Test_Company_info_city",
                company_info_zip_code: "Test_Company_info_zip_code",
                company_info_country: "Test_Company_info_country",
            },
        });
        console.log("Welcome email sent successfully", response);
    } catch (err) {
        console.error(`Error sending verification email: ${err}`);
        throw new Error(`Error sending verification email: ${err}`);
    }
};

exports.sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        });
        console.log("Reset password email sent successfully", response);
    } catch (err) {
        console.log(`Error sending password reset email: ${err}`);
        throw new Error(`Error sending password reset email: ${err}`);
    }
};

exports.sendResetSuccessEmail = async (email) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        });

        console.log("Password reset email sent successfully", response);
    } catch (err) {
        console.log(`Error sending password reset success email: ${err}`);
        throw new Error(`Error sending password reset success email: ${err}`);
    }
};
