const RPC = require("discord-rpc"),
    clc = require("cli-color"),
    rpc = new RPC.Client({
        'transport': 'ipc'
    }),
    config = require("./config.json");
rpc.on('ready', () => {
    rpc.setActivity({
        'details': config.details,
        'state': config.state,
        'startTimestamp': new Date(),
        'largeImageKey': config.largeimage,
        'largeImageText': config.largeimagetext,
        'smallImageKey': config.smallimage,
        'smallImageText': config.smallimagetext,
        'joinSecret': config.joinsecret
    })
  console.clear()
  console.log("Discord Rich Presence Custom")
  console.log("----------------------------")
  console.log('By SelfRPC')
  console.log("----------------------------")
  console.log("vers: en maj")
  console.log('----------------------------')
  console.log("v2.0.4")
  console.log("----------------------------");
}), rpc.login({
    'clientId': config.appid
});

//bon comme je passer par là, que je n'avais rien a faire et que j'aime faire plaisir aux skids comme quentin aka Ogagal je me suis dit pourquoi pas
