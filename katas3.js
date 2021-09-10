const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];








 function kata1() {

    let retornoDaFuncao = []

for(let num = 0; num < 25; num ++){
retornoDaFuncao.push(num+1);
 }
 return retornoDaFuncao
}




let div1 = document.createElement("div1")
document.querySelector("body").appendChild(div1)

let h2 = document.createElement("h2")
document.querySelector("div1").appendChild(h2)
h2.textContent = "Katas 1"

let p = document.createElement("p")
document.querySelector("div1").appendChild(p)
p.textContent = kata1()






function kata2() {

    let retornoDaFuncao = []

    for(let num = 25; num >= 0; num-- ){
retornoDaFuncao.push(num);
} 
 return retornoDaFuncao
}




 let div2 = document.createElement("div2")
 document.querySelector("body").appendChild(div2)

let hh2 = document.createElement("h2")
document.querySelector("div2").appendChild(hh2)
hh2.textContent = "Katas 2"

let pp = document.createElement("p")
document.querySelector("div2").appendChild(pp)
 pp.textContent = kata2()




function kata3() {
let retornoDaFuncao = []
for(let num = 0;num < 25;num ++){
    retornoDaFuncao.push((num +1)* -1)
}
return retornoDaFuncao
}



let div3 = document.createElement("div3")
document.querySelector("body").appendChild(div3)

let ah2 = document.createElement("h2")
document.querySelector("div3").appendChild(ah2)
ah2.textContent = "Katas 3"

let ap = document.createElement("p")
document.querySelector("div3").appendChild(ap)
ap.textContent = kata3()







function kata4() {
    let retornoDaFuncao = []
for(let num = 25;num > 1;num --){
    retornoDaFuncao.push(num* -1)
}
return retornoDaFuncao
}




let div4 = document.createElement("div4")
document.querySelector("body").appendChild(div4)

let bh2 = document.createElement("h2")
document.querySelector("div4").appendChild(bh2)
bh2.textContent = "Katas 4"

let bp = document.createElement("p")
document.querySelector("div4").appendChild(bp)
bp.textContent = kata3()











function kata5() {
    // implemente o código do kata 5 aqui
}


let div5 = document.createElement("div5")
document.querySelector("body").appendChild(div5)

let ch2 = document.createElement("h2")
document.querySelector("div5").appendChild(ch2)
ch2.textContent = "Katas 5"

let cp = document.createElement("p")
document.querySelector("div5").appendChild(cp)
cp.textContent = kata5()




function kata6() {
    let retornoDaFuncao = []
    for(let i = 1; i< 100;i++ ){
        if (i%3 === 0){
            retornoDaFuncao.push(i)
        }
    }return retornoDaFuncao
}


let div6 = document.createElement("div6")
document.querySelector("body").appendChild(div6)

let dh2 = document.createElement("h2")
document.querySelector("div6").appendChild(dh2)
dh2.textContent = "Katas 6"

let dp = document.createElement("p")
document.querySelector("div6").appendChild(dp)
dp.textContent = kata6()






function kata7() {
    let x = []
    for(let i = 1; i< 100;i++ ){
        if (i%7 === 0){
            x.push(i)
        }
    }return x
}





let div7 = document.createElement("div7")
document.querySelector("body").appendChild(div7)

let eh2 = document.createElement("h2")
document.querySelector("div7").appendChild(eh2)
eh2.textContent = "Katas 7"

let ep = document.createElement("p")
document.querySelector("div7").appendChild(ep)
ep.textContent = kata7()





function kata8() {
    let retornoDaFuncao = [];
    for(let i = 100; i > 0; i--){
        if(i%3 === 0 || i%7 === 0) {
            retornoDaFuncao.push(i);
        }
    }return retornoDaFuncao
}



let div8 = document.createElement("div8")
document.querySelector("body").appendChild(div8)

let rh2 = document.createElement("h2")
document.querySelector("div8").appendChild(rh2)
rh2.textContent = "Katas 8"

let rp = document.createElement("p")
document.querySelector("div8").appendChild(rp)
rp.textContent = kata7()








function kata9() {
    let retornoDaFuncao = [];
    for(let i = 0; i < 20; i++){
        if(i%2 === 0) {
            retornoDaFuncao.push(( i + 1 )*5)}
        }return retornoDaFuncao
}



let div9 = document.createElement("div9")
document.querySelector("body").appendChild(div9)

let th2 = document.createElement("h2")
document.querySelector("div9").appendChild(th2)
th2.textContent = "Katas 9"

