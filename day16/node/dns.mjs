//DNS
//도메인을 통해 ip, dns 레코드를 얻고자 할때 사용
import dns from "dns/promises";

const ip = await dns.lookup("gilbut.co.kr");
console.log("IP", ip);

const a = await dns.resolve("gilbut.co.kr", "A");
console.log("A", a); //ipv4 address

const mx = await dns.resolve("gilbut.co.kr", "MX");
console.log("MX", mx); //메일서버

const cname = await dns.resolve("www.gilbut.co.kr", "CNAME");
console.log("CNAME", cname); //별칭

const any = await dns.resolve("gilbut.co.kr", "ANY");
console.log("ANY", any);

//AAAA(ipv6 주소), NS(네임서버), SOA(도메인 정보)
