import React from "react";

import "./header.css";

function Header(props) {
    return (
        <div className={"column c" + props.index}>
            <div className={"inner-column" + ( props.class ? " " + props.class : "")}>
                <span onClick={props.sort} className="sort-value">
                    {props.name} <i className={"fa " + (!props.sortOrder ? "fa-sort" : (props.sortOrder === "DSC" ? "fa-sort-down" : "fa-sort-up"))}></i>
                </span>
                {(props.filter &&
                    <input onChange={props.filter} className="filter-input" />
                )}
            </div>
        </div>
    );
}

export default Header;