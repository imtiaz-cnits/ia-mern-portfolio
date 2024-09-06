const express = require("express");
const router = express.Router();
const PortfolioController = require("../controllers/PortfolioController");
const BlogController = require("../controllers/BlogController");
const ClientController = require("../controllers/ClientController");
const ReviewController = require("../controllers/ReviewController");
const UserController = require("../controllers/UserController");
const { AuthVerification } = require("../middlewares/AuthVerification");

// User
router.get("/check-auth", AuthVerification, UserController.checkAuth);
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.post("/verify-email", UserController.verifyEmail);
router.post("/forgot-password", UserController.forgotPassword);
router.post("/reset-password/:token", UserController.resetPassword);

// Portfolio
router.post("/PortfolioCreate", PortfolioController.PortfolioCreate);
router.get("/PortfolioList", PortfolioController.PortfolioList);
router.get(
  "/PortfolioDetails/:PortfolioID",
  PortfolioController.PortfolioDetails
);
router.get(
  "/PortfolioListByCategory/:CategoryID",
  PortfolioController.PortfolioListByCategory
);
router.post(
  "/PortfolioUpdate/:PortfolioID",
  PortfolioController.PortfolioUpdate
);
router.post(
  "/PortfolioDelete/:PortfolioID",
  PortfolioController.PortfolioDelete
);

// Portfolio Category
router.post(
  "/PortfolioCategoryCreate",
  PortfolioController.PortfolioCategoryCreate
);
router.get("/PortfolioCategoryList", PortfolioController.PortfolioCategoryList);
router.post(
  "/PortfolioCategoryUpdate/:CategoryID",
  PortfolioController.PortfolioCategoryUpdate
);
router.post(
  "/PortfolioCategoryDelete/:CategoryID",
  PortfolioController.PortfolioCategoryDelete
);

// Blog
router.post("/BlogCreate", BlogController.BlogCreate);
router.get("/BlogList", BlogController.BlogList);
router.get("/BlogDetails/:BlogID", BlogController.BlogDetails);
router.get(
  "/BlogListByCategory/:CategoryID",
  BlogController.BlogListByCategory
);
router.post("/BlogUpdate/:BlogID", BlogController.BlogUpdate);
router.post("/BlogDelete/:BlogID", BlogController.BlogDelete);

// Blog Category
router.post("/BlogCategoryCreate", BlogController.BlogCategoryCreate);
router.get("/BlogCategoryList", BlogController.BlogCategoryList);
router.post(
  "/BlogCategoryUpdate/:CategoryID",
  BlogController.BlogCategoryUpdate
);
router.post(
  "/BlogCategoryDelete/:CategoryID",
  BlogController.BlogCategoryDelete
);

// Client
router.post("/ClientCreate", ClientController.ClientCreate);
router.get("/ClientList", ClientController.ClientList);
router.post("/ClientUpdate/:CategoryID", ClientController.ClientUpdate);
router.post("/ClientDelete/:CategoryID", ClientController.ClientDelete);

// Review
router.post("/ReviewCreate", ReviewController.ReviewCreate);
router.get("/ReviewList", ReviewController.ReviewList);
router.post("/ReviewUpdate/:CategoryID", ReviewController.ReviewUpdate);
router.post("/ReviewDelete/:CategoryID", ReviewController.ReviewDelete);

module.exports = router;
