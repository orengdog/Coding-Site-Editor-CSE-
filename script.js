// Переводы
const translations = {
    ru: {
        title: "Онлайн-редактор HTML/CSS/JS",
        subtitle: "Создавайте и тестируйте веб-страницы прямо в браузере",
        theme: "Тёмная",
        htmlTab: "HTML",
        cssTab: "CSS",
        jsTab: "JavaScript",
        htmlScratchTab: "HTML Блоки",
        cssScratchTab: "CSS Блоки", 
        jsScratchTab: "JS Блоки",
        htmlTitle: "HTML",
        cssTitle: "CSS",
        jsTitle: "JavaScript",
        htmlScratchTitle: "HTML Блоки",
        cssScratchTitle: "CSS Блоки",
        jsScratchTitle: "JS Блоки",
        previewTitle: "Предпросмотр",
        runButton: "Запустить код",
        resetButton: "Сбросить",
        saveButton: "Сохранить проект ▼",
        saveHtml: "Сохранить как HTML",
        saveCss: "Сохранить как CSS",
        saveJs: "Сохранить как JS",
        saveHtmlSb: "Сохранить как HTMLSB",
        saveCssSb: "Сохранить как CSSSB",
        saveJsSb: "Сохранить как JSSB",
        saveAll: "Сохранить все файлы (ZIP)",
        saveJson: "Сохранить проект (JSON)",
        deploymentTitle: "🚀 Где выложить сайт?",
        aiHelpTitle: "🤖 У кого попросить помощь с кодом?",
        footer: "Онлайн-редактор HTML/CSS/JS &copy; 2025 | ©orengdog corporation | Создавайте веб-страницы без установки дополнительного ПО",
        htmlPlaceholder: "Введите ваш HTML код здесь...",
        cssPlaceholder: "Введите ваш CSS код здесь...",
        jsPlaceholder: "Введите ваш JavaScript код здесь...",
        resetConfirm: "Вы уверены, что хотите сбросить весь код?",
        projectSaved: "Проект сохранен как 'web-project.json'"
    },
    en: {
        title: "Online HTML/CSS/JS Editor",
        subtitle: "Create and test web pages directly in your browser",
        theme: "Dark",
        htmlTab: "HTML",
        cssTab: "CSS",
        jsTab: "JavaScript",
        htmlScratchTab: "HTML Blocks",
        cssScratchTab: "CSS Blocks",
        jsScratchTab: "JS Blocks", 
        htmlTitle: "HTML",
        cssTitle: "CSS",
        jsTitle: "JavaScript",
        htmlScratchTitle: "HTML Blocks",
        cssScratchTitle: "CSS Blocks",
        jsScratchTitle: "JS Blocks",
        previewTitle: "Preview",
        runButton: "Run Code",
        resetButton: "Reset",
        saveButton: "Save Project ▼",
        saveHtml: "Save as HTML",
        saveCss: "Save as CSS",
        saveJs: "Save as JS",
        saveHtmlSb: "Save as HTMLSB",
        saveCssSb: "Save as CSSSB",
        saveJsSb: "Save as JSSB",
        saveAll: "Save all files (ZIP)",
        saveJson: "Save project (JSON)",
        deploymentTitle: "🚀 Where to deploy your site?",
        aiHelpTitle: "🤖 Who can help with code?",
        footer: "Online HTML/CSS/JS Editor &copy; 2025 | ©orengdog corporation | Create web pages without installing additional software",
        htmlPlaceholder: "Enter your HTML code here...",
        cssPlaceholder: "Enter your CSS code here...",
        jsPlaceholder: "Enter your JavaScript code here...",
        resetConfirm: "Are you sure you want to reset all code?",
        projectSaved: "Project saved as 'web-project.json'"
    },
    zh: {
        title: "在线 HTML/CSS/JS 编辑器",
        subtitle: "直接在浏览器中创建和测试网页",
        theme: "深色",
        htmlTab: "HTML",
        cssTab: "CSS",
        jsTab: "JavaScript",
        htmlScratchTab: "HTML 块",
        cssScratchTab: "CSS 块",
        jsScratchTab: "JS 块",
        htmlTitle: "HTML",
        cssTitle: "CSS",
        jsTitle: "JavaScript",
        htmlScratchTitle: "HTML 块",
        cssScratchTitle: "CSS 块", 
        jsScratchTitle: "JS 块",
        previewTitle: "预览",
        runButton: "运行代码",
        resetButton: "重置",
        saveButton: "保存项目 ▼",
        saveHtml: "保存为 HTML",
        saveCss: "保存为 CSS",
        saveJs: "保存为 JS",
        saveHtmlSb: "保存为 HTMLSB",
        saveCssSb: "保存为 CSSSB",
        saveJsSb: "保存为 JSSB",
        saveAll: "保存所有文件 (ZIP)",
        saveJson: "保存项目 (JSON)",
        deploymentTitle: "🚀 在哪里部署您的网站？",
        aiHelpTitle: "🤖 谁能帮助编写代码？",
        footer: "在线 HTML/CSS/JS 编辑器 &copy; 2025 | ©orengdog corporation | 无需安装额外软件即可创建网页",
        htmlPlaceholder: "在此输入您的 HTML 代码...",
        cssPlaceholder: "在此输入您的 CSS 代码...",
        jsPlaceholder: "在此输入您的 JavaScript 代码...",
        resetConfirm: "您确定要重置所有代码吗？",
        projectSaved: "项目已保存为 'web-project.json'"
    }
};

