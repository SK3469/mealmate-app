import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { createCheckoutSession, getOrders } from "../controller/order.controller";
import asyncHandler from "../utils/asyncHandler";

const router = express.Router();

router.route("/").get(isAuthenticated , asyncHandler(getOrders));
router.route("/checkout/create-checkout-session").post(isAuthenticated, asyncHandler(createCheckoutSession))

export default router;