"use strict";

import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router';

import styles from "./GameList.scss";

class GameList extends React.Component {

    deleteGame(game){
        this.props.onDelete(game);
    }

    createRow(game){
        return (
            <tr key={game.id}>
                <td>{game.id}</td>
                <td><Link to={"manage-games/" + game.id}>{game.title}</Link></td>
                <td>
                    <img className={styles["game-cover"]} src={game.cover} />
                </td>
                <td>
                    <button className="btn btn-danger" onClick={this.deleteGame.bind(this, game)}>Delete</button>
                </td>
            </tr>
        );
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <td><strong>ID</strong></td>
                    <td><strong>Name</strong></td>
                    <td><strong>Cover</strong></td>
                    <td><strong>Actions</strong></td>
                </tr>
                </thead>
                <tbody>
                    { this.props.games.map(this.createRow.bind(this)) }
                </tbody>
            </table>
        );
    }
}

GameList.propTypes = {
    games: PropTypes.array.isRequired
};

export default GameList;