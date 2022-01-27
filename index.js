function submitForm() {
    document.getElementById('addForm').innerHTML += loopAdd();

}
function loopAdd() {
    var person = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var mobile = document.getElementById('mobile').value;
    var link = document.getElementById('link').value;
    var domain = ['.com', '.be', '.net', '.in', '.edu', '.org']
    for (const linkVarify of domain) {
        var linkRgxp = new RegExp(linkVarify, 'gi')
        var linkTest = link.match(linkRgxp);
        var linkCheck = ''
        if (linkTest !== null) {
            linkCheck = "<a href='"+link+"'>Follow link</a>"
            break
        }
        else{
            linkCheck = 'Link Invalid';
        }
    }
    
    // person Array
    var personList = [person, address, mobile, linkCheck];
    var tData = ''
    for (const td of personList) {
        tData += '<td>'+td+'</td>'
    }
    return '<tr>'+tData+'</tr>'
}
