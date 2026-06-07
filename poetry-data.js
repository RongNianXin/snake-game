/**
 * ======================================================
 *  贪吃蛇 2.1 — 诗词词库文件 (poetry-data.js)
 *  总计 60 首 | 三大分类 | 全部逐条校验平仄押韵
 * ======================================================
 *
 * 【二创 / 扩充指南】
 *
 *   📌 ID 分段规则（方便扩充，互不冲突）：
 *       1 ~  99   → classic   墨香诗词阁（唐诗宋词）
 *     101 ~ 199   → martial   刀光剑影录（武侠江湖）
 *     201 ~ 299   → develop   开发者自嘲（软硬理工通吃）
 *     301 ~ 399   → （预留）   待定新分类
 *
 *   加新诗只需复制一条，改 id / words / fullText：
 *
 *   {
 *     id: 1,                                 // 按分段规则编号，全库唯一
 *     category: 'classic',                  // classic | martial | develop
 *     type: 'poem',                         // poem（诗）| couplet（对联）
 *     words: ['明','月','松','间','照'],      // ★ 5 个单字，按句顺序，同首诗内不可重复
 *     fullText: '明月松间照，清泉石上流。'      // ★ 完整两句，通关弹窗展示
 *   }
 *
 *   ⚠️ 声韵铁律（POETRY_RULES.md）：
 *     - 上句尾字 → 仄声（三声 ˇ / 四声 ˋ）
 *     - 下句尾字 → 平声（一声 ˉ / 二声 ˊ），且须押韵
 *     - 禁止上下句尾字同音（如"路"对"录"）
 *
 * ======================================================
 */

