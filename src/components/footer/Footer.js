      import React from "react";
      import "./Footer.css";
      import { Fade } from "react-reveal";
      /* eslint-disable jsx-a11y/accessible-emoji */

const currentYear = new Date().getFullYear();

      export default function Footer(props) {
        return (
          <div className="footer-div">
            <Fade>
              <p className="footer-text" style={{ color: props.theme.secondaryText }}>
                <span role="img">💻</span> • Gabriel A Azevedo &copy;{currentYear} (Todos Os Direitos Reservados)
              </p>
              {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
            </Fade>
          </div>
        );
      }
