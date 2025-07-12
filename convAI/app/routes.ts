import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    
    index("routes/signUp.tsx"),
    route("login", "routes/login.tsx"), //Simple alternate route


]satisfies RouteConfig;
