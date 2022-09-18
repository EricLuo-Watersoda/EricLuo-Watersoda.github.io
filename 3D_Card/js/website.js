var system ={};
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if(system.win||system.mac||system.xll){
window.location.href="https://ericluo-watersoda.gitee.io/3D_Card";
}
else{
window.location.href="http://tudou.com";
}