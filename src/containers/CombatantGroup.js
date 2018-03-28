import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index"
import FontAwesome from 'react-fontawesome'
import ClickOutHandler from 'react-onclickout'

import Combatant from './Combatant';

class CombatantGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInitiativeInput: false
        };
        this._onInitiativeSelectClick = this._onInitiativeSelectClick.bind(this);
        this.onClickOutInitiativeInput = this.onClickOutInitiativeInput.bind(this);
        // expected that I would need to bind function, but do not seem to.
        // this._DamageFormSubmit = this._DamageFormSubmit.bind(this);
    }

    onClickOutInitiativeInput(e) {
        this.setState({ showInitiativeInput: false });
    }

    render() {
        const { Combatants, InitiativeRoll } = this.props.parentObj
        return (
            <tbody>
                <tr>
                    <th
                        className="col-xs-3"
                        scope="row">
                        Monsters
                    </th>
                    <td
                    className="col-xs-9">
                    {
                        this.state.showInitiativeInput
                            ?
                            <form
                                onClick={(e) => e.stopPropagation()}
                                onSubmit={(e) => this._InitiativeFormSubmit(e)}>
                                <ClickOutHandler onClickOut={this.onClickOutInitiativeInput}>
                                    <input
                                        className="combatantInitiativeInput"
                                        type="number"
                                        autoFocus
                                        name="initiativeChange"
                                        onChange={(e) => this._handleChange(e)} />
                                </ClickOutHandler>
                            </form>
                            :
                            <div
                                className="combatantInitiativeSelect"
                                onClick={this._onInitiativeSelectClick}
                                data-toggle="tooltip"
                                title="Change Combatant Initiative">
                                {
                                    InitiativeRoll
                                }
                            </div>
                    }
                    </td>

                </tr>
                {Combatants.map((combatant, index) => (
                    <Combatant key={index} combatant={combatant} index={index} />
                ))}
            </tbody>
        )
    }
    _onInitiativeSelectClick(e) {
        e.stopPropagation()
        this.setState({ showInitiativeInput: true });
    }

    _handleChange(e) {
        // creates this.state.hpChange for use in _DamageFormSubmit
        const newState = Object.assign({}, this.state, {
            [e.target.name]: e.target.value
        });
        this.setState(newState)
    }

    _InitiativeFormSubmit(e) {
        e.preventDefault();
        const { index } = this.props
        const { initiativeChange } = this.state
        this.props.changeCombatantInitiative({ combatant: this.props.parentObj, initiativeChange, index })
        this.setState({ showInitiativeInput: false });
    }
}

function mapStateToProps(state) {
    const { CombatantList } = state.monsters;
    return { CombatantList };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectCombatant is called, the result should be passed to all
    // of our reducers
    return {
        selectCombatant: combatant =>
            dispatch(actions.selectCombatant(combatant)),

        changeCombatantHp: combatant =>
            dispatch(actions.changeCombatantHp(combatant)),

        changeCombatantInitiative: combatant =>
            dispatch(actions.changeCombatantInitiative(combatant)),

        removeCombatant: combatant =>
            dispatch(actions.removeCombatant(combatant))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CombatantGroup);
