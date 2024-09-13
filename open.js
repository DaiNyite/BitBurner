/** @param {NS} ns */
export async function main(ns) {
  if (ns.args.length > 0)
    {var server = ns.args[0]}
      else {ns.tprintf("ERROR: Target server not specified"); return;}
  ns.tprintf("Server Port Requiments: "+ns.getServerNumPortsRequired(server));
    if ((ns.getServerNumPortsRequired(server) >= 1)&&(ns.fileExists("BruteSSH.exe", "home"))) 
      {await ns.brutessh(server);
      ns.tprintf("Opened Port 1");}
        else {ns.tprintf("ERROR Port 1");}
    if ((ns.getServerNumPortsRequired(server) >= 2)&&(ns.fileExists("FTPCrack.exe", "home"))) 
      {await ns.ftpcrack(server);
      ns.tprintf("Opened Port 2");} 
        else {ns.tprintf("ERROR Port 2");}
    if ((ns.getServerNumPortsRequired(server) >= 3)&&(ns.fileExists("relaySMTP.exe", "home"))) 
      {await ns.relaysmtp(server);
      ns.tprintf("Opened Port 3");} 
        else {ns.tprintf("ERROR Port 3");} 
    if ((ns.getServerNumPortsRequired(server) >= 4)&&(ns.fileExists("HTTPWorm.exe", "home"))) 
      {await ns.httpworm(server);
      ns.tprintf("Opened Port 4");}
        else {ns.tprintf("ERROR Port 4");} 
    if ((ns.getServerNumPortsRequired(server) >= 5)&&(ns.fileExists("SQLInject.exe", "home"))) 
      {await ns.sqlinject(server);
      ns.tprintf("Opened Port 5");}
        else {ns.tprintf("ERROR Port 5");}
    if (!ns.hasRootAccess(server))
      {await ns.nuke(server);
      ns.tprintf((server)+" Nuked");}
      else {ns.tprintf((server)+" Opened");}
}
