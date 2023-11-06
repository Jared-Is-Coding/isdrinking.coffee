import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { MetaData } from "../components/MetaData"
import "../scss/styles.scss"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <MetaData />
    </>
)

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <header></header>

            <main>
                <Container>
                    <h1 className="flex-center">
                        Coffee brewing...
                    </h1>
                </Container>
            </main>
        </>
    )
}

export default IndexPage