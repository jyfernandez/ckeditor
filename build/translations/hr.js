(function(d){	const l = d['hr'] = d['hr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 od %1",Aquamarine:"Akvamarin",Black:"Crna","Block quote":"Blok citat",Blue:"Plava",Bold:"Podebljano","Bulleted List":"Obična lista",Cancel:"Poništi","Centered image":"Centrirana slika","Change image text alternative":"Promijeni alternativni tekst slike","Choose heading":"Odaberite naslov",Column:"Kolona","Decrease indent":"Umanji uvlačenje","Delete column":"Obriši kolonu","Delete row":"Obriši red","Dim grey":"Tamnosiva","Document colors":"Boje dokumenta",Downloadable:"Moguće preuzeti","Dropdown toolbar":"Traka padajućeg izbornika","Edit link":"Uredi vezu","Editor toolbar":"Traka uređivača","Enter image caption":"Unesite naslov slike","Font Background Color":"Pozadinska Boja Fonta","Font Color":"Boja Fonta","Full size image":"Slika pune veličine",Green:"Zelena",Grey:"Siva","Header column":"Kolona zaglavlja","Header row":"Red zaglavlja",Heading:"Naslov","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"Naslov 3","Heading 4":"Naslov 4","Heading 5":"Naslov 5","Heading 6":"Naslov 6","Image toolbar":"Traka za slike","image widget":"Slika widget","Increase indent":"Povećaj uvlačenje","Insert column left":"Umetni stupac lijevo","Insert column right":"Umetni stupac desno","Insert image":"Umetni sliku","Insert media":"Ubaci medij","Insert row above":"Ubaci red iznad","Insert row below":"Ubaci red ispod","Insert table":"Ubaci tablicu",Italic:"Ukošeno","Left aligned image":"Lijevo poravnata slika","Light blue":"Svijetloplava","Light green":"Svijetlozelena","Light grey":"Svijetlosiva",Link:"Veza","Link URL":"URL veze","Media URL":"URL medija","media widget":"dodatak za medije","Merge cell down":"Spoji ćelije prema dolje","Merge cell left":"Spoji ćelije prema lijevo","Merge cell right":"Spoji ćelije prema desno","Merge cell up":"Spoji ćelije prema gore","Merge cells":"Spoji ćelije",Next:"Sljedeći","Numbered List":"Brojčana lista","Open in a new tab":"Otvori u novoj kartici","Open link in new tab":"Otvori vezu u novoj kartici",Orange:"Narančasta",Paragraph:"Paragraf","Paste the media URL in the input.":"Zalijepi URL medija u ulaz.",Previous:"Prethodni",Purple:"Ljubičasta",Red:"Crvena",Redo:"Ponovi","Remove color":"Ukloni boju","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Right aligned image":"Slika poravnata desno",Row:"Red",Save:"Snimi","Select column":"","Select row":"","Show more items":"Prikaži više stavaka","Side image":"Slika sa strane","Split cell horizontally":"Razdvoji ćeliju vodoravno","Split cell vertically":"Razdvoji ćeliju okomito","Table toolbar":"Traka za tablice","Text alternative":"Alternativni tekst","The URL must not be empty.":"URL ne smije biti prazan.","This link has no URL":"Ova veza nema URL","This media URL is not supported.":"URL nije podržan.","Tip: Paste the URL into the content to embed faster.":"Natuknica: Za brže ugrađivanje zalijepite URL u sadržaj.",Turquoise:"Tirkizna",Undo:"Poništi",Unlink:"Ukloni vezu","Upload failed":"Slanje nije uspjelo","Upload in progress":"Slanje u tijeku",White:"Bijela","Widget toolbar":"Traka sa spravicama",Yellow:"Žuta"}	);l.getPluralForm=function(n){return n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));