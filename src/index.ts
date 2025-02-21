import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
})

fastify.route({
  method: 'GET',
  url: '/teste',
  handler: () => {
    return { hello: 'world' };
  },
})

async function start() {
  try {
    const host = await fastify.listen({ port: 3000 });
    console.log(`Server listening on ${host}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
