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
        structure: "Структура",
        text: "Текст",
        media: "Медиа",
        forms: "Формы",
        layout: "Макет",
        navigation: "Навигация",
        typography: "Типография",
        colors: "Цвета",
        layoutStyles: "Расположение",
        effects: "Эффекты",
        animations: "Анимации",
        variables: "Переменные",
        functions: "Функции",
        events: "События",
        dom: "DOM",
        arrays: "Массивы",
        objects: "Объекты"
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
        structure: "Structure",
        text: "Text",
        media: "Media",
        forms: "Forms",
        layout: "Layout",
        navigation: "Navigation",
        typography: "Typography",
        colors: "Colors",
        layoutStyles: "Layout",
        effects: "Effects",
        animations: "Animations",
        variables: "Variables",
        functions: "Functions",
        events: "Events",
        dom: "DOM",
        arrays: "Arrays",
        objects: "Objects"
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
        importTitle: "导入文件",
        importHtml: "导入 HTML",
        importCss: "导入 CSS",
        importJs: "导入 JS",
        importHtmlSb: "导入 HTMLSB",
        importCssSb: "导入 CSSSB",
        importJsSb: "导入 JSSB",
        importJson: "导入项目 (JSON)",
        deploymentTitle: "🚀 在哪里部署您的网站？",
        aiHelpTitle: "🤖 谁能帮助编写代码？",
        footer: "在线 HTML/CSS/JS 编辑器 &copy; 2025 | ©orengdog corporation | 无需安装额外软件即可创建网页",
        htmlPlaceholder: "在此输入您的 HTML 代码...",
        cssPlaceholder: "在此输入您的 CSS 代码...",
        jsPlaceholder: "在此输入您的 JavaScript 代码...",
        resetConfirm: "您确定要重置所有代码吗？",
        projectSaved: "项目已保存为 'web-project.json'",
        importModalTitle: "导入文件",
        importModalText: "选择要导入的文件。现有代码将被替换。",
        confirmImport: "确认导入",
        cancel: "取消",
        structure: "结构",
        text: "文本",
        media: "媒体",
        forms: "表单",
        layout: "布局",
        navigation: "导航",
        typography: "排版",
        colors: "颜色",
        layoutStyles: "布局",
        effects: "效果",
        animations: "动画",
        variables: "变量",
        functions: "函数",
        events: "事件",
        dom: "DOM",
        arrays: "数组",
        objects: "对象"
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
    
    // Создаем новый элемент
    const newElement = document.createElement("p");
    newElement.textContent = "Новый элемент добавлен динамически!";
    newElement.style.color = "#27ae60";
    newElement.style.fontWeight = "bold";
    
    document.body.appendChild(newElement);
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
    
    // Create new element
    const newElement = document.createElement("p");
    newElement.textContent = "New element added dynamically!";
    newElement.style.color = "#27ae60";
    newElement.style.fontWeight = "bold";
    
    document.body.appendChild(newElement);
}`
    },
    zh: {
        html: `<!DOCTYPE html>
<html>
<head>
    <title>我的页面</title>
