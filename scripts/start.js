const Hapi = require('@hapi/hapi')
const port = process.env.PORT || 3000
const init = async () => {
    const server = Hapi.server({
        port,
    })

    await server.register(require('@hapi/inert'))
    await server.start()
    console.log('Server running %s', server.info.uri)
}

process.on('unhandledRejection', (err)=> {
    console.log(err)
    process.exit(1)
})

init()
