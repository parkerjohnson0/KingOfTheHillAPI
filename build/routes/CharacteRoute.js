"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("../utils/logger");
const enums_1 = require("../types/enums");
const router = express_1.default.Router();
router.use((req, res) => (0, logger_1.RouteLog)(enums_1.Route.Character, req.method));
router.get('/', (req, res) => {
    res.send('<p>ALL CHARACTER OBJECTS</p>');
});
exports.default = router;
