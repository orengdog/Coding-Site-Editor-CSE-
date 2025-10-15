// Основные переводы
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
        importTitle: "Импортировать файлы",
        importHtml: "Импорт HTML",
        importCss: "Импорт CSS",
        importJs: "Импорт JS",
        importHtmlSb: "Импорт HTMLSB",
        importCssSb: "Импорт CSSSB",
        importJsSb: "Импорт JSSB",
        importJson: "Импорт проекта (JSON)",
        deploymentTitle: "🚀 Где выложить сайт?",
        aiHelpTitle: "🤖 У кого попросить помощь с кодом?",
        footer: "Онлайн-редактор HTML/CSS/JS &copy; 2025 | ©orengdog corporation | Создавайте веб-страницы без установки дополнительного ПО",
        htmlPlaceholder: "Введите ваш HTML код здесь...",
        cssPlaceholder: "Введите ваш CSS код здесь...", 
        jsPlaceholder: "Введите ваш JavaScript код здесь...",
        resetConfirm: "Вы уверены, что хотите сбросить весь код?",
        projectSaved: "Проект сохранен как 'web-project.json'",
        importModalTitle: "Импорт файла",
        importModalText: "Выберите файл для импорта. Существующий код будет заменен.",
        confirmImport: "Подтвердить импорт",
        cancel: "Отмена",
        graphicMode: "Графический режим",
        colorPalette: "Палитра цветов",
        applyColor: "Применить",
        uploadTitle: "Загрузка файлов",
        uploadImage: "Загрузить изображение",
        uploadAudio: "Загрузить аудио", 
        uploadVideo: "Загрузить видео",
        rename: "Переименовать",
        recolor: "Перекрасить",
        duplicate: "Дублировать",
        copy: "Копировать",
        paste: "Вставить",
        delete: "Удалить"
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
        importTitle: "Import Files",
        importHtml: "Import HTML",
        importCss: "Import CSS",
        importJs: "Import JS",
        importHtmlSb: "Import HTMLSB",
        importCssSb: "Import CSSSB",
        importJsSb: "Import JSSB",
        importJson: "Import Project (JSON)",
        deploymentTitle: "🚀 Where to deploy your site?",
        aiHelpTitle: "🤖 Who can help with code?",
        footer: "Online HTML/CSS/JS Editor &copy; 2025 | ©orengdog corporation | Create web pages without installing additional software",
        htmlPlaceholder: "Enter your HTML code here...",
        cssPlaceholder: "Enter your CSS code here...",
        jsPlaceholder: "Enter your JavaScript code here...",
        resetConfirm: "Are you sure you want to reset all code?",
        projectSaved: "Project saved as 'web-project.json'",
        importModalTitle: "Import File",
        importModalText: "Select file to import. Existing code will be replaced.",
        confirmImport: "Confirm Import",
        cancel: "Cancel",
        graphicMode: "Graphic Mode",
        colorPalette: "Color Palette",
        applyColor: "Apply",
        uploadTitle: "File Upload",
        uploadImage: "Upload Image",
        uploadAudio: "Upload Audio",
        uploadVideo: "Upload Video",
        rename: "Rename",
        recolor: "Recolor",
        duplicate: "Duplicate",
        copy: "Copy",
        paste: "Paste",
        delete: "Delete"
    }
};

// Примеры кода
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

