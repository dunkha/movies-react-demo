import React, { useState } from "react";

import Header from "./Header";
import DataRow from "./DataRow";
import "./datatable.css";

function Datatable(props) {

    let [sortProperty, setSortProperty] = useState(null);
    let [sortOrder, setSortOrder] = useState(null);
    let [genre, setGenre] = useState(null);
    let [name, setName] = useState(null);

    const handleGenreFilter = (genre) => {
        setGenre(genre);
    }

    const handleNameFilter = (name) => {
        setName(name);
    };

    const getFilters = () => {
        let filters = [];

        if (genre) {
            filters.push({
                property: "genres",
                value: genre
            });
        }

        if (name) {
            filters.push({
                property: "name",
                value: name
            });
        }

        return filters;
    }

    const handleSort = (property) => {
        if (sortProperty === property) {
            setSortOrder(sortOrder === "ASC" ? "DSC" : "ASC");
        } else {
            setSortProperty(property);
            setSortOrder("DSC");
        }
    };

    return (
        <div className="datatable">
            <div className="header">
                <div className="title">Movies</div>
                <div className="genres">
                    <select id="genre-select" onChange={(event) => handleGenreFilter(event.target.value)}>
                        <option value="">-- Select Genre --</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="animation">Animation</option>
                        <option value="biography">Biography</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="drama">Drama</option>
                        <option value="family">Family</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="mystery">Mystery</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="war">War</option>
                    </select>
                </div>
            </div>
            <div className="headers">
                <div className="row">
                    <div className="header-empty"></div>
                    <Header name="Name" filter={(event) => handleNameFilter(event.target.value)} index="1" sort={() => handleSort("name")} sortOrder={sortProperty === "name" ? sortOrder : null} />
                    <Header name="Year" index="2" class="align-right" sort={() => handleSort("year")} sortOrder={sortProperty === "year" ? sortOrder : null} />
                    <Header name="Rating" index="3" class="align-right" sort={() => handleSort("rating")} sortOrder={sortProperty === "rating" ? sortOrder : null} />
                </div>
            </div>
            <div className="value-rows">
                {props.getMovies(sortProperty, sortOrder, getFilters()).flatMap((v, i) => (
                    <DataRow key={v.name} movie={v} />
                ))}
            </div>
        </div>
    );

}

export default Datatable;