import { Button } from "@shadcn/button";
import { client } from "@lib/rpc-client";

export default async function Page() {

	const response = await client.index.$get()
	if (response.ok) {
		const data = await response.json();
		console.log("🚀 ------------------------------------------------------🚀");
		console.log("🚀 ~ page.tsx:6 ~ data: ", data);
		console.log("🚀 ------------------------------------------------------🚀");
		return (<div>{data}
			<Button>Click Here</Button>
		</div>);
	}

	return <div>Failed to load data

	</div>;

}
