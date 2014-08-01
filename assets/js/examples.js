/* global alertify, SyntaxHighlighter */
"use strict";

SyntaxHighlighter.all();

var
    $ = function (id) {
        return document.getElementById(id);
    },
    reset = function () {
        $("toggleCSS").href = "assets/js/lib/alertify/alertify.css";
        alertify.set({
            labels: {
                ok: "OK",
                cancel: "Cancel"
            },
            delay: 5000,
            buttonReverse: false,
            buttonFocus: "ok"
        });
    };

// ==============================
// Standard Dialogs
$("alert").onclick = function () {
    reset();
    alertify.alert("This is an alert dialog");
    return false;
};

$("confirm").onclick = function () {
    reset();
    alertify.confirm("This is a confirm dialog", function (e) {
        if (e) {
            alertify.success("You've clicked OK");
        } else {
            alertify.error("You've clicked Cancel");
        }
    });
    return false;
};

$("prompt").onclick = function () {
    reset();
    alertify.prompt("This is a prompt dialog", function (e, str) {
        if (e) {
            alertify.success("You've clicked OK and typed: " + str);
        } else {
            alertify.error("You've clicked Cancel");
        }
    }, "Default Value");
    return false;
};

// ==============================
// Standard Dialogs
$("notification").onclick = function () {
    reset();
    alertify.log("Standard log message");
    return false;
};

$("success").onclick = function () {
    reset();
    alertify.success("Success log message");
    return false;
};

$("error").onclick = function () {
    reset();
    alertify.error("Error log message");
    return false;
};

// ==============================
// Custom Properties
$("delay").onclick = function () {
    reset();
    alertify.set({delay: 10000});
    alertify.log("Hiding in 10 seconds");
    return false;
};

$("forever").onclick = function () {
    reset();
    alertify.log("Will stay until clicked", "", 0);
    return false;
};

$("labels").onclick = function () {
    reset();
    alertify.set({labels: {ok: "Accept", cancel: "Deny"}});
    alertify.confirm("Confirm dialog with custom button labels", function (e) {
        if (e) {
            alertify.success("You've clicked OK");
        } else {
            alertify.error("You've clicked Cancel");
        }
    });
    return false;
};

$("focus").onclick = function () {
    reset();
    alertify.set({buttonFocus: "cancel"});
    alertify.confirm("Confirm dialog with cancel button focused", function (e) {
        if (e) {
            alertify.success("You've clicked OK");
        } else {
            alertify.error("You've clicked Cancel");
        }
    });
    return false;
};

$("order").onclick = function () {
    reset();
    alertify.set({buttonReverse: true});
    alertify.confirm("Confirm dialog with reversed button order", function (e) {
        if (e) {
            alertify.success("You've clicked OK");
        } else {
            alertify.error("You've clicked Cancel");
        }
    });
    return false;
};

// ==============================
// Custom Log
$("custom").onclick = function () {
    reset();
    alertify.custom = alertify.extend("custom");
    alertify.custom("I'm a custom log message");
    return false;
};

// ==============================
// Custom Themes
$("bootstrap").onclick = function () {
    reset();
    $("toggleCSS").href = "assets/js/lib/alertify/alertify-bootstrap.css";
    alertify.prompt("Prompt dialog with Bootstrap theme", function (e) {
        if (e) {
            alertify.success("You've clicked OK");
        } else {
            alertify.error("You've clicked Cancel");
        }
    }, "Default Value");
    return false;
};

$("bootstrap-3").onclick = function () {
    reset();
    $("toggleCSS").href = "assets/js/lib/alertify/alertify-bootstrap-3.css";
    alertify.prompt("Prompt dialog with Bootstrap 3 theme", function (e) {
        if (e) {
            alertify.success("You've clicked OK");
        } else {
            alertify.error("You've clicked Cancel");
        }
    }, "Default Value");
    return false;
};

(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,"script","//www.google-analytics.com/analytics.js","ga");

ga("create", "UA-51240888-3", "auto");
ga("send", "pageview");

