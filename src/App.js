import React, { useState } from "react";
import Particles from "react-tsparticles";
import logo from "./ava3.jpg";
import "./App.css";
import particlesOptions from "./particles.json";
import Typed from "react-typed";
import { greeting } from "./jam";

function App() {
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
    rel="stylesheet"
  ></link>;
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@300&display=swap"
    rel="stylesheet"
  ></link>;
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="App">
      <Particles
        options={particlesOptions}
        id={darkMode ? "tsparticles" : "ts2"}
      />
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container">
          <div
            className="switch-checkbox"
            style={{
              backgroundColor: darkMode ? "white" : "rgb(0, 123, 255)",
            }}
          >
            <label className="switch">
              <i
                className={darkMode ? "fas fa-moon" : "fas fa-sun"}
                style={{ color: darkMode ? "rgb(0, 123, 255)" : "white" }}
              ></i>
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            </label>
          </div>
        </div>

        <a
          className="buton"
          href="mailto:mhd.hanif2205@gmail.com?subject=say%20Hi&body=hai hanif"
        >
          <i class="fas fa-share"></i>
        </a>

        <img
          src={logo}
          className="App-logo loadingimg"
          alt="logo"
          style={{ backgroundColor: darkMode ? "white" : "orange" }}
        ></img>
        <h1 className="loadingimg">Muhammad hanif</h1>
        <p>
          <i
            class="fas fa-map-marker-alt"
            style={{ color: darkMode ? "white" : "orange" }}
          ></i>{" "}
          Medan, Indonesia
        </p>
        <h3>Halo {greeting} </h3>

        <Typed
          className="text"
          strings={[
            "Baru menguasai html",

            "Baru menguasai css",
            "Baru menguasai javascript",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          cursorChar="✏️"
        />
        <div className="wrapper">
          <p>Bismillah Tahun ini</p>
          <div className="words">
            <span>PHP</span>
            <span>My SQL</span>
            <span>Laralevel</span>
            <span>Next Js</span>
            <span>Sass</span>
            <span>Node js</span>
          </div>
        </div>
        <div className="content">
          <a href="https://api.whatsapp.com/send?phone=628981234567&text=Halo%20hanif">
            <button
              className="btn"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <i className="fab fa-whatsapp" />
              WhatsApp
            </button>
          </a>

          <a href="dadas">
            <button
              className="btn"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <i className="fab fa-instagram" />
              Instagram
            </button>
          </a>
          <a href="https://www.instagram.com/thecodermen/">
            <button
              className="btn"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <i className="fab fa-telegram" />
              Telegram
            </button>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100054086374893">
            <button
              className="btn"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <i className="fab fa-facebook" />
              Facebook
            </button>
          </a>
        </div>
        <div className="footer">
          <h4>
            <a href="saya" style={{ color: darkMode ? "white" : "black" }}>
              <span className="fas fa-arrow-alt-circle-up"></span>
              <span className="first">H</span>anif
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
