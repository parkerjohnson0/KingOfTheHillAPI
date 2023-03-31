import { Route } from "../types/enums";
export function RouteLog(route: Route, method: String ){
    console.log(method + " \\" + route.toString() +
     " "  + new Date().toLocaleString());
}