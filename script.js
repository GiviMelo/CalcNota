
function calcNote() {
    var media = parseFloat(document.getElementById('mediaInp').value);
    var note1 = parseFloat(document.getElementById("note1Inp").value);
    var note2 = parseFloat(document.getElementById("note2Inp").value);
    var res = document.getElementById('res')

    var note3 = parseFloat((media * 3) - (note1 + note2))


    res.innerHTML = `A nota necessária é ${note3}`

    
    /*
    var addition = Math.floor(note1 + note2)

    window.alert(addition)
    */

//    var neededNote = Math.floor()

    //    res.innerHTML = `A média é ${media}, a primeira nota é ${note1} e a segunda nota é ${note2}`;
//    window.alert(`A média é ${media} e a primeira nota é ${note1}`)
}




