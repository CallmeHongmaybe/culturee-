import {getCountrySuggestions} from '../lib/countries';
import {Component, createRef} from 'react'; 
import styled from 'styled-components'; 
import Link from 'next/link'; 

const Item = styled.li`
    &:hover {
        cursor: pointer; 
        color: red; 
    }

    font-size: 20px; 
    font-family: 'Arial', sans-serif;
    color: black;
    width: 100%;
    border-bottom: 0.5px solid gray; 
`

const Wrapper = styled.div`
    position: relative;
    height: fit-content; 
    display: flex; 
    flex-direction: column; 
    width: 25rem; 
`

const Suggestions = ({suggestions}) => {
const options = suggestions.map(suggestion => 
    <Link href="/country/[country]" as={`/country/${suggestion.name}`}>
        <Item key={suggestion.unicode}>{suggestion.emoji} {suggestion.name}</Item>
    </Link>
)

    return (
        <ul>{options}
          <style jsx>{`
        ul {
            position: absolute;
            top: 30px; 
            height: max-content;
            list-style-type: none;
            width: 25rem;
            background: white;
            border-left: 2px solid black; 
            border-right: 2px solid black; 
            padding-left: 5px;
            margin-left: 15px; 
        }
    `}</style>
        </ul>
  
    )
}

export default class Search extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            suggestions: [] 
        }; 
        this.search = createRef(); 
    }

    setKeyword = () => {
        const results = getCountrySuggestions(this.search.value); 
        this.setState({suggestions: results}); 
    }

    render() {
        return (
           <Wrapper>
            <div className="searcher">
              <input 
              ref={input => this.search = input} 
              type="search" 
              className="input mx-auto w-full h-10 rounded focus:outline-none focus:shadow-outline text-xl shadow-lg px-3 py-4" 
              placeholder="Type country name here" 
              onChange={this.setKeyword}
              />
              <style jsx>{` 
                input {
                    font-size: 15px; 
                    padding: 0.5rem 0;
                    margin: 0.5rem 1rem;
                    width: 25rem;
                    position: relative; 
                }
             `}</style>
            </div>
            {this.search.value && <Suggestions suggestions={this.state.suggestions}/> }
            </Wrapper>
        )
    }   
}



