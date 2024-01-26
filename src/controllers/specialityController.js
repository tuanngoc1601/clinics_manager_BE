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
};

module.exports = specialityController;
