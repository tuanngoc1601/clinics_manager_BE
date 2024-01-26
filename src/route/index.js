import initAuthRoutes from "./auth";
import initSpecialityRoutes from "./speciality";

export const initWebRoutes = (app) => {
    initAuthRoutes(app);
    initSpecialityRoutes(app);
};