// Примеры кода для разных языков
const codeExamples = {
    ru: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>Моя страница</title>
</head>
<body>
    <h1>Добро пожаловать в онлайн-редактор!</h1>
    <p>Измените этот код и нажмите "Запустить", чтобы увидеть результат.</p>
    <div id="demo">Это демонстрационный текст</div>
    <button onclick="changeText()">Нажми меня!</button>
</body>
</html>`,
        css: `body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
}

h1 {
    color: #2c3e50;
    text-align: center;
}

p {
    line-height: 1.6;
    color: #34495e;
}

#demo {
    background-color: #3498db;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 15px 0;
    text-align: center;
}

button {
    background-color: #2ecc71;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    display: block;
    margin: 0 auto;
}

button:hover {
    background-color: #27ae60;
}`,
        js: `function changeText() {
    document.getElementById("demo").innerHTML = "Текст изменен с помощью JavaScript!";
    document.getElementById("demo").style.backgroundColor = "#e74c3c";
}`
    },
    en: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Welcome to the Online Editor!</h1>
    <p>Modify this code and click "Run Code" to see the result.</p>
    <div id="demo">This is demo text</div>
    <button onclick="changeText()">Click me!</button>
</body>
</html>`,
        css: `body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
}

h1 {
    color: #2c3e50;
    text-align: center;
}

p {
    line-height: 1.6;
    color: #34495e;
}

#demo {
    background-color: #3498db;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 15px 0;
    text-align: center;
}

button {
    background-color: #2ecc71;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    display: block;
    margin: 0 auto;
}

button:hover {
    background-color: #27ae60;
}`,
        js: `function changeText() {
    document.getElementById("demo").innerHTML = "Text changed with JavaScript!";
    document.getElementById("demo").style.backgroundColor = "#e74c3c";
}`
    }
};

