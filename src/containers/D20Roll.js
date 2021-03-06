import React, {Component} from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/index";


class D20Roll extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {roll} = this.props

    return (
      <div className="D20Roll rollableUnderline"
        onClick={() => this.props.d20Roll(roll)}
        // onClick={() => this.props.sidedDiceRoll(roll)}
        >
          {roll}
        </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of MonsterList
  const { rolls } = state.monsters;
  return {
    rolls
  };
}

function mapDispatchToProps(dispatch) {
  // Whenever selectCombatant is called, the result should be passed to all
  // of our reducers
  return {
    d20Roll: payload =>
    dispatch(actions.d20Roll(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(D20Roll);
