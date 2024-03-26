import specialityService from "../services/specialityService";

const specialityController = {
    handleGetAllSpecialities: async (req, res) => {
        const allSpecialities =
            await specialityService.handleGetAllSpecialitiesService();
        return res.status(200).json({
            message: "Ok",
            data: allSpecialities,
        });
    },

    handleGetSpecialityDetail: async (req, res) => {
        const specialityId = req.params.specialityId;

        if (!specialityId) {
            return res.status(400).json({
                message: "Missing inputs parameter!",
            });
        }

        const response =
            await specialityService.handleGetSpecialityDetailService(
                specialityId
            );

        if (!response)
            return res.status(403).json({ message: "Not found speciality!" });

        return res.status(200).json({
            message: "OK",
            data: response,
        });
    },
};

module.exports = specialityController;
