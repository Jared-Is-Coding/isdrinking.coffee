import type { GatsbyConfig } from "gatsby"
import * as dotenv from "dotenv"

dotenv.config()

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Is Drinking Coffee",
        description: "Fueling...",
        image: "/images/favicon.ico",
        siteUrl: process.env.SITE_URL
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sitemap",
        "gatsby-plugin-netlify",
        "gatsby-plugin-sass"
    ]
}

export default config
