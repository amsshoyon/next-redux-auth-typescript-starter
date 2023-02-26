import MotionContainer from "@/components/common/MotionContainer"
import { Snakebar } from "@/utils/notistack"
import { Button } from "@mui/material"

const HomePage = () => {
	return (
		<MotionContainer>
			<div className="container mx-auto lg:h-screen flex flex-col justify-center items-center">
				<h1 className="text-48">
					Welcome to{" "}
					<strong className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
						Neat Starter
					</strong>
				</h1>
				<p>
					<abbr title="netlify cms, eleventy, alpine js & tailwind css">NEAT</abbr>{" "}
					Starter Template. Get Started by editing.{" "}
					<code className="bg-gray-100 text-blue-800 p-1">/index.njk</code>
				</p>
				<Button
					variant="contained"
					color="primary"
					className="bg-primary"
					onClick={()=> Snakebar.success('This is success')}
				>Notistack</Button>
				<div className="w-full max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 px-4 lg:mx-0">
					<a href="https://tailwindcss.com/"
						className="p-5 border rounded border-gray-200 hover:border-purple-400"
						target="_blank"
						rel="noreferrer"
					>
						<h3 className="text-24">Tailwind CSS →</h3>
					</a>
					<a href="https://nextjs.org/docs/getting-started"
						className="p-5 border rounded border-gray-200 hover:border-purple-400"
						target="_blank"
						rel="noreferrer"
					>
						<h3 className="text-24">Next.js →</h3>
					</a>
					<a href="https://next-auth.js.org/getting-started/introduction"
						className="p-5 border rounded border-gray-200 hover:border-purple-400"
						target="_blank"
						rel="noreferrer"
					>
						<h3 className="text-24">NextAuth →</h3>
					</a>
					<a href="https://redux-toolkit.js.org/introduction/getting-started"
						className="p-5 border rounded border-gray-200 hover:border-purple-400"
						target="_blank"
						rel="noreferrer"
					>
						<h3 className="text-24">Redux Toolkit →</h3>
					</a>
				</div>
			</div>
		</MotionContainer>
	)
}

export default HomePage