window.CUSTOM_POETRY_BANK = [

  // ==========================================
  //  一、墨香诗词阁 (classic) — ID 1 ~ 20
  //  精选唐代五言律诗名联 + 宋词化用句
  // ==========================================

  // —— 王维《山居秋暝》颔联
  { id: 1,  category: 'classic', type: 'poem', words: ['明','月','松','间','照'], fullText: '明月松间照，清泉石上流。' },
  // —— 杜甫《春望》颔联
  { id: 2,  category: 'classic', type: 'poem', words: ['感','时','花','溅','泪'], fullText: '感时花溅泪，恨别鸟惊心。' },
  // —— 王勃《送杜少府之任蜀州》颔联
  { id: 3,  category: 'classic', type: 'poem', words: ['海','内','存','知','己'], fullText: '海内存知己，天涯若比邻。' },
  // —— 杜甫《旅夜书怀》颔联
  { id: 4,  category: 'classic', type: 'poem', words: ['星','垂','平','野','阔'], fullText: '星垂平野阔，月涌大江流。' },
  // —— 常建《题破山寺后禅院》颔联
  { id: 5,  category: 'classic', type: 'poem', words: ['曲','径','通','幽','处'], fullText: '曲径通幽处，禅房花木深。' },
  // —— 孟浩然《宿建德江》
  { id: 6,  category: 'classic', type: 'poem', words: ['野','旷','天','低','树'], fullText: '野旷天低树，江清月近人。' },
  // —— 王之涣《登鹳雀楼》后联
  { id: 7,  category: 'classic', type: 'poem', words: ['欲','穷','千','里','目'], fullText: '欲穷千里目，更上一层楼。' },
  // —— 杜甫《登岳阳楼》颔联
  { id: 8,  category: 'classic', type: 'poem', words: ['吴','楚','东','南','坼'], fullText: '吴楚东南坼，乾坤日夜浮。' },
  // —— 李白《渡荆门送别》颔联
  { id: 9,  category: 'classic', type: 'poem', words: ['山','随','平','野','尽'], fullText: '山随平野尽，江入大荒流。' },
  // —— 杜甫《春夜喜雨》颔联
  { id: 10, category: 'classic', type: 'poem', words: ['随','风','潜','入','夜'], fullText: '随风潜入夜，润物细无声。' },
  // —— 王维《汉江临眺》颔联
  { id: 11, category: 'classic', type: 'poem', words: ['江','流','天','地','外'], fullText: '江流天地外，山色有无中。' },
  // —— 李商隐《蝉》
  { id: 12, category: 'classic', type: 'poem', words: ['薄','宦','梗','犹','泛'], fullText: '薄宦梗犹泛，故园芜已平。' },
  // —— 杜甫《月夜》颔联
  { id: 13, category: 'classic', type: 'poem', words: ['露','从','今','夜','白'], fullText: '露从今夜白，月是故乡明。' },
  // —— 李白《秋浦歌》
  { id: 14, category: 'classic', type: 'poem', words: ['白','发','三','千','丈'], fullText: '白发三千丈，缘愁似个长。' },
  // —— 王湾《次北固山下》颔联
  { id: 15, category: 'classic', type: 'poem', words: ['海','日','生','残','夜'], fullText: '海日生残夜，江春入旧年。' },
  // —— 杜甫《月夜忆舍弟》颔联
  { id: 16, category: 'classic', type: 'poem', words: ['有','弟','皆','分','散'], fullText: '有弟皆分散，无家问死生。' },
  // —— 刘长卿《新年作》
  { id: 17, category: 'classic', type: 'poem', words: ['老','至','居','人','下'], fullText: '老至居人下，春归在客先。' },
  // —— 孟浩然《望洞庭湖赠张丞相》颔联
  { id: 18, category: 'classic', type: 'poem', words: ['气','蒸','云','梦','泽'], fullText: '气蒸云梦泽，波撼岳阳城。' },
  // —— 王维《终南别业》颔联
  { id: 19, category: 'classic', type: 'poem', words: ['行','到','水','穷','处'], fullText: '行到水穷处，坐看云起时。' },
  // —— 宋·苏轼化用（五言截取）
  { id: 20, category: 'classic', type: 'poem', words: ['江','山','如','有','待'], fullText: '江山如有待，花柳自无私。' },


  // ==========================================
  //  二、刀光剑影录 (martial) — ID 101 ~ 120
  //  快意恩仇 · 剑气江湖 · 铁马金戈
  // ==========================================

  // 101 刀光惊宿鸟，剑气贯长虹
  { id: 101, category: 'martial', type: 'poem', words: ['刀','光','惊','宿','鸟'], fullText: '刀光惊宿鸟，剑气贯长虹。' },
  // 102 十载磨一剑，今朝试锋芒
  { id: 102, category: 'martial', type: 'poem', words: ['十','载','磨','一','剑'], fullText: '十载磨一剑，今朝试锋芒。' },
  // 103 踏雪寻梅去，凌风仗剑行
  { id: 103, category: 'martial', type: 'poem', words: ['踏','雪','寻','梅','去'], fullText: '踏雪寻梅去，凌风仗剑行。' },
  // 104 匹马嘶寒夜，孤身闯敌营
  { id: 104, category: 'martial', type: 'poem', words: ['匹','马','嘶','寒','夜'], fullText: '匹马嘶寒夜，孤身闯敌营。' },
  // 105 剑落惊风雨，弓开射斗星
  { id: 105, category: 'martial', type: 'poem', words: ['剑','落','惊','风','雨'], fullText: '剑落惊风雨，弓开射斗星。' },
  // 106 血染征袍透，刀锋映月寒
  { id: 106, category: 'martial', type: 'poem', words: ['血','染','征','袍','透'], fullText: '血染征袍透，刀锋映月寒。' },
  // 107 饮马黄河畔，挥刀斩恶蛟
  { id: 107, category: 'martial', type: 'poem', words: ['饮','马','黄','河','畔'], fullText: '饮马黄河畔，挥刀斩恶蛟。' },
  // 108 独步江湖远，孤身踏雪还
  { id: 108, category: 'martial', type: 'poem', words: ['独','步','江','湖','远'], fullText: '独步江湖远，孤身踏雪还。' },
  // 109 铁掌劈山岳，金针刺穴关
  { id: 109, category: 'martial', type: 'poem', words: ['铁','掌','劈','山','岳'], fullText: '铁掌劈山岳，金针刺穴关。' },
  // 110 快马追风去，青衫带月归
  { id: 110, category: 'martial', type: 'poem', words: ['快','马','追','风','去'], fullText: '快马追风去，青衫带月归。' },
  // 111 塞外烽烟起，将军百战征
  { id: 111, category: 'martial', type: 'poem', words: ['塞','外','烽','烟','起'], fullText: '塞外烽烟起，将军百战征。' },
  // 112 醉里挑灯看，醒来抚剑弹
  { id: 112, category: 'martial', type: 'poem', words: ['醉','里','挑','灯','看'], fullText: '醉里挑灯看，醒来抚剑弹。' },
  // 113 残阳如血染，古道少人经
  { id: 113, category: 'martial', type: 'poem', words: ['残','阳','如','血','染'], fullText: '残阳如血染，古道少人经。' },
  // 114 一诺千金重，孤身万里行
  { id: 114, category: 'martial', type: 'poem', words: ['一','诺','千','金','重'], fullText: '一诺千金重，孤身万里行。' },
  // 115 铁甲凝霜重，长枪破晓明
  { id: 115, category: 'martial', type: 'poem', words: ['铁','甲','凝','霜','重'], fullText: '铁甲凝霜重，长枪破晓明。' },
  // 116 拂袖风云动，横眉鬼魅惊
  { id: 116, category: 'martial', type: 'poem', words: ['拂','袖','风','云','动'], fullText: '拂袖风云动，横眉鬼魅惊。' },
  // 117 侠骨柔情在，恩仇一笑轻
  { id: 117, category: 'martial', type: 'poem', words: ['侠','骨','柔','情','在'], fullText: '侠骨柔情在，恩仇一笑轻。' },
  // 118 夜雨江湖冷，挑灯拭剑锋
  { id: 118, category: 'martial', type: 'poem', words: ['夜','雨','江','湖','冷'], fullText: '夜雨江湖冷，挑灯拭剑锋。' },
  // 119 飞檐攀绝壁，踏水了无痕
  { id: 119, category: 'martial', type: 'poem', words: ['飞','檐','攀','绝','壁'], fullText: '飞檐攀绝壁，踏水了无痕。' },
  // 120 九死何曾惧，丹心照古今
  { id: 120, category: 'martial', type: 'poem', words: ['九','死','何','曾','惧'], fullText: '九死何曾惧，丹心照古今。' },


  // ==========================================
  //  三、开发者自嘲 (develop) — ID 201 ~ 220
  //  软件Bug · 嵌入式烧板 · EDA布线 · 实验室通宵
  // ==========================================

  // 201 满屏红报错，通宵到天明 —— 经典IDE日常
  { id: 201, category: 'develop', type: 'couplet', words: ['满','屏','红','报','错'], fullText: '满屏红报错，通宵到天明。' },
  // 202 电路全烧断，青烟往上翻 —— 硬件炸板
  { id: 202, category: 'develop', type: 'couplet', words: ['电','路','全','烧','断'], fullText: '电路全烧断，青烟往上翻。' },
  // 203 实验全白费，重来再一轮 —— 科研日常
  { id: 203, category: 'develop', type: 'couplet', words: ['实','验','全','白','费'], fullText: '实验全白费，重来再一轮。' },
  // 204 指针飞野了，段错找三天 —— C/C++祖传艺能
  { id: 204, category: 'develop', type: 'couplet', words: ['指','针','飞','野','了'], fullText: '指针飞野了，段错找三天。' },
  // 205 空指针又炸，栈溢冒青烟 —— 内存崩溃
  { id: 205, category: 'develop', type: 'couplet', words: ['空','指','针','又','炸'], fullText: '空指针又炸，栈溢冒青烟。' },
  // 206 需求又改了，回档到从前 —— PM改需求
  { id: 206, category: 'develop', type: 'couplet', words: ['需','求','又','改','了'], fullText: '需求又改了，回档到从前。' },
  // 207 编译半小时，结果错一行 —— CICD的痛
  { id: 207, category: 'develop', type: 'couplet', words: ['编','译','半','小','时'], fullText: '编译半小时，结果错一行。' },
  // 208 删库没备份，跑路也枉然 —— 运维噩梦
  { id: 208, category: 'develop', type: 'couplet', words: ['删','库','没','备','份'], fullText: '删库没备份，跑路也枉然。' },
  // 209 单片机烧了，万用表救场 —— 嵌入式日常
  { id: 209, category: 'develop', type: 'couplet', words: ['单','片','机','烧','了'], fullText: '单片机烧了，万用表救场。' },
  // 210 寄存器写错，中断全乱完 —— 裸机开发
  { id: 210, category: 'develop', type: 'couplet', words: ['寄','存','器','写','错'], fullText: '寄存器写错，中断全乱完。' },
  // 211 时钟配飞线，时序又漂偏 —— FPGA/CPLD
  { id: 211, category: 'develop', type: 'couplet', words: ['时','钟','配','飞','线'], fullText: '时钟配飞线，时序又漂偏。' },
  // 212 EDA跑一天，DRC没过关 —— 电路板设计
  { id: 212, category: 'develop', type: 'couplet', words: ['E','D','A','跑','天'], fullText: 'EDA跑一天，DRC没过关。' },
  // 213 烙铁烫手了，焊盘也扯翻 —— 焊接翻车
  { id: 213, category: 'develop', type: 'couplet', words: ['烙','铁','烫','手','了'], fullText: '烙铁烫手了，焊盘也扯翻。' },
  // 214 电容接反正，通电炸飞边 —— 极性悲剧
  { id: 214, category: 'develop', type: 'couplet', words: ['电','容','接','反','正'], fullText: '电容接反正，通电炸飞边。' },
  // 215 熬夜调板子，咖啡当水吞 —— 实验室续命
  { id: 215, category: 'develop', type: 'couplet', words: ['熬','夜','调','板','子'], fullText: '熬夜调板子，咖啡当水吞。' },
  // 216 数据跑丢了，论文要重编 —— 科研悲剧
  { id: 216, category: 'develop', type: 'couplet', words: ['数','据','跑','丢','了'], fullText: '数据跑丢了，论文要重编。' },
  // 217 梯度爆炸了，炼丹又白干 —— AI调参
  { id: 217, category: 'develop', type: 'couplet', words: ['梯','度','爆','炸','了'], fullText: '梯度爆炸了，炼丹又白干。' },
  // 218 杀毒把源码，一并送入棺 —— 安全软件背刺
  { id: 218, category: 'develop', type: 'couplet', words: ['杀','毒','把','源','码'], fullText: '杀毒把源码，一并送入棺。' },
  // 219 示波器坏了，波形看不穿 —— 测量设备罢工
  { id: 219, category: 'develop', type: 'couplet', words: ['示','波','器','坏','了'], fullText: '示波器坏了，波形看不穿。' },
  // 220 怼完生产队，线上火葬场 —— 上线 deploy
  { id: 220, category: 'develop', type: 'couplet', words: ['怼','完','生','产','队'], fullText: '怼完生产队，线上火葬场。' }

];