</head>
<body>
    <h1>欢迎使用在线编辑器！</h1>
    <p>修改此代码并点击"运行代码"查看结果。</p>
    <div id="demo">这是演示文本</div>
    <button onclick="changeText()">点击我！</button>
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
    document.getElementById("demo").innerHTML = "文本已通过 JavaScript 更改！";
    document.getElementById("demo").style.backgroundColor = "#e74c3c";
    
    // 创建新元素
    const newElement = document.createElement("p");
    newElement.textContent = "新元素已动态添加！";
    newElement.style.color = "#27ae60";
    newElement.style.fontWeight = "bold";
    
    document.body.appendChild(newElement);
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
            { title: "Боковая панель", code: '<aside>\n    \n</aside>', category: "structure" },
            { title: "Шапка", code: '<header>\n    \n</header>', category: "structure" },
            { title: "Подвал", code: '<footer>\n    \n</footer>', category: "structure" }
        ],
        text: [
            { title: "Заголовок H1", code: '<h1>Заголовок</h1>', category: "text" },
            { title: "Заголовок H2", code: '<h2>Подзаголовок</h2>', category: "text" },
            { title: "Абзац", code: '<p>Текст абзаца</p>', category: "text" },
            { title: "Ссылка", code: '<a href="#">Текст ссылки</a>', category: "text" },
            { title: "Жирный текст", code: '<strong>Жирный текст</strong>', category: "text" },
            { title: "Курсив", code: '<em>Курсивный текст</em>', category: "text" },
            { title: "Список", code: '<ul>\n    <li>Элемент 1</li>\n    <li>Элемент 2</li>\n</ul>', category: "text" }
        ],
        media: [
            { title: "Изображение", code: '<img src="image.jpg" alt="Описание">', category: "media" },
            { title: "Видео", code: '<video controls>\n    <source src="video.mp4" type="video/mp4">\n</video>', category: "media" },
            { title: "Аудио", code: '<audio controls>\n    <source src="audio.mp3" type="audio/mp3">\n</audio>', category: "media" },
            { title: "Ифрейм", code: '<iframe src="https://example.com"></iframe>', category: "media" }
        ],
        forms: [
            { title: "Форма", code: '<form>\n    <input type="text" placeholder="Введите текст">\n    <button type="submit">Отправить</button>\n</form>', category: "forms" },
            { title: "Текстовое поле", code: '<input type="text" placeholder="Введите текст">', category: "forms" },
            { title: "Кнопка", code: '<button>Кнопка</button>', category: "forms" },
            { title: "Выпадающий список", code: '<select>\n    <option>Опция 1</option>\n    <option>Опция 2</option>\n</select>', category: "forms" },
            { title: "Чекбокс", code: '<input type="checkbox"> Чекбокс', category: "forms" },
            { title: "Радио кнопка", code: '<input type="radio" name="group"> Опция', category: "forms" }
        ],
        layout: [
            { title: "Сетка контейнер", code: '<div class="grid-container">\n    \n</div>', category: "layout" },
            { title: "Флекс контейнер", code: '<div class="flex-container">\n    \n</div>', category: "layout" },
            { title: "Навигация", code: '<nav>\n    <ul>\n        <li><a href="#">Ссылка 1</a></li>\n        <li><a href="#">Ссылка 2</a></li>\n    </ul>\n</nav>', category: "layout" },
            { title: "Карточка", code: '<div class="card">\n    <h3>Заголовок карточки</h3>\n    <p>Содержимое карточки</p>\n</div>', category: "layout" }
        ]
    },
    css: {
        typography: [
            { title: "Стили текста", code: 'font-family: Arial, sans-serif;\nfont-size: 16px;\nfont-weight: normal;\nline-height: 1.5;', category: "typography" },
            { title: "Выравнивание текста", code: 'text-align: center;', category: "typography" },
            { title: "Цвет текста", code: 'color: #333333;', category: "typography" },
            { title: "Тень текста", code: 'text-shadow: 2px 2px 4px rgba(0,0,0,0.3);', category: "typography" },
            { title: "Трансформация текста", code: 'text-transform: uppercase;', category: "typography" }
        ],
        colors: [
            { title: "Фоновый цвет", code: 'background-color: #ffffff;', category: "colors" },
            { title: "Градиент", code: 'background: linear-gradient(45deg, #ff6b6b, #4ecdc4);', category: "colors" },
            { title: "Прозрачность", code: 'opacity: 0.8;', category: "colors" },
            { title: "Цвет границы", code: 'border-color: #3498db;', category: "colors" }
        ],
        layoutStyles: [
            { title: "Flexbox", code: 'display: flex;\njustify-content: center;\nalign-items: center;', category: "layoutStyles" },
            { title: "Grid", code: 'display: grid;\ngrid-template-columns: 1fr 1fr;\ngap: 20px;', category: "layoutStyles" },
            { title: "Отступы", code: 'padding: 20px;\nmargin: 10px;', category: "layoutStyles" },
            { title: "Размеры", code: 'width: 100%;\nheight: 200px;', category: "layoutStyles" },
            { title: "Позиционирование", code: 'position: relative;\ntop: 0;\nleft: 0;', category: "layoutStyles" }
        ],
        effects: [
            { title: "Тень", code: 'box-shadow: 0 4px 8px rgba(0,0,0,0.1);', category: "effects" },
            { title: "Скругление углов", code: 'border-radius: 8px;', category: "effects" },
            { title: "Граница", code: 'border: 1px solid #ddd;', category: "effects" },
            { title: "Размытие", code: 'filter: blur(2px);', category: "effects" },
            { title: "Яркость", code: 'filter: brightness(1.2);', category: "effects" }
        ],
        animations: [
            { title: "Анимация", code: '@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\nanimation: fadeIn 1s ease-in-out;', category: "animations" },
            { title: "Переход", code: 'transition: all 0.3s ease;', category: "animations" },
            { title: "Трансформация", code: 'transform: scale(1.1) rotate(5deg);', category: "animations" },
            { title: "Анимация наведения", code: 'transition: transform 0.3s ease;\n}\n.element:hover {\n    transform: scale(1.05);', category: "animations" }
        ]
    },
    js: {
        variables: [
            { title: "Объявление переменной", code: 'let variableName = "value";', category: "variables" },
            { title: "Константа", code: 'const CONSTANT_NAME = "value";', category: "variables" },
            { title: "Числовая переменная", code: 'let number = 42;', category: "variables" },
            { title: "Булева переменная", code: 'let isActive = true;', category: "variables" },
            { title: "Массив", code: 'let array = [1, 2, 3];', category: "variables" }
        ],
        functions: [
            { title: "Функция", code: 'function functionName(parameter) {\n    // код функции\n}', category: "functions" },
            { title: "Стрелочная функция", code: 'const functionName = (parameter) => {\n    // код функции\n};', category: "functions" },
            { title: "Анонимная функция", code: 'function() {\n    // код функции\n}', category: "functions" },
            { title: "Функция с возвратом", code: 'function sum(a, b) {\n    return a + b;\n}', category: "functions" }
        ],
        events: [
            { title: "Клик", code: 'element.addEventListener("click", function() {\n    // обработчик клика\n});', category: "events" },
            { title: "Загрузка страницы", code: 'window.addEventListener("load", function() {\n    // код после загрузки\n});', category: "events" },
            { title: "Ввод текста", code: 'inputElement.addEventListener("input", function(event) {\n    console.log(event.target.value);\n});', category: "events" },
            { title: "Наведение мыши", code: 'element.addEventListener("mouseover", function() {\n    // код при наведении\n});', category: "events" }
        ],
        dom: [
            { title: "Выбор элемента", code: 'const element = document.querySelector(".className");', category: "dom" },
            { title: "Изменение контента", code: 'element.innerHTML = "Новый контент";', category: "dom" },
            { title: "Изменение стиля", code: 'element.style.color = "red";', category: "dom" },
            { title: "Создание элемента", code: 'const newElement = document.createElement("div");\ndocument.body.appendChild(newElement);', category: "dom" },
            { title: "Удаление элемента", code: 'element.remove();', category: "dom" }
        ],
        arrays: [
            { title: "Создание массива", code: 'const array = [1, 2, 3, 4, 5];', category: "arrays" },
            { title: "Перебор массива", code: 'array.forEach(item => {\n    console.log(item);\n});', category: "arrays" },
            { title: "Фильтрация", code: 'const filtered = array.filter(item => item > 2);', category: "arrays" },
            { title: "Поиск в массиве", code: 'const found = array.find(item => item === 3);', category: "arrays" }
        ],
        objects: [
            { title: "Создание объекта", code: 'const obj = {\n    key: "value",\n    number: 42\n};', category: "objects" },
            { title: "Доступ к свойствам", code: 'console.log(obj.key);', category: "objects" },
            { title: "Метод объекта", code: 'const obj = {\n    method: function() {\n        // код метода\n    }\n};', category: "objects" },
            { title: "Класс", code: 'class MyClass {\n    constructor() {\n        // конструктор\n    }\n}', category: "objects" }
        ]
    }
};

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
    
    // Элементы Scratch блоков
    const htmlBlocksContainer = document.getElementById('html-blocks');
    const cssBlocksContainer = document.getElementById('css-blocks');
    const jsBlocksContainer = document.getElementById('js-blocks');
    const htmlCategoriesContainer = document.getElementById('html-categories');
    const cssCategoriesContainer = document.getElementById('css-categories');
    const jsCategoriesContainer = document.getElementById('js-categories');

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

    let currentImportType = '';
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
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });
        
        localStorage.setItem('editor-language', lang);
        
        if (!localStorage.getItem('editor-initialized')) {
            htmlCode.value = codeExamples[lang].html;
            cssCode.value = codeExamples[lang].css;
            jsCode.value = codeExamples[lang].js;
            runCode();
        }

        // Обновляем Scratch блоки
        createScratchBlocks();
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
    
    // Функции для Scratch блоков
    function createScratchBlocks() {
        createBlocksForType('html', htmlBlocksContainer, htmlCategoriesContainer);
        createBlocksForType('css', cssBlocksContainer, cssCategoriesContainer);
        createBlocksForType('js', jsBlocksContainer, jsCategoriesContainer);
    }

    function createBlocksForType(type, blocksContainer, categoriesContainer) {
        const blocks = scratchBlocks[type];
        const lang = localStorage.getItem('editor-language') || 'ru';
        
        // Очищаем контейнеры
        categoriesContainer.innerHTML = '';
        blocksContainer.innerHTML = '';
        
        // Создаем категории
        Object.keys(blocks).forEach(category => {
            const categoryBtn = document.createElement('div');
            categoryBtn.className = 'scratch-category';
            categoryBtn.textContent = translations[lang][category] || category;
            categoryBtn.setAttribute('data-category', category);
            categoriesContainer.appendChild(categoryBtn);
        });

        // Активируем первую категорию
        if (categoriesContainer.children.length > 0) {
            categoriesContainer.children[0].classList.add('active');
            showBlocksByCategory(type, Object.keys(blocks)[0], blocksContainer);
        }

        // Обработчики для категорий
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
        const lang = localStorage.getItem('editor-language') || 'ru';
        
        blocks.forEach(block => {
            const blockElement = document.createElement('div');
            blockElement.className = 'scratch-block';
            blockElement.setAttribute('data-code', block.code);
            blockElement.innerHTML = `
                <div class="block-title">${block.title}</div>
                <div class="block-code">${block.code}</div>
                <div class="block-category">${translations[lang][block.category] || block.category}</div>
            `;
            
            // Drag and drop функциональность
            blockElement.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', block.code);
                e.dataTransfer.setData('block-type', type);
            });
            
            blockElement.draggable = true;
            
            // Клик для быстрой вставки
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
        
        const activeTab = document.querySelector('.tab.active');
        if (activeTab.getAttribute('data-tab') === type) {
            activeTab.classList.add('block-added');
            setTimeout(() => activeTab.classList.remove('block-added'), 500);
        }
    }

    // Функции для сохранения новых типов файлов
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

    // Функции для импорта
    function setupImportHandlers() {
        importHtmlBtn.addEventListener('click', () => openFileInput('html'));
        importCssBtn.addEventListener('click', () => openFileInput('css'));
        importJsBtn.addEventListener('click', () => openFileInput('js'));
        importHtmlSbBtn.addEventListener('click', () => openFileInput('htmlsb'));
        importCssSbBtn.addEventListener('click', () => openFileInput('csssb'));
        importJsSbBtn.addEventListener('click', () => openFileInput('jssb'));
        importJsonBtn.addEventListener('click', () => openFileInput('json'));

        fileInput.addEventListener('change', handleFileImport);
        confirmImportBtn.addEventListener('click', confirmImport);
        cancelImportBtn.addEventListener('click', cancelImport);
    }

    function openFileInput(type) {
        currentImportType = type;
        let accept = '';
        switch(type) {
            case 'html': accept = '.html'; break;
            case 'css': accept = '.css'; break;
            case 'js': accept = '.js'; break;
            case 'htmlsb': accept = '.htmlsb'; break;
            case 'csssb': accept = '.csssb'; break;
            case 'jssb': accept = '.jssb'; break;
            case 'json': accept = '.json'; break;
        }
        fileInput.accept = accept;
        fileInput.click();
    }

    function handleFileImport(event) {
        const file = event.target.files[0];
        if (file) {
            importModal.style.display = 'flex';
        }
    }

    function confirmImport() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result;
                processImportedFile(content, currentImportType);
                importModal.style.display = 'none';
                fileInput.value = '';
            };
            reader.readAsText(file);
        }
    }

    function cancelImport() {
        importModal.style.display = 'none';
        fileInput.value = '';
    }

    function processImportedFile(content, type) {
        const lang = localStorage.getItem('editor-language') || 'ru';
        
        switch(type) {
            case 'html':
                htmlCode.value = content;
                break;
            case 'css':
                cssCode.value = content;
                break;
            case 'js':
                jsCode.value = content;
                break;
            case 'htmlsb':
            case 'csssb':
            case 'jssb':
                try {
                    const blocksData = JSON.parse(content);
                    alert(`Блоки ${type} успешно импортированы!`);
                } catch (e) {
                    alert('Ошибка при импорте блоков: неверный формат файла');
                }
                break;
            case 'json':
                try {
                    const project = JSON.parse(content);
                    htmlCode.value = project.html || '';
                    cssCode.value = project.css || '';
                    jsCode.value = project.js || '';
                } catch (e) {
                    alert('Ошибка при импорте проекта: неверный формат JSON');
                }
                break;
        }
        runCode();
    }

    // Drag and drop для редакторов кода
    function setupDragAndDrop() {
        [htmlCode, cssCode, jsCode].forEach(editor => {
            editor.addEventListener('dragover', (e) => {
                e.preventDefault();
                editor.style.backgroundColor = 'var(--scratch-block-bg)';
            });
            
            editor.addEventListener('dragleave', () => {
                editor.style.backgroundColor = '';
            });
            
            editor.addEventListener('drop', (e) => {
                e.preventDefault();
                editor.style.backgroundColor = '';
                const code = e.dataTransfer.getData('text/plain');
                const blockType = e.dataTransfer.getData('block-type');
                
                if (code) {
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
            });
        });
    }

    // Существующие функции сохранения
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
        // Определяем язык
        const savedLang = localStorage.getItem('editor-language');
        const systemLang = getSystemLanguage();
        const lang = savedLang || systemLang;
        setLanguage(lang);
        
        // Определяем тему
        const savedTheme = localStorage.getItem('editor-theme');
        const systemTheme = getSystemTheme();
        const theme = savedTheme || systemTheme;
        setTheme(theme);
        
        // Загружаем код если это не первый запуск
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
        
        // Создаем Scratch блоки
        createScratchBlocks();
        
        // Настраиваем импорт
        setupImportHandlers();
        
        // Настраиваем drag and drop
        setupDragAndDrop();
    }

    // Обработчики событий
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            codeContainers.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(`${tabId}-container`).classList.add('active');
        });
    });
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
    
    document.querySelectorAll('.lang-dropdown-content button').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
            runCode();
            toggleLangDropdown();
        });
    });
    
    document.querySelector('.lang-toggle').addEventListener('click', toggleLangDropdown);
    document.querySelector('.save-btn').addEventListener('click', toggleSaveDropdown);
    document.addEventListener('click', closeAllDropdowns);
    
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
    
    runButton.addEventListener('click', runCode);
    resetButton.addEventListener('click', resetCode);
    
    // Обработчики сохранения
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
    
    // Запускаем инициализацию
    init();
});
