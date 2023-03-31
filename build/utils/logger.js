"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteLog = void 0;
function RouteLog(route, method) {
    console.log(method + " \\" + route.toString() +
        " " + new Date().toLocaleString());
}
exports.RouteLog = RouteLog;
