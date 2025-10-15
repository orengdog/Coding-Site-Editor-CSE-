// Все предыдущие переводы и константы остаются, добавляем новые ключи переводов:

const translations = {
    ru: {
        // ... существующие переводы ...
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
        delete: "Удалить",
        fullscreenExit: "Выйти из полноэкранного режима (Esc)",
        elementSelected: "Элемент выбран",
        fileUploaded: "Файл загружен"
    },
    en: {
        // ... existing translations ...
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
        delete: "Delete",
        fullscreenExit: "Exit fullscreen (Esc)",
        elementSelected: "Element selected",
        fileUploaded: "File uploaded"
    },
    zh: {
        // ... 现有翻译 ...
        graphicMode: "图形模式",
        colorPalette: "调色板",
        applyColor: "应用",
        uploadTitle: "文件上传",
        uploadImage: "上传图片",
        uploadAudio: "上传音频",
        uploadVideo: "上传视频",
        rename: "重命名",
        recolor: "重新着色",
        duplicate: "复制",
        copy: "拷贝",
        paste: "粘贴",
        delete: "删除",
        fullscreenExit: "退出全屏 (Esc)",
        elementSelected: "元素已选择",
        fileUploaded: "文件已上传"
    }
};

// Добавляем цвета для палитры
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

    // Переменные для графического режима
    let isGraphicMode = false;
    let selectedElement = null;
    let copiedElement = null;
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };
    let isResizing = false;
    let resizeDirection = '';
    let isRotating = false;

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

        // Сворачивание/разворачивание палитры
        colorPaletteToggle.addEventListener('click', () => {
            colorPaletteElement.classList.toggle('collapsed');
            colorPaletteToggle.textContent = colorPaletteElement.classList.contains('collapsed') ? '+' : '−';
        });
    }

    // Подсветка цветов в коде
    function highlightColorsInCode() {
        const codeAreas = [htmlCode, cssCode, jsCode];
        
        codeAreas.forEach(textarea => {
            // Создаем временный элемент для обработки HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = textarea.value;
            
            // Находим все элементы с цветами (простой regex для демонстрации)
            const colorRegex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
            let match;
            
            while ((match = colorRegex.exec(textarea.value)) !== null) {
                const color = match[0];
                const startPos = match.index;
                const endPos = startPos + color.length;
                
                // Добавляем обработчик клика на цвет
                textarea.addEventListener('click', (e) => {
                    const cursorPos = textarea.selectionStart;
                    if (cursorPos >= startPos && cursorPos <= endPos) {
                        colorInput.value = color;
                        colorPaletteElement.style.display = 'block';
                    }
                });
            }
        });
    }

    // Применение цвета к выделенному тексту
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

    // Инициализация графического режима
    function initGraphicMode() {
        graphicModeCheckbox.addEventListener('change', (e) => {
            isGraphicMode = e.target.checked;
            document.querySelector('.preview-panel').classList.toggle('graphic-mode-active', isGraphicMode);
            
            if (isGraphicMode) {
                enableGraphicMode();
            } else {
                disableGraphicMode();
            }
        });
    }

    function enableGraphicMode() {
        // Очищаем оверлей
        graphicOverlay.innerHTML = '';
        
        // Добавляем индикатор графического режима
        const indicator = document.createElement('div');
        indicator.className = 'graphic-mode-indicator';
        indicator.textContent = 'Графический режим';
        graphicOverlay.appendChild(indicator);
        
        // Парсим HTML для создания графических элементов
        parseHTMLForGraphicElements();
        
        // Добавляем обработчики событий
        setupGraphicEventHandlers();
    }

    function disableGraphicMode() {
        // Удаляем все графические элементы
        graphicOverlay.innerHTML = '';
        selectedElement = null;
    }

    function parseHTMLForGraphicElements() {
        const previewDoc = preview.contentDocument || preview.contentWindow.document;
        const elements = previewDoc.body.querySelectorAll('div, p, h1, h2, h3, h4, h5, h6, img, button, section, article, header, footer, nav, aside');
        
        elements.forEach(element => {
            if (element.offsetWidth > 10 && element.offsetHeight > 10) {
                createGraphicElement(element);
            }
        });
    }

    function createGraphicElement(domElement) {
        const rect = domElement.getBoundingClientRect();
        const previewRect = preview.getBoundingClientRect();
        
        const graphicElement = document.createElement('div');
        graphicElement.className = 'graphic-element';
        graphicElement.style.left = (rect.left - previewRect.left) + 'px';
        graphicElement.style.top = (rect.top - previewRect.top) + 'px';
        graphicElement.style.width = rect.width + 'px';
        graphicElement.style.height = rect.height + 'px';
        graphicElement.setAttribute('data-element-id', generateId());
        
        // Добавляем ручки для изменения размера
        addResizeHandles(graphicElement);
        
        // Добавляем ручку для вращения
        addRotateHandle(graphicElement);
        
        graphicOverlay.appendChild(graphicElement);
        
        // Обработчики событий для графического элемента
        setupGraphicElementEvents(graphicElement, domElement);
    }

    function addResizeHandles(element) {
        const directions = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'];
        
        directions.forEach(dir => {
            const handle = document.createElement('div');
            handle.className = `resize-handle resize-${dir}`;
            element.appendChild(handle);
        });
    }

    function addRotateHandle(element) {
        const handle = document.createElement('div');
        handle.className = 'rotate-handle';
        element.appendChild(handle);
    }

    function setupGraphicElementEvents(graphicElement, domElement) {
        graphicElement.addEventListener('mousedown', startDrag);
        graphicElement.addEventListener('touchstart', startDrag);
        
        // Обработчики для ручек изменения размера
        graphicElement.querySelectorAll('.resize-handle').forEach(handle => {
            handle.addEventListener('mousedown', startResize);
        });
        
        // Обработчик для вращения
        graphicElement.querySelector('.rotate-handle').addEventListener('mousedown', startRotate);
        
        // Контекстное меню
        graphicElement.addEventListener('contextmenu', showContextMenu);
        
        // Выделение элемента
        graphicElement.addEventListener('click', (e) => {
            e.stopPropagation();
            selectElement(graphicElement);
        });
    }

    function setupGraphicEventHandlers() {
        // Обработчики для всего оверлея
        graphicOverlay.addEventListener('mousedown', (e) => {
            if (e.target === graphicOverlay) {
                clearSelection();
            }
        });
        
        // Обработчики клавиш
        document.addEventListener('keydown', handleKeyPress);
        
        // Закрытие контекстного меню
        document.addEventListener('click', hideContextMenu);
    }

    function startDrag(e) {
        e.preventDefault();
        const element = e.target.classList.contains('graphic-element') ? e.target : e.target.closest('.graphic-element');
        if (!element) return;
        
        isDragging = true;
        selectedElement = element;
        
        const rect = element.getBoundingClientRect();
        dragOffset.x = e.clientX - rect.left;
        dragOffset.y = e.clientY - rect.top;
        
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
        
        element.classList.add('selected');
    }

    function drag(e) {
        if (!isDragging || !selectedElement) return;
        
        const previewRect = preview.getBoundingClientRect();
        const x = e.clientX - previewRect.left - dragOffset.x;
        const y = e.clientY - previewRect.top - dragOffset.y;
        
        // Ограничиваем перемещение в пределах превью
        const maxX = previewRect.width - selectedElement.offsetWidth;
        const maxY = previewRect.height - selectedElement.offsetHeight;
        
        selectedElement.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
        selectedElement.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
        
        updateDOMElementPosition(selectedElement);
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }

    function startResize(e) {
        e.preventDefault();
        e.stopPropagation();
        
        isResizing = true;
        selectedElement = e.target.closest('.graphic-element');
        resizeDirection = e.target.className.split('resize-')[1];
        
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    }

    function resize(e) {
        if (!isResizing || !selectedElement) return;
        
        const rect = selectedElement.getBoundingClientRect();
        const previewRect = preview.getBoundingClientRect();
        
        let newWidth = rect.width;
        let newHeight = rect.height;
        let newLeft = parseInt(selectedElement.style.left);
        let newTop = parseInt(selectedElement.style.top);
        
        const deltaX = e.clientX - rect.right;
        const deltaY = e.clientY - rect.bottom;
        
        switch(resizeDirection) {
            case 'e':
                newWidth = Math.max(50, rect.width + deltaX);
                break;
            case 'w':
                newWidth = Math.max(50, rect.width - deltaX);
                newLeft += deltaX;
                break;
            case 's':
                newHeight = Math.max(50, rect.height + deltaY);
                break;
            case 'n':
                newHeight = Math.max(50, rect.height - deltaY);
                newTop += deltaY;
                break;
            case 'se':
                newWidth = Math.max(50, rect.width + deltaX);
                newHeight = Math.max(50, rect.height + deltaY);
                break;
            case 'sw':
                newWidth = Math.max(50, rect.width - deltaX);
                newHeight = Math.max(50, rect.height + deltaY);
                newLeft += deltaX;
                break;
            case 'ne':
                newWidth = Math.max(50, rect.width + deltaX);
                newHeight = Math.max(50, rect.height - deltaY);
                newTop += deltaY;
                break;
            case 'nw':
                newWidth = Math.max(50, rect.width - deltaX);
                newHeight = Math.max(50, rect.height - deltaY);
                newLeft += deltaX;
                newTop += deltaY;
                break;
        }
        
        // Ограничиваем размеры в пределах превью
        const maxWidth = previewRect.width - newLeft;
        const maxHeight = previewRect.height - newTop;
        
        selectedElement.style.width = Math.min(newWidth, maxWidth) + 'px';
        selectedElement.style.height = Math.min(newHeight, maxHeight) + 'px';
        selectedElement.style.left = Math.max(0, newLeft) + 'px';
        selectedElement.style.top = Math.max(0, newTop) + 'px';
        
        updateDOMElementSize(selectedElement);
    }

    function stopResize() {
        isResizing = false;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
    }

    function startRotate(e) {
        e.preventDefault();
        e.stopPropagation();
        
        isRotating = true;
        selectedElement = e.target.closest('.graphic-element');
        
        const rect = selectedElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        document.addEventListener('mousemove', rotate);
        document.addEventListener('mouseup', stopRotate);
    }

    function rotate(e) {
        if (!isRotating || !selectedElement) return;
        
        const rect = selectedElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;
        selectedElement.style.transform = `rotate(${angle}deg)`;
        
        updateDOMElementRotation(selectedElement, angle);
    }

    function stopRotate() {
        isRotating = false;
        document.removeEventListener('mousemove', rotate);
        document.removeEventListener('mouseup', stopRotate);
    }

    function selectElement(element) {
        clearSelection();
        selectedElement = element;
        element.classList.add('selected');
    }

    function clearSelection() {
        graphicOverlay.querySelectorAll('.graphic-element').forEach(el => {
            el.classList.remove('selected');
        });
        selectedElement = null;
        hideContextMenu();
    }

    function showContextMenu(e) {
        e.preventDefault();
        
        if (!selectedElement) return;
        
        contextMenu.style.display = 'block';
        contextMenu.style.left = e.clientX + 'px';
        contextMenu.style.top = e.clientY + 'px';
        
        // Обновляем переводы в контекстном меню
        updateContextMenuTranslations();
    }

    function hideContextMenu() {
        contextMenu.style.display = 'none';
    }

    function updateContextMenuTranslations() {
        const lang = localStorage.getItem('editor-language') || 'ru';
        contextMenu.querySelectorAll('.context-item').forEach(item => {
            const action = item.getAttribute('data-action');
            if (translations[lang][action]) {
                item.textContent = translations[lang][action];
            }
        });
    }

    function handleKeyPress(e) {
        if (!isGraphicMode || !selectedElement) return;
        
        switch(e.key) {
            case 'Delete':
            case 'Backspace':
                deleteSelectedElement();
                break;
            case 'c':
                if (e.ctrlKey || e.metaKey) {
                    copySelectedElement();
                    e.preventDefault();
                }
                break;
            case 'v':
                if (e.ctrlKey || e.metaKey) {
                    pasteElement();
                    e.preventDefault();
                }
                break;
            case 'Escape':
                clearSelection();
                break;
        }
    }

    function deleteSelectedElement() {
        if (selectedElement) {
            selectedElement.remove();
            selectedElement = null;
        }
    }

    function copySelectedElement() {
        if (selectedElement) {
            copiedElement = {
                html: selectedElement.innerHTML,
                style: selectedElement.style.cssText
            };
        }
    }

    function pasteElement() {
        if (copiedElement) {
            const newElement = document.createElement('div');
            newElement.className = 'graphic-element added';
            newElement.innerHTML = copiedElement.html;
            newElement.style.cssText = copiedElement.style;
            newElement.style.left = (parseInt(selectedElement?.style.left || '0') + 20) + 'px';
            newElement.style.top = (parseInt(selectedElement?.style.top || '0') + 20) + 'px';
            newElement.setAttribute('data-element-id', generateId());
            
            graphicOverlay.appendChild(newElement);
            setupGraphicElementEvents(newElement, null);
            
            setTimeout(() => newElement.classList.remove('added'), 300);
        }
    }

    // Вспомогательные функции
    function generateId() {
        return 'element_' + Math.random().toString(36).substr(2, 9);
    }

    function updateDOMElementPosition(graphicElement) {
        // Здесь будет обновление соответствующего DOM элемента в превью
        // Для демонстрации просто перезапускаем код
        runCode();
    }

    function updateDOMElementSize(graphicElement) {
        runCode();
    }

    function updateDOMElementRotation(graphicElement, angle) {
        runCode();
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
        const lang = localStorage.getItem('editor-language') || 'ru';
        
        for (let file of files) {
            const fileURL = URL.createObjectURL(file);
            displayUploadedFile(file, fileURL);
            
            // Добавляем путь к файлу в HTML код
            if (file.type.startsWith('image/')) {
                addImageToHTML(file.name, fileURL);
            } else if (file.type.startsWith('audio/')) {
                addAudioToHTML(file.name, fileURL);
            } else if (file.type.startsWith('video/')) {
                addVideoToHTML(file.name, fileURL);
            }
        }
        
        runCode();
        alert(translations[lang].fileUploaded);
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
                <div class="file-icon">📄</div>
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

    function addImageToHTML(filename, url) {
        const imgHTML = `<img src="${url}" alt="${filename}" style="max-width: 100%;">`;
        htmlCode.value += '\n' + imgHTML;
    }

    function addAudioToHTML(filename, url) {
        const audioHTML = `<audio controls>\n    <source src="${url}" type="audio/mpeg">\n    Ваш браузер не поддерживает аудио элемент.\n</audio>`;
        htmlCode.value += '\n' + audioHTML;
    }

    function addVideoToHTML(filename, url) {
        const videoHTML = `<video controls style="max-width: 100%;">\n    <source src="${url}" type="video/mp4">\n    Ваш браузер не поддерживает видео элемент.\n</video>`;
        htmlCode.value += '\n' + videoHTML;
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

    // Автоматическое переключение вкладок при клике на блоки
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

    // Обновленная функция инициализации
    function init() {
        // Существующая инициализация...
        
        // Новые инициализации
        initColorPalette();
        initGraphicMode();
        initFileUpload();
        initFullscreen();
        setupAutoTabSwitching();
        highlightColorsInCode();
        
        // Запускаем код при загрузке
        runCode();
    }

    // Запускаем инициализацию
    init();
});

// Остальной существующий код JavaScript остается...
