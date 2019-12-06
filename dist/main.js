/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/user.js\");\n\nlet vragenAlGehad  = [-1];\nlet user = new _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst db = __webpack_require__(/*! ./vragen.json */ \"./src/vragen.json\");\n\nfunction stelVraag(){\n    //random vraag teruggeven in DOM\n    console.log(\"stelVraag()\");\n    if(user.vragen>=10){\n        result();\n        return;\n    }else {\n        for (const vraag of db.vragen) {\n            if (!alGehad(vraag.vraagnr)) {\n                vragenAlGehad.push(vraag.vraagnr);\n                document.getElementById(\"vraag\").innerHTML = vraag.vraag;\n                console.log(vraag.vraag);\n                let lb0 =  Math.floor((Math.random() * 4));\n                document.getElementById(\"label\"+lb0).innerHTML = vraag.antwoord;\n                document.getElementById(\"radio\"+lb0).value = vraag.antwoord;\n                let lb1;\n                do{\n                    lb1 = Math.floor((Math.random() * 4));\n                }while(lb1 === lb0);\n                document.getElementById(\"label\"+lb1).innerHTML = vraag.fouten[0];\n                document.getElementById(\"radio\"+lb1).value = vraag.fouten[0];\n                let lb2;\n                do{\n                    lb2 = Math.floor((Math.random() * 4));\n                }while(lb2 === lb0 || lb2 === lb1);\n                document.getElementById(\"label\"+lb2).innerHTML = vraag.fouten[1];\n                document.getElementById(\"radio\"+lb2).value = vraag.fouten[1];\n                let lb3;\n                do{\n                    lb3 = Math.floor((Math.random() * 4));\n                }while(lb3 === lb2 || lb3 === lb1 || lb3 === lb0);\n                document.getElementById(\"label\"+lb3).innerHTML = vraag.fouten[2]\n                document.getElementById(\"radio\"+lb3).value = vraag.fouten[2];\n                console.log(vragenAlGehad);\n                return;\n            }\n        }\n    }\n}\n\nfunction alGehad(vraagnr){\n    let alGehad = false;\n    for(const v of vragenAlGehad){\n        if(v===vraagnr){\n            alGehad = true;\n        }\n    }\n    return alGehad;\n}\n\nfunction checkVraag(){\n    //krijgt vraag terug en antwoord\n    let juist_antwoord;\n    for(const v of db.vragen){\n        if(v.vraag===document.getElementById(\"vraag\").innerHTML){\n            juist_antwoord = db.vragen[v.vraagnr].antwoord;\n            break;\n        }\n    }\n    console.log(juist_antwoord);\n\n    if(document.getElementById(\"radio0\").checked){\n        if(document.getElementById(\"radio0\").value===juist_antwoord){\n            user.Juist();\n        }else{\n            user.Fout();\n        }\n    }else if(document.getElementById(\"radio1\").checked){\n        if(document.getElementById(\"radio1\").value===juist_antwoord){\n            user.Juist();\n        }else{\n            user.Fout();\n        }\n\n    }else if(document.getElementById(\"radio2\").checked){\n        if(document.getElementById(\"radio2\").value===juist_antwoord){\n            user.Juist();\n        }else{\n            user.Fout();\n        }\n\n    }else if(document.getElementById(\"radio3\").checked){\n        console.log(3);\n        if(document.getElementById(\"radio3\").value===juist_antwoord){\n            user.Juist();\n        }else{\n            user.Fout();\n        }\n    }\n}\n\nfunction result(){\n    if(user.juist>=6){\n        document.getElementById(\"zin\").innerHTML = \"Je hebt gewonnen! je had er \"+user.juist+\" juist.\";\n    }else{\n        document.getElementById(\"zin\").innerHTML = \"Je hebt verloren...  je had er \"+user.juist+\" juist.\";\n    }\n}\n\ndocument.getElementById('volgende').addEventListener(\"click\", function(){\n    checkVraag();\n    stelVraag();\n});\n\nstelVraag();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\nclass User{\n\n    constructor(){\n        this.fout = 0;\n        this.juist = 0;\n        this.vragen = 0;\n    }\n\n    Fout(){\n        this.fout++;\n        this.vragen++;\n    }\n\n    Juist(){\n        this.juist++;\n        this.vragen++;\n    }\n}\n\n//# sourceURL=webpack:///./src/user.js?");

/***/ }),

/***/ "./src/vragen.json":
/*!*************************!*\
  !*** ./src/vragen.json ***!
  \*************************/
