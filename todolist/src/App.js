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
			const taskId = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1;
			tasks.push({ value: this.state.taskName, id: taskId, done: false });
			this.setState({ tasks });
		}
		this.setState({ taskName: "" });
	};
	addMemo = (value) => {};

	onDeleteTask = (id) => {
		const newTasks = this.state.tasks.filter((x) => x.id !== id);
		this.setState({ tasks: newTasks });
	};

	onDoneTask = (taskDone) => {
		const tasks = this.state.tasks;
		if (taskDone.done) return;
		tasks.forEach((task) => {
			if (task.id === taskDone.id) task.done = true;
		});
		const tasksDone = this.state.tasksDone;
		tasksDone.push(taskDone);
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
						{this.state.tasks.map((task, index) => {
							return <ToDo task={task} key={index} deleteTask={this.onDeleteTask} doneTask={this.onDoneTask} />;
						})}
					</ul>
					<br />
					<ul className="task-list-done">
						{this.state.tasksDone.map((task, index) => {
							return <TodoDone task={task} key={index} />;
						})}
					</ul>
				</header>
			</div>
		);
	}
}

export default App;
