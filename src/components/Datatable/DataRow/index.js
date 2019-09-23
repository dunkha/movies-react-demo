import React, { useState } from "react";

import "./datarow.css";

function DataRow(props) {
    let [expanded, setExpanded] = useState(false);

    function getFullName(person) {
        return person.firstName + " " + person.lastName;
    }
    
    return (
        <div className="row">
            <div onClick={() => setExpanded(!expanded)} className="expand">
                <i className={"fa fa-angle-" + (expanded ? "down" : "right")}></i>
            </div>
            <div className="column c1"><div className="inner-column">{props.movie.name}</div></div>
            <div className="column c2"><div className="inner-column align-right">{props.movie.year}</div></div>
            <div className="column c3"><div className="inner-column align-right">{props.movie.rating}</div></div>
            {(expanded && 
                <div className="expansion">
                    <div className="expansion-inner-container">
                        <div className="synopsis">
                            {props.movie.synopsis}
                        </div>
                        <div className="expansion-row">
                            <div className="label">Ohjaaja</div>
                            <div className="value">{getFullName(props.movie.director)}</div>
                        </div>
                        <div className="expansion-row">
                            <div className="label">Genret</div>
                            <div className="value">{props.movie.genres.join(", ")}</div>
                        </div>
                        <div className="expansion-row">
                            <div className="label">Ikäraja</div>
                            <div className="value">{props.movie.ageLimit}</div>
                        </div>
                        <div className="expansion-row">
                            <div className="label">Pääosanäyttelijät</div>
                            <div className="value">{props.movie.actors.map(actor => getFullName(actor)).join(", ")}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DataRow;