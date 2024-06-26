import jwt from "jsonwebtoken";
import authService from "../services/authService";

const authController = {
    handleLogin: async (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({
                errorCode: 1,
                message: "Missing inputs parameter!",
            });
        }

        let message = await authService.handleUserLogin(email, password);
        if (message.errorCode !== 0) {
            return res.status(404).json(message);
        }
        const accessToken = authController.generateAccessToken(message.data);
        const refreshToken = authController.generateRefreshToken(message.data);
        return res
            .cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
            })
            .status(200)
            .json({
                errorCode: message.errorCode,
                message: message.message,
                data: { ...message.data, accessToken },
            });
    },

    generateAccessToken: (data) => {
        return jwt.sign(
            {
                id: data.id,
                gender: data.gender,
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "2m" }
        );
    },

    generateRefreshToken: (data) => {
        return jwt.sign(
            {
                id: data.id,
                gender: data.gender,
            },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "365d" }
        );
    },

    handleCreateNewUser: async (req, res) => {
        let message = await authService.handleCreateNewUser(req.body);
        if (message.errorCode === 0) return res.status(200).json(message);
        else return res.status(404).json(message);
    },

    requestRefreshToken: async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json({
                message: "You're not authenticated",
            });
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                return res.status(401).json({
                    message: "Refresh token is not valid",
                });
            }
            const newAccessToken = authController.generateAccessToken(user);
            return res.status(200).json({ accessToken: newAccessToken });
        });
    },

    handleLogout: async (req, res) => {
        res.clearCookie("refreshToken");
        return res.status(200).json({ message: "Logout successfully!" });
    },

    // admin handler
    handleLoginAdmin: async (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({
                message: "Invalid parameters",
            });
        }

        const response = await authService.handleLoginAdminService(
            email,
            password
        );

        if (response.status !== 200) {
            return res.status(response.status).json({
                message: response.message,
            });
        }

        const accessToken = authController.generateAccessToken(response.data);
        const refreshToken = authController.generateRefreshToken(response.data);
        
        return res
            .cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
            })
            .status(200)
            .json({
                message: response.message,
                data: { ...response.data, accessToken },
            });
    },
    handleRegisterAdmin: async (req, res) => {
        let admin = req.body;
        const response = await authService.handleRegisterAdminService(admin);

        return res.status(response.status).json({
            message: response.message,
        });
    },
};

module.exports = authController;
