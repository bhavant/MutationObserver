(function() {

    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    console.log("Adding Observer");

    var target = document;
    console.log("targetNode: " + target );

    // mutations to observe
    var config = { attributes: true, childList: true, characterData: true, subtree: true };

    var timeDomChanges = [];
    var firstTimeDone = false;

    var callback = function() {
        timeDomChanges.push(Date.now());
        if (firstTimeDone === false) {
            firstTimeDone = true;
            var checkDomChangeTimes = setInterval(
                function checkerDOM() {
                    // counter++;
                    var lastTime = timeDomChanges[timeDomChanges.length - 1];
                    if ((Date.now() - lastTime) > 3000) {
                        console.log("DOM Stable");
                        firstTimeDone = false;
                        clearInterval(checkDomChangeTimes);
                    } else {
                        console.log("DOM Not Stable");
                    }
                },3000
            ) 
        }
    }

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(target, config);
    console.log("Done Adding");

})();