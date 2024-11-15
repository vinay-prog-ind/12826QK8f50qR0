import React from "react";
import { NavLink } from "react-router-dom";

export default function ProjectRouter() {
    return <>
        <div>
            <section>
                {/* <h3>Outlook</h3> */}
                <NavLink to="outlook">Outlook</NavLink>
            </section>
             <section>
                {/* <h3>Outlook</h3> */}
                <NavLink to="data-visualization-dash">Data Visualization Dash</NavLink>
            </section>
        </div>
    </>;
}