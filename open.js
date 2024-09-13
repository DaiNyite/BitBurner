/** @param {NS} ns */
export async function main(ns) {
  var server = ns.args[0];
  ns.tprintf("Server Port Requiments: "+ns.getServerNumPortsRequired(server));
    if ((ns.getServerNumPortsRequired(server) >= 1)&&(ns.fileExists("BruteSSH.exe", "home"))) 
      {await ns.brutessh(server);
      ns.tprintf("Port 1 opened");}
        else {ns.tprintf("Port 1 ERROR");}
    if ((ns.getServerNumPortsRequired(server) >= 2)&&(ns.fileExists("FTPCrack.exe", "home"))) 
      {await ns.ftpcrack(server);
      ns.tprintf("Port 2 opened");} 
        else {ns.tprintf("Port 2 ERROR");}
    if ((ns.getServerNumPortsRequired(server) >= 3)&&(ns.fileExists("relaySMTP.exe", "home"))) 
      {await ns.relaysmtp(server);
      ns.tprintf("Port 3 opened");} 
        else {ns.tprintf("Port 3 ERROR");} 
    if ((ns.getServerNumPortsRequired(server) >= 4)&&(ns.fileExists("HTTPWorm.exe", "home"))) 
      {await ns.httpworm(server);
      ns.tprintf("Port 4 opened");}
        else {ns.tprintf("Port 4 ERROR");} 
    if ((ns.getServerNumPortsRequired(server) >= 5)&&(ns.fileExists("SQLInject.exe", "home"))) 
      {await ns.sqlinject(server);
      ns.tprintf("Port 5 opened");}
        else {ns.tprintf("Port 5 ERROR");}
    if (!ns.hasRootAccess(server))
      {await ns.nuke(server);
      ns.tprintf((server)+" Nuked");}
      else {ns.tprintf((server)+" Opened");}
}
