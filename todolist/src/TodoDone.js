import React from "react";
import "./ToDo.css";

class TodoDone extends React.Component {
	constructor(props) {
		super(props);
		this.state = { task: props.task, key: props.key };
	}
	render() {
		return (
			<li className="task-item" key={this.state.key}>
				<img className="icon icon-bag" src="./icon/bag.png" alt="icon bag" />
				<span className="task-item--value"> {this.state.task.value}</span>
			</li>
		);
	}
}

export default TodoDone;
