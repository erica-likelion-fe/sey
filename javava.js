        const answer = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        const maxAttempts = 10; 

        const input = document.getElementById("userInput");
        const button = document.getElementById("guessButton");
        const message = document.getElementById("message");
        const remainingAttempts = document.getElementById("remainingAttempts");

        function updateRemainingAttempts() {
            remainingAttempts.textContent = `남은 기회: ${maxAttempts - attempts}번`;
        }

        updateRemainingAttempts();

        button.addEventListener("click", () => {
            const userGuess = parseInt(input.value);

            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                message.textContent = "1부터 100 사이의 숫자를 입력해주세요.";
                return;
            }

            attempts++; 

            updateRemainingAttempts();

            if (userGuess < answer) {
                message.textContent = "UP! 더 큰 숫자를 입력해보세요.";
            } else if (userGuess > answer) {
                message.textContent = "DOWN! 더 작은 숫자를 입력해보세요.";
            } else {
                message.textContent = `축하합니다! 정답입니다. ${attempts}번 만에 성공했습니다!`;
                button.disabled = true; 
                return;
            }

            if (attempts === maxAttempts) {
                message.textContent = `실패! 정답은 ${answer}였습니다.`;
                button.disabled = true; 
            }

            input.value = "";
        });
