import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home: NextPage = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <Image className="img-fluid rounded-circle" src="/img/JA-Headshot.jpg" alt="" width="250" height="250" />
      <h1 className="display-5 fw-bold">Jack Allard</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Hello! My name is Jack and I am a Computer Science student with nearly 2 years of professional software development experience.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="https://github.com/jackallard17" target="_blank" className="btn btn-primary btn-lg px-4 gap-3">Github</a>
          <a href="https://www.linkedin.com/in/jack-allard-2b7767204/" target="blank" className="btn btn-outline-secondary btn-lg px-4">LinkedIn</a>
        </div>
      </div>
    </div>


  )
}

export default Home
