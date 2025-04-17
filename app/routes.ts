import { 
    type RouteConfig, 
    route,
    index 
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("create", "routes/create.tsx"),
    route("prompt-list", "routes/prompt-list.tsx"),
    route("prompt-rand", "routes/prompt-rand.tsx")
] satisfies RouteConfig;
