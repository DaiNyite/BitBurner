/** @param {NS} ns */
export async function main(ns) {
  if (ns.args.length > 0)
    {var target = ns.args[0]}
      else {ns.tprintf("ERROR: Target server not specified"); return;}
  ns.tprintf("   HasRootAccess: "+ns.hasRootAccess(target));
  ns.tprintf("   PortsRequired: "+ns.getServerNumPortsRequired(target));
  ns.tprintf("          MaxRAM: "+ns.getServerMaxRam(target));
  ns.tprintf("         FreeRAM: "+((ns.getServerMaxRam(target))-(ns.getServerUsedRam(target))));
  ns.tprintf("       HackLevel: "+ns.getServerRequiredHackingLevel(target));
  ns.tprintf("        HackTime: "+(ns.getHackTime(target)%60));
  ns.tprintf(" MinSecrityLevel: "+ns.getServerMinSecurityLevel(target));
  ns.tprintf("   SecurityLevel: "+ns.getServerSecurityLevel(target));
  ns.tprintf("      WeakenTime: "+(ns.getWeakenTime(target)%60));
  ns.tprintf("        MaxMoney: "+ns.getServerMaxMoney(target));
  ns.tprintf("    CurrentMoney: "+ns.getServerMoneyAvailable(target));
  ns.tprintf("          Growth: "+ns.getServerGrowth(target));
  ns.tprintf("        GrowTime: "+(ns.getGrowTime(target)%60));
}
