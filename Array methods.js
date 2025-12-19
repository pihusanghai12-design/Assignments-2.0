var points = [20,46,39,15,60];
console.log(points);

function ascending(){
    points.sort(function(a,b){return(a-b)});
    console.log(points);
}

function descending(){
    points.reverse(function(a,b){return(b-a)});
    console.log(points);
}
function myFunction(points) {
            return points - 7;
        }
        var newarray=points.map(myFunction);
        console.log(newarray);
ascending()
descending()
myFunction(points)