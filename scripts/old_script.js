const allDate = ["04.04", "05.04", "19.04", "21.04","22.04", "02.05","03.05","05.05","08.05","09.05","18.05","20.05","23.05","27.05","28.05","30.05","01.06","03.06","Références"];

//Listes des dates/sections textes, la première est 0
const header = document.querySelector(".header");
const date = document.querySelector(".date");
const left = document.getElementById("left");
const container = document.querySelector(".container");
const body = document.querySelector("body");



const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");
const section3 = document.getElementById("section-3");
const section4 = document.getElementById("section-4");
const section5 = document.getElementById("section-5");
const section6 = document.getElementById("section-6");
const section7 = document.getElementById("section-7");
const section8 = document.getElementById("section-8");
const section9 = document.getElementById("section-9");
const section10 = document.getElementById("section-10");
const section11 = document.getElementById("section-11");
const section12 = document.getElementById("section-12");
const section13 = document.getElementById("section-13");
const section14 = document.getElementById("section-14");
const section15 = document.getElementById("section-15");
const section16 = document.getElementById("section-16");
const section17 = document.getElementById("section-17");
const section18 = document.getElementById("section-18");
const section19 = document.getElementById("section-19");



//définit un margin à partir du bloc 'class date'
document.querySelector(".container").style.top =
  header.offsetHeight.toString() + "px";



// //définit un margin à partir du bloc 'class date' A MODIFIER //////
// document.querySelector(".container").style.clientHeight =
// body.clientHeight - container.clientHeight.toString() + "px";

// Prend les positions du haut de chaque bloc
const positionSection1 = section1.offsetTop;
const positionSection2 = section2.offsetTop;
const positionSection3 = section3.offsetTop;
const positionSection4 = section4.offsetTop;
const positionSection5 = section5.offsetTop;
const positionSection6 = section6.offsetTop;
const positionSection7 = section7.offsetTop;
const positionSection8 = section8.offsetTop;
const positionSection9 = section9.offsetTop;
const positionSection10 = section10.offsetTop;
const positionSection11 = section11.offsetTop;
const positionSection12 = section12.offsetTop;
const positionSection13 = section13.offsetTop;
const positionSection14 = section14.offsetTop;
const positionSection15 = section15.offsetTop;
const positionSection16 = section16.offsetTop;
const positionSection17 = section17.offsetTop;
const positionSection18 = section18.offsetTop;
const positionSection19 = section19.offsetTop;

console.log(positionSection1);

left.addEventListener("scroll", () => {
  let headerBottomScrollPosition = left.scrollTop + header.offsetHeight;

  // Le premier if doit être la dernière section, il faut prendre les sections à l'envers
  if (headerBottomScrollPosition >= positionSection19-50) {
    date.innerHTML = allDate[18];
    console.log("hello 19");
  } else if (headerBottomScrollPosition >= positionSection18-50) {
    date.innerHTML = allDate[17];
    console.log("hello 18");
  } else if (headerBottomScrollPosition >= positionSection17-50) {
    date.innerHTML = allDate[16];
    console.log("hello 17");
  }else if (headerBottomScrollPosition >= positionSection16-50) {
    date.innerHTML = allDate[15];
    console.log("hello 16");
  }else if (headerBottomScrollPosition >= positionSection15-50) {
    date.innerHTML = allDate[14];
    console.log("hello 15");
  }else if (headerBottomScrollPosition >= positionSection14-50) {
    date.innerHTML = allDate[13];
    console.log("hello 14");
  }else if (headerBottomScrollPosition >= positionSection13-50) {
    date.innerHTML = allDate[12];
    console.log("hello 13");
  }else if (headerBottomScrollPosition >= positionSection12-50) {
    date.innerHTML = allDate[11];
    console.log("hello 12");
  } else if (headerBottomScrollPosition >= positionSection11-50) {
    date.innerHTML = allDate[10];
    console.log("hello 11");
  }else if (headerBottomScrollPosition >= positionSection10-50) {
    date.innerHTML = allDate[9];
    console.log("hello 10");
  }else if (headerBottomScrollPosition >= positionSection9-50) {
    date.innerHTML = allDate[8];
    console.log("hello 9");
  }else if (headerBottomScrollPosition >= positionSection8-50) {
    date.innerHTML = allDate[7];
    console.log("hello 8");
  }else if (headerBottomScrollPosition >= positionSection7-50) {
    date.innerHTML = allDate[6];
    console.log("hello 7");
  }else if (headerBottomScrollPosition >= positionSection6-50) {
    date.innerHTML = allDate[5];
    console.log("hello 6");
  }else if (headerBottomScrollPosition >= positionSection5-50) {
    date.innerHTML = allDate[4];
    console.log("hello 5");
  }else if (headerBottomScrollPosition >= positionSection4-50) {
    date.innerHTML = allDate[3];
    console.log("hello 4");
  }else if (headerBottomScrollPosition >= positionSection3-50) {
    date.innerHTML = allDate[2];
    console.log("hello 3");
  }else if (headerBottomScrollPosition >= positionSection2-50) {
    date.innerHTML = allDate[1];
    console.log("hello 2");
  }else if (headerBottomScrollPosition >= positionSection1-50) {
    date.innerHTML = allDate[0];
    console.log("hello 1");
  }
  
  // donne à la console les positions
  console.log(
    headerBottomScrollPosition,
    positionSection1,
    positionSection2,
    positionSection3
  );
});
