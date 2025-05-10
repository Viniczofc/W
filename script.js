document.addEventListener('DOMContentLoaded', function() {
    // Criar letras flutuantes
    const floatingLetters = document.getElementById('floatingLetters');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < 30; i++) {
        const letter = document.createElement('div');
        letter.className = 'floating-letter';
        letter.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
        letter.style.left = `${Math.random() * 100}%`;
        letter.style.top = `${Math.random() * 100}%`;
        letter.style.animationDuration = `${10 + Math.random() * 20}s`;
        letter.style.animationDelay = `${Math.random() * 5}s`;
        floatingLetters.appendChild(letter);
    }
    
    // Gerar codinome
    const generateBtn = document.getElementById('generate');
    const initialInput = document.getElementById('initial');
    const resultDiv = document.getElementById('result');
    
    generateBtn.addEventListener('click', function() {
        if (!initialInput.value) {
            alert('Por favor, digite uma inicial');
            return;
        }
        
        const initial = initialInput.value.toUpperCase().charAt(0);
        if (!alphabet.includes(initial)) {
            alert('Por favor, digite uma letra válida (A-Z)');
            return;
        }
        
        // Aplicar Cifra de César (+7)
        const initialIndex = alphabet.indexOf(initial);
        const cipherIndex = (initialIndex + 7) % 26;
        const cipherLetter = alphabet[cipherIndex];
        
        // Animação
        resultDiv.textContent = cipherLetter;
        resultDiv.classList.remove('fade-in', 'bounce', 'pulse');
        void resultDiv.offsetWidth; // Trigger reflow
        
        // Escolher uma animação aleatória
        const animations = ['fade-in', 'bounce', 'pulse'];
        const randomAnim = animations[Math.floor(Math.random() * animations.length)];
        resultDiv.classList.add(randomAnim);
        
        // Efeito adicional para letras especiais
        if (['A', 'H', 'M', 'W'].includes(cipherLetter)) {
            resultDiv.style.color = '#ffffff';
            resultDiv.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.7)';
            setTimeout(() => {
                resultDiv.style.textShadow = 'none';
            }, 1000);
        }
    });
    
    // Permitir Enter para gerar
    initialInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });
});