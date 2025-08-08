document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const lightThemeClass = 'light-theme';
    const themePreferenceKey = 'user-theme-preference';

    // Função para aplicar o tema com base na preferência
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add(lightThemeClass);
        } else {
            body.classList.remove(lightThemeClass);
        }
    };

    // Função para alternar o tema e salvar a preferência
    const toggleTheme = () => {
        const isLightTheme = body.classList.contains(lightThemeClass);
        const newTheme = isLightTheme ? 'dark' : 'light';
        localStorage.setItem(themePreferenceKey, newTheme); // Salva a escolha do usuário
        applyTheme(newTheme);
    };

    // Função para carregar o tema inicial
    const initializeTheme = () => {
        const savedTheme = localStorage.getItem(themePreferenceKey);
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let theme;

        if (savedTheme) {
            // 1. Usa a preferência salva pelo usuário, se existir
            theme = savedTheme;
        } else {
            // 2. Se não houver, usa a preferência do sistema operacional/navegador
            theme = prefersDarkScheme ? 'dark' : 'light';
        }

        applyTheme(theme);
    };

    // Adiciona o evento de clique ao botão
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
    
    // Define o tema inicial quando a página carrega
    initializeTheme();
});