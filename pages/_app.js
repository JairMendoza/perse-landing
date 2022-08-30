import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import '../styles/global.css'


export default class Home extends Component {
  render() {
    let { title, developments } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>PerSe</h1>
          <HomeContent />
          <ul>
            {developments.map((dev, k) => (
              <li key={k}>
                <h2>{dev.name}</h2>
                <p className="font-extrabold ">{dev.description} asdf</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}