/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
  return {
    status: 200,
    headers: {},
    body: { items: [{ name: 'resource 1' }] },
  }
}
