import React, { Component } from "react";
import CardList from "../components/CardList/CardList";
import Scroll from "../components/Scroll/Scroll";
import FormMenu from "../components/FormMenu/FormMenu";

//const APIKEY =  '8cd109a7cd8a4fd599ae76de90536c6a';

class FootballAPI extends Component {
  constructor() {
    super();

    // https://medium.com/quick-code/react-quick-tip-use-class-properties-and-arrow-functions-to-avoid-binding-this-to-methods-29628aca2e25
    // can be avoided by using arrow function, see in the function defnition
    this.getCompititionFixtures = this.getCompititionFixtures.bind(this);
    this.BASE_URL = "http://api.football-data.org/v2";

    // capital case is for classes, object properties should be camalCase
    this.state = {
      //group-stage: 91.
      matches: [],
      League: "",
      Fixture: ""
    };
  }

  // async getCompititionFixtures = () => {...}
  async getCompititionFixtures() {
    const request = await fetch(
      "http://api.football-data.org/v2/competitions/CL/matches",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": "8cd109a7cd8a4fd599ae76de90536c6a"
        }
      }
    );
    const data = await request.json();
    this.setState({
      matches: data.matches
    });
    console.log(this.state);
  }

  //
  async getLeagues() {
    /**
     * 1. request available leagues from fotball data api
     * 2. set them in the state
     * 3. later, pass them to the FormMenu through the props
     */
  }

  // change the event to an object which look like:
  // { league: <leagueId>, fixture: <number>}
  // then set them to the state
  handleClick(event) {
    this.setState({
      League: event.target.value,
      Fixture: event.target.value
    });
  }

  render() {
    return (
      <div>
        <FormMenu handleClick={this.handleClick} />
        <Scroll>
          <CardList matches={this.state.matches} />
        </Scroll>
      </div>
    );
  }
}

export default FootballAPI;
