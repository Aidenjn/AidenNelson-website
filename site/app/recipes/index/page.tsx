import { client } from "@/lib/sanity";

export default async function RecipeIndexPage() {
  // const recipes = await client.fetch(`*[_type == "recipe"] | order(title desc)`);

  // TODO: Make sure the below works
  // const recipes = await client.fetch(`*[_type == "recipe"]{ title } | order(title desc)`);


  // Find unique first letters
  // Deliniate recipes by those first letters

  return (
    <div>
      <ol>

      </ol>
    </div>
  )
}