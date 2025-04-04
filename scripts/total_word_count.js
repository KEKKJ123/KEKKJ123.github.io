// word-counter.js
(function() {
    // 配置项
    const config = {
        counterElementSelector: '.word-counter', // 用于显示字数的元素选择器
        storageKey: 'site_word_count',          // localStorage 存储键名
        expirationDays: 7,                     // 数据过期天数
        ignoreSelectors: [                      // 不计入统计的元素选择器
            'nav', 'footer', '.menu', '.sidebar', 
            'script', 'style', 'noscript'
        ]
    };

    // 主函数
    function initWordCounter() {
        // 检查是否有显示字数的元素
        const counterElements = document.querySelectorAll(config.counterElementSelector);
        if (counterElements.length === 0) return;

        // 尝试从缓存获取字数
        const cachedData = getCachedWordCount();
        if (cachedData && isCacheValid(cachedData.timestamp)) {
            updateCounterElements(counterElements, cachedData.count);
            return;
        }

        // 计算全站字数
        const wordCount = calculateSiteWordCount();
        
        // 更新显示并缓存结果
        updateCounterElements(counterElements, wordCount);
        cacheWordCount(wordCount);
    }

    // 从缓存获取字数
    function getCachedWordCount() {
        const data = localStorage.getItem(config.storageKey);
        return data ? JSON.parse(data) : null;
    }

    // 检查缓存是否有效
    function isCacheValid(timestamp) {
        const expirationTime = config.expirationDays * 24 * 60 * 60 * 1000;
        return Date.now() - timestamp < expirationTime;
    }

    // 计算全站字数
    function calculateSiteWordCount() {
        // 获取页面主要内容
        let textContent = '';
        const body = document.body.cloneNode(true);
        
        // 移除不需要统计的元素
        config.ignoreSelectors.forEach(selector => {
            const elements = body.querySelectorAll(selector);
            elements.forEach(el => el.remove());
        });

        textContent = body.textContent || '';
        
        // 计算字数（简单的中英文单词计数）
        const chineseWords = textContent.match(/[\u4e00-\u9fa5]/g) || [];
        const englishWords = textContent.match(/\b\w+\b/g) || [];
        return chineseWords.length + englishWords.length;
    }

    // 更新显示元素
    function updateCounterElements(elements, count) {
        elements.forEach(el => {
            el.textContent = formatNumber(count);
        });
    }

    // 格式化数字显示
    function formatNumber(num) {
        if (num >= 10000) {
            return (num / 10000).toFixed(1) + '万';
        }
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 缓存字数
    function cacheWordCount(count) {
        const data = {
            count: count,
            timestamp: Date.now()
        };
        localStorage.setItem(config.storageKey, JSON.stringify(data));
    }

    // 初始化
    document.addEventListener('DOMContentLoaded', initWordCounter);
})();