import clinicService from "../services/clinicService";

const clinicController = {
    handleGetAllClinics: async (req, res) => {
        const allClinics = await clinicService.handleGetAllClinicsService();
        return res.status(200).json({
            message: "Ok",
            data: allClinics,
        });
    },
    handleGetClinicDetail: async (req, res) => {
        const clinicId = req.params.clinicId;
        
        if (!clinicId) {
            return res.status(400).json({
                message: "Missing inputs parameter!",
            });
        }

        const response = await clinicService.handleGetClinicDetailService(
            clinicId
        );

        if (!response)
            return res.status(403).json({ message: "Not found clinic!" });

        return res.status(200).json({
            message: "OK",
            data: response,
        });
    },
};

module.exports = clinicController;
