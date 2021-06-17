import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Autocomplete extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };

    static defaultProps = {
        suggestions: []
    };

    constructor(props) {
        super(props);

        this.state = {
            // The active selection's index
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
            // What the user has entered
            userInput: ""
        };
    }

    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = e => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
        window.fullpage_api.moveTo(this.props.suggestions.indexOf(e.currentTarget.innerText)+1);
    };

    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        // IF PORTLAND = BUG car il y a un espace
        // User pressed the enter key
        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });

            if(filteredSuggestions[activeSuggestion] !== undefined) {
                window.fullpage_api.moveTo(this.props.suggestions.indexOf(filteredSuggestions[activeSuggestion])+1);
            }
            else {
                let searchField = document.getElementsByClassName('search')[0];
                searchField.classList.add('error');

                this.setState({
                    userInput: ''
                });

                setTimeout(function() {
                    searchField.classList.remove("error");
                }, 1000);
            }
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <span className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            if(index === 0) {

                            return (
                                <span key={suggestion} onClick={onClick}>
                                    {suggestion}
                                </span>
                            );

                            }
                        })}
                    </span>
                );
            }
        }

        return (
            <Fragment>
                <input
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </Fragment>
        );
    }
}

export default Autocomplete;
