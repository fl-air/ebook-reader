
import jwt from "jsonwebtoken";

export default (req, res, next) => {
    if (req.isAuthenticated()) {
        try {
            const decoded = jwt.verify(req.user.token, process.env.JWT_SECRET, {
                issuer: 'einere'
            });
            if (decoded) res.status(200).send(true);
            else res.status(403).send(false);
        } catch (e) {
            res.status(403).send(e);
        }
    } else res.status(401).send(false);
};