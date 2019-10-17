import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Overview from "../components/overview"
import Notes from "../components/notes"
import Facility from "../components/facility"
import ImageViewer from "../components/image-container"
import BuildingInfo from "../components/buildings"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Facility />
    <Notes />
    <Overview />
    <ImageViewer />
    <BuildingInfo />
  </Layout>
)

export default IndexPage
