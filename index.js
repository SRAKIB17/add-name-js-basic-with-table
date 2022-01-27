function submitForm() {
    document.getElementById('addForm').innerHTML += loopAdd();

}
function loopAdd() {
    var person = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var mobile = document.getElementById('mobile').value;
    var link = document.getElementById('link').value;
    // person Array
    var personList = [person, address, mobile, link]
    var tData = ''
    for (const td of personList) {
        tData += '<td>'+td+'</td>'
    }
    return '<tr>'+tData+'</tr>'
}