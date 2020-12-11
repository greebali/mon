function GetXmlHttpObject(){
    if (window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    }
    if (window.ActiveXObject){
        // code for IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    return null;
}

function getHttp(url, id){
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null){
        alert ("Przeglądarka nie obsługuje HTTP Request");
        return;
    }
    xmlhttp.open("GET",url,true);
    xmlhttp.onreadystatechange = function stateChanged(){
        if (xmlhttp.readyState==4){
            document.getElementById(id).innerHTML=xmlhttp.responseText;
        }
    };
    xmlhttp.send(null);

}

function localSubmit(){
    document.localForm.submit();
}

function objectSubmit(){
  document.objectForm.submit();
}

function objectDetailSubmit(){
    t = document.getElementById('name1').value;
    document.objectForm.name2.value=t;
    document.objectForm.name1.value='';

    document.objectForm.submit();
}

function deleteConfirm(url){
    if(confirm('Przywrócenie nie będzie możliwe. Czy na pewno usunąć?')){
        document.location.href=url;
    }
}

function checkObjectPrice(){
	min=(document.getElementById('minPrice').value*1);
	max=(document.getElementById('maxPrice').value*1);
    if(min>max){
        alert("Cena do nie może być mniejsza od ceny od!");
        document.getElementById('maxPrice').value='';
    }
}

function deleteObjectPhoto(id){
    document.objectForm.photoDelete.value=1;
    document.getElementById(id).style.display='none';
}

function deleteAttractionPhoto(lang){
    if(lang=='Pl'){
        document.objectForm.photoDeletePl.value=1;
    } else {
        document.objectForm.photoDeleteEn.value=1;
    }
    document.getElementById('photo'+lang).style.display='none';
}

function deleteSimplePhoto(lang){
    if(lang=='Pl'){
        document.objectForm.photoDeletePl.value=1;
    } else {
        document.objectForm.photoDeleteEn.value=1;
    }
    document.getElementById('photo'+lang).style.display='none';
}

function deleteObjectLogo(id){
    document.objectForm.logoDelete.value=1;
    document.getElementById(id).style.display='none';
}

function switchLang(lang){
    if(lang=='pl'){
        document.getElementById('pl').style.display='block';
        document.getElementById('en').style.display='none';
    } else {
        document.getElementById('en').style.display='block';
        document.getElementById('pl').style.display='none';
    }
}

function checkElement(){
    element=document.getElementById('labElement').options[document.getElementById('labElement').selectedIndex];
    if(element.value==4){
        document.getElementById('elementDetail4').style.display='block';
        document.getElementById('elementCounter').style.display='block';
        document.getElementById('elementDetail8').style.display='none';
        document.getElementById('elementGroup').style.display='none';
        document.getElementById('elementGroup2').style.display='none';
    }else if(element.value==7){
        document.getElementById('elementDetail4').style.display='none';
        document.getElementById('elementDetail8').style.display='none';
        document.getElementById('elementCounter').style.display='block';
        document.getElementById('elementGroup').style.display='none';
        document.getElementById('elementGroup2').style.display='block';
    }else if(element.value==15){
        document.getElementById('elementDetail4').style.display='none';
        document.getElementById('elementDetail8').style.display='none';
        document.getElementById('elementCounter').style.display='block';
        document.getElementById('elementGroup').style.display='block';
        document.getElementById('elementGroup2').style.display='none';
    }else if((element.value==8) || (element.value==12)){
        document.getElementById('elementDetail4').style.display='none';
        document.getElementById('elementDetail8').style.display='block';
        document.getElementById('elementCounter').style.display='block';
        document.getElementById('elementGroup').style.display='none';
        document.getElementById('elementGroup2').style.display='none';
    }else {
        document.getElementById('elementDetail4').style.display='none';
        document.getElementById('elementDetail8').style.display='none';
        document.getElementById('elementCounter').style.display='none';
		document.getElementById('elementGroup').style.display='none';
		document.getElementById('elementGroup2').style.display='none';
    }
}

function checkCatalogType(){
    element=document.getElementById('labIdType').options[document.getElementById('labIdType').selectedIndex];
    if(element.value==2){
        document.getElementById('elementObjectSpecial').style.display='none';
        document.getElementById('elementSpecialModuleLabel').style.display='none';
		document.getElementById('elementLocalKind').style.display='block';
    }else if(element.value==4){
        document.getElementById('elementObjectSpecial').style.display='none';
        document.getElementById('elementSpecialModuleLabel').style.display='block';
		document.getElementById('elementLocalKind').style.display='none';
    }else if(element.value==14){
        document.getElementById('elementSpecialModuleLabel').style.display='none';
        document.getElementById('elementObjectSpecial').style.display='block';
        document.getElementById('elementLocalKind').style.display='none';
    }else if(element.value==19){
        document.getElementById('elementSpecialModuleLabel').style.display='none';
        document.getElementById('elementLocalSpecial').style.display='block';
        document.getElementById('elementLocalKind').style.display='none';
    }else {
        document.getElementById('elementObjectSpecial').style.display='none';
        document.getElementById('elementSpecialModuleLabel').style.display='none';
		document.getElementById('elementLocalKind').style.display='none';
    }
}


function checkIsOffer(){
    element=document.getElementById('labIsOffer').options[document.getElementById('labIsOffer').selectedIndex];
    if(element.value==1){
        document.getElementById('offerCounter').style.display='block';
        document.getElementById('idLocalKind').style.display='none';
		document.getElementById('idObjectGroup').style.display='block';
    }else {
    	document.getElementById('idLocalKind').style.display='block';
        document.getElementById('offerCounter').style.display='block';
		document.getElementById('idObjectGroup').style.display='none';
    }
}

function switchTime(element){
    if(element.checked){
        document.getElementById('labTimeFrom').style.display='none';
        document.getElementById('labTimeFrom').disabled='disabled';
        document.getElementById('labTimeTo').style.display='none';
        document.getElementById('labTimeTo').disabled='disabled';
    } else {
        document.getElementById('labTimeFrom').style.display='block';
        document.getElementById('labTimeFrom').disabled='';
        document.getElementById('labTimeTo').style.display='block';
        document.getElementById('labTimeTo').disabled='';
    }
}


function switchSearch(){
    if(document.getElementById('hideSearch').style.display=='none'){
        document.getElementById('hideSearch').style.display='block';
    }
    if(document.getElementById('hideLinkSearch').style.display=='block'){
        document.getElementById('hideLinkSearch').style.display='none';
    }
}

function switchSpecialModule(key){
    for(k=0;k<=3;k++){
        if(document.getElementById('specialModuleParam_'+k)!=null)document.getElementById('specialModuleParam_'+k).style.display='none';
    }
    if(document.getElementById('specialModuleParam_'+key)!=null)document.getElementById('specialModuleParam_'+key).style.display='block';
}
