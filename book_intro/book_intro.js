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
        if (eventContainer) {
            const eventData = [
                {
                    name: "新書分享會——高雄場",
                    location: "地球公民基金會高雄總部（高雄市前金區中華四路282號5樓）",
                    time: "3/07（六）14:30-16:30",
                    link: "https://www.cet-taiwan.org/events/4798?utm_source=event&utm_campaign=general&utm_content=20260210_kh_page",
                    speaker: "與談：南方運動夥伴"
                },
                {
                    name: "募款專案限定—根政煮飯給你吃－煮一道家常料理",
                    location: "地球公民高雄總部（高雄市前金區中華四路282號5樓）",
                    time: "3/08（日）14:30-16:30",
                    link: "https://www.cet-taiwan.org/events/4791"
                },
                {
                    name: "新書分享會——台北場",
                    location: "紀州庵文學森林（臺北市中正區同安街107號）",
                    time: "3/14（六）19:00-21:00",
                    link: "https://www.cet-taiwan.org/events/4799?utm_source=event&utm_campaign=general&utm_content=20260210_tp_IG",
                    speaker: "與談：陳信聰｜華視新媒體部經理、前公視有話好說製作人及主持人"
                },
                {
                    name: "募款專案限定—根政寫字給你看！書法筆下的運動軌跡",
                    location: "地球公民台北辦公室（臺北市中正區北平東路28號9F-2）",
                    time: "3/12（四）19:00-21:00",
                    link: "https://www.cet-taiwan.org/events/4791"
                },
                {
                    name: "藝術家也能從事社會運動嗎？《此岸與彼岸－一個社會運動者的身心之旅》新書發表會",
                    location: "台北世界貿易中心展覽一館 C728 讀字公民區（台北市信義區信義路五段5號）",
                    time: "2/08（日）11:00-12:00",
                    link: "https://www.cet-taiwan.org/events/4782"
                },
                {
                    name: "「作家x倡議工作者」雙重身分的跨世代對談",
                    location: "現場＋直播｜台北世界貿易中心展覽一館 A1203 直播室（台北市信義區信義路五段5號）",
                    time: "2/08（日）15:00-15:30",
                    link: "https://www.cet-taiwan.org/events/4783",
                    speaker: "與談：許恩恩｜作家"
                }
            ];
            const eventHtml = eventData.map(event => `
                <div class="event-item">
                    <a href="${event.link}" class="event-name" target="_blank">${event.name}</a>
                    <p class="event-location">${event.location}</p>
                    <p class="event-time">${event.time}</p>
                    ${event.speaker ? `<p class="event-speaker">${event.speaker}</p>` : ''}
                </div>
            `).join('');
            eventContainer.innerHTML = eventHtml;
        }
    }

    // 確保 DOM 準備好才執行
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
