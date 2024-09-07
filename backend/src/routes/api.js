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

// PortfolioPage
router.post("/PortfolioCreate", AuthVerification, PortfolioController.PortfolioCreate);
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
  "/PortfolioUpdate/:PortfolioID", AuthVerification,
  PortfolioController.PortfolioUpdate
);
router.post(
  "/PortfolioDelete/:PortfolioID", AuthVerification,
  PortfolioController.PortfolioDelete
);

// PortfolioPage Category
router.post(
  "/PortfolioCategoryCreate", AuthVerification,
  PortfolioController.PortfolioCategoryCreate
);
router.get("/PortfolioCategoryList", PortfolioController.PortfolioCategoryList);
router.post(
  "/PortfolioCategoryUpdate/:CategoryID", AuthVerification,
  PortfolioController.PortfolioCategoryUpdate
);
router.post(
  "/PortfolioCategoryDelete/:CategoryID", AuthVerification,
  PortfolioController.PortfolioCategoryDelete
);

// Blog
router.post("/BlogCreate", AuthVerification, BlogController.BlogCreate);
router.get("/BlogList", BlogController.BlogList);
router.get("/BlogDetails/:BlogID", BlogController.BlogDetails);
router.get(
  "/BlogListByCategory/:CategoryID",
  BlogController.BlogListByCategory
);
router.post("/BlogUpdate/:BlogID", AuthVerification, BlogController.BlogUpdate);
router.post("/BlogDelete/:BlogID", AuthVerification, BlogController.BlogDelete);

// Blog Category
router.post("/BlogCategoryCreate", AuthVerification, BlogController.BlogCategoryCreate);
router.get("/BlogCategoryList", BlogController.BlogCategoryList);
router.post(
  "/BlogCategoryUpdate/:CategoryID", AuthVerification,
  BlogController.BlogCategoryUpdate
);
router.post(
  "/BlogCategoryDelete/:CategoryID", AuthVerification,
  BlogController.BlogCategoryDelete
);

// Client
router.post("/ClientCreate", AuthVerification, ClientController.ClientCreate);
router.get("/ClientList", ClientController.ClientList);
router.post("/ClientUpdate/:CategoryID", AuthVerification, ClientController.ClientUpdate);
router.post("/ClientDelete/:CategoryID", ClientController.ClientDelete);

// Review
router.post("/ReviewCreate", AuthVerification, ReviewController.ReviewCreate);
router.get("/ReviewList", ReviewController.ReviewList);
router.post("/ReviewUpdate/:CategoryID", AuthVerification, ReviewController.ReviewUpdate);
router.post("/ReviewDelete/:CategoryID", AuthVerification, ReviewController.ReviewDelete);

module.exports = router;
