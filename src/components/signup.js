import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import *as firebase from 'firebase';
// import { addTodoAction, deleteTodoAction } from '../store/action/action';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
    paper: {
        height: 350,
        width: 350,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
        padding: 10,
    },
    btn: {
        margin: 12,
    },
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
        marginLeft:50,
    },

};


class Signup extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         todoInput: "",
    //         isEdit: false,
    //         todoId: ''
    //     }
    //     //firebase
    //     console.log('cons')

    // }

    render() {
        // console.log('render')
        return (
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    <Paper style={styles.paper} zDepth={2} >
                        <h2>Welcome!</h2>
                        <TextField floatingLabelText="Email"
                            hintText="Enter Email Here"
                            name="email"
                        // value={this.state.todoInput}
                        // onChange={this._onChangeHandler.bind(this)}
                        />
                        <TextField floatingLabelText="Password"
                            hintText="Enter Password Here"
                            name="password"
                        // value={this.state.todoInput}
                        // onChange={this._onChangeHandler.bind(this)}
                        />
                        
                        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                            <RadioButton
                                value="light"
                                label="Student"
                                style={styles.radioButton}
                            />
                            <RadioButton
                                value="not_light"
                                label="Teacher"
                                style={styles.radioButton}
                            />
                        </RadioButtonGroup>
                        <RaisedButton label="Signin"
                            style={styles.btn}
                            primary={true}
                        // onClick={this._editTodoDone.bind(this, val.key)}
                        />
                    </Paper>
                </div>
                <div className='col-sm-4'></div>
            </div>

        )
    }
}


function mapStateToProp(state) {
    return ({
        userName: state.root.userName,
        stateTodos: state.root.todos
    })
}
function mapDispatchToProp(dispatch) {
    return ({

        // addTodoToState: () => {
        //     dispatch(addTodoAction())
        // },
        // deleteTodoToState: (id) => {
        //     dispatch(deleteTodoAction(id))
        // }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signup);
