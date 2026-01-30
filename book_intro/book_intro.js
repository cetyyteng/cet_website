/* 將上面整個templete插到#main的元素前面 */
(function () {
    function init() {
        const main = document.querySelector("#main");
        const tpl = document.querySelector("#tpl");
        const tplAfter = document.querySelector("#tpl-after"); // 獲取第二個模版
        //   if (!main) return;//正式請取消註解

        // 開發環境：直接將 template 內容添加到 body
        // 以下為開發環境代碼，正式環境請註解掉

        if (!main) {//測試用，實際請註解
            if (tpl) {
                const listContainer = tpl.content.querySelector("#recommend-list");
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
                        // 產生加上 -75 的 webp 檔名，對應伺服器上的壓縮版本
                        const imgWebp = person.img.replace(/\.png$/, '-75.webp');
                        const imgMobileWebp = person.imgMobile.replace(/\.png$/, '-75.webp');
                        return `
          <div class="col d-flex flex-column align-items-center justify-content-center">
          <div class="recommend-img-container">
          <picture>
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
                document.body.appendChild(tpl.content.cloneNode(true));
            }
            if (tplAfter) {
                // --- FAQ 內容填入（開發環境） ---
                const faqContainer = tplAfter.content.querySelector("#faq-list");
                if (faqContainer) {
                    const faqData = [

                        { id: 7, question: "何時會收到回饋禮？", content: "回饋禮（書、手寫春聯、小禮物）預計將於<strong>2/4 至 2/11</strong>一同寄送至您填寫的地址。若您要修改收件地址或有其他問題，請 email 或來電與我們聯繫。", isLast: false },
                        { id: 8, question: "是否可認捐兩份以上？", content: "歡迎您認捐兩份以上，請於捐款自填金額處填上「2466*份數」的金額並完成付款，我們會將同等份數寄給您（如多出部分有不足 2466 的餘數，將視為一般捐款）。<br />如有寄送不同地址，搭配手寫不同春聯款式或其他大量認捐需求，請於備註填寫，或 email、來電與我們聯繫。", isLast: false },
                        {
                            id: 9, question: "為何無法完成線上捐款？", content: "", listItems: [
                                "請檢查您在第一頁是否有完成 reCAPTCHA 驗證。",
                                "如您是用信用卡捐款，請檢查您的「卡片持有人姓名」是否輸入英文，或有其他禁止符號。建議手動填寫，不要使用瀏覽器自動帶入功能。",
                                "建議使用電腦瀏覽器完成捐款，或用手機上的內建瀏覽器，不要使用 FaceBook 或 Line 的內建瀏覽器。",
                                "如仍有問題，歡迎來電或來訊聯繫我們。"
                            ], isLast: false
                        },
                        { id: 1, question: "地球公民將捐款用於哪些環境專案？", content: "我們投入的環保工作範疇為山林國土、環境污染、能源轉型、永續花東、環境民主。藉由調查研究、揭露環境問題，提出解決方案，並據以進行政策施壓、國會遊說、教育推廣等，促成改變。", isLast: false },
                        { id: 2, question: "我如何知道地球公民基金會年度捐款使用明細？", content: "每年度的帳目皆送環境部備查後公開，可以在地球公民官網閱讀線上版<a class=\"green-a\" href=\"https://www.cet-taiwan.org/node/3155\" target=\"_blank\">財報 &amp; 徵信</a>，了解地球公民各項經費支出。<a class=\"green-a\" href=\"https://www.cet-taiwan.org/about/annualreport\" target=\"_blank\">線上年度報告</a>在隔年出刊，同時以紙本和電子報將摘要及連結寄予每位捐款會員。", isLast: false },
                        { id: 3, question: "地球公民的財務報告受到哪些單位的審核？", content: "依我國法令設立之財團法人地球公民基金會（以下簡稱本會），受董事會監督，董事會設董事 7 名，監事 2 名董監事成員均為義務性質，成員涵蓋各領域專業之人士，並具備獨立性。本會年度財務報表，皆先經由董監事會審核，並送主管機關環境部備查。據衛生福利部規定，公益勸募需每年申請募款字號，申請流程包括遞交勸募計畫書、由衛福部審核後核發募款字號。募款字號年度結束時，也需遞交報告。", isLast: false },
                        { id: 4, question: "捐款是否會有收據？", content: "您在進行捐款時請填寫正確地址，將會收到本會正式收據。可利用捐款收據作為抵扣所得稅額之用。", isLast: false },
                        { id: 5, question: "何時會收到捐款收據？", content: "單次捐款人會在捐款成功後，可以選擇捐款隔月收到捐款收據與相關資料或年度收到捐款收據。每月定期定額捐款人則於每年報稅月前，寄發上一年度全年的捐款總額證明，收據可作為抵扣稅額使用，亦明列個人全年度捐款紀錄。", isLast: false },
                        {
                            id: 6, question: "捐款會員如何了解會務與環境行動成果？", content: "地球公民有義務向捐款會員回報環境行動的進度、成果與財務報告，形式包括電子報、期刊或出版品等。", paragraphs: [
                                "．每年發表「<a class=\"green-a\" href=\"https://www.cet-taiwan.org/about/annualreport\" target=\"_blank\">年度報告</a>」，彙整當年度重大工作成果。",
                                "．不定期寄發「會員電子報」，報告最新的環境行動進度與參加管道，讓您掌握第一手消息。",
                                "．不定期發行電子期刊「地球公民通訊」專文解析環境專題，讓您深度了解環境議題。",
                                "．不定期舉辦「會員活動」，將以電子郵件、簡訊等管道與您聯繫。",
                                "．您也可以追蹤本會的 <a class=\"green-a\" href=\"https://www.facebook.com/CitizenoftheEarth\" target=\"_blank\">FB</a>、<a class=\"green-a\" href=\"https://www.instagram.com/cettw/\" target=\"_blank\">IG</a> 粉絲專頁，即時更新地球公民最新的倡議進度。"
                            ], isLast: true
                        }
                    ];
                    const faqHtmlContent = faqData.map(item => {
                        const itemClass = item.isLast ? "accordion-item mb-0" : "accordion-item";
                        let bodyContent = '';
                        if (item.content) {
                            bodyContent = `<p class="faq-w">${item.content}</p>`;
                        }
                        if (item.paragraphs) {
                            bodyContent += item.paragraphs.map(p => `<p class="faq-w">${p}</p>`).join('');
                        }
                        if (item.listItems) {
                            // id9 使用數字替代標號，不使用列表
                            if (item.id === 9) {
                                item.listItems.forEach((li, index) => {
                                    bodyContent += `<p class="faq-w">${index + 1}. ${li}</p>`;
                                    // 在第一、第二個項目後插入圖片
                                    if (index === 0) {
                                        bodyContent += `
                                             <div class="faq-img">
                                                 <picture>
                                                     <source
                                                         type="image/webp"
                                                         srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-10_0.webp"
                                                     />
                                                     <source
                                                         srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-10_0.png"
                                                     />
                                                     <img
                                                         src="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-10_0.png"
                                                         alt=""
                                                     />
                                                 </picture>
                                             </div>
                                         `;
                                    } else if (index === 1) {
                                        bodyContent += `
                                             <div class="faq-img">
                                                 <picture>
                                                     <source
                                                         type="image/webp"
                                                         srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-11.webp"
                                                     />
                                                     <source
                                                         srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-11.png"
                                                     />
                                                     <img
                                                         src="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-11.png"
                                                         alt=""
                                                     />
                                                 </picture>
                                             </div>
                                         `;
                                    }
                                });
                            } else {
                                // 其他項目使用原本的列表結構
                                const olItems = item.listItems.map((li, index) => {
                                    return `<li>${li}</li>`;
                                }).join("");
                                bodyContent += `<ol class="faq-w">${olItems}</ol>`;
                            }
                        }
                        return `
                      <div class="${itemClass}">
                          <h3 class="accordion-header" id="heading-${item.id}">
                              <button aria-controls="collapse-${item.id}" aria-expanded="false" class="collapsed p faq-w" data-bs-target="#collapse-${item.id}" data-bs-toggle="collapse" type="button">▼ ${item.question}</button>
                          </h3>
                          <div aria-labelledby="heading-${item.id}" class="accordion-collapse collapse" data-bs-parent="#faq-list" id="collapse-${item.id}">
                              <div class="accordion-body">${bodyContent}</div>
                          </div>
                      </div>
                  `;
                    }).join('');
                    faqContainer.innerHTML = faqHtmlContent;
                }
                document.body.appendChild(tplAfter.content.cloneNode(true));

                // 讓整個 accordion-item 可點擊（開發環境，使用事件委託）
                setTimeout(function () {
                    const faqList = document.querySelector('#faq-list');
                    if (faqList) {
                        faqList.addEventListener('click', function (e) {
                            const item = e.target.closest('.accordion-item');
                            const button = item && item.querySelector('button[data-bs-toggle="collapse"]');
                            if (item && button && e.target !== button && !button.contains(e.target)) {
                                button.click();
                            }
                        });
                    }
                }, 0);
            }
            if (tplAfter) {
                // --- FAQ 內容填入（開發環境） ---
                const faqContainer = tplAfter.content.querySelector("#faq-list");
                if (faqContainer) {
                    const faqData = [

                        { id: 7, question: "何時會收到回饋禮？", content: "回饋禮（書、手寫春聯、小禮物）預計將於<strong>2/4 至 2/11</strong>一同寄送至您填寫的地址。若您要修改收件地址或有其他問題，請 email 或來電與我們聯繫。", isLast: false },
                        { id: 8, question: "是否可認捐兩份以上？", content: "歡迎您認捐兩份以上，請於捐款自填金額處填上「2466*份數」的金額並完成付款，我們會將同等份數寄給您（如多出部分有不足 2466 的餘數，將視為一般捐款）。<br />如有寄送不同地址，搭配手寫不同春聯款式或其他大量認捐需求，請於備註填寫，或 email、來電與我們聯繫。", isLast: false },
                        {
                            id: 9, question: "為何無法完成線上捐款？", content: "", listItems: [
                                "請檢查您在第一頁是否有完成 reCAPTCHA 驗證。",
                                "如您是用信用卡捐款，請檢查您的「卡片持有人姓名」是否輸入英文，或有其他禁止符號。建議手動填寫，不要使用瀏覽器自動帶入功能。",
                                "建議使用電腦瀏覽器完成捐款，或用手機上的內建瀏覽器，不要使用 FaceBook 或 Line 的內建瀏覽器。",
                                "如仍有問題，歡迎來電或來訊聯繫我們。"
                            ], isLast: false
                        },
                        { id: 1, question: "地球公民將捐款用於哪些環境專案？", content: "我們投入的環保工作範疇為山林國土、環境污染、能源轉型、永續花東、環境民主。藉由調查研究、揭露環境問題，提出解決方案，並據以進行政策施壓、國會遊說、教育推廣等，促成改變。", isLast: false },
                        { id: 2, question: "我如何知道地球公民基金會年度捐款使用明細？", content: "每年度的帳目皆送環境部備查後公開，可以在地球公民官網閱讀線上版<a class=\"green-a\" href=\"https://www.cet-taiwan.org/node/3155\" target=\"_blank\">財報 &amp; 徵信</a>，了解地球公民各項經費支出。<a class=\"green-a\" href=\"https://www.cet-taiwan.org/about/annualreport\" target=\"_blank\">線上年度報告</a>在隔年出刊，同時以紙本和電子報將摘要及連結寄予每位捐款會員。", isLast: false },
                        { id: 3, question: "地球公民的財務報告受到哪些單位的審核？", content: "依我國法令設立之財團法人地球公民基金會（以下簡稱本會），受董事會監督，董事會設董事 7 名，監事 2 名董監事成員均為義務性質，成員涵蓋各領域專業之人士，並具備獨立性。本會年度財務報表，皆先經由董監事會審核，並送主管機關環境部備查。據衛生福利部規定，公益勸募需每年申請募款字號，申請流程包括遞交勸募計畫書、由衛福部審核後核發募款字號。募款字號年度結束時，也需遞交報告。", isLast: false },
                        { id: 4, question: "捐款是否會有收據？", content: "您在進行捐款時請填寫正確地址，將會收到本會正式收據。可利用捐款收據作為抵扣所得稅額之用。", isLast: false },
                        { id: 5, question: "何時會收到捐款收據？", content: "單次捐款人會在捐款成功後，可以選擇捐款隔月收到捐款收據與相關資料或年度收到捐款收據。每月定期定額捐款人則於每年報稅月前，寄發上一年度全年的捐款總額證明，收據可作為抵扣稅額使用，亦明列個人全年度捐款紀錄。", isLast: false },
                        {
                            id: 6, question: "捐款會員如何了解會務與環境行動成果？", content: "地球公民有義務向捐款會員回報環境行動的進度、成果與財務報告，形式包括電子報、期刊或出版品等。", paragraphs: [
                                "．每年發表「<a class=\"green-a\" href=\"https://www.cet-taiwan.org/about/annualreport\" target=\"_blank\">年度報告</a>」，彙整當年度重大工作成果。",
                                "．不定期寄發「會員電子報」，報告最新的環境行動進度與參加管道，讓您掌握第一手消息。",
                                "．不定期發行電子期刊「地球公民通訊」專文解析環境專題，讓您深度了解環境議題。",
                                "．不定期舉辦「會員活動」，將以電子郵件、簡訊等管道與您聯繫。",
                                "．您也可以追蹤本會的 <a class=\"green-a\" href=\"https://www.facebook.com/CitizenoftheEarth\" target=\"_blank\">FB</a>、<a class=\"green-a\" href=\"https://www.instagram.com/cettw/\" target=\"_blank\">IG</a> 粉絲專頁，即時更新地球公民最新的倡議進度。"
                            ], isLast: true
                        }
                    ];
                    const faqHtmlContent = faqData.map(item => {
                        const itemClass = item.isLast ? "accordion-item mb-0" : "accordion-item";
                        let bodyContent = '';
                        if (item.content) {
                            bodyContent = `<p class="faq-w">${item.content}</p>`;
                        }
                        if (item.paragraphs) {
                            bodyContent += item.paragraphs.map(p => `<p class="faq-w">${p}</p>`).join('');
                        }
                        if (item.listItems) {
                            // id9 使用數字替代標號，不使用列表
                            if (item.id === 9) {
                                item.listItems.forEach((li, index) => {
                                    bodyContent += `<p class="faq-w">${index + 1}. ${li}</p>`;
                                    // 在第一、第二個項目後插入圖片
                                    if (index === 0) {
                                        bodyContent += `
                                             <div class="faq-img">
                                                 <picture>
                                                     <source
                                                         type="image/webp"
                                                         srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-10_0.webp"
                                                     />
                                                     <source
                                                         srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-10_0.png"
                                                     />
                                                     <img
                                                         src="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-10_0.png"
                                                         alt=""
                                                     />
                                                 </picture>
                                             </div>
                                         `;
                                    } else if (index === 1) {
                                        bodyContent += `
                                             <div class="faq-img">
                                                 <picture>
                                                     <source
                                                         type="image/webp"
                                                         srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-11.webp"
                                                     />
                                                     <source
                                                         srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-11.png"
                                                     />
                                                     <img
                                                         src="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-11.png"
                                                         alt=""
                                                     />
                                                 </picture>
                                             </div>
                                         `;
                                    }
                                });
                            } else {
                                // 其他項目使用原本的列表結構
                                const olItems = item.listItems.map((li, index) => {
                                    return `<li>${li}</li>`;
                                }).join("");
                                bodyContent += `<ol class="faq-w">${olItems}</ol>`;
                            }
                        }
                        return `
                      <div class="${itemClass}">
                          <h3 class="accordion-header" id="heading-${item.id}">
                              <button aria-controls="collapse-${item.id}" aria-expanded="false" class="collapsed p faq-w" data-bs-target="#collapse-${item.id}" data-bs-toggle="collapse" type="button">▼ ${item.question}</button>
                          </h3>
                          <div aria-labelledby="heading-${item.id}" class="accordion-collapse collapse" data-bs-parent="#faq-list" id="collapse-${item.id}">
                              <div class="accordion-body">${bodyContent}</div>
                          </div>
                      </div>
                  `;
                    }).join('');
                    faqContainer.innerHTML = faqHtmlContent;
                }
                document.body.appendChild(tplAfter.content.cloneNode(true));

                // 讓整個 accordion-item 可點擊（開發環境，使用事件委託）
                setTimeout(function () {
                    const faqList = document.querySelector('#faq-list');
                    if (faqList) {
                        faqList.addEventListener('click', function (e) {
                            const item = e.target.closest('.accordion-item');
                            const button = item && item.querySelector('button[data-bs-toggle="collapse"]');
                            if (item && button && e.target !== button && !button.contains(e.target)) {
                                button.click();
                            }
                        });
                    }
                }, 0);
            }
            return;
        }

        // 開發環境：直接將 template 內容添加到 body
        // ==========================================
        // ▼▼▼ 修改位置：在此處加入網址檢查邏輯 ▼▼▼
        // ==========================================
        const params = new URLSearchParams(location.search);
        const isConfirm = params.get("_qf_Confirm_display") === "true" || params.get("_qf_Confirm_display") === "1";
        const isThankYou = params.get("_qf_ThankYou_display") === "1";
        const isErrorState = location.search === "";
        // 如果是確認頁或感謝頁，不插入模版，但要顯示 main
        if (isConfirm || isThankYou || isErrorState) {
            main.style.visibility = "visible";
            return; // 結束函式
        }
        if (tpl) {
            // --- 關鍵步驟 1：先在模版的「內容」裡尋找容器 ---
            // 注意！這裡是從 tpl.content 裡面找，而不是 document 裡面找
            const listContainer = tpl.content.querySelector("#recommend-list");
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
                    // 產生加上 -75 的 webp 檔名，對應伺服器上的壓縮版本
                    const imgWebp = person.img.replace(/\.png$/, '-75.webp');
                    const imgMobileWebp = person.imgMobile.replace(/\.png$/, '-75.webp');
                    return `
      <div class="col d-flex flex-column align-items-center justify-content-center">
        <div class="recommend-img-container">
          <picture>
            <source
              type="image/webp"
              srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/${imgMobileWebp} 150w, https://www.cet-taiwan.org/sites/cet-taiwan.org/files/${imgWebp} 225w"
              sizes="(max-width: 767.98px) 20vw, 10vw"
            />
            <source
              srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/${person.imgMobile} 150w, https://www.cet-taiwan.org/sites/cet-taiwan.org/files/${person.img} 225w"
              sizes="(max-width: 767.98px) 20vw, 10vw"
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
            // --- FAQ 內容填入 ---
            const faqContainer = tplAfter ? tplAfter.content.querySelector("#faq-list") : null;
            if (faqContainer) {
                const faqData = [
                    { id: 7, question: "何時會收到回饋禮？", content: "回饋禮（書、手寫春聯、小禮物）預計將於<strong>2/4 至 2/11</strong>一同寄送至您填寫的地址。若您要修改收件地址或有其他問題，請 email 或來電與我們聯繫。", isLast: false },
                    { id: 8, question: "是否可認捐兩份以上？", content: "歡迎您認捐兩份以上，請於捐款自填金額處填上「2466*份數」的金額並完成付款，我們會將同等份數寄給您（如多出部分有不足 2466 的餘數，將視為一般捐款）。<br />如有寄送不同地址，搭配手寫不同春聯款式或其他大量認捐需求，請於備註填寫，或 email、來電與我們聯繫。", isLast: false },
                    {
                        id: 9, question: "為何無法完成線上捐款？", content: "", listItems: [
                            "請檢查您在第一頁是否有完成 reCAPTCHA 驗證。",
                            "如您是用信用卡捐款，請檢查您的「卡片持有人姓名」是否輸入英文，或有其他禁止符號。建議手動填寫，不要使用瀏覽器自動帶入功能。",
                            "建議使用電腦瀏覽器完成捐款，或用手機上的內建瀏覽器，不要使用 FaceBook 或 Line 的內建瀏覽器。",
                            "如仍有問題，歡迎來電或來訊聯繫我們。"
                        ], isLast: false
                    },
                    { id: 1, question: "地球公民將捐款用於哪些環境專案？", content: "我們投入的環保工作範疇為山林國土、環境污染、能源轉型、永續花東、環境民主。藉由調查研究、揭露環境問題，提出解決方案，並據以進行政策施壓、國會遊說、教育推廣等，促成改變。", isLast: false },
                    { id: 2, question: "我如何知道地球公民基金會年度捐款使用明細？", content: "每年度的帳目皆送環境部備查後公開，可以在地球公民官網閱讀線上版<a class=\"green-a\" href=\"https://www.cet-taiwan.org/node/3155\" target=\"_blank\">財報 &amp; 徵信</a>，了解地球公民各項經費支出。<a class=\"green-a\" href=\"https://www.cet-taiwan.org/about/annualreport\" target=\"_blank\">線上年度報告</a>在隔年出刊，同時以紙本和電子報將摘要及連結寄予每位捐款會員。", isLast: false },
                    { id: 3, question: "地球公民的財務報告受到哪些單位的審核？", content: "依我國法令設立之財團法人地球公民基金會（以下簡稱本會），受董事會監督，董事會設董事 7 名，監事 2 名董監事成員均為義務性質，成員涵蓋各領域專業之人士，並具備獨立性。本會年度財務報表，皆先經由董監事會審核，並送主管機關環境部備查。據衛生福利部規定，公益勸募需每年申請募款字號，申請流程包括遞交勸募計畫書、由衛福部審核後核發募款字號。募款字號年度結束時，也需遞交報告。", isLast: false },
                    { id: 4, question: "捐款是否會有收據？", content: "您在進行捐款時請填寫正確地址，將會收到本會正式收據。可利用捐款收據作為抵扣所得稅額之用。", isLast: false },
                    { id: 5, question: "何時會收到捐款收據？", content: "單次捐款人會在捐款成功後，可以選擇捐款隔月收到捐款收據與相關資料或年度收到捐款收據。每月定期定額捐款人則於每年報稅月前，寄發上一年度全年的捐款總額證明，收據可作為抵扣稅額使用，亦明列個人全年度捐款紀錄。", isLast: false },
                    {
                        id: 6, question: "捐款會員如何了解會務與環境行動成果？", content: "地球公民有義務向捐款會員回報環境行動的進度、成果與財務報告，形式包括電子報、期刊或出版品等。", paragraphs: [
                            "．每年發表「<a class=\"green-a\" href=\"https://www.cet-taiwan.org/about/annualreport\" target=\"_blank\">年度報告</a>」，彙整當年度重大工作成果。",
                            "．不定期寄發「會員電子報」，報告最新的環境行動進度與參加管道，讓您掌握第一手消息。",
                            "．不定期發行電子期刊「地球公民通訊」專文解析環境專題，讓您深度了解環境議題。",
                            "．不定期舉辦「會員活動」，將以電子郵件、簡訊等管道與您聯繫。",
                            "．您也可以追蹤本會的 <a class=\"green-a\" href=\"https://www.facebook.com/CitizenoftheEarth\" target=\"_blank\">FB</a>、<a class=\"green-a\" href=\"https://www.instagram.com/cettw/\" target=\"_blank\">IG</a> 粉絲專頁，即時更新地球公民最新的倡議進度。"
                        ], isLast: true
                    }
                ];
                const faqHtmlContent = faqData.map(item => {
                    const itemClass = item.isLast ? "accordion-item mb-0" : "accordion-item";
                    let bodyContent = '';
                    if (item.content) {
                        bodyContent = `<p class="faq-w">${item.content}</p>`;
                    }
                    if (item.paragraphs) {
                        bodyContent += item.paragraphs.map(p => `<p class="faq-w">${p}</p>`).join('');
                    }
                    if (item.listItems) {
                        // id9 使用數字替代標號，不使用列表
                        if (item.id === 9) {
                            item.listItems.forEach((li, index) => {
                                bodyContent += `<p class="faq-w">${index + 1}. ${li}</p>`;
                                // 在第一、第二個項目後插入圖片
                                if (index === 0) {
                                    bodyContent += `
                                         <div class="faq-img">
                                             <picture>
                                                 <source
                                                     type="image/webp"
                                                     srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-10_0.webp"
                                                 />
                                                 <source
                                                     srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-10_0.png"
                                                 />
                                                 <img
                                                     src="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-10_0.png"
                                                     alt=""
                                                 />
                                             </picture>
                                         </div>
                                     `;
                                } else if (index === 1) {
                                    bodyContent += `
                                         <div class="faq-img">
                                             <picture>
                                                 <source
                                                     type="image/webp"
                                                     srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-11.webp"
                                                 />
                                                 <source
                                                     srcset="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-11.png"
                                                 />
                                                 <img
                                                     src="https://www.cet-taiwan.org/sites/cet-taiwan.org/files/u422/20260112-11.png"
                                                     alt=""
                                                 />
                                             </picture>
                                         </div>
                                     `;
                                }
                            });
                        } else {
                            // 其他項目使用原本的列表結構
                            const olItems = item.listItems.map((li, index) => {
                                return `<li>${li}</li>`;
                            }).join("");
                            bodyContent += `<ol class="faq-w">${olItems}</ol>`;
                        }
                    }
                    return `
                  <div class="${itemClass}">
                      <h3 class="accordion-header" id="heading-${item.id}">
                          <button aria-controls="collapse-${item.id}" aria-expanded="false" class="collapsed p faq-w" data-bs-target="#collapse-${item.id}" data-bs-toggle="collapse" type="button">▼ ${item.question}</button>
                      </h3>
                      <div aria-labelledby="heading-${item.id}" class="accordion-collapse collapse" data-bs-parent="#faq-list" id="collapse-${item.id}">
                          <div class="accordion-body">${bodyContent}</div>
                      </div>
                  </div>
              `;
                }).join('');
                faqContainer.innerHTML = faqHtmlContent;
            }
            // --- 關鍵步驟 2：搬運處理好的模版到畫面上 ---
            main.before(tpl.content);
        }
        // --- 處理第二個模版（插在後面） ---
        if (tplAfter) {
            //使用 after() 直接插在 #main 之後
            main.after(tplAfter.content);

            // 讓整個 accordion-item 可點擊（使用事件委託，只需一個監聽器）
            setTimeout(function () {
                const faqList = document.querySelector('#faq-list');
                if (faqList) {
                    faqList.addEventListener('click', function (e) {
                        const item = e.target.closest('.accordion-item');
                        const button = item && item.querySelector('button[data-bs-toggle="collapse"]');
                        if (item && button && e.target !== button && !button.contains(e.target)) {
                            button.click();
                        }
                    });
                }
            }, 0);
        }
        // 最後顯示 main 確保畫面流暢
        main.style.visibility = "visible";
        // 橘色標題格子 - 已在 HTML 中直接加上 span，不需要動態添加
    }
    // 確保瀏覽器環境準備好才執行
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();



