import epoint from "../images/logo_epoint_white.png";
import React from "react";

const Work = () => <><h2 className="major">Work</h2>
    <span className="image main">
    <img src={epoint} alt="" />
    </span>
    <h3>E-point S.A. (2017 - today)</h3>
    <p>
        Software house specializing in solutions for financial and e-commerce sectors. I work there as a java developer,
        making mainly backend in various technologies and bits of frontend.
    </p>
    <h3>Minima (2019 - today)</h3>
    <p>
        Startup creating intelligent tools for fast and cost-effective development of complicated machine learning systems.
        My tasks consist of creating everything that needs to be programmed and is not intelligent: REST API for cloud tools,
        dashboard for customers, main page, all sprinkled with a little bit of DevOps.
    </p>
</>;

export default Work;