/* 自動生成推薦人列表和活動列表 */
(function () {
    function init() {
        // --- 推薦人列表動態插入 ---
        const listContainer = document.querySelector("#recommend-list");
        if (listContainer) {
            const recommendData = [
                { name: "吳介民", title: "中研院社會所特聘研究員", img: "u422/20251225-01.png", imgMobile: "u422/20260112-01.png", credit: "" },
                { name: "黃文龍", title: "前柴山自然公園促進會會長、眼科醫師", img: "u422/20251225-02.png", imgMobile: "u422/20260112-02.png", credit: "" },
                { name: "林生祥", title: "音樂人", img: "u422/20251225-03.png", imgMobile: "u422/20260112-03.png", credit: "" },
                { name: "許恩恩", title: "作家", img: "u422/20251225-04.png", imgMobile: "u422/20260112-04.png", credit: "攝影／陳佩芸・提供／博客來OKPAI" },
                { name: "廖瞇", title: "文字工作者", img: "u422/20251225-05.png", imgMobile: "u422/20260112-05.png", credit: "攝影／賴小路" },
                { name: "邱花妹", title: "中山大學社會學系副教授", img: "u422/20251226-11.png", imgMobile: "u422/20260112-06.png", credit: "" },
                { name: "邱毓斌", title: "屏東大學社會發展學系副教授兼系主任", img: "u422/20251226-12.png", imgMobile: "u422/20260112-07.png", credit: "" },
                { name: "何欣潔", title: "離島出版總編輯", img: "u422/20251226-13.png", imgMobile: "u422/20260112-08.png", credit: "" },
                { name: "賴偉傑", title: "綠色公民行動聯盟常務理事", img: "u422/20251226-14.png", imgMobile: "u422/20260112-09.png", credit: "" },
                { name: "阿潑", title: "文字工作者", img: "u422/20251229-001_0.png", imgMobile: "u422/20260112-10.png", credit: "" }
            ];
            const htmlContent = recommendData.map(person => {
                const imgWebp = person.img.replace(/\.png$/, '-75.webp');
                const imgMobileWebp = person.imgMobile.replace(/\.png$/, '-75.webp');
                return `
        <div class="col d-flex flex-column align-items-center justify-content-center">
            <div>
                <picture class="recommend-img-container">
                    <source
                        type="image/webp"
                        srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/${imgMobileWebp} 767w, https://www.cet-taiwan.org/sites/cet-taiwan.org/files/${imgWebp} 768w"
                        sizes="(max-width: 767.98px) 767px, 768px"
                    />
                    <source
                        srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/${person.imgMobile} 767w, https://www.cet-taiwan.org/sites/cet-taiwan.org/files/${person.img} 768w"
                        sizes="(max-width: 767.98px) 767px, 768px"
                    />
                    <img
                        class="recommend-img"
                        loading="lazy"
                        decoding="async"
                        src="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/${person.imgMobile}"
                        alt="${person.name}"
                    />
                </picture>
            </div>
            <p class="recommend-name">${person.name}</p>
            <p class="recommend-title">${person.title}</p>
            <p class="photo-credit">${person.credit || '&nbsp;'}</p>
        </div>
        `;
            }).join('');
            listContainer.innerHTML = htmlContent;
        }

        // --- 活動列表動態插入 ---
        const eventContainer = document.querySelector("#event-list");
        const eventTabsContainer = document.querySelector("#event-tabs");
        if (eventContainer) {
            const eventData = [
                {
                    area: "北部",
                    region: "台北",
                    name: "藝術家也能從事社會運動嗎？《此岸與彼岸－一個社會運動者的身心之旅》新書發表會",
                    location: "台北世界貿易中心展覽一館 C728 讀字公民區（台北市信義區信義路五段5號）",
                    time: "2/08（日）11:00-12:00",
                    link: "https://www.cet-taiwan.org/events/4782"
                },
                {
                    area: "北部",
                    region: "台北",
                    name: "「作家x倡議工作者」雙重身分的跨世代對談",
                    location: "現場＋直播｜台北世界貿易中心展覽一館 A1203 直播室（台北市信義區信義路五段5號）",
                    time: "2/08（日）15:00-15:30",
                    link: "https://www.cet-taiwan.org/events/4783",
                    speaker: "與談：許恩恩｜作家"
                },
                {
                    area: "南部",
                    region: "高雄",
                    name: "新書分享會——高雄場",
                    location: "地球公民基金會高雄總部（高雄市前金區中華四路282號5樓）",
                    time: "3/07（六）14:30-16:30",
                    link: "https://www.cet-taiwan.org/events/4798",
                    speaker: "與談：南方運動夥伴"
                },
                {
                    area: "南部",
                    region: "高雄",
                    name: "募款專案限定—根政煮飯給你吃－煮一道家常料理",
                    location: "地球公民高雄總部（高雄市前金區中華四路282號5樓）",
                    time: "3/08（日）14:30-16:30",
                    link: "https://www.cet-taiwan.org/events/4791"
                },
                {
                    area: "北部",
                    region: "台北",
                    name: "新書分享會——台北場",
                    location: "紀州庵文學森林（臺北市中正區同安街107號）",
                    time: "3/14（六）19:00-21:00",
                    link: "https://www.cet-taiwan.org/events/4798",
                    speaker: "與談：陳信聰｜華視新媒體部經理、前公視有話好說製作人及主持人"
                },
                {
                    area: "北部",
                    region: "台北",
                    name: "募款專案限定—根政寫字給你看！書法筆下的運動軌跡",
                    location: "地球公民台北辦公室（臺北市中正區北平東路28號9F-2）",
                    time: "3/12（四）19:00-21:00",
                    link: "https://www.cet-taiwan.org/events/4791"
                },
                {
                    area: "北部",
                    region: "台北",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》新書分享會",
                    location: "台灣獨立建國聯盟台北市分部（台北市中正區青島西路11號14樓之1）",
                    time: "3/26 (四) 19:00-21:00",
                    link: ""
                },
                {
                    area: "離島",
                    region: "金門",
                    name: "「心與環境的對話錄」－在金門，一個環境關懷者如何起身行動｜主辦 —— 蓊蓊書店",
                    location: "金門植物園（金門縣金湖鎮伯玉路五段太武山10號）",
                    time: "3/21(六) 10:30-12:00",
                    link: ""
                },
                {
                    area: "北部",
                    region: "台北",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》新書分享會｜主辦 —— 台大濁水溪社 & 台大大陸問題研究社",
                    location: "台灣大學第一學生活動中心238室（台北市大安區羅斯福路四段1號）",
                    time: "4/1 (三) 19:00-21:00",
                    link: ""
                },
                {
                    area: "東部",
                    region: "台東",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》新書分享會",
                    location: "晃晃二手書店（950台東市漢陽南路139-1號）",
                    time: "4/9 (四) 19:00-20:30",
                    link: "https://www.facebook.com/events/2231186843954360"
                },
                {
                    area: "北部",
                    region: "新竹",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》新書分享會",
                    location: "江山藝改所（新竹市東區興達街1號）",
                    time: "4/11 (六) 19:00-21:00",
                    link: "https://www.facebook.com/events/896178933409654"
                },
                {
                    area: "離島",
                    region: "澎湖",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》新書分享會",
                    location: "沿菊書店島讀館（澎湖縣馬公市新復路1巷1號1巷3號）",
                    time: "4/18 (六） 10:00-12:00",
                    link: ""
                },
                {
                    area: "離島",
                    region: "澎湖",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》新書分享會",
                    location: "草根果子 Grassroots & Fruit（澎湖縣馬公市文光路131號）",
                    time: "4/17 (五） 20:00-21:30",
                    link: ""
                },
                {
                    area: "南部",
                    region: "高雄",
                    name: "大河的浸潤 —— 看見高雄三十年",
                    location: "三餘書店（高雄市新興區中正二路214號）",
                    time: "5/2 (六) 14:00-16:00",
                    link: ""
                },
                {
                    area: "南部",
                    region: "嘉義",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》新書分享會",
                    location: "島呼冊店（嘉義市中山路257號）",
                    time: "6/14 (日) 15:00-17:00",
                    link: ""
                },
                {
                    area: "南部",
                    region: "高雄",
                    name: "日常的書法藝術 —— 李根政的書法課",
                    location: "日閱書局（高雄市苓雅區義勇路46號二樓）",
                    time: "6/5 (五) 19:00-21:00",
                    link: ""
                },
                {
                    area: "中部",
                    region: "台中",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》新書分享會",
                    location: "街仔尾冊店（台中梧棲區民生街91巷4號）",
                    time: "6/27 (六) 13:30-15:30",
                    link: ""
                },
                {
                    area: "北部",
                    region: "桃園",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》",
                    location: "桃園苔蘚視角（桃園市平鎮區金陵路280號）",
                    time: "7/4 (六) 14:00-16:00",
                    link: ""
                },
                {
                    area: "東部",
                    region: "花蓮",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》",
                    location: "孩好書屋（花蓮縣花蓮市中山路71號(花蓮鐵道文化園區一館典藏室)）",
                    time: "7/10 (五) 19:00-21:00",
                    link: ""
                },
                {
                    area: "東部",
                    region: "台東",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》新書分享會",
                    location: "都蘭地下書店（臺東縣東河鄉112號B1）",
                    time: "7/11 (六) 14:00-16:00",
                    link: ""
                },
                {
                    area: "中部",
                    region: "南投",
                    name: "《此岸與彼岸 —— 一個社會運動者的身心之旅》新書分享會",
                    location: "文巢獨立書店（南投市民族路322巷19號）",
                    time: "6/7 (日) 10:00-12:00",
                    link: ""
                },
                {
                    area: "南部",
                    region: "台南",
                    name: "藝術、環境運動與金門味蚵仔煎--《此岸到彼岸-一個社會運動者的身心之旅》",
                    location: "台南新化社大（新化國中｜臺南市新化區中興路722號）",
                    time: "4/28 (二) 18:00-21:00",
                    link: ""
                },

            ];

            // 取得今日日期（不含時間）
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const currentYear = today.getFullYear();

            // 為每個活動解析日期並標記未來或過去
            eventData.forEach(event => {
                const match = event.time.match(/(\d{1,2})\/(\d{1,2})/);
                if (match) {
                    const month = parseInt(match[1], 10);
                    const date = parseInt(match[2], 10);
                    const eventDate = new Date(currentYear, month - 1, date);
                    event.parsedDateObj = eventDate;
                    event.isFuture = eventDate >= today;
                } else {
                    // 若無符合的日期格式，視為過去且放到最後
                    event.parsedDateObj = new Date(0);
                    event.isFuture = false;
                }
            });

            // 進行排序
            eventData.sort((a, b) => {
                // 1. 未來的排在前面，過去的排在後面
                if (a.isFuture && !b.isFuture) return -1;
                if (!a.isFuture && b.isFuture) return 1;

                // 2. 若都是未來：時間越近（日期較小）越前面
                if (a.isFuture && b.isFuture) {
                    return a.parsedDateObj - b.parsedDateObj;
                }

                // 3. 若都是過去：時間越近（日期較大）越前面
                if (!a.isFuture && !b.isFuture) {
                    return b.parsedDateObj - a.parsedDateObj;
                }

                return 0;
            });

            function renderEvents(filterArea = "all") {
                const filteredData = filterArea === "all"
                    ? eventData
                    : eventData.filter(event => event.area === filterArea);

                const eventHtml = filteredData.map(event => {
                    const isClickable = event.link && event.link !== "#";
                    const titleTag = isClickable
                        ? `<a href="${event.link}" class="event-name" target="_blank">${event.name}</a>`
                        : `<span class="event-name unclickable">${event.name}</span>`;

                    return `
                <div class="event-item">
                    ${event.region ? `<span class="event-region">${event.region}</span>` : ''}
                    ${titleTag}
                    <p class="event-location">${event.location}</p>
                    <p class="event-time">${event.time}</p>
                    ${event.speaker ? `<p class="event-speaker">${event.speaker}</p>` : ''}
                </div>
                    `;
                }).join('');

                if (filteredData.length === 0) {
                    eventContainer.innerHTML = '<p class="text-center w-100 mt-3" style="color: #666;">目前該地區尚無活動</p>';
                } else {
                    eventContainer.innerHTML = eventHtml;
                }
            }

            // 初始渲染
            renderEvents("all");

            // 標籤點擊事件
            if (eventTabsContainer) {
                eventTabsContainer.addEventListener("click", (e) => {
                    if (e.target.tagName === "BUTTON") {
                        // 移除所有 active
                        eventTabsContainer.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
                        // 加入當前 active
                        e.target.classList.add("active");
                        // 重新渲染
                        const area = e.target.getAttribute("data-area");
                        renderEvents(area);
                    }
                });
            }
        }
    }

    // 確保 DOM 準備好才執行
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
