const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');

const searchFun =()=>{
    let filter=document.getElementById('searchBar').value.toUpperCase();

    let myTable=document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');

for(var i=0; i<tr.length; i++){
    let td= tr[i].getElementsByTagName('td')[0];
if(td){
    let textValue =td.textContent || td.innerHTML;
if(textValue.toUpperCase().indexOf(filter)>-1){
    tr[i].style.display=" ";
}
else{
    tr[i].style.display="none";
}

}


}






}

