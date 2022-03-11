import React from "react";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { taskName: "", tasks: [] };
	}

	changeText = (event) => {
		this.setState({ taskName: event.target.value });
		console.log(event.target.value);
	};

	addTask = () => {
		if (this.state.taskName) {
			const tasks = this.state.tasks;
			tasks.push(this.state.taskName);
			this.setState({ tasks });
		}
		this.setState({ taskName: "" });
	};
	addMemo = (value) => {
		console.log(value);
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="aligned">
						<img
							className="icon icon-add"
							src="./icon/add.png"
							alt="Add Task"
							title="Bấm để thêm Task"
							onClick={this.addTask}
						/>
						<input
							type="input"
							placeholder="Hay nhap vao day"
							className="input-task"
							value={this.state.taskName}
							onChange={this.changeText}
						/>
					</div>
					<br />
					<ul className="task-list">
						{this.state.tasks.map((value, index) => {
							return (
								<li className="task-item" key={index}>
									<img className="icon icon-bag" src="./icon/bag.png" alt="icon bag" />
									<span className="task-item--value"> {value}</span>
									<img
										className="icon icon-check"
										src="./icon/check.png"
										alt="icon check"
										onClick={this.addMemo(value)}
									/>
								</li>
							);
						})}
					</ul>
				</header>
			</div>
		);
	}
}

export default App;
