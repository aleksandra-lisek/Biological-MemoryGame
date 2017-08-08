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
//tworzy się tablica z podwójnymi cyframi

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
                if (takenTiles[0].data('cardType')==0 && takenTiles[1].data('cardType')==10) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                } if (takenTiles[0].data('cardType')==10 && takenTiles[1].data('cardType')==0) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                }else {
                    window.setTimeout(function() {
                        tilesReset();
                    }, 1000);
                }

                if(takenTiles[0].data('cardType')==1 && takenTiles[1].data('cardType')==11) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                }  if (takenTiles[0].data('cardType')==11 && takenTiles[1].data('cardType')==1) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                }else {
                    window.setTimeout(function() {
                        tilesReset();
                    }, 1000);
                }

                if(takenTiles[0].data('cardType')==2 && takenTiles[1].data('cardType')==12) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                } if (takenTiles[0].data('cardType')==12 && takenTiles[1].data('cardType')==2) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                }else {
                    window.setTimeout(function() {
                        tilesReset();
                    }, 1000);
                }

                if(takenTiles[0].data('cardType')==3 && takenTiles[1].data('cardType')==13) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                } if (takenTiles[0].data('cardType')==13 && takenTiles[1].data('cardType')==3) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                }else {
                    window.setTimeout(function() {
                        tilesReset();
                    }, 1000);
                }

                if(takenTiles[0].data('cardType')==4 && takenTiles[1].data('cardType')==14) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                } if (takenTiles[0].data('cardType')==14 && takenTiles[1].data('cardType')==4) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                }else {
                    window.setTimeout(function() {
                        tilesReset();
                    }, 1000);
                }

                if (takenTiles[0].data('cardType')==5 && takenTiles[1].data('cardType')==15) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                } if (takenTiles[0].data('cardType')==15 && takenTiles[1].data('cardType')==5) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                }else {
                    window.setTimeout(function() {
                        tilesReset();
                    }, 1000);
                }

                if (takenTiles[0].data('cardType')==6 && takenTiles[1].data('cardType')==16) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                }if (takenTiles[0].data('cardType')==16 && takenTiles[1].data('cardType')==6) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                } else {
                    window.setTimeout(function() {
                        tilesReset();
                    }, 1000);
                }

                if (takenTiles[0].data('cardType')==7 && takenTiles[1].data('cardType')==17) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                }if (takenTiles[0].data('cardType')==17 && takenTiles[1].data('cardType')==7) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                } else {
                    window.setTimeout(function() {
                        tilesReset();
                    }, 1000);
                }

                if (takenTiles[0].data('cardType')==8 && takenTiles[1].data('cardType')==18) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                }if (takenTiles[0].data('cardType')==18 && takenTiles[1].data('cardType')==8) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                } else {
                    window.setTimeout(function() {
                        tilesReset();
                    }, 1000);
                }

                if (takenTiles[0].data('cardType')==9 && takenTiles[1].data('cardType')==19) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                } if (takenTiles[0].data('cardType')==19 && takenTiles[1].data('cardType')==9) {
                    window.setTimeout(function() {
                        tilesRemove();
                    }, 800);
                } else {
                    window.setTimeout(function() {
                        tilesReset();
                    }, 1000);
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
