/** @type {import('./__types/[slug]').RequestHandler} */
export async function GET({ params }: { params: { slug: string } }) {
  return {
    status: 200,
    headers: {},
    body: {
      page: {
        slug: params.slug,
      },
    },
  }
}
