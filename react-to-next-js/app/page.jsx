

import { LikeButton } from "./like-button.jsx"


function Header({ title }) {
	return <header><h1>{ title ? title : "Hello, World!"}!</h1></header>
}

export default function Home() {

	return(
		<html>
			<body>
				<Header title="Hello, Properties!"/>
				<main>
					<LikeButton/>
				</main>
			</body>
		</html>
	)
}