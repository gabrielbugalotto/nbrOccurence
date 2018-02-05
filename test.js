console.log('Hello World');
/*

var searchElement = function(data, callback){
   if(data.tableau.indexOf(data.element) != -1)
        return callback(null, data.tableau.indexOf(data.element))
   return callback(`Element ${data.element} n'existe pas dans le tableau`);     
};

var tab =[1,3,6,8,9];
var element = 5;
var data = {
    tableau: tab,
    element: element
};

searchElement(data, function(err, result){
    if(err)
        console.error(`erreur: ${err}`);
    else
        console.log(`${element} existe à la postion ${result}`);    
});
*/
/* var str ="abaabbbaaaab";
var chaine ="ab";

var data = {
    str : str,
    bout : chaine
}

var searchRecurse = function(data, callback){
    var compt = 0; 
    for(var i = 0; i <= data.str.length - data.bout.length; i++){
       if(data.str.substr(i, data.bout.length) == data.bout){
            compt++;
       }   
    }
    if(compt != 0)
        return callback(null, compt);
    return callback(`${data.bout} n'existe pas dans la chaine ${data.str}`);    
} 

searchRecurse(data, function(err, result){
    if(err)
        console.error(`erreur: ${err}`);
    else
        console.log(`${data.bout} existe ${result} fois dans la chaine ${data.str}`);  
}); */

var str = "aabaabbbabbbaa";
var ch = ["ab", "ba", "abba"];

var data = {
    str: str,
    ch : ch
}
var chaine = "";

/* autre possiblité:

var comptElement = function(data, callback){
    for(var j = 0; j < data.ch.length; j++){
        var compt = 0;
        for(var i = 0; i < data.str.length - data.ch[j].length; i++){
            if(data.str.substr(i, data.ch[j].length) == data.ch[j]){
                compt++;
            }   
        }
        chaine += ` ${data.ch[j]} existe ${compt} fois dans la chaine ${data.str}`;
    }
    if(chaineR != "")
        return callback(null, chaineR);
    return callback(`Aucuns elements ${data.ch} existent dans la chaine ${data.str}`);
} 
comptElement(data, function(err, result){
    if(err)
        console.error(`erreur: ${err}`);
    else
        console.log(chaineR);
});

*/


var comptElement = function (data, callback) {
    var compt = 0;
    for (var j = 0; j < data.ch.length; j++) {

        for (var i = 0; i < data.str.length - data.ch[j].length; i++) {
            if (data.str.substr(i, data.ch[j].length) == data.ch[j]) {
                compt++;
            }
        }
    }
    if (compt != 0)
        return callback(null, compt);
    return callback(`Aucuns elements ${data.ch} existent dans la chaine ${data.str}`);
}
comptElement(data, function (err, result) {
    if (err)
        console.error(`erreur: ${err}`);
    else
        console.log(`au moins un element ${data.ch} existe pas dans la chaine ${data.str}`);
});
