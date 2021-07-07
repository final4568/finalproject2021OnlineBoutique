import { useState } from "react";

import Menu from "./layouts/Menu";
import Footer from "./layouts/Footer";

const Custom = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState({});

  const setColor = (color) => {
    document.getElementById(selected).style.fill = color;
    setData({ ...data, [selected]: color });
  };

  console.log(data);

  return (
    <>
      <Menu />
      <h1>CUSTOM DSIGN PAGE</h1>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <div>Seleted: {selected}</div>
      <button onClick={() => setColor("red")}>Color Red</button>
      <button onClick={() => setColor("black")}>Color Black</button>
      <div style={{ width: 400 }}>
        <svg
          id="Layer_1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m112.02 430.27h287.96v55.58h-287.96z" fill="#ec6437" />
          <path
            d="m335.68 36.14a11.712 11.712 0 0 1 .01 3.83c-6.37 39.65-39.68 69.97-79.69 69.97s-73.32-30.32-79.69-69.97a11.675 11.675 0 0 1 .02-3.87 12.035 12.035 0 0 1 19.57-7.15 11.7 11.7 0 0 1 4.07 7.12 60.577 60.577 0 0 0 16.12 32.46 54.385 54.385 0 0 0 79.82 0 60.577 60.577 0 0 0 16.12-32.46 12 12 0 0 1 23.65.07z"
            fill="#ec6437"
            id="collar"
            onClick={() => setSelected("collar")}
          />
          <path
            d="m447.23 118.66a137.137 137.137 0 0 0 -110.83-82.64l-.72.12a11.712 11.712 0 0 1 .01 3.83c-6.37 39.65-39.68 69.97-79.69 69.97s-73.32-30.32-79.69-69.97a11.675 11.675 0 0 1 .02-3.87l-.56-.1a137.13 137.13 0 0 0 -111 82.66l-27.02 63.57 74.27 20.15v227.89h287.96v-227.89h.86l73.19-20.05.22-.09z"
            fill="#f9d438"
            id="body"
            onClick={() => setSelected("body")}
          />
          <path
            d="m364.02 180.9v47.96a18.965 18.965 0 0 1 -9.02 16.14l-26.44 16.26-26.43-16.26a18.943 18.943 0 0 1 -9.02-16.14v-47.96z"
            fill="#3090fc"
          />
          <path
            d="m474.25 182.24-.22.09-74.05 20.17v32.97l86.83-23.67z"
            fill="#ec6437"
          />
          <path
            d="m112.02 202.38v32.97l-86.83-23.55 12.56-29.57z"
            fill="#ec6437"
          />
          <path d="m112.02 430.27h30v55.58h-30z" fill="#ffa992" />
          <path
            d="m25.19 211.8 29.813 8.086 13.26-29.378-30.513-8.278z"
            fill="#ffa992"
          />
          <path
            d="m176.771 42.491c-.16-.838-.325-1.674-.461-2.521a11.675 11.675 0 0 1 .02-3.87l-.56-.1a137.13 137.13 0 0 0 -111 82.66l-27.02 63.57 24.7 6.7 32.32-70.27a137.1 137.1 0 0 1 82.001-76.169z"
            fill="#fff655"
          />
          <path
            d="m112.02 430.27h30v-184.952a39.7 39.7 0 0 0 -30-38.5z"
            fill="#fff655"
          />
          <path
            d="m318.11 228.86v-47.96h-25v47.96a18.943 18.943 0 0 0 9.02 16.14l26.43 16.26 12.5-7.689-13.93-8.571a18.943 18.943 0 0 1 -9.02-16.14z"
            fill="#49bdff"
          />
          <g fill="#f4f8fc">
            <path d="m158.282 279.082a6 6 0 0 1 -6-6v-6.955a6 6 0 0 1 12 0v6.955a6 6 0 0 1 -6 6z" />
            <path d="m158.282 358.747a6 6 0 0 1 -6-6v-61.531a6 6 0 0 1 12 0v61.531a6 6 0 0 1 -6 6z" />
          </g>
        </svg>
      </div>
      <Footer />
    </>
  );
};

export default Custom;
