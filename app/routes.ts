import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("termekek", "routes/products.tsx"),
    route("kosar", "routes/cart.tsx"),
    route("rendeles", "routes/checkout.tsx"),
    // Add more routes as needed
] satisfies RouteConfig;