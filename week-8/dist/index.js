"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupSchema = void 0;
const zod_1 = require("zod");
exports.signupSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(20),
    password: zod_1.z.string().min(6).max(20),
    email: zod_1.z.string().email(),
    phone: zod_1.z.string().min(10).max(10),
    confirmPassword: zod_1.z.string().min(6).max(20),
});
