export default {
  async fetch(
    _request: Request,
    _env: Record<string, unknown>,
    _ctx: ExecutionContext
  ): Promise<Response> {
    return new Response('Hello World!')
  },
}
