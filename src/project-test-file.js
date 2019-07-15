import React, { Component } from "react";

class MoviesLikes extends Component {
  filterProfiles(movieId, profiles) {
    return profiles.filter(profile => {
      if (profile.favoriteMovieID == movieId) {
        return true;
      } else {
        return false;
      }
    });
  }

  getUserNameFromProfile(users, profileId) {
    return users[parseInt(profileId, 10)].name;
  }

  render() {
    const filteredProfiles = filterProfiles(
      this.props.movieId,
      this.props.profiles
    );
    if (filteredProfiles.length > 0) {
      return (
        <ul>
          {filteredProfiles.map(profile => {
            return (
              <li>
                {this.getUserNameFromProfile(this.props.users, profile.userID)}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <p>None of the current users liked this movie</p>;
    }
  }
}

export default MoviesLikes;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
        {Object.values(movies).map(movie => {
          return (
            <div>
              <h2>{movie.name}</h2>
              <p>Liked By:</p>
              <MoviesLikes
                movieId={movie.id}
                profiles={profiles}
                users={users}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
