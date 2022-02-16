import React, { useState, useEffect } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

const RuminationArticle = (props) => {
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem("likes")) || 0
  );
  function handleLikeClick() {
    setLikes((prevLikes) => prevLikes + 1);
  }
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);
  return (
    <main className={props.darkMode ? "darkContent" : "lightContent"}>
      <div>
        <img
          src="https://i.imgur.com/OAEhsFy.jpg"
          alt="galata-tower"
          className="istanbul-pic article-pic"
        />
        <h2 className="article-title">
          【有感而發】五件希望我當初交換就知道的事情
        </h2>
        <div className="DB-center">
          <div className="summary-container">
            <div className={props.darkMode ? "darkDate" : "lightDate"}>
              <div className="date-summary">
                &nbsp;
                <IoTimeOutline className="total-icons" />
                &nbsp;2022/01/15（六）
              </div>
            </div>
          </div>
          <br></br>
          <p>回首過往，我常會百思不解當時的自己到底在想什麼，十分愚昧無知。</p>
          <p>
            有時光機的話，真的是會回到過去
            <strike>給自己賞兩個耳光！（誤</strike>
          </p>
          <br></br>
          <p>
            如果你看完這五點建議，心想：「這不是基本常識嗎？」，那不妨就當笑話看一看～笑一笑原來真有人這麼蠢😭（能讓你心情愉悅，也算功德一件吧XDD
          </p>
          <p>
            若你是未來幾屆交換的學弟妹，在交換前有著相同困擾或疑問的話，那也許你想要認真地看下去！
          </p>
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <h3>釐清自己出國交換的目的，莫忘初衷！</h3>
          <p>
            還記得當初申請學校交換計畫的時候，40%
            的佔比就是研究計畫，其中一部分要陳述「交換動機」！
          </p>
          <p>
            當時就是絞盡腦汁的瞎掰
            XDDD，懷抱什麼遠大的理想抱負，總之要把交換動機寫得感人肺腑、驚天動地，根本沒去認真思考為何而交換。
          </p>
          <p>現在著實在交換了，回頭一想，才真真正正明瞭學校的用意。</p>
          <br />
          <p>
            關於交換的期許，我在「交換前」與「交換期間」這兩個階段有著截然不同的想法。
          </p>
          <p>
            交換前，我問了幾位前實習同事/主管他們當時的交換經驗，多數人都建議我出來交換就是盡可能將體驗最大化，多嘗試台灣環境無法提供的體驗，與不同的文化與觀念碰撞，擴展自己的世界觀。
          </p>
          <p>
            我相當認同，當時也暗自盤算著學校課業可以放鬆一點，這可是我邁入社會前最後一段的歡樂學生時光，該玩該體驗得通通不可少！（握拳！）
          </p>
          <br />
          <p>
            殊不知來到伊斯坦堡，尤其開學之後，我就像某個開關被切換似的，瞬間進入認真向學的好學生模式XD
          </p>
          <br />
          <img src="https://i.imgur.com/pw9mV1R.jpg?3" alt="campus" />
          <br />
          <br />
          <p>原因有二：</p>
          <p>
            首先是我對所選的課相當感興趣，每一堂課都讓我很有收穫，也可能與學習動機或心態有關，讓我不自覺地更加積極，甚至會舉手發問、課後寫信跟老師討論他上課的內容，這些都是我在台灣不會做的事情
            <strike>（沈默寡言的學生一枚）</strike>
          </p>
          <br />
          <p>
            另一方面是我真的對寫程式非常有熱忱，我很享受用程式創造作品的感覺，默默期許第一份工作可以成為前端工程師，而我上的這些資管系的課，也讓我堅信此刻的勤學不懈在未來不會白費。
          </p>
          <br />
          <p>儘管有這麼強烈的動機在背後支撐我堅持下去，</p>
          <p>但也真的很難不受到其他外在變因而動搖。</p>
          <br />
          <p>尤其遇到朋友的邀約...</p>
          <br></br>
          <em>要不要明天晚上去看電影呀～</em>
          <br />
          <em>要不要週末一起去咖啡廳坐坐～</em>
          <br />
          <em>要不要來學校打羽球～</em>
          <br />
          <br />
          <p>
            學校方面，海峽大學也幫我們這些交換生安排一系列的活動，去看熱氣球、去滑雪、船上遊艇趴...
          </p>
          <br></br>
          <p>
            但事與願違，
            <strong>
              我的課業重到不行，小考/作業/專案/期中考/期末考幾乎是不間斷地無情轟炸
            </strong>
            <span class="text-small">
              （想知道伊斯坦堡海峽大學資管系在教什麼，可以看這篇～）
            </span>
          </p>
          <p>如果什麼活動都參加的話，那我勢必無法把學校課業顧好。</p>
          <p>內心經歷天人交戰，懷疑自己的聲音也從未停止過。</p>
          <br />
          <p>加上我跟我室友的交換動機南轅北轍。</p>
          <p>
            他交換的目的著重在體驗，因此課業和體驗的分配比重大概是 2 比
            8，可說是完全跟我相反XDD
          </p>
          <p>
            想像一個一直在家裡瘋狂讀書，一個一直往外探索城市。（真的不誇張🤣）
          </p>
          <br />
          <p>可能我們的行為太過極端，彼此常會被對方動搖。</p>
          <p>他會跟我說，我應該要像你一樣認真，將學生的本分顧好；</p>
          <p>
            我會跟他說，我應該要跟你一樣遊歷歐洲各國，交換歲月不能重來啊！書可以以後再念！
          </p>
          <br />
          <p>
            但我想強調的是「莫忘初衷」，不代表你完全不可以受到動搖，或是當自己心思恍惚不定時，就開始責罵自己意志不堅，而是盡量讓自己做的每一個決定都圍繞在自己的初心。
          </p>
          <br />
          <br />
          <p>最得不償失的是連初心都遺失了。</p>
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <h3>保持好奇心，積極學當地語言</h3>
          <p>回想我最認真學土語的時候不是在土耳其，而是來土耳其的前一個月。</p>
          <p>當時幾乎每天都花一小時玩 duolingo，甚至寫了好幾頁的筆記～</p>
          <p>
            多虧那一段時間的練習，讓我初到土耳其時，不至於太過衝擊。點餐時，可以認得菜單上的少量單字（雖然無可避免的還是有種我在看火星文的感覺哈哈哈）；可以進行簡單問候、道謝；當有人問我有沒有學過土語時，我也有些小小心得可以分享～
          </p>
          <br />
          <p>
            由於當地人普遍不說英文，所以真心建議如果學校土語課沒有跟你系上的課衝突（我就是因為衝堂😭），一定要去選！！
          </p>
          <p>
            加上當地語言的課程基本上都是外國學生選修，這也是一個認識其他交換生的好機會～
          </p>
          <br />
          <p>
            我自己認為有修課，就會多一個「外在動力」促使你每週至少騰出幾個小時的學習時間，課堂所學也可以讓你在日常生活中躬體力行。
          </p>
          <p>
            而像我做事這麼三分鐘熱度的人，沒有選到課....久而久之就荒廢土文的學習。
          </p>
          <br />
          <p>
            記得有一次我在 Migros 超市想買抽取式衛生紙，但東找西找就是沒看到。
          </p>
          <p>
            於是我一邊秀出 google
            搜尋圖片的結果，一邊用英文詢問超市店員，她隨後用土語講了一些話，當下的我只聽得一頭霧水。
          </p>
          <p>結果店員竟然跟我接二連三得道歉說她的英文不是很好。</p>
          <p>聽到這句話我心頭一揪，心裡吶喊....</p>
          <p>是我來到你們的國家，是我應該要把你們的語言學好啊！！！！（汗顏</p>
          <br />
          <p>從那次經驗開始，如果我要主動向當地人詢問某件事物。</p>
          <p>
            我都會盡可能先用 google
            翻譯，查好那個物品的土耳其文，然後把那句話默念幾次記下來，並嘗試親口向店員詢問。
          </p>
          <p>相信如果你能成功溝通，會非常有成就感！</p>
          <p>
            但倘若他們無法理解，也不用擔心～土耳其人普遍熱情友善，他們會盡可能地協助你
          </p>
          <br />
          <p>總結：</p>
          <p>
            每天都會使用到的生活用語，學起來絕對有益無害，讓你能更好地和當地人創造連結與交流。
          </p>
          <p>數字、點餐、問候、常見食物的用詞至少要知道～</p>
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <h3>帶美金＋信用卡＋金融卡（記得開通跨國提款功能）</h3>
          <p>以下真的是我的切身之痛痛痛痛痛。</p>
          <br />
          <p>當時我在猶豫是否要帶「美金」還是「金融卡」。</p>
          <p>但考量現金遺失風險較大，稍有意外恐將承擔不起。</p>
          <p>
            沒考量信用卡則是因為我沒有薪資證明，父母也已退休無收入，加上我以為土耳其刷信用卡沒有很普遍
            <strike>（我真的是太白癡了）</strike>
          </p>
          <p>總之，我就自以為聰明的以少量美金和一張「金融卡」打天下 XDDD</p>
          <br />
          <b>簽帳金融卡</b>
          <br />
          <p>
            殊不知到了伊斯坦堡，當我嘗試用當地 ATM
            提里拉出來，才驚覺原來要付手續費給當地銀行，這跟我當時在網路上查到的免手續費資訊不同。
          </p>
          <p>而且每筆手續費竟高達 5%！</p>
          <p>
            我本知台灣銀行會收取一些國外提款的手續費，以中信為例，70元 +
            提款金額(即折算新臺幣之金額)之 1.5% / 筆。
          </p>
          <p>但還要付給當地銀行 5% 手續費真的是太出乎意料的高了。</p>
          <p>無奈我也無計可施，就這樣當個被宰的羔羊。</p>
          <br />
          <p>
            直到後來，我才想到可以直接 google
            查詢「當地銀行的官方網站」，因為每間銀行收取的手續費皆不盡相同。
          </p>
          <p>
            最後，也讓我順利找到收取 2.5 %
            手續費的一間銀行，雖然還是不低，但已經很感激了～
          </p>
          <br />
          <b>換匯</b>
          <p>
            好在我室友真的是給力到不行，他帶了足夠多的美金，所以後期我就直接跟他買～（跪謝）
          </p>
          <p>
            土耳其當地的換匯所，不論你拿多少美金（10美金、50美金或100美金），他都會給你相同的匯率。
          </p>
          <br />
          <p>至於該到哪個地方換匯較為划算，這真的就需要到當地多方比較～</p>
          <p>
            當時有在網上查到一篇部落格分享某家換匯所匯率極好，結果真的到了當地，才發現這匯率也太差....
          </p>
          <br />
          <p>此外，除了到換匯所，其實也可以直接走進「銀行」去換匯。</p>
          <p>我就有遇過銀行給的匯率比那間銀行對街的換匯所匯率還好的情況～</p>
          <br />
          <p>總結</p>
          <b>
            建議在台灣先換好一筆美金或歐元，也辦一張海外回饋高的信用卡，同時開通金融卡在國外提款的功能，以備不時之需！
          </b>
          <p>
            至於美金要準備多少，考量當地付房租往往需要付現！除非你有辦法在當地開戶可以直接轉帳給房東，或是房東有刷卡機（應該是不可能啦
            XD）～不然至少準備足夠支付你在國外房租的美金。
          </p>
          <br />
          <p>
            切記！不要一次梭哈全部換完，尤其如果你是在一個經濟狀況不穩定的國家
          </p>
          <p>
            我在土耳其交換短短四個月期間，美元比里拉的匯率曾最高飆到
            18.3；最低到 8.8
          </p>
          <p>可以分散風險，一次換一些，反正當地換匯完全不收取收續費～</p>
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <h3>租屋前，至少提出十個問題再租屋！</h3>
          <p>
            手指頭給我拿出來數一數！<strike>（這句話是對我自己說的）</strike>
          </p>
          <br />
          <p>來土耳其前，我從來沒有租過房子的經驗....</p>
          <p>當時腦中簡單想像大概就是那些事情，應該沒什麼好擔心的吧～</p>
          <p>結果最後出了超多包XDD</p>
          <br />
          <b>第一個月：租 Airbnb</b>
          <p>
            當時看上一間租屋，資訊欄位寫到有兩間單人房，屋主提供的房子照片看起來很乾淨整潔，地點離學校近且交通方便。
          </p>
          <p>結果，預訂後才赫然發現.....</p>
          <p>
            屋主在網路上提供的地址跟實際地址大相徑庭，說是有兩間單人房，但其中一間是他自己要住的，卻沒有任何註明。
          </p>
          <p>當時發現的時機太晚，錢已經匯出，也無法退款。</p>
          <p>由於只有一間空房，最後就和室友輪流睡兩個禮拜的沙發😭</p>
          <br />
          <p>這不是我第一次訂 Airbnb，但倒是我第一次遇到如此不誠實的屋主</p>
          <p>
            現在想想，覺得當時應該捍衛自己權益，相信 Airbnb
            也有針對特殊案例的退款機制。
          </p>
          <p>
            也怪自己太粗枝大葉，單單相信屋主的一言堂，沒有事先一一確認這些資訊。
          </p>
          <br />
          <b>第二～四個月：租土耳其朋友的公寓</b>
          <br />
          <br />
          <img src="https://i.imgur.com/tSK5rxv.jpg?2" alt="apartment" />
          <br />
          <br />
          <p>公寓大約 40 坪，和室友兩人共用廚房和浴室，並有各自的房間</p>
          <p>
            這間公寓相較上間寬敞許多，價位幾乎是 Airbnb 的
            1/3，且周圍生活機能佳。
          </p>
          <br />
          <p>不過，入住時還是遇到一個小插曲～</p>
          <p>由於房東忘記幫我們開瓦斯，入住才發現沒有熱水可以洗澡。</p>
          <p>好巧不巧發現的那一天正逢土耳其國慶日，接連放了三天假期....</p>
          <p>好在房東也很豪爽，直接把我和我室友接回他們家住了三天～</p>
          <br />
          <p>
            根據這些經驗，我列了以下十點在租屋前必須仔細確認的清單！
            （真的很廢話，我完全就是一位租屋的菜鳥...）
          </p>
          <br />
          <ul className="text-bullet">
            <li>確認有無熱水（浴室蓮蓬頭是否正常運作）</li>
            <li>確認供電是否正常</li>
            <li>確認 wifi 網路訊號</li>
            <li>房租費用是否包水電、瓦斯</li>
            <li>是否有額外費用（例如大樓管理費＆暖氣費）</li>
            <li>是否有附傢俱</li>
            <li>是否有清潔工具</li>
            <li>索取足夠的房屋鑰匙（至少要和室友一人一把）</li>
            <li>洗衣機使用方式</li>
            <li>考量周圍環境與生活機能（去超市＆捷運站的距離）</li>
          </ul>
          <br />
          <p>
            到現場看屋時，千萬別聽屋主口頭表示有 wifi
            就拍拍屁股走人，把手機平板電腦拿出來，立馬連一下，確認沒有問題再說（不是說不相信屋主，而是有時候真的連屋主自己都忘記了！）
          </p>
          <p>
            並建議走到自己房間，確認訊號有沒有因此減弱。我一開始就是遇到在房間網路訊號不好，導致線上上課一直中斷的情況
          </p>
          <p>
            另外，國外洗衣機真的跟台灣很不一樣，要記得請屋主實際操作一次洗衣機的使用方式，詢問深色和淺色衣服是否要分開洗？
          </p>
          <p>
            看房那一天臨走前，記得再補問一句房東，有什麼事情是我們需要知道的嗎？
          </p>
          <br />
          <p>
            我覺得我好像在說廢話，但我當初真的都沒做（欠揍），後來發現問題，才去尋求幫助，但遠水救不了近火，只能和屋主一來一往用通訊軟體溝通，想當然問題都無法即刻解決。
          </p>
          <br />
          <p>總結：</p>
          <p>
            在伊斯坦堡的租房管道，基本上不是透過 airbnb 就是 facebook
            社團（除非你是住學校宿舍，但海峽大學宿舍不便宜，可以自行斟酌）
          </p>
          <p>
            由於土耳其里拉匯率極其不穩，加上每個月的暖氣費用不一（越冷暖氣費越貴）
          </p>
          <p>
            大致估算，我們每個月的租金約落在台幣一萬元上下，一人大概 5000
            台幣～提供給學弟妹參考
          </p>
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <h3>別擔心交不到朋友，但準備好會被問爆這些問題...</h3>
          <p>
            出發前，我最慌恐的就是怕交不到朋友（我知道認識我的人看到這只想翻我白眼XD）
          </p>
          <br />
          <p>
            實際來到這邊後，才發現海峽大學大概是以「兩週一趴踢；四週一小旅；八週一大旅」的頻率替國際生安排活動，這個密集程度根本高到逼人患上
            FOMO。
          </p>
          <p>
            此外，土耳其人都超級熱情，會約你下課後跟他們去吃午餐，課業上有疑慮都很樂意提供協助～
          </p>
          <br />
          <img
            src="https://i.imgur.com/hHniLRl.jpg?1"
            alt="new-year-photo"
          ></img>
          <br />
          <br />
          <p>而不管是本地人或是其他國家的交換生，都會很好奇你來自的國家～</p>
          <p>
            而身為一位在異鄉的交換生，就像是台灣的小小外交官，代表外國人對台灣的印象！
          </p>
          <p>
            所以真心建議，像是「台灣的食物、文化歷史、中國與台灣的關係XDD、為什麼想來土耳其」等等很容易會被問爆的問題，都可以花點心思準備～（有些人可能天生口才就很好，但如果你跟我一樣和陌生人講話常常會口吃、不知所措的話，真的可以先打個草稿ㄛ）
          </p>
          <br />
          <img src="https://i.imgur.com/wM0VyRU.jpg?1" alt="new-year" />
          <br />
          <div className="devider">
            <BsDot className="dot" />
            <BsDot className="dot" />
            <BsDot className="dot" />
          </div>
          <h3>後記</h3>
          <p>轉眼間，在伊斯坦堡的交換之旅已悄然結束。</p>
          <br />
          <p>不敢說自己成長蛻變了多少，僅敢說自己變得更加圓潤、有韌性。</p>
          <p>學會身在崎嶇難行的谷底，泰然接受生命遭遇的挫折與失落。</p>
          <p>學會身在晴空萬里的山峰，安然享受生命賦予的禮物與祝福。</p>
          <br />
          <p>很慶幸也很感激自己能在踏入社會前有這樣一段旅程</p>
          <p>
            也即將迎來人生下一個階段，就要面對現實找工作啦（抖）....fingers
            crossed for me
          </p>
          <br />
          <div className="like-button">
            <AiOutlineLike onClick={handleLikeClick} className="like-icon" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RuminationArticle;
