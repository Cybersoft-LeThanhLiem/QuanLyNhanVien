function Validation() {
    this.checkEmpty = function (input, spanID, message) {
        if (input.trim() != "") {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    this.checkAcc = function (input, spanID, message) {
        var accPattern = /^[a-zA-Z0-9]{4,6}$/;
        if (input.match(accPattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
}