/** @param {NS} ns */
export async function main(ns) {
  if (ns.args.length > 0)
    {var target = ns.args[0]}
      else {ns.tprintf("ERROR: Target server not specified"); return;}
  ns.tprintf("Server Port Requiments: "+ns.getServerNumPortsRequired(target));
    if ((ns.getServerNumPortsRequired(target) >= 1)&&(ns.fileExists("BruteSSH.exe", "home"))) 
      {await ns.brutessh(target);
      ns.tprintf("Opened Port 1");}
        else {ns.tprintf("ERROR Port 1");}
    if ((ns.getServerNumPortsRequired(target) >= 2)&&(ns.fileExists("FTPCrack.exe", "home"))) 
      {await ns.ftpcrack(target);
      ns.tprintf("Opened Port 2");} 
        else {ns.tprintf("ERROR Port 2");}
    if ((ns.getServerNumPortsRequired(target) >= 3)&&(ns.fileExists("relaySMTP.exe", "home"))) 
      {await ns.relaysmtp(target);
      ns.tprintf("Opened Port 3");} 
        else {ns.tprintf("ERROR Port 3");} 
    if ((ns.getServerNumPortsRequired(target) >= 4)&&(ns.fileExists("HTTPWorm.exe", "home"))) 
      {await ns.httpworm(target);
      ns.tprintf("Opened Port 4");}
        else {ns.tprintf("ERROR Port 4");} 
    if ((ns.getServerNumPortsRequired(target) >= 5)&&(ns.fileExists("SQLInject.exe", "home"))) 
      {await ns.sqlinject(target);
      ns.tprintf("Opened Port 5");}
        else {ns.tprintf("ERROR Port 5");}
    if (!ns.hasRootAccess(target))
      {await ns.nuke(target);
      ns.tprintf((target)+" Nuked");}
      else {ns.tprintf((target)+" Opened");}
}
