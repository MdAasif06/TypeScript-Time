export const validateNumricId = (req, res, next) => {
    const { id } = req.params;
    if (!/^\d+$/.test(id)) {
        res.status(404).json({ message: "Pet Id must be a number" });
    }
    else {
        next();
    }
};
export const pleaseAuth = (req, res, next) => {
    const { password } = req.query;
    if (password !== "please") {
        res.status(404).json({ message: "you don't have permisson" });
    }
    else {
        next();
    }
};
//# sourceMappingURL=pets.middleware.js.map