/*! exports provided: vragen, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"vragen\\\":[{\\\"vraagnr\\\":0,\\\"vraag\\\":\\\"Welke planeet heeft het langst nodig om rond de zon te draaien\\\",\\\"antwoord\\\":\\\"Pluto\\\",\\\"fouten\\\":[\\\"Mercurius\\\",\\\"Neptunus\\\",\\\"Venus\\\"],\\\"categorie\\\":\\\"Wetenschap\\\"},{\\\"vraagnr\\\":1,\\\"vraag\\\":\\\"Hoe schrijf je het getal 37 in het binaire stelsel?\\\",\\\"antwoord\\\":\\\"100101\\\",\\\"fouten\\\":[\\\"100101\\\",\\\"100110\\\",\\\"110011\\\"],\\\"categorie\\\":\\\"Wetenschap\\\"},{\\\"vraagnr\\\":2,\\\"vraag\\\":\\\"Wanneer maakte het aidsvirus zijn eerste slachtoffers?\\\",\\\"antwoord\\\":\\\"In 1980.\\\",\\\"fouten\\\":[\\\"In 1985.\\\",\\\"In 1973.\\\",\\\"In 1965.\\\"],\\\"categorie\\\":\\\"Wetenschap\\\"},{\\\"vraagnr\\\":3,\\\"vraag\\\":\\\"Waartegen zijn antibiotica werkzaam: bacteriën, virussen of schimmels?\\\",\\\"antwoord\\\":\\\"Bacteriën\\\",\\\"fouten\\\":[\\\"Virussen\\\",\\\"Schimmels\\\",\\\"Open Wondes\\\"],\\\"categorie\\\":\\\"Wetenschap\\\"},{\\\"vraagnr\\\":4,\\\"vraag\\\":\\\"Met welk hormoon is er een probleem bij een diabetespatiënt?\\\",\\\"antwoord\\\":\\\"Insuline\\\",\\\"fouten\\\":[\\\"Serotonine\\\",\\\"Melatonine\\\",\\\"Epinefrine\\\"],\\\"categorie\\\":\\\"Wetenschap\\\"},{\\\"vraagnr\\\":5,\\\"vraag\\\":\\\"Wie was de uitvinder van de gloeilamp?\\\",\\\"antwoord\\\":\\\"Henry Woodward & Mathew Evans\\\",\\\"fouten\\\":[\\\"Alexander Lodygin\\\",\\\"Nikolai Tesla\\\",\\\"Thomas Edison\\\"],\\\"categorie\\\":\\\"Wetenschap\\\"},{\\\"vraagnr\\\":6,\\\"vraag\\\":\\\"Hoeveel meter is 1 terameter?\\\",\\\"antwoord\\\":\\\"1 Biljoen meter\\\",\\\"fouten\\\":[\\\"Bestaan niet\\\",\\\"1 Triljard meter\\\",\\\"1 Miljard meter \\\"],\\\"categorie\\\":\\\"Wetenschap\\\"},{\\\"vraagnr\\\":7,\\\"vraag\\\":\\\"Hoe heet het toestel waarmee radioactiviteit gemeten wordt?\\\",\\\"antwoord\\\":\\\"Geigerteller\\\",\\\"fouten\\\":[\\\"Interferometer\\\",\\\"Lux meter\\\",\\\"Megger\\\"],\\\"categorie\\\":\\\"Wetenschap\\\"},{\\\"vraagnr\\\":8,\\\"vraag\\\":\\\"Wat is het tegenovergestelde van oxidatie? Het is het scheikundig proces waarbij een deeltje elektronen opneemt.\\\",\\\"antwoord\\\":\\\"Reductie\\\",\\\"fouten\\\":[\\\"Combustie \\\",\\\"homeostatie\\\",\\\"Sepsidatie\\\"],\\\"categorie\\\":\\\"Wetenschap\\\"},{\\\"vraagnr\\\":9,\\\"vraag\\\":\\\"Onder bepaalde omstandigheden bevriest warm water sneller dan koud water. Hoe noemt men dit effect?\\\",\\\"antwoord\\\":\\\"Mpemba-effect\\\",\\\"fouten\\\":[\\\"Ripple effect\\\",\\\"Oligodynamic effect\\\",\\\"Dunning–Kruger effect\\\"],\\\"categorie\\\":\\\"Wetenschap\\\"}]}\");\n\n//# sourceURL=webpack:///./src/vragen.json?");

/***/ })

/******/ });