// Scratch блоки для HTML, CSS и JS
const scratchBlocks = {
    html: {
        structure: [
            { title: "HTML5 Документ", code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Заголовок</title>\n</head>\n<body>\n    \n</body>\n</html>', category: "structure" },
            { title: "Контейнер Div", code: '<div class="container">\n    \n</div>', category: "structure" },
            { title: "Секция", code: '<section>\n    \n</section>', category: "structure" },
            { title: "Статья", code: '<article>\n    \n</article>', category: "structure" },
            { title: "Боковая панель", code: '<aside>\n    \n</aside>', category: "structure" }
        ],
        text: [
            { title: "Заголовок H1", code: '<h1>Заголовок</h1>', category: "text" },
            { title: "Абзац", code: '<p>Текст абзаца</p>', category: "text" },
            { title: "Ссылка", code: '<a href="#">Текст ссылки</a>', category: "text" },
            { title: "Жирный текст", code: '<strong>Жирный текст</strong>', category: "text" },
            { title: "Курсив", code: '<em>Курсивный текст</em>', category: "text" }
        ],
        media: [
            { title: "Изображение", code: '<img src="image.jpg" alt="Описание">', category: "media" },
            { title: "Видео", code: '<video controls>\n    <source src="video.mp4" type="video/mp4">\n</video>', category: "media" },
            { title: "Аудио", code: '<audio controls>\n    <source src="audio.mp3" type="audio/mp3">\n</audio>', category: "media" }
        ],
        forms: [
            { title: "Форма", code: '<form>\n    <input type="text" placeholder="Введите текст">\n    <button type="submit">Отправить</button>\n</form>', category: "forms" },
            { title: "Текстовое поле", code: '<input type="text" placeholder="Введите текст">', category: "forms" },
            { title: "Кнопка", code: '<button>Кнопка</button>', category: "forms" },
            { title: "Выпадающий список", code: '<select>\n    <option>Опция 1</option>\n    <option>Опция 2</option>\n</select>', category: "forms" }
        ]
    },
    css: {
        typography: [
            { title: "Стили текста", code: 'font-family: Arial, sans-serif;\nfont-size: 16px;\nfont-weight: normal;\nline-height: 1.5;', category: "typography" },
            { title: "Выравнивание текста", code: 'text-align: center;', category: "typography" },
            { title: "Цвет текста", code: 'color: #333333;', category: "typography" }
        ],
        colors: [
            { title: "Фоновый цвет", code: 'background-color: #ffffff;', category: "colors" },
            { title: "Градиент", code: 'background: linear-gradient(45deg, #ff6b6b, #4ecdc4);', category: "colors" },
            { title: "Прозрачность", code: 'opacity: 0.8;', category: "colors" }
        ],
        layout: [
            { title: "Flexbox", code: 'display: flex;\njustify-content: center;\nalign-items: center;', category: "layout" },
            { title: "Grid", code: 'display: grid;\ngrid-template-columns: 1fr 1fr;\ngap: 20px;', category: "layout" },
            { title: "Отступы", code: 'padding: 20px;\nmargin: 10px;', category: "layout" }
        ],
        effects: [
            { title: "Тень", code: 'box-shadow: 0 4px 8px rgba(0,0,0,0.1);', category: "effects" },
            { title: "Скругление углов", code: 'border-radius: 8px;', category: "effects" },
            { title: "Граница", code: 'border: 1px solid #ddd;', category: "effects" }
        ]
    },
    js: {
        variables: [
            { title: "Объявление переменной", code: 'let variableName = "value";', category: "variables" },
            { title: "Константа", code: 'const CONSTANT_NAME = "value";', category: "variables" },
            { title: "Числовая переменная", code: 'let number = 42;', category: "variables" }
        ],
        functions: [
            { title: "Функция", code: 'function functionName(parameter) {\n    // код функции\n}', category: "functions" },
            { title: "Стрелочная функция", code: 'const functionName = (parameter) => {\n    // код функции\n};', category: "functions" }
        ],
        events: [
            { title: "Клик", code: 'element.addEventListener("click", function() {\n    // обработчик клика\n});', category: "events" },
            { title: "Загрузка страницы", code: 'window.addEventListener("load", function() {\n    // код после загрузки\n});', category: "events" }
        ],
        dom: [
            { title: "Выбор элемента", code: 'const element = document.querySelector(".className");', category: "dom" },
            { title: "Изменение контента", code: 'element.innerHTML = "Новый контент";', category: "dom" },
            { title: "Изменение стиля", code: 'element.style.color = "red";', category: "dom" }
        ]
    }
};

// Цветовая палитра
const colorPalette = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3',
    '#54A0FF', '#5F27CD', '#C8D6E5', '#FF9F43', '#10AC84', '#EE5A24',
    '#FFFFFF', '#F5F5F5', '#E0E0E0', '#BDBDBD', '#9E9E9E', '#757575',
    '#616161', '#424242', '#212121', '#000000'
];

