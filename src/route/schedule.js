import express from "express";
import scheduleController from "../controllers/scheduleController";
// import authentication from "../middlewares/authentication";

let router = express.Router();

let initScheduleRoutes = (app) => {
    router.get(
        "/get-schedule-doctor/:doctorId/:dateString",
        scheduleController.handleGetScheduleDoctor
    );

    return app.use("/api/v1/schedule", router);
};

module.exports = initScheduleRoutes;
