requirejs.config({
    paths: {
        jquery: "src/main/js/jquery-1.9.1.min"
    },
    shim: {

    }
});

require(["svc/annoying-alert"],function(AnnoyingAlert) {
    var a = new AnnoyingAlert();
    a.annoyingThing();
});