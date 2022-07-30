import fastify from 'fastify'
import {search} from "@nearform/lyra";
import {addData, db} from "./lyra/lyra";

const server = fastify()

addData();

server.get('/ping', async (request, reply) => {
    const searchResult = search(db, {
        term: 'if',
        properties: '*'
    });

    console.log(searchResult);

    return 'pong 3\n'
})

server.listen({ port: 3000 }, function (err, address) {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
