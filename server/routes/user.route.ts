import express from "express" ;
import {  checkAuth, forgotPassword, login, logout, resetPassword, signup, updateProfile, verifyEmail } from "../controller/user.controller";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import asyncHandler from "../utils/asyncHandler";


// const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch(next);
// };
const router = express.Router();

router.route("/check-auth").get(isAuthenticated, asyncHandler(checkAuth));
router.route("/signup").post(asyncHandler(signup));
router.route("/login").post(asyncHandler(login));
router.route("/logout").post(asyncHandler(logout));
router.route("/verify-email").post(asyncHandler(verifyEmail));
router.route("/forgot-password").post(asyncHandler(forgotPassword));
router.route("/reset-password/:token").post(asyncHandler(resetPassword));
router.route("/profile/update").put(isAuthenticated, asyncHandler(updateProfile));


export default router ;