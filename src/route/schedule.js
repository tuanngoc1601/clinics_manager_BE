import express from "express";
import scheduleController from "../controllers/scheduleController";
import authentication from "../middlewares/authentication";

let router = express.Router();

let initScheduleRoutes = (app) => {
    router.get(
        "/get-schedule-doctor/:doctorId/:dateString",
        scheduleController.handleGetScheduleDoctor
    );
    router.get(
        "/get-all-time-code",
        authentication.verifyToken,
        scheduleController.handleGetAllTimeCode
    );
    router.post(
        "/add-schedule-time-doctor",
        authentication.verifyToken,
        scheduleController.handleAddScheduleTimeDoctor
    );
    router.delete(
        "/delete-schedule-time-doctor",
        authentication.verifyToken,
        scheduleController.handleDeleteScheduleTimeDoctor
    );

    return app.use("/api/v1/schedule", router);
};

module.exports = initScheduleRoutes;
