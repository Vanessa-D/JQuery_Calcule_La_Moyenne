$(function(){
    // On récupère dans des variables des notes random de 0 à 20 pour chaque input
    let randomNote1 = Math.floor(Math.random()*21);
    let randomNote2 = Math.floor(Math.random()*21);
    let randomNote3 = Math.floor(Math.random()*21);
    let randomNote4 = Math.floor(Math.random()*21);
    let randomNote5 = Math.floor(Math.random()*21);
      
    //Au clic du bouton qui génère les notes, on affiche les valeurs random dans chaque input
    $('#randomNote').click(function(){
        $('#note1').val(randomNote1);
        $('#note2').val(randomNote2);
        $('#note3').val(randomNote3);
        $('#note4').val(randomNote4);
        $('#note5').val(randomNote5);

        // Et on génère un nouveau random pour chaque input en attendant le prochain clic
        randomNote1 = Math.floor(Math.random()*21);
        randomNote2 = Math.floor(Math.random()*21);
        randomNote3 = Math.floor(Math.random()*21);
        randomNote4 = Math.floor(Math.random()*21);
        randomNote5 = Math.floor(Math.random()*21);
    });

    // Au clic du bouton qui calcule la moyenne des notes affichées dans les input...
    $('#average').click(function(){
        // Variable qui devient objet --> contient la liste des input .note
        let notes = $('.note');
        // Initialisation de la somme à 1
        let sum = 0;
        
        // Tant que l'objet notes contient des éléments .note
        for(let i = 0; i < notes.length; i++){
            // Variable qui récupère la valeur saisie dans chaque input
            let note = Number(notes[i].value);
            // Si les valeurs sont affichées OU si elles sont égales à 0
            if(note || note == 0){
                // Calcul de la sommme des notes
                sum += note;
            }else{
                alert('Donne-moi des notes !');
                return false; // Si on entre dans le else --> la fonction ne checkera pas ce qui suit
            }
        }
        // Variable qui permet le calcul de la moyenne + alerte qui l'affiche
        let average = (sum/notes.length);
        alert(average);
    });
});



// OR
/*
$(function(){
    // Au clic...
    $('#average').click(function(){
        // On récupère les valeurs saisies dans les input
        let note1 = $('#note1').val();
        let note2 = $('#note2').val();
        let note3 = $('#note3').val();
        let note4 = $('#note4').val();
        let note5 = $('#note5').val();
 
        // On place les notes dans un tableau --> récupéré en nombre décimal --> méthode parseFloat()
        // dans une variable 
        let notes = [parseFloat(note1), parseFloat(note2), parseFloat(note3), parseFloat(note4), parseFloat(note5)];
    
        if(note1 && note2 && note3 && note4 && note5 && (note1 <= 20 && note1 >= 0) && (note2 <= 20 && note2 >= 0) && (note3 <= 20 && note3 >= 0) && (note4 <= 20 && note4 >= 0) && (note5 <= 20 && note5 >= 0)){
            let sum = 0;
            for(let i = 0; i < notes.length; i++){
            sum += notes[i];         
            }
            alert(sum/5);
        }else{
            alert('Un nombre entre 0 et 20 !');
        }
    });
});
*/



// OR
/*
$(function(){
    // Au clic...
    $('#average').click(function(){
        // On récupère les valeurs saisies dans les input
        let note1 = $('#note1').val();
        let note2 = $('#note2').val();
        let note3 = $('#note3').val();
        let note4 = $('#note4').val();
        let note5 = $('#note5').val(); 

        // Et on vérifie que les valeurs existent et qu'elles se situent entre 0 et 20
        if(note1 && note2 && note3 && note4 && note5 && (note1 <= 20 && note1 >= 0) && (note2 <= 20 && note2 >= 0) && (note3 <= 20 && note3 >= 0) && (note4 <= 20 && note4 >= 0) && (note5 <= 20 && note5 >= 0)){
            let average = (parseFloat(note1) + parseFloat(note2) + parseFloat(note3) + parseFloat(note4) + parseFloat(note5))/5;
            alert(average);
        }else{
            alert('Un nombre entre 0 et 20 !');
        }
    }); 
});
*/



// PROPOSITION ADELE --> variable objet
/*
$(function(){
    $('#average').click(function(){
        // variable qui devient objet --> contient la liste des input .note
        let notes = $('.note');

        let totalNotes = 0;

        // Boucle pour parcourir tous les input
        for(let i = 0; i < notes.length; i++){
            let note = Number(notes[i].value);
            if(note > 20){
                alert('Ca va pas');
                return false;
            }else{
                totalNotes += note;
            }
        }
        let average = totalNotes/notes.length;
        alert(average);
    });
})
*/



// PROPOSITION SAPHIR --> méthode each()
/*
$('#average').click(function(){
    let sum = 0;
    let average = 0;
    // note --> chaque élément de l'objet .note
    $('.note').each(function(note){
        if(note > 20 && note < 0){
            alert('Ca va pas'); 
        }else if(note){
            sum += parseFloat($(this).val());  
        }
    });
    average = sum/$('.note').length;
    alert(average);
});
*/