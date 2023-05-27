import { createContext, useContext } from "react";
import aqua from '../../movies/aqua.jpg';
import avengers from '../../movies/avengers.jpg';
import monkey from '../../movies/super.jpg';
import fast from '../../movies/fast.jpg';
import matrix from '../../movies/matrix.jpg';
import angry from '../../movies/angry.jpg';

const InfoContext = createContext({
    getIntro: () => {},
    getTime: () => {},
    getAllMovies: () => {},
    getSeat: () => {},
    getReservers: () => {},
})

const useInfo = () => useContext(InfoContext)

const InfoProvider = (props) => {
    const getReservers = () => {
        const array = [
            {
                title: "水行俠",
                movie_starttime: new Date(2023, 5, 21, 20, 30, 0),
                seats: [100, 15, 16, 17],
                cinema: 10,
            },
            {
                title: "憤怒鳥玩電影",
                movie_starttime: new Date(2023, 5, 22, 12, 30, 0),
                seats: [29, 23, 17],
                cinema: 3,
            },
            {
                title: "復仇者聯盟：終局之戰",
                movie_starttime: new Date(2023, 5, 24, 17, 0, 0),
                seats: [93, 19, 25, 78],
                cinema: 8,
            },
            {
                title: "西遊記之大聖歸來",
                movie_starttime: new Date(2023, 5, 26, 13, 30, 0),
                seats: [34, 15, 78, 17],
                cinema: 5,
            },
            {
                title: "水行俠",
                movie_starttime: new Date(2023, 5, 21, 13, 30, 0),
                seats: [54, 78, 13, 17],
                cinema: 3,
            },
            {
                title: "復仇者聯盟：終局之戰",
                movie_starttime: new Date(2023, 5, 16, 12, 30, 0),
                seats: [100, 15, 16, 17],
                cinema: 8,
            },
            {
                title: "水行俠",
                movie_starttime: new Date(2023, 5, 21, 20, 30, 0),
                seats: [100, 15, 16, 17],
                cinema: 10,
            },
            {
                title: "憤怒鳥玩電影",
                movie_starttime: new Date(2023, 5, 22, 12, 30, 0),
                seats: [29, 23, 28, 17],
                cinema: 3,
            },
            {
                title: "復仇者聯盟：終局之戰",
                movie_starttime: new Date(2023, 5, 24, 17, 0, 0),
                seats: [93, 19, 25, 78],
                cinema: 8,
            },
            {
                title: "西遊記之大聖歸來",
                movie_starttime: new Date(2023, 5, 26, 13, 30, 0),
                seats: [34, 15, 78, 17],
                cinema: 5,
            },
            {
                title: "水行俠",
                movie_starttime: new Date(2023, 5, 21, 13, 30, 0),
                seats: [54, 78, 13, 17],
                cinema: 3,
            },
            {
                title: "復仇者聯盟：終局之戰",
                movie_starttime: new Date(2023, 5, 16, 12, 30, 0),
                seats: [100, 15, 16, 17],
                cinema: 8,
            },
            {
                title: "水行俠",
                movie_starttime: new Date(2023, 5, 21, 20, 30, 0),
                seats: [100, 15, 16, 17],
                cinema: 10,
            },
            {
                title: "憤怒鳥玩電影",
                movie_starttime: new Date(2023, 5, 22, 12, 30, 0),
                seats: [29, 23, 28, 17],
                cinema: 3,
            },
            {
                title: "復仇者聯盟：終局之戰",
                movie_starttime: new Date(2023, 5, 24, 17, 0, 0),
                seats: [93, 19, 25, 78],
                cinema: 8,
            },
            {
                title: "西遊記之大聖歸來",
                movie_starttime: new Date(2023, 5, 26, 13, 30, 0),
                seats: [34, 15, 78, 17],
                cinema: 5,
            },
            {
                title: "水行俠",
                movie_starttime: new Date(2023, 5, 21, 13, 30, 0),
                seats: [54, 78, 13, 17],
                cinema: 3,
            },
            {
                title: "復仇者聯盟：終局之戰",
                movie_starttime: new Date(2023, 5, 16, 12, 30, 0),
                seats: [100, 15, 16, 17],
                cinema: 8,
            },
            {
                title: "水行俠",
                movie_starttime: new Date(2023, 5, 21, 20, 30, 0),
                seats: [100, 15, 16, 17],
                cinema: 10,
            },
            {
                title: "憤怒鳥玩電影",
                movie_starttime: new Date(2023, 5, 22, 12, 30, 0),
                seats: [29, 23, 17],
                cinema: 3,
            },
            {
                title: "復仇者聯盟：終局之戰",
                movie_starttime: new Date(2023, 5, 24, 17, 0, 0),
                seats: [93, 19, 78],
                cinema: 8,
            },
            {
                title: "西遊記之大聖歸來",
                movie_starttime: new Date(2023, 5, 26, 13, 30, 0),
                seats: [34, 15, 78, 17],
                cinema: 5,
            },
            {
                title: "水行俠",
                movie_starttime: new Date(2023, 5, 21, 13, 30, 0),
                seats: [54, 78, 13, 17],
                cinema: 3,
            },
            {
                title: "復仇者聯盟：終局之戰",
                movie_starttime: new Date(2023, 5, 16, 12, 30, 0),
                seats: [100, 15, 16, 17, 23],
                cinema: 8,
            },
        ]
        return array
    }

    const getAllMovies = () => {
        // const {data: {}} = axios.get('/', {he})
        const array = [
            {movie_id: "aqua", pic_url: aqua}, 
            {movie_id: "avengers", pic_url: avengers}, 
            {movie_id: "monkey", pic_url: monkey}, 
            {movie_id: "fast", pic_url: fast}, 
            {movie_id: "matrix", pic_url: matrix},
            {movie_id: "angry", pic_url: angry},
        ]
        return array
    }

    const getIntro = (movie) => {
        switch (movie) {
            case "aqua":
                return {
                    title: "水行俠",
                    description: `DC最新動作冒險片《水行俠》由溫子仁執導，傑森摩莫亞領銜主演片名角色，會帶領觀眾跨越七個海底王國中浩瀚、視覺上令人屏息的水中世界。這部電影將揭露半人類、半亞特蘭提斯人亞瑟庫瑞（Arthur Curry傑森摩莫亞 飾） 的起源故事，跟隨他踏上他畢生的旅程，這不只會迫使他面對自己的出身，也會讓他發現自己有沒有資格登上他與生俱來的……國王寶座。

                    這部電影的主要卡司還包括安柏赫德（《正義聯盟》、《舞力麥克：尺度極限》）飾演梅拉（Mera），勇猛的女戰士和水行俠旅程中的盟友；奧斯卡獎提名男演員威廉達佛（《前進高棉》、《蜘蛛人2》）飾演瓦寇博士（Vulko），亞特蘭提斯王權的顧問；派屈克威爾森（《厲陰宅》電影系列、《守護者》）飾演奥姆／海洋領主（Orm/Ocean Master），亞特蘭提斯的現任國王；杜夫朗格（《浴血任務》電影系列）飾演涅羅斯王（Nereus），亞特蘭提斯澤貝爾（Xebel）部族的國王；葉海亞阿巴杜馬汀二世（Netflix音樂影集《布朗克斯：街頭少年音樂夢》）飾演充滿復仇心的黑蝠鱝（Black Manta）；以及奧斯卡獎影后妮可基嫚（《時時刻刻》、《漫漫回家路》）飾演亞瑟的母親亞特蘭娜女王（Atlanna）；還有林路迪（《金剛戰士》）飾演莫克隊長（Captain Murk），亞特蘭提斯的突擊隊員；以及泰姆拉莫里森（《星際大戰二部曲：複製人全面進攻》、《綠光戰警隊》）飾演亞瑟的父親湯姆庫瑞（Tom Curry）。
                    
                    編劇是大衛雷斯里強森麥高德瑞克（《厲陰宅2》）和威爾貝爾（《風雲男人幫》、電視影集《震撼教育》），故事來自傑夫強斯與溫子仁和威爾貝爾，改編自DC漫畫的人物，水行俠角色是由保羅諾里斯（Paul Norris）和摩特魏辛格（Mort Weisinger）創造。製片人是彼得沙弗蘭和羅布考恩，監製是黛博拉史耐德、查克史耐德、瓊柏格、傑夫強斯和濱田華特。
                    
                    幕後創意團隊方面，溫子仁找來他的老班底，包括奧斯卡獎提名的攝影指導唐伯吉斯（《厲陰宅2》、《阿甘正傳》）；跟他五度合作的剪接師寇克莫瑞（《厲陰宅》電影系列、《玩命關頭7》、《陰兒房》電影系列）；以及製作設計比爾布雷斯基（《玩命關頭7》）。這次還加入服裝設計凱姆巴雷特（《駭客任務》三部曲、《蜘蛛人：驚奇再起》）；以及配樂家魯柏葛雷森威廉斯（《神力女超人》）。`,
                    pic_url: aqua,
                }
            case "avengers":
                return {
                    title: "復仇者聯盟：終局之戰",
                    description: `《復仇者聯盟：終局之戰》大結局中，分別代表聯盟中兩大力量的主角都離開了，鋼鐵人光榮犧牲，美國隊長交棒給獵鷹。儘管昔日聯盟中很多超級英雄依然活在地球上，或是像驚奇隊長那樣還在宇宙中各自打拼，但就在態勢如此四分五裂時，漫威宣布啟動兩部《復仇者聯盟》續集《Kang Dynasty 》和《Secret Wars》，場子撐的起來嗎？又有那些超級英雄會雀屏中選出演呢？

                    首先，就像我們在《雷神索爾：愛與雷霆》中看到的，雷神索爾自己要忙於保護新的阿斯加德星球來抵抗屠神者戈爾的來擊，又比如超級英雄們都不記得彼得·帕克（《蜘蛛人：無家日》結尾，雖然英雄們記得蜘蛛人，但是奇異博士讓整個世界忘記「彼得帕克」真人地的存在）。但是，漫威宇宙第四階段倒是出現了一些令人興奮的新人。例如，《奇異博士2：失控的多重宇宙》中，能力強大的多重宇宙穿越者「美國小姐」（America Chavez），還有大師兄「王」Wong，；《黑豹2：瓦干達萬歲》中，Riri「鋼鐵心」則是個驚喜，還有接替死去黑豹的「黑豹妹舒莉」，這些無疑都是會是漫威宇宙第五階段力捧的英雄人物，他們的組合也無疑符合當前時代的種族與性別多元性。`,
                    pic_url: avengers,
                }
            case "fast":
                return {
                    title: "玩命關頭十",
                    description: `《玩命關頭》系列的第十部電影，唐老大（馮迪索 飾）這些年來曾經執行許多看似不可能的任務，他和他的家人遇到的每一個對手都比他們更聰明、更冷酷無情和更會飆車。現在，他們必須面對有史以來最致命的對手：一個從過去的陰影中冒出來的可怕威脅，他為了報仇雪恨下定決心要永遠摧毀這個家庭，以及唐老大所愛的每一個人和所有的一切。

                    唐老大和他的夥伴在2011年的《玩命關頭5》一片中，除掉了惡名昭彰的巴西大毒梟赫南芮斯，並且在里約熱內盧的一座橋上徹底瓦解他的販毒帝國。但是他們卻不知道芮斯的兒子但丁（《水行俠》傑森摩莫亞 飾）親眼目睹了那一切，而且在過去的12年之間精心策劃了一個復仇計畫，目的是要讓唐老大付出終極代價。
                    
                    但丁的復仇計畫會拆散唐老大的家人，有些人會從洛杉磯去到羅馬的地下墓穴，有些人會從巴西去到倫敦，有些人則會從葡萄牙去到南極。他們將會得到全新的盟友，以往的敵人也會一一出現，但是當唐老大發現他八歲大的兒子（影集《黑人當道》李歐艾伯羅派瑞 飾）才是但丁復仇計畫的真正目標，一切就從此改變。`,
                    pic_url: fast,
                }
            case "matrix":
                return {
                    title: "駭客任務",
                    description: `這是一部融合東方武術與西方電影特效的影片。導演拉娜華卓斯基與莉莉華卓斯基說：「我們想表達的概念是，現代人所相信的世界以及其中的一切，其實都是未來電腦所創造的。一旦你進入所謂的電腦虛擬實境，就可以發揮人類在各方面的極限，所以片中的人物只要接收足夠的資料，就能成為跟成龍一樣的功夫高手。

                    本片描述二十二世紀一名電腦代號為尼歐(基努李維飾演)的電腦駭客，他總是覺得世界一切都不對勁，但卻又說不出所以然來。常常在夢中、或電腦中都會有個聲音對他說話，讓他分不清真實與夢境的界限。直到他來到地下自由鬥士的組織，才真相大白。於是他和一群身懷絕技的鬥士，開始展開對抗控制全體人類的『電腦魔王』的使命……`,
                    pic_url: matrix,
                }
            case "monkey":
                return {
                    title: "西遊記之大聖歸來",
                    description: `《西遊記之大聖歸來》故事聚焦在大鬧天宮的五百年後，重新改編三藏與孫悟空的相遇。讓失親的小沙彌救了被壓在五行山下的孫悟空，儘管小沙彌的名字叫江流兒，但致敬《大話西遊》中聒噪愛問煩人唐僧的性格，足以讓人一看便知（官方設定上小沙彌為唐僧的前世）。

                    故事雖然簡單、通俗、結尾還有些灑狗血，但讓孫悟空失去法力、面對小沙彌崇拜卻又硬撐愛面子的設定不但有趣也讓齊天大聖有了血肉與人性，似乎也舖成了原著甚至未來續集中師徒二人的情感。（話說這動畫裡面有八戒、有白龍王，卻沒有沙悟淨，這些跡象可看出電影意欲開啟系列電影目的明顯）。
                    
                    影像上，大量的動態第一人稱鏡頭、一鏡到底的跟隨鏡頭，由遠到近的炫麗畫面，稱職地提供了3D電影該帶給觀眾的感官刺激。但讓人最人稱道的還是正反角色的造型設計與融合西方動畫的身體比例、中式畫風場景、日式風景素材，還有開場的港漫風格… 總的言之，這部動畫確實擁有了好萊塢技術架勢外表、但故事卻有著好萊塢所拍不出來的內裡細節，難怪它走路有風地在中國票房稱霸、並風光入圍金馬獎動畫項目了。只可惜中國若要運用影像來訴說一個完整的故事，其中還是有很多順場技術的工得去細細雕琢。`,
                    pic_url: monkey,
                }
            case "angry":
                return {
                    title: "憤怒鳥玩電影",
                    description: `電影將引領我們揭開這群與眾不同鳥為何會如此憤怒。在一座與世隔絕的美麗小島上，住著一群樂天知命的鳥，每天過著無憂無慮、與世無爭的生活。不過易怒的銳德(傑森蘇戴西斯 飾)、亢奮的恰克(喬許蓋德 飾)和容易爆炸的砰伯(丹尼麥克布萊德 飾)，他們三人總是因為各自的怪性格而不被其他的鳥接納，而必須去上情緒管理課程。 銳德是隻憤怒鳥。他和天底下最天真快樂的小鳥擠在島上；銳德覺得格格不入，其他小鳥無憂無慮的生活和銳德形成強烈的對比。恰克性格比較急躁，不僅動作快
                    ，說話速度也快，有時候比自己腦袋想的還快，但卻也讓他陷入一堆麻煩。砰伯有點黝黑笨重，但他卻有寬厚的胸襟，大絕大多數時候他都和藹可親，待人體貼，只不過他患有「間歇性暴怒障礙症」(IED)，只要碰到驚喜、受到驚嚇或感到憤怒，就會──砰！很容易就爆炸了。不過，當神秘綠豬造訪這座世外小島，只有這群怪咖願意挺身而出，調查這些神秘兮兮的外來客到底有何目的。`,
                    pic_url: angry,
                }
            default:
              return <div>Not Found!</div>; // 黑色（預設）
        }
    }

    const getTime = (movie) => {
        switch (movie) {
            case "aqua":
                return [
                    {
                        movie_starttime: new Date(2023, 5, 20, 10, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 20, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 20, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 11, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 9, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 11, 0, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 16, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 19, 30, 0)
                    },
                ]
            case "avengers":
                return [
                    {
                        movie_starttime: new Date(2023, 5, 20, 10, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 20, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 11, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 9, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 11, 0, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 16, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 19, 30, 0)
                    },
                ]
            case "fast":
                return [
                    {
                        movie_starttime: new Date(2023, 5, 20, 10, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 20, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 11, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 9, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 11, 0, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 16, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 19, 30, 0)
                    },
                ]
            case "matrix":
                return [
                    {
                        movie_starttime: new Date(2023, 5, 20, 10, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 20, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 20, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 11, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 9, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 11, 0, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 16, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 19, 30, 0)
                    },
                ]
            case "monkey":
                return [
                    {
                        movie_starttime: new Date(2023, 5, 20, 10, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 20, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 20, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 11, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 9, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 11, 0, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 16, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 26, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 26, 19, 30, 0)
                    },
                ]
            case "angry":
                return [
                    {
                        movie_starttime: new Date(2023, 5, 20, 10, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 20, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 20, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 22, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 21, 20, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 9, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 23, 15, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 24, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 18, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 22, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 25, 12, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 26, 17, 30, 0)
                    },
                    {
                        movie_starttime: new Date(2023, 5, 26, 19, 30, 0)
                    },
                ]
            default:
              return [];
        }
    }

    const getSeat = () => {
        return [1, 3, 5, 173, 188]
    }

    return (
        <InfoContext.Provider
            value={{
                getIntro,
                getTime,
                getAllMovies,
                getSeat,
                getReservers,
            }}
            {...props}
        />
    );
}

export { InfoProvider, useInfo }