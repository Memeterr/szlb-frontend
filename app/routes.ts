import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("termekek", "routes/products.tsx"),
    // Add more routes as needed
] satisfies RouteConfig;