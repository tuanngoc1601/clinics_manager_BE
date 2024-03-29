import express from "express";
import clinicController from "../controllers/clinicController";
// import authentication from "../middlewares/authentication";

let router = express.Router();

let initClinicRoutes = (app) => {
    router.get("/get-all-clinics", clinicController.handleGetAllClinics);
    router.get("/get-clinic-by-id/:clinicId", clinicController.handleGetClinicDetail);

    return app.use("/api/v1/clinic", router);
};

module.exports = initClinicRoutes;
