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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() {
    const numTiles = 20;
    const tilesInRow = 5;
    let tiles = []; //tabica przechowująca typ kafelka, będą określać numer obrazka dla kafelka
    let takenTiles= [];
    let canTake = true;
    let numOfMoves = 0;
    let couplesTiles = 0;
    const imgTilesQue = [
        '../images/memoryCards/image11.png',
        '../images/memoryCards/image21.png',
        '../images/memoryCards/image31.png',
        '../images/memoryCards/image41.png',
        '../images/memoryCards/image51.png',
        '../images/memoryCards/image61.png',
        '../images/memoryCards/image71.png',
        '../images/memoryCards/image81.png',
        '../images/memoryCards/image91.png',
        '../images/memoryCards/image101.png',
        '../images/memoryCards/image12.png',
        '../images/memoryCards/image22.png',
        '../images/memoryCards/image32.png',
        '../images/memoryCards/image42.png',
        '../images/memoryCards/image52.png',
        '../images/memoryCards/image62.png',
        '../images/memoryCards/image72.png',
        '../images/memoryCards/image82.png',
        '../images/memoryCards/image92.png',
        '../images/memoryCards/image102.png',
    ];

    function startGame() {
        tiles = [];
        takenTiles= [];
        canTake = true;
        numOfMoves = 0;
        couplesTiles = 0;
        //czyścimy wczystkie zmienne, żeby możnabyło zaczynać ją kilk razy

        const board = $('.board').empty();

        for (let i=0; i<numTiles; i++) {
            tiles.push(Math.floor(i));

        }

console.log(tiles);
//tworzy się tablica z cyframi

        for (let i=numTiles-1; i>0; i--) {
            const swap = Math.floor(Math.random()*i);
            const tmp = tiles[i];
            tiles[i] = tiles[swap];
            tiles[swap] = tmp;
        }

        console.log(tiles);
//tablica z pomieszanymi numerami

        for (let i=0; i<numTiles; i++) {  //na podstawie tablicy z numerami można stworzyć tablicę z kafelkami
            let tile = $('<div class="tile"></div>');
            board.append(tile);
            tile.data('cardType',tiles[i]);
            tile.data('index', i);
            tile.css({
                left : 5+(tile.width()+5)*(i%tilesInRow)
            });
            tile.css({
                top : 5+(tile.height()+5)*(Math.floor(i/tilesInRow))
            });

        tile.on('click', function(){ tilesClick($(this))});
    }

        $('.moves').html(numOfMoves);
    }

    function tilesClick(element) {
        if (canTake) {
            //jeżeli jeszcze nie pobraliśmy 1 elementu
            //lub jeżeli index tego elementu nie istnieje w pobranych...

            if (!takenTiles[0] || (takenTiles[0].data('index') != element.data('index'))) {
                takenTiles.push(element); //w takim przypadku umieszczamy w tablicy
                element.css({'background-image' : 'url('+imgTilesQue[element.data('cardType')]+')'});
                // i nadajemy zdjęcie
                console.log(element);
            }



            if (takenTiles.length == 2) {
                canTake = false;

                for (let i = 0; i < numTiles; i++) {
                    if (takenTiles[0].data('cardType')==i && takenTiles[1].data('cardType')== i+10) {
                        window.setTimeout(function() {
                            tilesRemove();
                        }, 800);
                    } if (takenTiles[0].data('cardType')==i+10 && takenTiles[1].data('cardType')==i){
                        window.setTimeout(function() {
                            tilesRemove();
                        }, 800);
                    }else {
                        window.setTimeout(function() {
                            tilesReset();
                        }, 1000);
                    }
                }
                numOfMoves++;
                $('.moves').html(numOfMoves)
            }
        }
    }

    function tilesRemove() {
        takenTiles[0].fadeOut(function() {
            $(this).remove();
        });
        takenTiles[1].fadeOut(function() {
            $(this).remove();

            couplesTiles++;
            if (couplesTiles >= numTiles / 2) {
                alert('gameOver!');
            }
            canTake = true;
            takenTiles= new Array();
        });
    }

    function tilesReset() {
            takenTiles[0].css({'background-image':'url(../images/dna.png)'})
        takenTiles[1].css({'background-image':'url(../images/dna.png)'})
        takenTiles= new Array();
        canTake = true;
    }

    $(document).ready(function() {

        $('.start_game').click(function() {
            startGame();
        });

    })
})();


/***/ })
/******/ ]);