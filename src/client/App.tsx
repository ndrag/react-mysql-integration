import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			skills: [] // Skills is initialised as an empty array we'll fill with a list of DB elements.
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/skills'); // Aysnc call to our local server.
			let skills = await r.json(); // unpack the json response to the skills var.
			this.setState({ skills });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">My Applet</h1>
				<ul className="list-group">
					{this.state.skills.map((skill, i) => { // map every element of the returned skills object to a new LI.
						return <li className="list-group-item" key={i}>{skill.Title}{skill.SubmissionComment}{skill.Score}</li> // Bootstrap classes to make things look nice
					})}
				</ul>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	skills: Array<any>; // Could put everything that comes back from the table here. Props on our table.
}

export default App;
