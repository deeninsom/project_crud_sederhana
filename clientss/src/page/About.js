import React from 'react'
const logoProfile = new URL("../images/1.png", import.meta.url);
function About() {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <img
          src={logoProfile}
          alt="profile image"
          width={200}
          className="img-thumbnail"
        ></img>
        <h1 className="display-4">Muhammad Syihabuddin</h1>
        <p className="lead">Nim.190441100153</p>
        <span />
        <p>
          "Aplikasi ini merupakan implementasi dari buku tutorial CRUD
          menggunakan NodeJS & MongoDB,
          <br /> penggunaan CRUD sendiri dapat mempermudah penguna untuk
          melakukan olah data tanpa harus menggunakan buku lagi,
          <br /> ini adalah salah satu bentuk teknologi yang akan membuat
          pengolahan data lebih praktis dan cepat, "
        </p>
      </div>
    </div>
  );
}

export default About