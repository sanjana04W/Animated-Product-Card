document.getElementById("exportMore").onclick = function (e) {
    e.preventDefault();
    document.getElementById("exportList").style.display =
        document.getElementById("exportList").style.display === "none"
        ? "block"
        : "none";
};
