import pic02 from "../images/pic02.jpg";
import React from "react";

const Contact = () => <>
    <h2 className="major">Contact me</h2>
    <ul className="icons">
        <li>
            <a href="https://www.facebook.com/michaldabr" className="icon fa-facebook">
                <span className="label">Facebook</span>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/michal-orzecho-dabrowski/" className="icon fa-linkedin">
                <span className="label">Instagram</span>
            </a>
        </li>
        <li>
            <a
                href="https://github.com/mdabrowski-eu"
                className="icon fa-github"
            >
                <span className="label">GitHub</span>
            </a>
        </li>
        <li>
            <a
                href="https://gitlab.com/orzecho"
                className="icon fa-gitlab"
            >
                <span className="label">Gitlab</span>
            </a>
        </li>
        <li>
            <a
                href="mailto:mdabrowski@mdabrowski.eu"
                className="icon fa-envelope"
            >
                <span className="label">mdabrowski@mdabrowski.eu</span>
            </a>
        </li>
        <li>
            <a
                href="https://www.instagram.com/mdabrowski.orzecho/"
                className="icon fa-instagram"
            >
                <span className="label">Instagram (mainly travel photos)</span>
            </a>
        </li>
    </ul>
</>;

export default Contact;