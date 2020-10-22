import React from 'react'
import "../App.css"

const Cards = (props) => {
    const {data, index} = props
    const {name, city, country, title, employer, favoriteMovies} = data[index]
        return(
            <section className = "cards">
                <p className = "cardNumber" > {index + 1}/{data.length} </p>
                <h1 className = "name" id = "margin" > {name.first} {name.last} </h1>
                <section className = "info-container">
                    <p className = "info" id = "margin">
                        <b>From: </b> 
                        {city}, {country} </p>
                    <p className = "info" id = "margin">
                        <b>Job Title: </b> 
                        {title}</p>
                    <p className = "info" id = "margin">
                        <b>Employer: </b> 
                        {employer}</p>
                </section>
                <b className = "favoriteMovies" id = "margin" >Favorite Movies: </b>
                <ol className = "info" id = "margin">
                    {favoriteMovies.map(e => {
                        return <li>{e}</li>
                        })
                    }
                    {/* Above map function is shorthand for what is below
                    <li>{favoriteMovies[0]}</li>
                    <li>{favoriteMovies[1]}</li>
                    <li>{favoriteMovies[2]}</li> */}
                </ol>
            </section>
        )
}

export default Cards