// Scratch блоки
const scratchBlocks = {
    html: {
        structure: [
            { title: "HTML5 Документ", code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Заголовок</title>\n</head>\n<body>\n    \n</body>\n</html>', category: "structure" },
            { title: "Контейнер Div", code: '<div class="container">\n    \n</div>', category: "structure" },
            { title: "Заголовок H1", code: '<h1>Заголовок</h1>', category: "structure" },
            { title: "Абзац", code: '<p>Текст абзаца</p>', category: "structure" },
            { title: "Ссылка", code: '<a href="#">Текст ссылки</a>', category: "structure" }
        ],
        media: [
            { title: "Изображение", code: '<img src="image.jpg" alt="Описание">', category: "media" },
            { title: "Кнопка", code: '<button>Кнопка</button>', category: "media" }
        ]
    },
    css: {
        layout: [
            { title: "Flexbox", code: 'display: flex;\njustify-content: center;\nalign-items: center;', category: "layout" },
            { title: "Отступы", code: 'padding: 20px;\nmargin: 10px;', category: "layout" }
        ],
        colors: [
            { title: "Фоновый цвет", code: 'background-color: #ffffff;', category: "colors" },
            { title: "Цвет текста", code: 'color: #333333;', category: "colors" }
        ]
    },
    js: {
        functions: [
            { title: "Функция", code: 'function functionName() {\n    // код функции\n}', category: "functions" },
            { title: "Событие клика", code: 'element.addEventListener("click", function() {\n    // обработчик клика\n});', category: "functions" }
        ],
        dom: [
            { title: "Выбор элемента", code: 'const element = document.querySelector(".class");', category: "dom" },
            { title: "Изменение контента", code: 'element.innerHTML = "Новый контент";', category: "dom" }
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
    const tabs = document.querySelectorAll('.tab');
    const codeContainers = document.querySelectorAll('.code-container');

    // Новые элементы
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const graphicModeCheckbox = document.getElementById('graphic-mode');
    const graphicOverlay = document.getElementById('graphic-overlay');
    const colorPaletteElement = document.getElementById('color-palette');
    const colorPaletteToggle = document.getElementById('color-palette-toggle');
    const colorGrid = document.getElementById('color-grid');
    const customColor = document.getElementById('custom-color');
    const colorInput = document.getElementById('color-input');
    const applyColorBtn = document.getElementById('apply-color');
    const contextMenu = document.getElementById('context-menu');

    // Элементы загрузки файлов
    const uploadImageBtn = document.getElementById('upload-image');
    const uploadAudioBtn = document.getElementById('upload-audio');
    const uploadVideoBtn = document.getElementById('upload-video');
    const fileUploadInput = document.getElementById('file-upload');
    const uploadedFilesContainer = document.getElementById('uploaded-files');

    // Элементы импорта
    const importHtmlBtn = document.getElementById('import-html-file');
    const importCssBtn = document.getElementById('import-css-file');
    const importJsBtn = document.getElementById('import-js-file');
    const importHtmlSbBtn = document.getElementById('import-htmlsb-file');
    const importCssSbBtn = document.getElementById('import-csssb-file');
    const importJsSbBtn = document.getElementById('import-jssb-file');
    const importJsonBtn = document.getElementById('import-json-file');
    const fileInput = document.getElementById('file-input');
    const importModal = document.getElementById('import-modal');
    const confirmImportBtn = document.getElementById('confirm-import');
    const cancelImportBtn = document.getElementById('cancel-import');

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
    let currentImportType = '';
    let isGraphicMode = false;
    let selectedElement = null;

    // Основные функции
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
        const lang = 'ru';
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
            });
            colorGrid.appendChild(colorItem);
        });

        customColor.addEventListener('input', (e) => {
            colorInput.value = e.target.value;
        });

        applyColorBtn.addEventListener('click', () => {
            // Простая реализация - можно улучшить
            alert(`Цвет ${colorInput.value} применен`);
        });

        colorPaletteToggle.addEventListener('click', () => {
            colorPaletteElement.classList.toggle('collapsed');
            colorPaletteToggle.textContent = colorPaletteElement.classList.contains('collapsed') ? '+' : '−';
        });
    }

    // Инициализация графического режима (упрощенная)
    function initGraphicMode() {
        graphicModeCheckbox.addEventListener('change', (e) => {
            isGraphicMode = e.target.checked;
            document.querySelector('.preview-panel').classList.toggle('graphic-mode-active', isGraphicMode);
            
            if (isGraphicMode) {
                // Простая реализация графического режима
                graphicOverlay.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">Графический режим активирован</div>';
            } else {
                graphicOverlay.innerHTML = '';
            }
        });
    }

    // Инициализация загрузки файлов
    function initFileUpload() {
        uploadImageBtn.addEventListener('click', () => {
            fileUploadInput.accept = '.png,.jpg,.jpeg,.gif';
            fileUploadInput.click();
        });
        
        uploadAudioBtn.addEventListener('click', () => {
            fileUploadInput.accept = '.mp3,.wav,.ogg';
            fileUploadInput.click();
        });
        
        uploadVideoBtn.addEventListener('click', () => {
            fileUploadInput.accept = '.mp4,.avi,.mov,.webm';
            fileUploadInput.click();
        });
        
        fileUploadInput.addEventListener('change', handleFileUpload);
    }

    function handleFileUpload(e) {
        const files = e.target.files;
        
        for (let file of files) {
            const fileURL = URL.createObjectURL(file);
            displayUploadedFile(file, fileURL);
        }
        
        alert('Файлы загружены!');
    }

    function displayUploadedFile(file, url) {
        const fileElement = document.createElement('div');
        fileElement.className = 'uploaded-file';
        
        if (file.type.startsWith('image/')) {
            fileElement.innerHTML = `
                <img src="${url}" alt="${file.name}">
                <div class="file-name">${file.name}</div>
                <button class="delete-file">×</button>
            `;
        } else {
            fileElement.innerHTML = `
                <div style="font-size: 24px;">📄</div>
                <div class="file-name">${file.name}</div>
                <button class="delete-file">×</button>
            `;
        }
        
        fileElement.querySelector('.delete-file').addEventListener('click', () => {
            fileElement.remove();
            URL.revokeObjectURL(url);
        });
        
        uploadedFilesContainer.appendChild(fileElement);
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
        const lang = 'ru';
        
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
                    const tabType = blockContainer.id.replace('-container', '');
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

    // Инициализация системы
    function init() {
        // Устанавливаем начальный код
        htmlCode.value = codeExamples.ru.html;
        cssCode.value = codeExamples.ru.css;
        jsCode.value = codeExamples.ru.js;
        
        // Запускаем код
        runCode();
        
        // Инициализируем модули
        initColorPalette();
        initGraphicMode();
        initFileUpload();
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
        
        // Сохранение файлов
        saveHtmlBtn.addEventListener('click', () => downloadFile(htmlCode.value, 'index.html', 'text/html'));
        saveCssBtn.addEventListener('click', () => downloadFile(cssCode.value, 'styles.css', 'text/css'));
        saveJsBtn.addEventListener('click', () => downloadFile(jsCode.value, 'script.js', 'text/javascript'));
        saveJsonBtn.addEventListener('click', saveProject);
        
        // Автосохранение
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
    }

    function saveProject() {
        const project = {
            html: htmlCode.value,
            css: cssCode.value,
            js: jsCode.value,
            date: new Date().toISOString(),
            version: "1.0"
        };
        
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(project, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "web-project.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        
        alert('Проект сохранен!');
    }

    // Запускаем приложение
    init();
});
