import { getCountrySuggestions } from "../lib/countries";
import { Component, createRef } from "react";
import styled from "styled-components";
import Link from "next/link";

const Item = styled.li`
  &:hover {
    cursor: pointer;
    color: red;
  }

  font-size: 20px;
  font-family: "Arial", sans-serif;
  color: black;
  width: 100%;
  padding-left: 5px;
  background-color: white;
  border-bottom: 1px solid gray;
`;

const Suggestions = ({ suggestions }) => {
  const options = suggestions.map((suggestion) => (
    <Link href="/country/[category]/[country]" as={`/country/games/${suggestion.name}`}>
      <Item key={suggestion.unicode}>
        {suggestion.emoji} {suggestion.name}
      </Item>
    </Link>
  ));

  return options;
};

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
    };
    this.search = createRef();
  }

  setKeyword = () => {
    const results = getCountrySuggestions(this.search.value);
    this.setState({ suggestions: results });
  };

  render() {
    return (
      <div className="self-center relative w-1/3 sm:w-4/5">
        <input
          ref={(input) => (this.search = input)}
          type="search"
          className="mx-auto w-full h-10 rounded focus:outline-none focus:shadow-outline text-xl text-black-500 shadow-lg p-4 m-2 border border-black"
          placeholder="Search for country..."
          onChange={this.setKeyword}
        />
        <ul className="absolute w-full border-solid border-black-200 bg-white-500 z-10">
          {this.search.value && (
            <Suggestions suggestions={this.state.suggestions} />
          )}
        </ul>
      </div>
    );
  }
}
