import React, { Component } from 'react'
import "../App.css"
import Cards from "./Cards"
import data from "../data"

class Main extends Component {
    constructor(){
        super()
        this.state = {
            data: data,
            index: 0
        }
    }

    previousPage = () => {
        const {index} = this.state
        if (index > 0) {
            this.setState({index: index - 1})
        } 
    } 

    nextPage = () => {
        const {data, index} = this.state
        if (index < data.length - 1) {
            this.setState({index: index + 1})
        }
    } 

    deletePage = () => {
        const {data, index} = this.state
            if (data.length > 1){
                data.splice(index,1)
                if (index > 0) {
                    this.setState({index: index - 1})
                 } else {
                    this.setState({index: index})
                 }
            } 
    }


    render(){
        return(
            <main>
                <Cards data = {this.state.data} index = {this.state.index}/>
                <section className = "buttonContainer">
                    <button className = "whiteButtons" id = "previous" onClick = {this.previousPage}>
                        { "< Previous" }
                    </button>
                    <section className = "blueButtonContainer">
                        <button className = "blueButtons">Edit</button>
                        <button className = "blueButtons" onClick = {this.deletePage}>Delete</button>
                        <button className = "blueButtons">New</button>
                    </section>
                    <button className = "whiteButtons" id = "next" onClick = {this.nextPage}>
                        { "Next >" }
                    </button>
                </section>
            </main>
        )
    }
}

export default Main