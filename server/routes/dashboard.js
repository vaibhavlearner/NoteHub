const express = require("express");

const router = express.Router();

const dashboardController = require("../controller/dashboardController"); // isse hi sb kuch access ho rha h
//const mainController = require("../controller/mainController");

const { isLoggedIn } = require("../middleware/checkAuth.js");

router.get("/dashboard", isLoggedIn, dashboardController.dashboard);
router.get(
    "/dashboard/item/:id",
    isLoggedIn,
    dashboardController.dashboardViewNote
);
router.post(
    "/dashboard/item/:id",
    isLoggedIn,
    dashboardController.dashboardUpdateNote
);
router.post(
    "/dashboard/item-delete/:id",
    isLoggedIn,
    dashboardController.dashboardDeleteNote
);
router.get("/dashboard/add", isLoggedIn, dashboardController.dashboardAddNote);

router.post(
    "/dashboard/add",
    isLoggedIn,
    dashboardController.dashboardAddNoteSubmit
);

router.get(
    "/dashboard/search",
    isLoggedIn,
    dashboardController.dashboardSearch
);
router.post(
    "/dashboard/search",
    isLoggedIn,
    dashboardController.dashboardSearchSubmit
);

module.exports = router;
