window.onload = function() {
    var select = document.getElementById("styleChanger");
    var linkStyle = document.getElementsByTagName("link")[1];

    select.onchange = function() {
        linkStyle.setAttribute("href", "styles/style_" + select.value + ".css");
    }
}