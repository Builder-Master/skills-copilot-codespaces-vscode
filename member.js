function skillsMember() {
    var member = document.getElementById("member").value;
    var member = parseInt(member);
    var skills = document.getElementById("skills").value;
    var skills = parseInt(skills);
    var total = member * skills;
    document.getElementById("total").value = total;
}