let tp = document.createElement("p")
document.querySelector("div9").appendChild(tp)
tp.textContent = kata9()





function kata10() {
    return sampleArray;
}




let div10 = document.createElement("div10")
document.querySelector("body").appendChild(div10)

let yh2 = document.createElement("h2")
document.querySelector("div10").appendChild(yh2)
yh2.textContent = "Katas 10"

let yp = document.createElement("p")
document.querySelector("div10").appendChild(yp)
yp.textContent = kata10()







function kata11() {
    let retornoDaFuncao = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]%2 === 0){
            retornoDaFuncao.push(sampleArray[i]);
}
    }return retornoDaFuncao
}



let div11 = document.createElement("div11")
document.querySelector("body").appendChild(div11)

let uh2 = document.createElement("h2")
document.querySelector("div11").appendChild(uh2)
uh2.textContent = "Katas 11"

let up = document.createElement("p")
document.querySelector("div11").appendChild(up)
up.textContent = kata11()






function kata12() {
    let retornoDaFuncao = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]%2 === 1){
         retornoDaFuncao.push(sampleArray[i]);
}
    }return retornoDaFuncao
}




let div12 = document.createElement("div12")
document.querySelector("body").appendChild(div12)

let zh2 = document.createElement("h2")
document.querySelector("div12").appendChild(zh2)
zh2.textContent = "Katas 12"

let zp = document.createElement("p")
document.querySelector("div12").appendChild(zp)
zp.textContent = kata12()






function kata13() {
    let retornoDaFuncao = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]%8 === 0){
            retornoDaFuncao.push(sampleArray[i]);
}
    }return retornoDaFuncao
}



let div13 = document.createElement("div13")
document.querySelector("body").appendChild(div13)

let xh2 = document.createElement("h2")
document.querySelector("div13").appendChild(xh2)
xh2.textContent = "Katas 13"

let xp = document.createElement("p")
document.querySelector("div13").appendChild(xp)
xp.textContent = kata12()






function kata14() {
}




let div14 = document.createElement("div14")
document.querySelector("body").appendChild(div14)

let mh2 = document.createElement("h2")
document.querySelector("div14").appendChild(mh2)
mh2.textContent = "Katas 14"

let mp = document.createElement("p")
document.querySelector("div14").appendChild(mp)
mp.textContent = kata14()




function kata15() {
    let varAux = 0;
    for(let numero = 0; numero <= 20; numero++){
        if(numero >= 0){
            varAux += numero;
        }
    }return varAux;
}



let div15 = document.createElement("div15")
document.querySelector("body").appendChild(div15)

let çh2 = document.createElement("h2")
document.querySelector("div15").appendChild(çh2)
çh2.textContent = "Katas 15"

let çp = document.createElement("p")
document.querySelector("div15").appendChild(çp)
çp.textContent = kata15()








function kata16() {
        let varAux = 0;
        for(let numero = 0; sampleArray.length > numero; numero++){
            if(sampleArray[numero] >= 0){
                varAux += sampleArray[numero];
            }
        }return varAux;
    }


    let div16 = document.createElement("div16")
    document.querySelector("body").appendChild(div16)
    
    let aaah2 = document.createElement("h2")
    document.querySelector("div16").appendChild(aaah2)
    aaah2.textContent = "Katas 16"
    
    let aaap = document.createElement("p")
    document.querySelector("div16").appendChild(aaap)
    aaap.textContent = kata16()
    
    


    function kata17() {
        let aux, menor = 0;
        for (let i = 0; i < sampleArray.length; i++){
            if(sampleArray[i]<menor){
                menor=sampleArray[i];
            }
            aux = menor;
        } return aux;
}



let div17 = document.createElement("div17")
    document.querySelector("body").appendChild(div17)
    
    let bbah2 = document.createElement("h2")
    document.querySelector("div17").appendChild(bbah2)
    bbah2.textContent = "Katas 17"
    
    let bbap = document.createElement("p")
    document.querySelector("div17").appendChild(bbap)
    bbap.textContent = kata17()
    
    



function kata18() {
}



let div18 = document.createElement("div18")
    document.querySelector("body").appendChild(div18)
    
    let abah2 = document.createElement("h2")
    document.querySelector("div18").appendChild(abah2)
    abah2.textContent = "Katas 18"
    
    let abap = document.createElement("p")
    document.querySelector("div18").appendChild(abap)
    abap.textContent = kata18()
    





/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
