import * as React from "react"

import './styles.css'

import items from './items';

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingAccentStyles = {
  color: "#f28916",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const SpeakerInfo = ({ title, author, jobTitle, description, photo }) => (
  <div className={'speaker'}>
    <div className="speaker__info">
      <div className="speaker__img">
        <img src={photo} alt=""/>
      </div>
      <div className={'speaker__text'}>
        <p className={'speaker__author'}>{author}</p>
        {jobTitle && <span className={'speaker__job-title'}>{jobTitle}</span>}
      </div>
    </div>
    <h3 className={'speaker__title'}>{title}</h3>
    <p className={'speaker__description'}>
      {
        description
        ?
        description
        :
        'Этот спикер пока не предоставил описание своего доклада. Возможно, оно появится здесь позже, а возможно он сохранит его в тайне.'
      }
    </p>
  </div>
)

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>GORGI Conf 2021</title>
      <section className={'section'}>
        <h1 className={'section__title'}>
          Congratulations
          <br />
          <span style={headingAccentStyles}>— you just made a step to the CORGI Conf!</span>
          <br />
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <p style={paragraphStyles}>
          We are encouraged <code style={codeStyles}>so much</code> to see
          you and your research in the list of our speakers.{" "}
          <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
          <br />
          <a href="#form">Fill in the application</a>
        </p>
        <div className="speakers-wrapper">
          {items.map(paper => <SpeakerInfo {...paper} />)}
        </div>
        <div className="preview-img" />
      </section>
    </main>
  )
}

export default IndexPage
