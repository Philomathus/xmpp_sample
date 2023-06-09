const xmpp = require( "simple-xmpp" )

xmpp.connect( {
    "jid": "krzystof@localhost",
    "password": "123abc",
    "host": "localhost",
    "port": 41011
} )

xmpp.on( "online", data => {
    console.log( "You are online" )
    send()
} )

xmpp.on( "error", error => {
    console.log( "Something went wrong" )
} )

xmpp.on( "chat", ( from, message ) => {
    console.log(`Received: ${message} from ${from}`)
})

function send() {
    setTimeout( send, 5000);
    xmpp.send("admin@localhost", "Hi!");
}