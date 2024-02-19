import clinicService from "../services/clinicService";

const clinicController = {
    handleGetAllClinics: async (req, res) => {
        const allClinics =
            await clinicService.handleGetAllClinicsService();
        return res.status(200).json({
            message: "Ok",
            data: allClinics,
        });
    },
};

module.exports = clinicController;
