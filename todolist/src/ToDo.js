import React from "react";
import "./ToDo.css";

class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { taskName: props.taskName, key: props.key };
	}
	render() {
		return (
			<li className="task-item" key={this.state.key}>
				<img className="icon icon-bag" src="./icon/bag.png" alt="icon bag" />
				<span className="task-item--value"> {this.state.taskName}</span>
				<img
					className="icon icon-check"
					src="./icon/check.png"
					alt="icon check"
					onClick={() => this.props.doneTask(this)}
				/>
				<img
					className="icon icon-recycle-bin"
					src="./icon/recycle-bin.png"
					alt="icon recycle bin"
					onClick={() => this.props.deleteTask(this)}
				/>
			</li>
		);
	}
}

export default ToDo;
