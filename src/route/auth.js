import express from "express";
import authController from "../controllers/authController";
import authentication from "../middlewares/authentication";

let router = express.Router();

let initAuthRoutes = (app) => {
    // user routes
    router.post("/login", authController.handleLogin);
    router.post("/sign-up", authController.handleCreateNewUser);
    router.post("/refresh", authController.requestRefreshToken);
    router.post(
        "/logout",
        authentication.verifyToken,
        authController.handleLogout
    );

    // admin routes
    router.post("/admin/login", authController.handleLoginAdmin);
    router.post("/admin/register", authController.handleRegisterAdmin);

    return app.use("/api/v1/auth", router);
};

module.exports = initAuthRoutes;
