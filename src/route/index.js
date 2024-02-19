import initAuthRoutes from "./auth";
import initSpecialityRoutes from "./speciality";
import initClinicRoutes from "./clinic";

export const initWebRoutes = (app) => {
    initAuthRoutes(app);
    initSpecialityRoutes(app);
    initClinicRoutes(app);
};
