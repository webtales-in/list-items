import React, {Component} from 'react';
import {connect} from 'react-redux'
import {toggleTodo,initTodo} from './actions';


class ListDemo extends Component {

    callInit(){
        console.log("hi this is ",this.props);
        this.props.onInit();
    }
    render() {

        console.log("in listDemo store is : ", this.props);
        const list=this.props.todos;
        return (

            <div>
                {
                    list.map(person=>(
                        <li>{person.name} <button onClick={() =>this.callInit()}>click</button></li>
                    ))
                }
                <li> hi</li>
            </div>
        );
    }
}




const mapStateToProps = state => {
    return {
        todos:state.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        },
        onInit:()=>{
            dispatch(initTodo())
        },
    }
}

const ListDemoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListDemo)


export default ListDemoContainer;
