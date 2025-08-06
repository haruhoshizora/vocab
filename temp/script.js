// ==UserScript==
// @name         Pinterest
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Pinterest
// @author       z
// @match        *://www.pinterest.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to click elements when they appear
    function auto_() {
        const targetElement = document.querySelector('.S9z.eEj.oCZ.Tbt.L4E'); // Initial class

        if (document.querySelector('[class="ePF gUZ U9O kVc"]') != null) { // play if pause
            if (targetElement) {
                // Simulate hover by adding the missing attributes and classes
                targetElement.setAttribute("aria-disabled", "false"); // Enable the button
                targetElement.setAttribute("tabindex", "0"); // Make it focusable (optional)
                targetElement.classList.add("CCY", "e8F", "BG7"); // Add the hover-triggered classes
                console.log("Simulated hover - element should now be clickable");
            
                // Click the element (or elements inside it)
                setTimeout(() => {
                    document.querySelector('[class="hwa kVc MIw L4E"]')?.click();
            
                    // Optionally reset the attributes after clicking
                    setTimeout(() => {
                        targetElement.setAttribute("aria-disabled", "true");
                        targetElement.removeAttribute("tabindex"); // Remove tabindex if it was added
                        targetElement.classList.remove("CCY", "e8F", "BG7"); // Remove added classes
                        console.log("Restored element after click!");
                    }, 1000); // Wait 1s before resetting
                }, 500); // Wait a bit after adding attributes before clicking
            }
        }
        if (document.querySelector('[data-test-id="story-pin-closeup-unmute"]') != null) { // unmute if mute
            if (targetElement) {
                // Simulate hover by adding the missing attributes and classes
                targetElement.setAttribute("aria-disabled", "false"); // Enable the button
                targetElement.setAttribute("tabindex", "0"); // Make it focusable (optional)
                targetElement.classList.add("CCY", "e8F", "BG7"); // Add the hover-triggered classes
                console.log("Simulated hover - element should now be clickable");
            
                // Click the element (or elements inside it)
                setTimeout(() => {
                    document.querySelector('[data-test-id="story-pin-closeup-unmute"] *')?.click();
            
                    // Optionally reset the attributes after clicking
                    setTimeout(() => {
                        targetElement.setAttribute("aria-disabled", "true");
                        targetElement.removeAttribute("tabindex"); // Remove tabindex if it was added
                        targetElement.classList.remove("CCY", "e8F", "BG7"); // Remove added classes
                        console.log("Restored element after click!");
                    }, 1000); // Wait 1s before resetting
                }, 500); // Wait a bit after adding attributes before clicking
            }
        }
        if (document.querySelector('[class="KS5 jzS mQ8 un8 C9i TB_"]') != null) {
            document.querySelector('[class="iCM XiG L4E wUN"] *')?.click();
        }        
    }

    // Run check every 1 second (1000ms)
    setInterval(auto_, 1000);
})();
