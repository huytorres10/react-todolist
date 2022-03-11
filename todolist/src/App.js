import React from "react";
import "./App.css";
import ToDo from "./ToDo";
import TodoDone from "./TodoDone";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { taskName: "", tasks: [], tasksDone: [] };
	}

	changeText = (event) => {
		this.setState({ taskName: event.target.value });
	};

	addTask = () => {
		if (this.state.taskName) {
			const tasks = this.state.tasks;
			tasks.push(this.state.taskName);
			this.setState({ tasks });
		}
		this.setState({ taskName: "" });
	};
	addMemo = (value) => {};

	onDeleteTask = (e) => {
		const taskName = e.props.taskName;
		const newTasks = this.state.tasks.filter((x) => x !== taskName);
		this.setState({ tasks: newTasks });
	};

	onDoneTask = (e) => {
		console.log("onDoneTask", e);
		this.onDeleteTask(e);
		const tasksDone = this.state.tasksDone;
		tasksDone.push(e.props.taskName);
		this.setState({ tasksDone });
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
							return <ToDo taskName={value} key={index} deleteTask={this.onDeleteTask} doneTask={this.onDoneTask} />;
						})}
					</ul>
					<br />
					<ul className="task-list-done">
						{this.state.tasksDone.map((value, index) => {
							return <TodoDone taskName={value} key={index} />;
						})}
					</ul>
				</header>
			</div>
		);
	}
}

export default App;
