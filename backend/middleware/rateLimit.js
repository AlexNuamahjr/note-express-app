import {rateLimit} from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 60 * 6000,
    max: 5,
    message: "You have exceeded your requests limit per minute",
    headers: true
})