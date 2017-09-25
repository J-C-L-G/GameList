import React  from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput.jsx";

import styles from "../game-list/GameList.scss";

class GameForm extends React.Component{
    render(){
        return (
            <form>
                <h1>Manage Game</h1>
                <div className="row">
                    <div className="col-sm-9">
                        <TextInput
                            name="title"
                            label="Game Title"
                            value={this.props.game.title}
                            error={this.props.errors.title}
                            onChange={this.props.onChange} />
                        <br />
                        <TextInput
                            name="cover"
                            label="Game Cover"
                            value={this.props.game.cover}
                            error={this.props.errors.cover}
                            onChange={this.props.onChange} />
                        <div className="text-center">
                            <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
                        </div>
                    </div>
                    <div className="col-sm-3 text-center">
                        <img className={styles["game-cover"]} src={this.props.game.cover} />
                    </div>
                </div>
            </form>
        );
    }
}

GameForm.propTypes = {
    game: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default GameForm;