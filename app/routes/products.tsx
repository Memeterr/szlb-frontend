import React from "react";
import {ProductGrid} from "~/components/ProductGrid";
import {Box} from "@mantine/core";

const sectionTopPadding: number = 1;

export default function Products() {
    return (
        <div>
            <Box style={{
                "padding-top": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`,
                "padding-bottom": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`
            }}>
                <ProductGrid />
            </Box>
        </div>);
}