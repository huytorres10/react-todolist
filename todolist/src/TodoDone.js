import React from "react";
import "./ToDo.css";

class TodoDone extends React.Component {
	constructor(props) {
		super(props);
		this.state = { taskName: props.taskName, key: props.key };
	}
	render() {
		return (
			<li className="task-item" key={this.state.key}>
				<img className="icon icon-bag" src="./icon/bag.png" alt="icon bag" />
				<span className="task-item--value"> {this.state.taskName}</span>
			</li>
		);
	}
}

export default TodoDone;
