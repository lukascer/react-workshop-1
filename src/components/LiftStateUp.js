/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-classes-per-file */
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => (
    <ul>
        {todos.map((todo, number) => (
            <li key={number}>{todo}</li>
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
};

class Control extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    handleOnChange = event => {
        this.setState({ value: event.currentTarget.value });
    };

    clear = () => {
        this.setState({ value: '' });
    };

    handleOnClick = () => {
        this.props.onClick(this.state.value);
        this.clear();
    };

    render() {
        return (
            <div>
                <input onChange={this.handleOnChange} type="text" value={this.state.value} />
                <button type="button" onClick={this.handleOnClick}>
                    Add Todo
                </button>
            </div>
        );
    }
}

Control.propTypes = {
    onClick: PropTypes.func.isRequired,
};

class LiftStateUp extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        };
    }

    addTodo = todo => {
        this.setState({ todos: this.state.todos.concat([todo]) });
    };

    render() {
        return (
            <div>
                <Control onClick={this.addTodo} />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default LiftStateUp;
