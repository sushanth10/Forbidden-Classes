
        const ticTacToeGame = new TicTacToeGame();
        ticTacToeGame.start();

        function TicTacToeGame() {
            const board = new Board();
            const humanPlayer = new HumanePlayer(board);
            const computerPlayer = new ComputerPlayer(board);
            var turn = 0;
            this.start = function() {
                const config = {
                    childList: true
                };
                const observer = new MutationObserver(() => takeTurn());
                board.position.forEach((el) => observer.observe(el, config));
                takeTurn();
            }

            function takeTurn() {
                if (board.checkForWinner()) {
                    return;
                }
                if (turn % 2 === 0) {
                    humanPlayer.takeTurn();
                } else {
                    computerPlayer.takeTurn();
                }
                turn++;
                //console.log("something changed");
            }
        }

        function Board() {
            this.position = Array.from(document.querySelectorAll('.col'));
            let winner = false;
            //0 1 2
            //3 4 5
            //6 7 8
            this.checkForWinner = function() {
                    const winningCombinations = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 4, 8],
                        [0, 3, 6],
                        [2, 4, 6],
                        [1, 4, 7],
                        [2, 5, 8]
                    ];
                    const positions = this.position;
                    winningCombinations.forEach((winningCombo) => {
                        const pos0InnerText = positions[winningCombo[0]].innerText;
                        const pos1InnerText = positions[winningCombo[1]].innerText;
                        const pos2InnerText = positions[winningCombo[2]].innerText;
                        const isWinningCombo = pos0InnerText !== '' && pos0InnerText === pos1InnerText && pos1InnerText === pos2InnerText;

                        if (isWinningCombo) {
                            winner = true;
                            winningCombo.forEach((index) => {
                                positions[index].style = "color:blue;"
                            })


                        }

                    });
                    return winner;
                }
                //console.log(this.position);
        }

        function HumanePlayer(board) {
            this.takeTurn = function() {
                board.position.forEach((el) => el.addEventListener('click', handleTurnTaken));
                console.log("Humane Player turn");
            }

            function handleTurnTaken(event) {
                event.target.innerText = "X";
                board.position.forEach((el) => el.removeEventListener('click', handleTurnTaken));
            }
        }

        function ComputerPlayer(board) {
            this.takeTurn = function() {
                const availablePosition = board.position.filter((p) => p.innerText === '');
                const move = Math.floor(Math.random() * availablePosition.length);
                availablePosition[move].innerText = 'O';
                //console.log(availablePosition);
            }
        }