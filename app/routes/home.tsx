import type { Route } from "./+types/home";
import {HeroImageBackground} from "~/components/HeroImageBackground";
import {ContactUs} from "~/components/ContactUs";
import {CardsCarousel} from "~/components/CardsCarousel";
import {Box, Container, Title} from "@mantine/core";
import {FeaturesGrid} from "~/components/FeaturesGrid";
import {StatsGroup} from "~/components/StatsGroup";
import {EmailBanner} from "~/components/EmailBanner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const sectionTopPadding: number = 2;

export default function Home() {
    return <div>
        <HeroImageBackground />

        <Box style={{
            "padding-top": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`,
            "padding-bottom": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`
        }}>
            <FeaturesGrid />
        </Box>

        <Box style={{ "background-image": "linear-gradient(120deg, #f8f4fa 0%, #e9e0f6 100%)"}}>
            <Box style={{
                "max-width": "1200px",
                "margin-left": "auto",
                "margin-right": "auto",
                "padding-top": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`,
                "padding-bottom": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`
            }}>
                <StatsGroup />
            </Box>
        </Box>

        <Box style={{
            "max-width": "1200px",
            "margin-left": "auto",
            "margin-right": "auto",
            "padding-top": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`,
            "padding-bottom": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`
        }}>
            <CardsCarousel />
        </Box>

        <Box style={{ "background-image": "linear-gradient(120deg, #f8f4fa 0%, #e9e0f6 100%)"}}>
            <Box style={{
                "padding-top": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`,
                "padding-bottom": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`
            }}>
                <ContactUs />
            </Box>
        </Box>

        <Box style={{
            "max-width": "1200px",
            "margin-left": "auto",
            "margin-right": "auto",
            "padding-top": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`,
            "padding-bottom": `calc(var(--mantine-spacing-xl) * ${sectionTopPadding})`
        }}>
            <EmailBanner />
        </Box>

    </div>;
}
