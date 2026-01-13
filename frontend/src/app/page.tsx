import { Button } from "@shadcn/button";
import { client } from "@lib/rpc-client";

export default async function Page() {
	const response = await client.index.$get();
	if (response.ok) {
		const data = await response.json()

		console.log("🚀 ------------------------------------------------------🚀");
		console.log("🚀 ~ page.tsx:6 ~ data: ", data);
		console.log("🚀 ------------------------------------------------------🚀");

		console.log("Hello world")


		return (
			<div>
				{data}
				<Button>Click Here</Button>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore,
					hic rem inventore ex odio at, eligendi maxime dignissimos
					assumenda reprehenderit, cupiditate magni nesciunt debitis nobis
					consectetur veniam. Beatae, similique.
				</p>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat rem dolore assumenda deserunt ipsum provident. Provident sapiente optio repudiandae cumque dolore omnis nobis obcaecati porro quos doloribus, perferendis incidunt!</p>
			</div>
		);
	}

	return <div>Failed to load data</div>;
}
