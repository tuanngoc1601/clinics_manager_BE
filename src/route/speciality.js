import express from "express";
import specialityController from "../controllers/specialityController";
// import authentication from "../middlewares/authentication";

let router = express.Router();

let initSpecialityRoutes = (app) => {
    router.get(
        "/get-all-specialities",
        specialityController.handleGetAllSpecialities
    );

    router.get(
        "/get-speciality-detail/:specialityId",
        specialityController.handleGetSpecialityDetail
    );

    return app.use("/api/v1/speciality", router);
};

module.exports = initSpecialityRoutes;
