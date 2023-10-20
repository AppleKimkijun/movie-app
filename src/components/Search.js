
import { Component } from "../core/core";
import movieStore, { searchMoives } from '../store/movie'


export default class Search extends Component {
    constructor() {
        super()
    }
    render() {
        this.el.classList.add('search')
        this.el.innerHTML = /* html */`
            <input 
                value = "${movieStore.state.searchText}"
                placeholder = "Enter the movie title to search!"/>
            <button class= "btn btn-primary">
                Search
            </button>
        `

        const inputEl = this.el.querySelector('input')
        inputEl.addEventListener('input', () => {
            movieStore.state.searchText = inputEl.value
        })
        inputEl.addEventListener('keydown', event => {
            if(event.key === 'Enter' && movieStore.state.searchText.trim()) {
                searchMoives(1)
            }
        })

        const btnEl = this.el.querySelector('.btn')
        btnEl.addEventListener('click', event => {
            if(movieStore.state.searchText.trim()) {
                searchMoives(1)
            }
        })
    }
}