document.addEventListener('DOMContentLoaded', function() {
    // Основные элементы
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const preview = document.getElementById('preview');
    const runButton = document.getElementById('run-button');
    const resetButton = document.getElementById('reset-button');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const currentLang = document.getElementById('current-lang');
    const langDropdown = document.getElementById('lang-dropdown');
    const saveDropdown = document.getElementById('save-dropdown');
    const tabs = document.querySelectorAll('.tab');
    const codeContainers = document.querySelectorAll('.code-container');
    
    // Новые элементы
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const colorPaletteElement = document.getElementById('color-palette');
    const colorPaletteToggle = document.getElementById('color-palette-toggle');
    const colorGrid = document.getElementById('color-grid');
    const customColor = document.getElementById('custom-color');
    const colorInput = document.getElementById('color-input');
    const applyColorBtn = document.getElementById('apply-color');

    // Элементы сохранения
    const saveHtmlBtn = document.getElementById('save-html');
    const saveCssBtn = document.getElementById('save-css');
    const saveJsBtn = document.getElementById('save-js');
    const saveHtmlSbBtn = document.getElementById('save-htmlsb');
    const saveCssSbBtn = document.getElementById('save-csssb');
    const saveJsSbBtn = document.getElementById('save-jssb');
    const saveAllBtn = document.getElementById('save-all');
    const saveJsonBtn = document.getElementById('save-json');

    // Переменные состояния
    let isLangDropdownOpen = false;
    let isSaveDropdownOpen = false;

    // Основные функции
    function getSystemLanguage() {
        const systemLang = navigator.language || navigator.userLanguage;
        if (systemLang.startsWith('ru')) return 'ru';
        if (systemLang.startsWith('zh')) return 'zh';
        return 'en';
    }
    
    function getSystemTheme() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        currentLang.textContent = lang === 'ru' ? '🌐 RU' : lang === 'zh' ? '🌐 中文' : '🌐 EN';
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        localStorage.setItem('editor-language', lang);
        
        if (!localStorage.getItem('editor-initialized')) {
            htmlCode.value = codeExamples[lang].html;
            cssCode.value = codeExamples[lang].css;
            jsCode.value = codeExamples[lang].js;
            runCode();
        }
    }
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        
        const lang = localStorage.getItem('editor-language') || 'ru';
        const themeText = translations[lang].theme;
        themeToggle.querySelector('span:last-child').textContent = 
            theme === 'dark' ? 
            (themeText === 'Тёмная' ? 'Светлая' : themeText === 'Dark' ? 'Light' : '浅色') :
            themeText;
        
        localStorage.setItem('editor-theme', theme);
    }
    
    function runCode() {
        const html = htmlCode.value;
        const css = `<style>${cssCode.value}</style>`;
        const js = `<script>${jsCode.value}<\/script>`;
        
        const fullCode = html.replace('</head>', css + '</head>').replace('</body>', js + '</body>');
        
        preview.contentDocument.open();
        preview.contentDocument.write(fullCode);
        preview.contentDocument.close();
    }
    
    function resetCode() {
        const lang = localStorage.getItem('editor-language') || getSystemLanguage();
        if (confirm(translations[lang].resetConfirm)) {
            htmlCode.value = codeExamples[lang].html;
            cssCode.value = codeExamples[lang].css;
            jsCode.value = codeExamples[lang].js;
            runCode();
        }
    }
    
    function downloadFile(content, fileName, contentType) {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Инициализация цветовой палитры
    function initColorPalette() {
        colorGrid.innerHTML = '';
        colorPalette.forEach(color => {
            const colorItem = document.createElement('div');
            colorItem.className = 'color-item';
            colorItem.style.backgroundColor = color;
            colorItem.setAttribute('data-color', color);
            colorItem.addEventListener('click', () => {
                colorInput.value = color;
                applyColorToSelection(color);
            });
            colorGrid.appendChild(colorItem);
        });

        customColor.addEventListener('input', (e) => {
            colorInput.value = e.target.value;
        });

        applyColorBtn.addEventListener('click', () => {
            applyColorToSelection(colorInput.value);
        });

        colorPaletteToggle.addEventListener('click', () => {
            colorPaletteElement.classList.toggle('collapsed');
            colorPaletteToggle.textContent = colorPaletteElement.classList.contains('collapsed') ? '+' : '−';
        });

        // Подсветка цветов в коде
        highlightColorsInCode();
    }

    function highlightColorsInCode() {
        const codeAreas = [htmlCode, cssCode, jsCode];
        
        codeAreas.forEach(textarea => {
            textarea.addEventListener('click', (e) => {
                const cursorPos = textarea.selectionStart;
                const text = textarea.value;
                
                // Простой поиск цветов вокруг курсора
                const searchRadius = 20;
                const start = Math.max(0, cursorPos - searchRadius);
                const end = Math.min(text.length, cursorPos + searchRadius);
                const textAroundCursor = text.substring(start, end);
                
                const colorRegex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
                let match;
                
                while ((match = colorRegex.exec(textAroundCursor)) !== null) {
                    const color = match[0];
                    const absolutePos = start + match.index;
                    
                    if (cursorPos >= absolutePos && cursorPos <= absolutePos + color.length) {
                        colorInput.value = color;
                        colorPaletteElement.style.display = 'block';
                        break;
                    }
                }
            });
        });
    }

    function applyColorToSelection(color) {
        const activeTextarea = document.querySelector('.code-container.active .code-area');
        if (activeTextarea) {
            const start = activeTextarea.selectionStart;
            const end = activeTextarea.selectionEnd;
            const selectedText = activeTextarea.value.substring(start, end);
            
            if (selectedText) {
                const newText = activeTextarea.value.substring(0, start) + 
                              color + 
                              activeTextarea.value.substring(end);
                activeTextarea.value = newText;
                activeTextarea.focus();
                runCode();
            }
        }
    }

    // Полноэкранный режим
    function initFullscreen() {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
        
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.fullscreenElement) {
                exitFullscreen();
            }
        });
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            enterFullscreen();
        } else {
            exitFullscreen();
        }
    }

    function enterFullscreen() {
        const previewPanel = document.querySelector('.preview-panel');
        if (previewPanel.requestFullscreen) {
            previewPanel.requestFullscreen();
        }
    }

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    function handleFullscreenChange() {
        const isFullscreen = !!document.fullscreenElement;
        fullscreenBtn.textContent = isFullscreen ? '⧉' : '⛶';
        document.querySelector('.preview-panel').classList.toggle('preview-fullscreen', isFullscreen);
    }

    // Инициализация Scratch блоков
    function initScratchBlocks() {
        createScratchBlocks();
        setupAutoTabSwitching();
    }

    function createScratchBlocks() {
        createBlocksForType('html', document.getElementById('html-blocks'), document.getElementById('html-categories'));
        createBlocksForType('css', document.getElementById('css-blocks'), document.getElementById('css-categories'));
        createBlocksForType('js', document.getElementById('js-blocks'), document.getElementById('js-categories'));
    }

    function createBlocksForType(type, blocksContainer, categoriesContainer) {
        const blocks = scratchBlocks[type];
        const lang = localStorage.getItem('editor-language') || 'ru';
        
        Object.keys(blocks).forEach(category => {
            const categoryBtn = document.createElement('div');
            categoryBtn.className = 'scratch-category';
            categoryBtn.textContent = category;
            categoryBtn.setAttribute('data-category', category);
            categoriesContainer.appendChild(categoryBtn);
        });

        if (categoriesContainer.children.length > 0) {
            categoriesContainer.children[0].classList.add('active');
            showBlocksByCategory(type, Object.keys(blocks)[0], blocksContainer);
        }

        categoriesContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('scratch-category')) {
                Array.from(categoriesContainer.children).forEach(child => {
                    child.classList.remove('active');
                });
                e.target.classList.add('active');
                showBlocksByCategory(type, e.target.getAttribute('data-category'), blocksContainer);
            }
        });
    }

    function showBlocksByCategory(type, category, container) {
        container.innerHTML = '';
        const blocks = scratchBlocks[type][category];
        
        blocks.forEach(block => {
            const blockElement = document.createElement('div');
            blockElement.className = 'scratch-block';
            blockElement.setAttribute('data-code', block.code);
            blockElement.innerHTML = `
                <div class="block-title">${block.title}</div>
                <div class="block-code">${block.code}</div>
                <div class="block-category">${block.category}</div>
            `;
            
            blockElement.addEventListener('click', () => {
                insertBlockToEditor(type, block.code);
            });
            
            container.appendChild(blockElement);
        });
    }

    function insertBlockToEditor(type, code) {
        let editor;
        switch(type) {
            case 'html': editor = htmlCode; break;
            case 'css': editor = cssCode; break;
            case 'js': editor = jsCode; break;
        }
        
        const startPos = editor.selectionStart;
        const endPos = editor.selectionEnd;
        const currentValue = editor.value;
        
        editor.value = currentValue.substring(0, startPos) + 
                      code + 
                      currentValue.substring(endPos);
        
        editor.selectionStart = editor.selectionEnd = startPos + code.length;
        editor.focus();
        
        runCode();
    }

    function setupAutoTabSwitching() {
        document.addEventListener('click', (e) => {
            const scratchBlock = e.target.closest('.scratch-block');
            if (scratchBlock) {
                const blockContainer = scratchBlock.closest('.code-container');
                if (blockContainer) {
                    const tabType = blockContainer.id.replace('-scratch-container', '');
                    switchToTab(tabType);
                }
            }
        });
    }

    function switchToTab(tabType) {
        tabs.forEach(tab => tab.classList.remove('active'));
        codeContainers.forEach(container => container.classList.remove('active'));
        
        const targetTab = document.querySelector(`[data-tab="${tabType}"]`);
        const targetContainer = document.getElementById(`${tabType}-container`);
        
        if (targetTab && targetContainer) {
            targetTab.classList.add('active');
            targetContainer.classList.add('active');
        }
    }

    // Функции сохранения
    function saveHtml() {
        const htmlContent = htmlCode.value;
        downloadFile(htmlContent, 'index.html', 'text/html');
    }
    
    function saveCss() {
        const cssContent = cssCode.value;
        downloadFile(cssContent, 'styles.css', 'text/css');
    }
    
    function saveJs() {
        const jsContent = jsCode.value;
        downloadFile(jsContent, 'script.js', 'text/javascript');
    }
    
    function saveHtmlSb() {
        const blocksData = {
            type: 'htmlsb',
            version: '1.0',
            blocks: scratchBlocks.html,
            timestamp: new Date().toISOString()
        };
        downloadFile(JSON.stringify(blocksData, null, 2), 'html-blocks.htmlsb', 'application/json');
    }

    function saveCssSb() {
        const blocksData = {
            type: 'csssb',
            version: '1.0',
            blocks: scratchBlocks.css,
            timestamp: new Date().toISOString()
        };
        downloadFile(JSON.stringify(blocksData, null, 2), 'css-blocks.csssb', 'application/json');
    }

    function saveJsSb() {
        const blocksData = {
            type: 'jssb',
            version: '1.0',
            blocks: scratchBlocks.js,
            timestamp: new Date().toISOString()
        };
        downloadFile(JSON.stringify(blocksData, null, 2), 'js-blocks.jssb', 'application/json');
    }
    
    function saveAllFiles() {
        const zip = new JSZip();
        const lang = localStorage.getItem('editor-language') || 'ru';
        
        zip.file("index.html", htmlCode.value);
        zip.file("styles.css", cssCode.value);
        zip.file("script.js", jsCode.value);
        
        const readmeContent = {
            ru: `# Мой веб-проект\n\nЭтот проект был создан в онлайн-редакторе HTML/CSS/JS.\n\n## Файлы:\n- index.html - основной HTML файл\n- styles.css - стили CSS\n- script.js - JavaScript код\n\nПросто откройте index.html в браузере чтобы увидеть результат.`,
            en: `# My Web Project\n\nThis project was created in the online HTML/CSS/JS editor.\n\n## Files:\n- index.html - main HTML file\n- styles.css - CSS styles\n- script.js - JavaScript code\n\nJust open index.html in your browser to see the result.`,
            zh: `# 我的网页项目\n\n此项目是在线 HTML/CSS/JS 编辑器中创建的。\n\n## 文件：\n- index.html - 主 HTML 文件\n- styles.css - CSS 样式\n- script.js - JavaScript 代码\n\n只需在浏览器中打开 index.html 即可查看结果。`
        };
        
        zip.file("README.md", readmeContent[lang]);
        
        zip.generateAsync({type:"blob"}).then(function(content) {
            const url = URL.createObjectURL(content);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'web-project.zip';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }
    
    function saveProject() {
        const lang = localStorage.getItem('editor-language') || 'ru';
        const project = {
            html: htmlCode.value,
            css: cssCode.value,
            js: jsCode.value,
            date: new Date().toISOString(),
            version: "1.0",
            language: lang
        };
        
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(project, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "web-project.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        
        alert(translations[lang].projectSaved);
    }

    // Управление выпадающими меню
    function toggleLangDropdown() {
        isLangDropdownOpen = !isLangDropdownOpen;
        if (isLangDropdownOpen) {
            langDropdown.classList.add('dropdown-open');
        } else {
            langDropdown.classList.remove('dropdown-open');
        }
    }
    
    function toggleSaveDropdown() {
        isSaveDropdownOpen = !isSaveDropdownOpen;
        if (isSaveDropdownOpen) {
            saveDropdown.classList.add('dropdown-open');
        } else {
            saveDropdown.classList.remove('dropdown-open');
        }
    }
    
    function closeAllDropdowns(event) {
        if (!langDropdown.contains(event.target)) {
            isLangDropdownOpen = false;
            langDropdown.classList.remove('dropdown-open');
        }
        if (!saveDropdown.contains(event.target)) {
            isSaveDropdownOpen = false;
            saveDropdown.classList.remove('dropdown-open');
        }
    }

    // Инициализация
    function init() {
        // Определяем язык и тему
        const savedLang = localStorage.getItem('editor-language');
        const systemLang = getSystemLanguage();
        const lang = savedLang || systemLang;
        
        const savedTheme = localStorage.getItem('editor-theme');
        const systemTheme = getSystemTheme();
        const theme = savedTheme || systemTheme;
        
        setLanguage(lang);
        setTheme(theme);
        
        // Загружаем код
        if (localStorage.getItem('editor-initialized')) {
            const savedCode = localStorage.getItem('editor-code');
            if (savedCode) {
                const code = JSON.parse(savedCode);
                htmlCode.value = code.html || codeExamples[lang].html;
                cssCode.value = code.css || codeExamples[lang].css;
                jsCode.value = code.js || codeExamples[lang].js;
            }
        } else {
            htmlCode.value = codeExamples[lang].html;
            cssCode.value = codeExamples[lang].css;
            jsCode.value = codeExamples[lang].js;
            localStorage.setItem('editor-initialized', 'true');
        }
        
        runCode();
        
        // Инициализируем модули
        initColorPalette();
        initFullscreen();
        initScratchBlocks();
        
        // Настраиваем обработчики событий
        setupEventHandlers();
    }

    function setupEventHandlers() {
        // Основные кнопки
        runButton.addEventListener('click', runCode);
        resetButton.addEventListener('click', resetCode);
        
        // Переключение вкладок
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                
                tabs.forEach(t => t.classList.remove('active'));
                codeContainers.forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                document.getElementById(`${tabId}-container`).classList.add('active');
            });
        });
        
        // Переключение темы
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
        
        // Переключение языка
        document.querySelectorAll('.lang-dropdown-content button').forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');
                setLanguage(lang);
                runCode();
                toggleLangDropdown();
            });
        });
        
        // Управление выпадающими меню
        document.querySelector('.lang-toggle').addEventListener('click', toggleLangDropdown);
        document.querySelector('.save-btn').addEventListener('click', toggleSaveDropdown);
        document.addEventListener('click', closeAllDropdowns);
        
        // Автосохранение кода
        [htmlCode, cssCode, jsCode].forEach(textarea => {
            textarea.addEventListener('input', () => {
                const code = {
                    html: htmlCode.value,
                    css: cssCode.value,
                    js: jsCode.value
                };
                localStorage.setItem('editor-code', JSON.stringify(code));
            });
        });
        
        // Сохранение файлов
        saveHtmlBtn.addEventListener('click', saveHtml);
        saveCssBtn.addEventListener('click', saveCss);
        saveJsBtn.addEventListener('click', saveJs);
        saveHtmlSbBtn.addEventListener('click', saveHtmlSb);
        saveCssSbBtn.addEventListener('click', saveCssSb);
        saveJsSbBtn.addEventListener('click', saveJsSb);
        saveAllBtn.addEventListener('click', saveAllFiles);
        saveJsonBtn.addEventListener('click', saveProject);
        
        // Слушатель изменения системной темы
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('editor-theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // Запускаем приложение
    init();
});
