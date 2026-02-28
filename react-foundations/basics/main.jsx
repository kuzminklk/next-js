
const body = document.querySelector("body")

const root = ReactDOM.createRoot(body)


function Header({ title }) {
	return <header><h1>{ title ? title : "Hello, World!"}!</h1></header>
}

function Home() {

	const names = ["Ada", "Sam", "John", "Caira"]

	const [likes, setLikes] = React.useState(0)

	function like() {
		setLikes(likes++)
	}

	return(
		<>
			<Header title="Hello, Properties!"/>
			<main>
				<ul>
					{
						names.map((name) => (
							<li key={name}>{name}</li>
						))
					}
				</ul>
			<button onClick={like}>Like { likes }</button>
			</main>
		</>
	)
}

root.render(<Home/>)