const COLS = 12;
    const BUS_COL = 0;
    const FIRST_EDIT_COL = 1;
    const LAST_EDIT_COL = COLS - 1;
    const END_ID = 'END_COMPONENT';
    
    const INSTRUCTION_DB = {
      LD: { family: 'CONTACT', arity: 1, category: '接點', supported: true },
      LDI: { family: 'CONTACT', arity: 1, category: '接點', supported: true },
      AND: { family: 'CONTACT', arity: 1, category: '接點', supported: true },
      ANI: { family: 'CONTACT', arity: 1, category: '接點', supported: true },
      OR: { family: 'CONTACT', arity: 1, category: '接點', supported: true },
      ORI: { family: 'CONTACT', arity: 1, category: '接點', supported: true },
      ORB: { family: 'STACK', arity: 0, category: '分支堆疊', supported: true },
      ANB: { family: 'STACK', arity: 0, category: '分支堆疊', supported: true },
      MPS: { family: 'STACK', arity: 0, category: '分支堆疊', supported: true },
      MRD: { family: 'STACK', arity: 0, category: '分支堆疊', supported: true },
      MPP: { family: 'STACK', arity: 0, category: '分支堆疊', supported: true },
      INV: { family: 'STACK', arity: 0, category: '分支堆疊', supported: true },
      NOP: { family: 'STACK', arity: 0, category: '分支堆疊', supported: true },
      LDP: { family: 'CONTACT', arity: 1, category: '邊緣接點', supported: true },
      LDF: { family: 'CONTACT', arity: 1, category: '邊緣接點', supported: true },
      ANDP: { family: 'CONTACT', arity: 1, category: '邊緣接點', supported: true },
      ANDF: { family: 'CONTACT', arity: 1, category: '邊緣接點', supported: true },
      ANP: { family: 'CONTACT', arity: 1, category: '邊緣接點', supported: true },
      ANF: { family: 'CONTACT', arity: 1, category: '邊緣接點', supported: true },
      ORP: { family: 'CONTACT', arity: 1, category: '邊緣接點', supported: true },
      ORF: { family: 'CONTACT', arity: 1, category: '邊緣接點', supported: true },
      OUT: { family: 'COIL', arity: 1, category: '輸出', supported: true },
      SET: { family: 'COIL', arity: 1, category: '輸出', supported: true },
      RST: { family: 'COIL', arity: 1, category: '輸出', supported: true },
      PLS: { family: 'COIL', arity: 1, category: '輸出', supported: true },
      PLF: { family: 'COIL', arity: 1, category: '輸出', supported: true },
      MOV: { family: 'FUNCTION', arity: 2, category: '傳送', outputSide: true, supported: true },
      MOVP: { family: 'FUNCTION', arity: 2, category: '傳送', outputSide: true, supported: true },
      DMOV: { family: 'FUNCTION', arity: 2, category: '傳送', outputSide: true, supported: true },
      FMOV: { family: 'FUNCTION', arity: 2, category: '傳送', outputSide: true, supported: true },
      ADD: { family: 'FUNCTION', arity: 3, category: '運算', outputSide: true, supported: true },
      SUB: { family: 'FUNCTION', arity: 3, category: '運算', outputSide: true, supported: true },
      MUL: { family: 'FUNCTION', arity: 3, category: '運算', outputSide: true, supported: true },
      DIV: { family: 'FUNCTION', arity: 3, category: '運算', outputSide: true, supported: true },
      INC: { family: 'FUNCTION', arity: 1, category: '運算', outputSide: true, supported: true },
      DEC: { family: 'FUNCTION', arity: 1, category: '運算', outputSide: true, supported: true },
      CMP: { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      '<': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      '>': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      '=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      '<=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      '>=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      '<>': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'LD=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'LD>': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'LD<': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'LD<>': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'LD<=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'LD>=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'AND=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'AND>': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'AND<': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'AND<>': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'AND<=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'AND>=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'OR=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'OR>': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'OR<': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'OR<>': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'OR<=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      'OR>=': { family: 'COMPARE', arity: 2, category: '比較', supported: true },
      ZCP: { family: 'FUNCTION', arity: 4, category: '比較', supported: true },
      OUT_T: { family: 'FUNCTION', arity: 2, category: '計時', supported: true },
      TMR: { family: 'FUNCTION', arity: 2, category: '計時', supported: true },
      CNT: { family: 'FUNCTION', arity: 2, category: '計數', supported: true },
      ZRST: { family: 'FUNCTION', arity: 2, category: '資料處理', supported: false },
      BMOV: { family: 'FUNCTION', arity: 3, category: '資料處理', supported: false },
      FMOVX: { family: 'FUNCTION', arity: 3, category: '資料處理', supported: false },
      XCH: { family: 'FUNCTION', arity: 2, category: '資料處理', supported: false },
      BCD: { family: 'FUNCTION', arity: 2, category: '資料處理', supported: false },
      BIN: { family: 'FUNCTION', arity: 2, category: '資料處理', supported: false },
      SFTL: { family: 'FUNCTION', arity: 4, category: '移位', supported: false },
      SFTR: { family: 'FUNCTION', arity: 4, category: '移位', supported: false },
      ALT: { family: 'FUNCTION', arity: 1, category: '流程', supported: false },
      FROM: { family: 'FUNCTION', arity: 4, category: '特殊模組', supported: false },
      TO: { family: 'FUNCTION', arity: 4, category: '特殊模組', supported: false },
      PLSY: { family: 'FUNCTION', arity: 3, category: '高速定位', supported: false },
      DRVI: { family: 'FUNCTION', arity: 4, category: '高速定位', supported: false },
      DRVA: { family: 'FUNCTION', arity: 4, category: '高速定位', supported: false },
      ZRN: { family: 'FUNCTION', arity: 4, category: '高速定位', supported: false }
    };

    // FX3U 指令目錄依三菱 FX3S/FX3G/FX3U Programming Manual
    // (Basic & Applied Instructions, JY997D16601) 建立。圖形編輯器會接受
    // 目錄內的基本、步進與應用指令；未建立虛擬機語意的應用指令仍可編譯，
    // 並在寫入虛擬 PLC 前以警告說明「僅驗證語法」。
    const FX3U_INSTRUCTION_GROUPS = [
      { category: '基本／步進', codes: ['ANB','ORB','MPS','MRD','MPP','INV','MEP','MEF','MC','MCR','NOP','END','STL','RET'] },
      { category: '程式流程', codes: ['CJ','CALL','SRET','IRET','EI','DI','FEND','WDT','FOR','NEXT'] },
      { category: '比較', codes: ['CMP','ZCP'] },
      { category: '傳送／轉換', codes: ['MOV','SMOV','CML','BMOV','FMOV','XCH','BCD','BIN'] },
      { category: '算術／邏輯', codes: ['ADD','SUB','MUL','DIV','INC','DEC','WAND','WOR','WXOR','NEG'] },
      { category: '循環／移位', codes: ['ROR','ROL','RCR','RCL','SFTR','SFTL','WSFR','WSFL','SFWR','SFRD'] },
      { category: '資料處理', codes: ['ZRST','DECO','ENCO','SUM','BON','MEAN','ANS','ANR','SQR','FLT'] },
      { category: '高速處理', codes: ['REF','REFF','MTR','HSCS','HSCR','HSZ','SPD','PLSY','PWM','PLSR'] },
      { category: '便利指令', codes: ['IST','SER','ABSD','INCD','TTMR','STMR','ALT','RAMP','ROTC','SORT'] },
      { category: '外部 I/O', codes: ['TKY','HKY','DSW','SEGD','SEGL','ARWS','ASC','PR','FROM','TO'] },
      { category: '通訊／PID', codes: ['RS','PRUN','ASCI','HEX','CCD','VRRD','VRSC','RS2','PID'] },
      { category: '索引暫存', codes: ['ZPUSH','ZPOP'] },
      { category: '浮點比較／轉換', codes: ['ECMP','EZCP','EMOV','ESTR','EVAL','EBCD','EBIN'] },
      { category: '浮點運算', codes: ['EADD','ESUB','EMUL','EDIV','EXP','LOGE','LOG10','ESQR','ENEG','INT','SIN','COS','TAN','ASIN','ACOS','ATAN','RAD','DEG'] },
      { category: '資料表／排序', codes: ['WSUM','WTOB','BTOW','UNI','DIS','SWAP','SORT2'] },
      { category: '定位', codes: ['DSZR','DVIT','TBL','ABS','ZRN','PLSV','DRVI','DRVA'] },
      { category: '時鐘', codes: ['TCMP','TZCP','TADD','TSUB','HTOS','STOH','TRD','TWR','HOUR'] },
      { category: '格雷碼／類比', codes: ['GRY','GBIN','RD3A','WR3A'] },
      { category: '擴充處理', codes: ['COMRD','RND','DUTY','CRC','HCMOV'] },
      { category: '區塊資料', codes: ['BK+','BK-','BKCMP=','BKCMP>','BKCMP<','BKCMP<>','BKCMP<=','BKCMP>='] },
      { category: '字串', codes: ['STR','VAL','$+','LEN','RIGHT','LEFT','MIDR','MIDW','INSTR','$MOV','FDEL','FINS','POP','SFR','SFL'] },
      { category: '比較接點', codes: ['LD=','LD>','LD<','LD<>','LD<=','LD>=','AND=','AND>','AND<','AND<>','AND<=','AND>=','OR=','OR>','OR<','OR<>','OR<=','OR>='] },
      { category: '範圍／縮放', codes: ['LIMIT','BAND','ZONE','SCL','DABIN','BINDA','SCL2'] },
      { category: '變頻器／緩衝記憶體', codes: ['IVCK','IVDR','IVRD','IVWR','IVBWR','IVMC','ADPRW','RBFM','WBFM','HSCT'] },
      { category: '記錄／配方', codes: ['LOADR','SAVER','INITR','LOGR','RWER','INITER'] },
      { category: '檔案', codes: ['FLCRT','FLDEL','FLWR','FLRD','FLCMD','FLSTRD'] }
    ];

    const FX3U_EXACT_ARITY = {
      STL:1, RET:0, CJ:1, CALL:1, SRET:0, IRET:0, EI:0, DI:0, FEND:0, WDT:0, FOR:1, NEXT:0,
      ANB:0, ORB:0, MPS:0, MRD:0, MPP:0, INV:0, MC:2, MCR:1, NOP:0, MEP:0, MEF:0,
      MOV:2, SMOV:4, CML:2, BMOV:3, FMOV:3, XCH:2, BCD:2, BIN:2,
      ADD:3, SUB:3, MUL:3, DIV:3, INC:1, DEC:1, WAND:3, WOR:3, WXOR:3, NEG:2,
      ZRST:2, FROM:4, TO:4, PLSY:3, PWM:3, PLSR:4, ZRN:4, PLSV:3, DRVI:4, DRVA:4,
      ZPUSH:1, ZPOP:1
    };

    const FX3U_SIMULATED = new Set([
      'LD','LDI','LDP','LDF','AND','ANI','ANDP','ANDF','OR','ORI','ORP','ORF',
      'OUT','SET','RST','PLS','PLF','STL','RET','MOV','DMOV','MOVP','ADD','SUB','MUL','DIV','INC','DEC',
      'CMP','ZCP','ZRST','BMOV','FMOV','XCH','BCD','BIN','ALT'
    ]);

    FX3U_INSTRUCTION_GROUPS.forEach((group) => {
      group.codes.forEach((code) => {
        const current = INSTRUCTION_DB[code] || {};
        INSTRUCTION_DB[code] = {
          family: current.family || (code === 'STL' ? 'STEP' : 'FUNCTION'),
          arity: Object.prototype.hasOwnProperty.call(FX3U_EXACT_ARITY, code) ? FX3U_EXACT_ARITY[code] : (current.arity ?? null),
          minArity: Object.prototype.hasOwnProperty.call(FX3U_EXACT_ARITY, code) ? FX3U_EXACT_ARITY[code] : 0,
          maxArity: Object.prototype.hasOwnProperty.call(FX3U_EXACT_ARITY, code) ? FX3U_EXACT_ARITY[code] : 8,
          category: current.category || group.category,
          outputSide: code === 'STL' ? false : (current.outputSide ?? true),
          supported: true,
          fx3u: true,
          simulated: FX3U_SIMULATED.has(code)
        };
      });
    });

    const FX3U_INSTRUCTION_COUNT = Object.keys(INSTRUCTION_DB).filter((code) => INSTRUCTION_DB[code]?.supported !== false).length;
    const HINT_LIBRARY = [
      { code: 'STL', category: '步進接點', template: 'STL S0' },
      { code: 'SET', category: '步進轉移', template: 'SET S1' },
      { code: 'RST', category: '步進復歸', template: 'RST S0' },
      { code: 'RET', category: '步進結束', template: 'RET' },
      { code: 'ZRST', category: '批次復歸', template: 'ZRST S0 S99' },
      { code: 'OP', category: '平行支路', template: 'OP X0' },
      { code: 'LDP', category: '上升沿接點', template: 'LDP X0' },
      { code: 'LDF', category: '下降沿接點', template: 'LDF X0' },
      { code: 'OUT', category: '計時器輸出', template: 'OUT T0 K100' },
      { code: 'OUT', category: '計數器輸出', template: 'OUT C0 K10' },
      { code: 'T0', category: '快捷輸出', template: 'T0 K100' },
      { code: 'C0', category: '快捷輸出', template: 'C0 K10' }
    ];

    const SUPPORTED_INSTRUCTIONS = {
      CONTACT: ['LD', 'AND', 'OR', 'LDI', 'ANI', 'ORI', 'LDP', 'ANDP', 'ANP', 'ORP', 'LDF', 'ANDF', 'ANF', 'ORF'],
      COIL: ['OUT', 'SET', 'RST', 'PLS', 'PLF'],
      FUNCTION: ['MOV', 'MOVP', 'OUT_T', 'ADD', 'SUB', 'MUL', 'DIV', 'INC', 'DEC', 'CMP', 'DMOV', 'FMOV', 'TMR', 'CNT'],
      COMPARE: ['<', '>', '=', '<=', '>=', '<>', 'CMP']
    };

    const PRACTICE_QUESTIONS = [
      {
        id: 1, code: '01300-10802101', title: '自動啟閉控制', short: '三部馬達時序', machine: 'conveyor',
        brief: ['M1、M2、M3 依 5 秒／10 秒行程順序啟閉', '停止、緊急停止、過載與蜂鳴器復歸', '運轉燈與電源燈需依評分時序亮／閃'],
        inputs: [['PB1','停止'],['PB2','啟動'],['PB6','緊急停止'],['COS','警報測試／復歸'],['TH1','M1 過載'],['TH2','M2/M3 過載']],
        outputs: [['MC1','M1 接觸器'],['MC2','M2 接觸器'],['MC3','M3 接觸器'],['PL1','M1 運轉燈'],['PL2','M2 運轉燈'],['PL3','M3 運轉燈'],['PL4','電源指示'],['PL5','過載指示'],['BZ','過載警報']],
        rubric: [['sequence','主要時序','三部馬達依指定時間順序啟動與停止',35],['safety','安全／過載','EMS、TH 與警報復歸正確',25],['indicators','燈號','PL1～PL5 與 BZ 狀態正確',20],['wiring','外部接線','I/O 不重複且所有指定元件已配線',20]]
      },
      {
        id: 2, code: '01300-10802102', title: '兩部抽水機控制', short: '手／自動交替抽水', machine: 'tank',
        brief: ['手動交替、自動交替、緊急抽水三模式', '蓄水池與水塔高低水位連鎖', 'HMI 操作、過載備援與交替記憶'],
        inputs: [['PB1','警報 OFF'],['PB2','手動操作'],['EMS','緊急停止'],['COS0','手動交替'],['COS1','自動交替'],['COS2','緊急抽水'],['SUMP_L','蓄水池低水位'],['TANK_L','水塔低水位'],['TANK_H','水塔高水位'],['TH1','#1 過載'],['TH2','#2 過載']],
        outputs: [['MC1','#1 抽水機'],['MC2','#2 抽水機'],['PL1','#1 運轉'],['PL2','#2 運轉'],['PL3','#1 過載'],['PL4','#2 過載'],['PL5','允許抽水'],['PL6','水塔缺水'],['BZ','過載警報']],
        rubric: [['modes','三模式','手動／自動交替與緊急抽水皆可執行',30],['levels','水位連鎖','上下水位切換與缺水禁止正確',25],['alternate','交替記憶','重啟後交替順序符合評分表',20],['wiring','外部接線','I/O 與 HMI/實體元件定義完整',25]]
      },
      {
        id: 3, code: '01300-10802103', title: '多段行程教導運轉定位', short: '伺服定位與 HMI', machine: 'slider',
        brief: ['單步、連續、定點設定三種模式', 'MPG 手搖輪倍率 ×1／×10／×100', '原點復歸、三定位點與速度／停留時間參數'],
        inputs: [['START','啟動'],['STOP','停止'],['HOME','原點復歸'],['SAVE','位置儲存'],['JOG_P','JOG+'],['JOG_N','JOG-'],['COS1_0','單步模式'],['COS1_1','連續模式'],['COS1_2','定點設定'],['COS2_1','MPG ×1'],['COS2_10','MPG ×10'],['COS2_100','MPG ×100'],['EMS','緊急停止'],['ORG','原點感測'],['LSP','右極限'],['LSN','左極限']],
        outputs: [['MC1','伺服電源'],['PULSE','脈波輸出'],['DIR','方向輸出'],['HMI_POS','目前位置'],['HMI_MODE','模式顯示']],
        rubric: [['homing','原點復歸','回原點方向、完成與顯示正確',25],['teach','教導設定','A/B/C 點可儲存且參數換算正確',25],['motion','單步／連續','速度、方向、停留與循環正確',30],['wiring','外部接線','極限、EMS 與伺服訊號配置完整',20]]
      },
      {
        id: 4, code: '01300-10802104', title: '粉料秤重控制系統', short: '計量、下料與出料', machine: 'hopper',
        brief: ['手動／自動秤重，切斷值可設定', '5 秒關門、15 秒殘料排除與 3 秒循環', 'LT1～LT3 位準、荷重元與緊急停止處理'],
        inputs: [['LT1','高位準'],['LT2','中位準'],['LT3','低位準'],['COS4_0','停止'],['COS4_1','手動'],['COS4_2','自動'],['COS5','BZ 停'],['PB1','自動計量'],['PB2','手動計量'],['PB3','手動出料'],['PB4','緊急停止'],['LS_G','閘門閉合'],['LOAD','荷重值']],
        outputs: [['MC1','下料馬達'],['MC2','出料閘門'],['PL1','下料中'],['PL2','出料中'],['PL3','警報'],['BZ','蜂鳴器'],['DISPLAY','計量顯示']],
        rubric: [['weigh','秤重切斷','重量與切斷值比較正確',30],['cycle','自動循環','下料、延時、出料與重複次數正確',30],['recovery','異常復歸','EMS、斷電與殘料復歸正確',20],['wiring','外部接線','類比量與數位 I/O 定義完整',20]]
      },
      {
        id: 5, code: '01300-10802105', title: '自動門開閉控制', short: '紅外線、安全反轉', machine: 'door',
        brief: ['手動開／關門與全開、全閉限位', '自動模式全開 10 秒後關門', '關門中按開門或偵測活體，停 2 秒後反轉'],
        inputs: [['COS1','手動模式'],['COS2','自動模式'],['PB1','開門'],['PB2','關門'],['PB3','警報復歸'],['LS1','門全開'],['LS2','門全閉'],['IR','紅外線感測'],['TH','馬達過載'],['CB1_FB','MC1 輸出確認'],['CB2_FB','MC2 輸出確認']],
        outputs: [['MC1','開門接觸器'],['MC2','關門接觸器'],['PL1','正轉／門全開'],['PL2','反轉／門全閉'],['PL3','自動指示'],['PL4','故障指示'],['BZ','過載警報']],
        rubric: [['manual','手動操作','開關門、限位與互鎖正確',20],['auto','自動關門','10 秒預告與關門流程正確',25],['safety','安全反轉','活體／開門命令使關門停止 2 秒後反轉',30],['wiring','外部接線','LS、IR、TH 與輸出確認回授完整',25]]
      },
      {
        id: 6, code: '01300-10802106', title: '污水池排放控制', short: '雙泵、變頻與水位', machine: 'tank',
        brief: ['S1～S6 水位對應雙泵與污水閥流程', 'M1 緩啟動、M2 40%／100% 變頻運轉', '水位訊息碼 PL4／PL5／PL6 與 S5、S6 警報'],
        inputs: [['COS0','停機'],['COS1','手動'],['COS2','自動'],['PB1','開始運轉'],['PB2','SV 開／關'],['PB3','M1 運／停'],['PB4','M2 低速／停'],['PB5','故障復歸'],['PB6','緊急停止'],['PXS1','水位 S1'],['PXS2','水位 S2'],['PXS3','水位 S3'],['PXS4','水位 S4'],['PXS5','水位 S5'],['PXS6','水位 S6'],['OL1','緩啟動過載'],['OL2','變頻器過載']],
        outputs: [['MC1','M1 緩啟動電源'],['MC2','M2 變頻器電源'],['INV40','M2 40% 速度'],['INV100','M2 100% 速度'],['SV','污水入口閥'],['PL1','M1 運轉燈'],['PL2','M2 運轉燈'],['PL3','SV 指示'],['PL4','訊息碼 4'],['PL5','訊息碼 2'],['PL6','訊息碼 1'],['BZ','過載／高水位警報']],
        rubric: [['levels','六段水位','S1～S6 上升與下降流程正確',30],['drives','雙泵與速度','M1 延時、M2 40%／100% 切換正確',25],['message','訊息碼／警報','PL4～PL6、SV、BZ 對應水位正確',25],['wiring','外部接線','PNP/NPN 感測與驅動輸出配置完整',20]]
      }
    ].map(q => ({
      ...q,
      inputs: q.inputs.map(([id,label]) => ({ id, label, io:'input' })),
      outputs: q.outputs.map(([id,label]) => ({ id, label, io:'output' })),
      rubric: q.rubric.map(([id,label,description,weight]) => ({ id, label, description, weight }))
    }));

    const dom = {
      canvasWrap: null,
      output: null,
      issueList: null,
      cursorInfo: null,
      toolInfo: null,
      compileState: null,
      toolCheckState: null,
      officialCheckState: null,
      functionTestState: null,
      checklistBox: null,
      testReportBox: null,
      deviceSearchInput: null,
      deviceWatchBox: null,
      deviceValueInput: null
    };

    const state = {
      rows: 8,
      cols: COLS,
      cells: [],
      components: {},
      rungs: [],
      graph: {},
      labelTable: {
        VAR1: { device: 'D0', type: 'WORD' },
        VAR2: { device: 'D1', type: 'WORD' }
      },
      cursor: { row: 0, col: 1 },
      tool: 'CONTACT',
      issues: [],
      il: 'END',
      compiled: false,
      compile: {
        attempted: false,
        passed: false,
        fatal: false,
        warning: false,
        lastMessage: ''
      },
      validation: {
        tool: '未檢查',
        official: '未驗證',
        function: '未測試',
        reversePassed: false
      },
      input: null,
      componentCounter: 0,
      history: { undo: [], redo: [] },
      schemaVersion: 1,
      portalView: 'home',
      activeQuestion: 1,
      practiceStage: 'wiring',
      stageNotice: '',
      wiringByQuestion: {},
      pendingWire: null,
      programsByQuestion: {},
      simulationByQuestion: {},
      compileDialogVisible: false,
      selection: {
        active: false,
        start: null,
        end: null,
        cells: [],
        dragging: false
      },
      deviceMemory: {
        X: {}, Y: {}, M: {}, S: {}, D: {}, R: {}, T: {}, C: {},
        special: { M8000: true, M8002: true, M8013: false }
      },
      simulator: {
        enabled: false,
        running: false,
        scanCount: 0,
        scanTimeMs: 100,
        elapsedMs: 0,
        lastClockToggleMs: 0,
        report: [],
        previousPower: {},
        previousInputs: {}
      }
    };

    function activeQuestion() {
      return PRACTICE_QUESTIONS.find(q => q.id === state.activeQuestion) || PRACTICE_QUESTIONS[0];
    }

    function ensurePracticeState(questionId = state.activeQuestion) {
      if (!state.wiringByQuestion[questionId]) state.wiringByQuestion[questionId] = {};
      if (!state.simulationByQuestion[questionId]) {
        state.simulationByQuestion[questionId] = { level: 1, doorOpen: 0, position: 12, weight: 0, running: false, alarm: false, history: [] };
      }
      if (!Array.isArray(state.simulationByQuestion[questionId].history)) state.simulationByQuestion[questionId].history = [];
      return {
        wiring: state.wiringByQuestion[questionId],
        simulation: state.simulationByQuestion[questionId]
      };
    }

    function captureProgramState() {
      return JSON.stringify({
        rows: state.rows, cells: state.cells, components: state.components, rungs: state.rungs,
        graph: state.graph, cursor: state.cursor, tool: state.tool, issues: state.issues,
        il: state.il, compile: state.compile, compiled: state.compiled,
        componentCounter: state.componentCounter, labelTable: state.labelTable
      });
    }

    function saveActiveQuestionProgram() {
      if (state.cells?.length) state.programsByQuestion[state.activeQuestion] = captureProgramState();
      persistPracticeState();
    }

    function persistPracticeState() {
      try {
        localStorage.setItem('industrial-wiring-b-practice-v2', JSON.stringify({
          activeQuestion: state.activeQuestion,
          practiceStage: state.practiceStage,
          wiringByQuestion: state.wiringByQuestion,
          programsByQuestion: state.programsByQuestion,
          simulationByQuestion: state.simulationByQuestion
        }));
      } catch (_) { /* local-only persistence is optional */ }
    }

    function hydratePracticeState() {
      try {
        const saved = JSON.parse(localStorage.getItem('industrial-wiring-b-practice-v2') || 'null');
        if (!saved) return;
        if (PRACTICE_QUESTIONS.some(q => q.id === Number(saved.activeQuestion))) state.activeQuestion = Number(saved.activeQuestion);
        if (['wiring','ladder','simulation','assessment'].includes(saved.practiceStage)) state.practiceStage = saved.practiceStage;
        state.wiringByQuestion = saved.wiringByQuestion || {};
        state.programsByQuestion = saved.programsByQuestion || {};
        state.simulationByQuestion = saved.simulationByQuestion || {};
        PRACTICE_QUESTIONS.forEach(question => {
          const wiring = state.wiringByQuestion[question.id] || {};
          questionIoItems(question).forEach(item => {
            const address = wiring[item.id];
            const valid = item.io === 'input' ? isDeviceX(address || '') : isDeviceY(address || '');
            if (address && !valid) delete wiring[item.id];
          });
          state.wiringByQuestion[question.id] = wiring;
        });
      } catch (_) { /* ignore corrupt browser state */ }
    }

    function switchQuestion(questionId) {
      const next = Number(questionId);
      if (!PRACTICE_QUESTIONS.some(q => q.id === next)) return;
      const changed = next !== state.activeQuestion;
      if (changed) saveActiveQuestionProgram();
      state.activeQuestion = next;
      state.portalView = 'practice';
      state.practiceStage = 'wiring';
      state.stageNotice = '';
      state.pendingWire = null;
      state.compileDialogVisible = false;
      ensurePracticeState(next);
      const savedProgram = state.programsByQuestion[next];
      if (changed && savedProgram) restoreSnapshot(savedProgram);
      else if (changed) {
        state.rows = 8;
        init({ preserveHistory: false });
      } else render();
      persistPracticeState();
    }

    function returnToQuestionHome() {
      saveActiveQuestionProgram();
      state.portalView = 'home';
      state.pendingWire = null;
      state.compileDialogVisible = false;
      render();
    }

    function canEnterStage(stage) {
      const q = activeQuestion();
      const mapping = ensurePracticeState(q.id).wiring;
      const wiringDone = questionIoItems(q).every(item => {
        const address = mapping[item.id];
        return item.io === 'input' ? isDeviceX(address || '') : isDeviceY(address || '');
      });
      if (stage === 'wiring') return { ok:true, reason:'' };
      if (stage === 'ladder' && !wiringDone) return { ok:false, reason:'請先完成本題所有 PLC 外部接線，再進入程式編輯。' };
      if (stage === 'simulation' && !state.compile.passed) return { ok:false, reason:'請先完成階梯圖並通過編譯，再寫入虛擬 PLC。' };
      if (stage === 'assessment' && (!state.compile.passed || state.simulator.scanCount === 0)) return { ok:false, reason:'請先寫入虛擬 PLC 並至少執行一次操作／掃描。' };
      return { ok:true, reason:'' };
    }

    function setPracticeStage(stage) {
      if (!['wiring','ladder','simulation','assessment'].includes(stage)) return;
      const access = canEnterStage(stage);
      if (!access.ok) {
        state.stageNotice = access.reason;
        render();
        return;
      }
      state.practiceStage = stage;
      state.stageNotice = '';
      state.pendingWire = null;
      persistPracticeState();
      render();
      if (stage === 'wiring') requestAnimationFrame(drawWiringLines);
    }

    function questionIoItems(question = activeQuestion()) {
      return [...question.inputs, ...question.outputs];
    }

    function inputContactType(question, item) {
      const normallyClosedByQuestion = {
        1: ['PB1', 'PB6', 'TH1', 'TH2'],
        2: ['EMS', 'TH1', 'TH2'],
        3: ['STOP', 'EMS', 'LSP', 'LSN'],
        4: ['PB4'],
        5: ['TH'],
        6: ['PB6', 'OL1', 'OL2']
      };
      return normallyClosedByQuestion[question.id]?.includes(item.id) ? 'NC' : 'NO';
    }

    function selectorProfile(question, item) {
      if (!item.id.startsWith('COS')) return null;
      const threePosition = (
        (question.id === 2 && /^COS[0-2]$/.test(item.id)) ||
        (question.id === 3 && /^COS[12]_/.test(item.id)) ||
        (question.id === 4 && /^COS4_[0-2]$/.test(item.id)) ||
        (question.id === 6 && /^COS[0-2]$/.test(item.id))
      );
      const suffix = item.id.match(/(?:_|COS)(0|1|2)$/)?.[1];
      let active = suffix === undefined ? 1 : Number(suffix);
      if (question.id === 3 && /^COS2_(1|10|100)$/.test(item.id)) active = { COS2_1:0, COS2_10:1, COS2_100:2 }[item.id];
      if (question.id === 5 && /^COS[12]$/.test(item.id)) active = item.id === 'COS1' ? 0 : 1;
      return { positions: threePosition ? 3 : 2, active };
    }

    function inputDeviceSymbolMarkup(question, item) {
      const selector = selectorProfile(question, item);
      if (selector) {
        const active = Math.min(selector.positions - 1, selector.active);
        return `<span class="selector-switch-symbol selector-${selector.positions} position-${active}" aria-hidden="true"><i class="selector-common"></i><i class="selector-arm"></i><i class="selector-point p0"></i><i class="selector-point p1"></i>${selector.positions === 3 ? '<i class="selector-point p2"></i>' : ''}<em class="selector-label l0">0</em><em class="selector-label l1">1</em>${selector.positions === 3 ? '<em class="selector-label l2">2</em>' : ''}</span>`;
      }
      const contactType = inputContactType(question, item);
      const deviceKind = /^(TH|OL)/.test(item.id) ? 'overload' : /^LS/.test(item.id) ? 'limit' : /^(PB|START|STOP|EMS|HOME|SAVE|JOG)/.test(item.id) ? 'pushbutton' : 'sensor';
      return `<span class="input-contact-symbol ${contactType.toLowerCase()} ${deviceKind}" aria-hidden="true"><i class="contact-node top"></i><i class="contact-stem top"></i><i class="contact-blade"></i><i class="contact-node bottom"></i><i class="contact-stem bottom"></i><i class="contact-actuator"></i></span>`;
    }

    function outputDeviceSymbolMarkup(item) {
      const type = /^PL/.test(item.id) ? 'pilot-lamp' : item.id === 'BZ' ? 'buzzer' : /^MC/.test(item.id) ? 'contactor' : 'load';
      return `<span class="output-load-symbol ${type} ${item.id.length > 5 ? 'long-code' : ''}" aria-hidden="true"><b>${item.id}</b>${type === 'pilot-lamp' ? '<i class="ray r1"></i><i class="ray r2"></i><i class="ray r3"></i><i class="ray r4"></i>' : ''}</span>`;
    }

    function installedDeviceMarkup(question, item, address) {
      if (!item) return '';
      const stagger = Number.parseInt(address.slice(1), 8) % 2;
      const name = `<span class="installed-name"><b>${item.id}</b><small>${item.label}</small></span>`;
      if (item.io === 'input') {
        const contactType = inputContactType(question, item);
        const selector = selectorProfile(question, item);
        const typeLabel = selector ? `${selector.positions} 段 COS` : contactType === 'NC' ? '常閉 NC' : '常開 NO';
        return `<span class="installed-device input" style="--install-stagger:${stagger}">${name}<small class="installed-contact-type">${typeLabel}</small>${inputDeviceSymbolMarkup(question, item)}<i class="installed-lead"></i></span>`;
      }
      return `<span class="installed-device output"><i class="installed-lead"></i>${outputDeviceSymbolMarkup(item)}<i class="installed-return-lead"></i>${name}</span>`;
    }

    function sortComponentsForWiring(items, mapping) {
      const addressOrder = value => {
        if (!value || !/^[XY][0-7]+$/.test(value)) return Number.MAX_SAFE_INTEGER;
        return Number.parseInt(value.slice(1), 8);
      };
      return [...items].sort((left, right) => {
        const leftAddress = mapping[left.id];
        const rightAddress = mapping[right.id];
        const addressDifference = addressOrder(leftAddress) - addressOrder(rightAddress);
        if (addressDifference !== 0) return addressDifference;
        if (Boolean(leftAddress) !== Boolean(rightAddress)) return leftAddress ? -1 : 1;
        return items.indexOf(left) - items.indexOf(right);
      });
    }

    function addressPool(io) {
      const prefix = io === 'input' ? 'X' : 'Y';
      const count = io === 'input' ? 19 : 16;
      return Array.from({ length: count }, (_, i) => `${prefix}${i.toString(8)}`);
    }

    function autoWireQuestion() {
      const q = activeQuestion();
      const mapping = {};
      q.inputs.forEach((item, index) => { mapping[item.id] = `X${index.toString(8)}`; });
      q.outputs.forEach((item, index) => { mapping[item.id] = `Y${index.toString(8)}`; });
      state.wiringByQuestion[q.id] = mapping;
      state.pendingWire = null;
      persistPracticeState();
      render();
      requestAnimationFrame(drawWiringLines);
    }

    function clearQuestionWiring() {
      state.wiringByQuestion[state.activeQuestion] = {};
      state.pendingWire = null;
      persistPracticeState();
      render();
    }

    function handleWiringTerminal(target) {
      const q = activeQuestion();
      const mapping = ensurePracticeState(q.id).wiring;
      const componentId = target.dataset.ioId;
      const address = target.dataset.address;
      const io = target.dataset.io;
      if (componentId) {
        state.pendingWire = { componentId, io };
        render();
        requestAnimationFrame(drawWiringLines);
        return;
      }
      if (address && state.pendingWire) {
        const expectedPrefix = state.pendingWire.io === 'input' ? 'X' : 'Y';
        if (!address.startsWith(expectedPrefix)) return;
        Object.keys(mapping).forEach(key => { if (mapping[key] === address) delete mapping[key]; });
        mapping[state.pendingWire.componentId] = address;
        state.pendingWire = null;
        persistPracticeState();
        render();
        requestAnimationFrame(drawWiringLines);
      } else if (address && !state.pendingWire) {
        const installedId = Object.keys(mapping).find(key => mapping[key] === address);
        if (!installedId) return;
        delete mapping[installedId];
        persistPracticeState();
        render();
        requestAnimationFrame(drawWiringLines);
      }
    }

    function drawWiringLines() {
      const board = document.querySelector('.wiring-board');
      const canvas = board?.querySelector('canvas');
      if (!board || !canvas) return;
      const rect = board.getBoundingClientRect();
      const width = Math.max(board.clientWidth, board.scrollWidth);
      const height = Math.max(board.clientHeight, board.scrollHeight);
      const ratio = Math.max(1, window.devicePixelRatio || 1);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      const ctx = canvas.getContext('2d');
      ctx.scale(ratio, ratio);
      ctx.clearRect(0, 0, width, height);
      const mapping = ensurePracticeState().wiring;
      const itemsById = new Map(questionIoItems().map(item => [item.id, item]));
      Object.entries(mapping).forEach(([id,address], wireIndex) => {
        const source = board.querySelector(`[data-io-id="${CSS.escape(id)}"]`);
        const target = board.querySelector(`[data-address="${CSS.escape(address)}"]`);
        if (!source || !target) return;
        const isInput = itemsById.get(id)?.io === 'input';
        const sourceAnchor = source.querySelector('.terminal-dot') || source;
        const a = sourceAnchor.getBoundingClientRect();
        const b = target.getBoundingClientRect();
        const scrollX = board.scrollLeft;
        const scrollY = board.scrollTop;
        const sx = a.left + a.width / 2 - rect.left + scrollX;
        const sy = a.top + a.height / 2 - rect.top + scrollY;
        const tx = b.left + b.width / 2 - rect.left + scrollX;
        const ty = (isInput ? b.top : b.bottom) - rect.top + scrollY;
        const direction = isInput ? 1 : -1;
        const availableGap = Math.max(14, Math.abs(ty - sy));
        const laneOffset = Math.min(availableGap * .72, 14 + (wireIndex % 9) * 6);
        const laneY = sy + direction * laneOffset;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx, laneY);
        ctx.lineTo(tx, laneY);
        ctx.lineTo(tx, ty);
        ctx.lineWidth = 3;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = address.startsWith('Y') ? '#db7c23' : '#257fbe';
        ctx.shadowColor = 'rgba(255,255,255,.9)';
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    }

    function runPracticeDiagnostics() {
      const q = activeQuestion();
      const mapping = ensurePracticeState(q.id).wiring;
      const missing = questionIoItems(q).filter(item => !mapping[item.id]);
      if (missing.length) {
        addIssue({ code:'E701', message:`外部接線尚缺 ${missing.length} 點：${missing.slice(0,4).map(x => x.id).join('、')}${missing.length > 4 ? '…' : ''}`, row:0, col:1, suggestion:'切換到「1 外部接線」，完成端子與 X/Y 位址配對。' });
      }
      const addresses = Object.values(mapping);
      const invalidAddresses = Object.entries(mapping).filter(([id,address]) => {
        const item = questionIoItems(q).find(candidate => candidate.id === id);
        return item?.io === 'input' ? !isDeviceX(address) : !isDeviceY(address);
      });
      if (invalidAddresses.length) {
        addIssue({ code:'E704', message:`接線表含非八進制位址：${invalidAddresses.map(([,address]) => address).join('、')}`, row:0, col:1, suggestion:'請清除舊接線並重新配置；X／Y 僅可使用 0～7。' });
      }
      const duplicates = addresses.filter((value,index) => addresses.indexOf(value) !== index);
      if (duplicates.length) {
        addIssue({ code:'E702', message:`I/O 位址重複：${[...new Set(duplicates)].join('、')}`, row:0, col:1, suggestion:'同一 PLC 端子只能連接一個本題元件。' });
      }
      const outputDevices = new Set(Object.values(state.components).filter(c => c.kind === 'COIL' || c.output).map(c => c.device || c.args?.[c.args.length - 1]));
      const unused = q.outputs.filter(item => mapping[item.id] && !outputDevices.has(mapping[item.id]));
      if (unused.length) {
        addIssue({ code:'W703', message:`${unused.length} 個已配線輸出尚未在階梯圖寫入：${unused.slice(0,4).map(x => `${x.id}(${mapping[x.id]})`).join('、')}${unused.length > 4 ? '…' : ''}`, row:0, col:1, suggestion:'依題目需求加入輸出線圈；此警告不一定代表所有情境均錯誤。' });
      }
    }

    function downloadToVirtualPlc() {
      if (!state.compile.attempted) { compileProgram(); return; }
      if (!state.compile.passed) {
        state.compileDialogVisible = true;
        render();
        return;
      }
      state.compileDialogVisible = false;
      state.simulator.enabled = true;
      const simulation = ensurePracticeState().simulation;
      simulation.running = true;
      simulation.history.unshift({ time:new Date().toLocaleTimeString('zh-TW',{hour12:false}), label:'程式已寫入虛擬 PLC', detail:`編譯通過 · ${state.il.split('\n').filter(Boolean).length} 行 · 準備開始掃描` });
      simulation.history = simulation.history.slice(0,12);
      state.practiceStage = 'simulation';
      runOneScan();
      persistPracticeState();
      render();
    }

    function updateQuestionSimulation(action) {
      const q = activeQuestion();
      const sim = ensurePracticeState(q.id).simulation;
      if (action === 'sim-start') sim.running = true;
      if (action === 'sim-stop') sim.running = false;
      if (action === 'sim-alarm') sim.alarm = !sim.alarm;
      if (action === 'sim-level-up') sim.level = Math.min(6, sim.level + 1);
      if (action === 'sim-level-down') sim.level = Math.max(0, sim.level - 1);
      if (action === 'sim-open') sim.doorOpen = Math.min(1, sim.doorOpen + .5);
      if (action === 'sim-close') sim.doorOpen = Math.max(0, sim.doorOpen - .5);
      if (action === 'sim-position-next') sim.position = sim.position >= 84 ? 12 : sim.position + 24;
      if (action === 'sim-weight-up') sim.weight = Math.min(50, sim.weight + 10);
      if (action === 'sim-weight-down') sim.weight = Math.max(0, sim.weight - 10);
      applySimulationInputs(q, sim, action);
      if (state.compile.passed) runOneScan();
      const actionLabels = {
        'sim-start':'按下啟動／RUN', 'sim-stop':'按下停止／STOP', 'sim-alarm':'切換異常／復歸',
        'sim-level-up':'液位／行程往下一階段', 'sim-level-down':'液位／行程退回上一階段',
        'sim-open':'送出開門命令', 'sim-close':'送出關門命令', 'sim-position-next':'移動至下一定位點',
        'sim-weight-up':'增加模擬重量 10kg', 'sim-weight-down':'減少模擬重量 10kg'
      };
      sim.history.unshift({
        time: new Date().toLocaleTimeString('zh-TW', { hour12:false }),
        label: actionLabels[action] || action,
        detail: `掃描 ${state.simulator.scanCount} · ${sim.running ? 'RUN' : 'STOP'} · ${sim.alarm ? '異常' : '正常'}`
      });
      sim.history = sim.history.slice(0, 12);
      persistPracticeState();
      render();
    }

    function physicalOutputOn(componentId) {
      const address = ensurePracticeState().wiring[componentId];
      return address ? Boolean(getDeviceValue(address)) : false;
    }

    function simulationInputKind(question, item) {
      if (selectorProfile(question, item)) return 'selector';
      if (/^(PB|START|STOP|EMS|HOME|SAVE|JOG)/.test(item.id)) return 'momentary';
      return 'switch';
    }

    function simulationSelectorGroup(question, item) {
      if (!selectorProfile(question, item)) return null;
      if ((question.id === 2 || question.id === 6) && /^COS[0-2]$/.test(item.id)) return 'COS_MAIN';
      if (question.id === 3 && /^COS[12]_/.test(item.id)) return item.id.split('_')[0];
      if (question.id === 4 && /^COS4_/.test(item.id)) return 'COS4';
      if (question.id === 5 && /^COS[12]$/.test(item.id)) return 'COS_MODE';
      return null;
    }

    function logSimulationInput(item, address, value, kind) {
      const sim = ensurePracticeState().simulation;
      const actionName = kind === 'momentary' ? '按下輸入按鈕' : kind === 'selector' ? '切換選擇開關' : '切換輸入接點';
      sim.history.unshift({
        time:new Date().toLocaleTimeString('zh-TW',{hour12:false}),
        label:`${actionName} ${item.id}`,
        detail:`${item.label} · ${address} = ${value ? 'ON' : 'OFF'} · 掃描 ${state.simulator.scanCount}`
      });
      sim.history = sim.history.slice(0,12);
    }

    function operateSimulationInput(componentId) {
      const question = activeQuestion();
      const item = question.inputs.find(candidate => candidate.id === componentId);
      const mapping = ensurePracticeState(question.id).wiring;
      const address = item ? mapping[item.id] : '';
      if (!item || !isDeviceX(address || '')) return;
      const kind = simulationInputKind(question, item);
      if (kind === 'selector') {
        const group = simulationSelectorGroup(question, item);
        if (group) {
          question.inputs.forEach(candidate => {
            if (simulationSelectorGroup(question, candidate) !== group) return;
            const candidateAddress = mapping[candidate.id];
            if (isDeviceX(candidateAddress || '')) setDeviceValue(candidateAddress, candidate.id === item.id);
          });
        } else {
          setDeviceValue(address, !getDeviceValue(address));
        }
        if (state.compile.passed) runOneScan();
        logSimulationInput(item, address, getDeviceValue(address), kind);
        persistPracticeState();
        render();
        return;
      }
      if (kind === 'momentary') {
        setDeviceValue(address, true);
        if (state.compile.passed) runOneScan();
        logSimulationInput(item, address, true, kind);
        persistPracticeState();
        render();
        setTimeout(() => {
          setDeviceValue(address, false);
          if (state.compile.passed && state.portalView === 'practice' && state.practiceStage === 'simulation') runOneScan();
          if (state.portalView === 'practice' && state.practiceStage === 'simulation') render();
        }, 220);
        return;
      }
      const nextValue = !getDeviceValue(address);
      setDeviceValue(address, nextValue);
      if (state.compile.passed) runOneScan();
      logSimulationInput(item, address, nextValue, kind);
      persistPracticeState();
      render();
    }

    function simulationInputPanelMarkup(question) {
      const mapping = ensurePracticeState(question.id).wiring;
      const controls = question.inputs.map(item => {
        const address = mapping[item.id] || '';
        const on = isDeviceX(address) && getDeviceValue(address);
        const kind = simulationInputKind(question, item);
        const selector = selectorProfile(question, item);
        const contactType = inputContactType(question, item);
        const typeLabel = selector ? `${selector.positions} 段 COS` : kind === 'momentary' ? `瞬時按鈕 · ${contactType}` : `${contactType === 'NC' ? '常閉' : '常開'}接點`;
        return `<button class="sim-input-control ${kind} ${on ? 'on' : ''}" data-sim-input-id="${item.id}" ${address ? '' : 'disabled'} aria-pressed="${on}" title="${item.label}｜${address || '未配線'}"><span class="sim-control-visual ${kind}"><i></i></span><span class="sim-input-copy"><strong>${item.id}</strong><small>${item.label}</small><em>${typeLabel}</em></span><span class="sim-input-state"><b>${address || '--'}</b><small>${on ? 'ON' : 'OFF'}</small></span></button>`;
      }).join('');
      return `<section class="virtual-input-panel"><div class="virtual-input-heading"><div><span>VIRTUAL INPUT PANEL</span><h3>本題輸入按鈕、開關與感測接點</h3></div><small>操作後會寫入使用者配線的 X 位址並立即掃描</small></div><div class="sim-input-grid">${controls}</div></section>`;
    }

    function applySimulationInputs(question, sim, action) {
      const mapping = ensurePracticeState(question.id).wiring;
      const writeBit = (id,value) => { const address = mapping[id]; if (address) setDeviceValue(address,value); };
      question.inputs.forEach(item => {
        const levelMatch = item.id.match(/^PXS([1-6])$/);
        if (levelMatch) writeBit(item.id, sim.level >= Number(levelMatch[1]));
      });
      writeBit('TANK_L', sim.level <= 2);
      writeBit('TANK_H', sim.level >= 5);
      writeBit('SUMP_L', sim.level > 0);
      writeBit('LS1', sim.doorOpen >= 1);
      writeBit('LS2', sim.doorOpen <= 0);
      writeBit('ORG', sim.position <= 12);
      writeBit('LSP', sim.position >= 84);
      writeBit('LSN', sim.position <= 6);
      writeBit('OL1', sim.alarm);
      writeBit('OL2', sim.alarm);
      writeBit('TH', sim.alarm);
      writeBit('TH1', sim.alarm);
      writeBit('TH2', sim.alarm);
      const startId = question.id === 1 ? 'PB2' : question.id === 3 ? 'START' : 'PB1';
      const stopId = question.id === 1 ? 'PB1' : question.id === 3 ? 'STOP' : question.id === 6 ? 'COS0' : 'PB2';
      if (action === 'sim-start') writeBit(startId,true);
      if (action === 'sim-stop') writeBit(stopId,true);
      setTimeout(() => {
        writeBit(startId,false);
        writeBit(stopId,false);
        if (state.compile.passed && state.portalView === 'practice' && state.practiceStage === 'simulation') {
          runOneScan();
          render();
        }
      }, 160);
    }

    function simulationProcedure(question) {
      const procedures = {
        1: ['寫入 PLC 後按「啟動」，確認 M1 先運轉。', '推進行程，依序確認 M2、M3 與 5／10 秒時序。', '切換異常，確認過載燈與蜂鳴器；再執行復歸。', '按「停止」，觀察三部馬達依題目要求停止。'],
        2: ['確認蓄水池允許抽水，再按啟動。', '逐步升高水塔水位，觀察 #1／#2 泵交替與高水位停機。', '降低水位後再次啟動，確認交替記憶。', '切換異常，檢查過載備援泵與警報。'],
        3: ['先執行 HOME，確認滑台回到原點。', '切換定位點，觀察方向、速度與目前位置。', '依單步／連續模式執行 A、B、C 定位。', '觸發極限或停止，確認脈波輸出停止。'],
        4: ['增加重量，確認顯示值同步變化。', '到達切斷值時，下料馬達應停止。', '等待 5 秒後開啟出料閘門，重量逐步下降。', '模擬斷電或異常後復歸，確認殘料處理。'],
        5: ['按開門，觀察正轉與 LS1 全開限位。', '自動模式等待 10 秒後執行關門。', '關門途中再次按開門，確認停止 2 秒後反轉。', '切換異常／紅外線，確認防夾與警報復歸。'],
        6: ['按開始運轉，逐級升高 S1～S6 水位。', '確認 M1 延時啟動，M2 於 S3／S4 切換 40%／100%。', '到 S5 檢查蜂鳴器，到 S6 檢查污水閥關閉。', '逐級下降水位，確認泵浦與訊息碼反向切換。']
      };
      return procedures[question.id] || question.brief;
    }

    function assessmentResult(question = activeQuestion()) {
      const mapping = ensurePracticeState(question.id).wiring;
      const allWired = questionIoItems(question).every(item => mapping[item.id]);
      const ladderOk = Boolean(state.compile.passed);
      const sim = ensurePracticeState(question.id).simulation;
      const hasRun = state.simulator.scanCount > 0 || sim.running;
      return question.rubric.map(item => {
        let pass = false;
        if (item.id === 'wiring') pass = allWired;
        else if (item.id === 'safety' || item.id === 'recovery' || item.id === 'message') pass = ladderOk && hasRun && !sim.alarm;
        else pass = ladderOk && hasRun;
        return { ...item, pass };
      });
    }

    function renderCompileDialog() {
      if (!state.compileDialogVisible) return null;
      const dialog = document.createElement('div');
      dialog.className = 'compile-dialog';
      const success = Boolean(state.compile.passed);
      dialog.innerHTML = `
        <div class="compile-dialog-card" role="dialog" aria-modal="true" aria-label="編譯結果">
          <div class="compile-dialog-head ${success ? 'success' : ''}">
            <strong>${success ? '編譯成功｜可寫入虛擬 PLC' : '編譯失敗｜請修正下列問題'}</strong>
            <button data-action="close-compile-dialog" aria-label="關閉">×</button>
          </div>
          <div class="compile-dialog-body">
            <p>${success ? '階梯圖、I/O 配線與逆向檢查已完成。' : '點擊任一錯誤可回到對應位置；E 開頭為阻止寫入的錯誤，W 開頭為提醒。'}</p>
            ${state.issues.length ? state.issues.map((issue,index) => `<button class="issue-item" data-issue-index="${index}">[${issue.code}] ${issue.message}${issue.suggestion ? `<br><small>${issue.suggestion}</small>` : ''}</button>`).join('') : '<div class="compile-summary">0 error(s), 0 warning(s)</div>'}
            ${success ? '<button class="dialog-btn" data-action="download-plc">寫入虛擬 PLC 並開始監視</button>' : ''}
          </div>
        </div>`;
      return dialog;
    }

    // ===== Simulator & Device Memory =====
    function getDeviceValue(device) {
      const d = String(device || '').toUpperCase();
      if (d === 'M8000') return Boolean(state.deviceMemory.special.M8000);
      if (d === 'M8002') return Boolean(state.deviceMemory.special.M8002);
      if (d === 'M8013') return Boolean(state.deviceMemory.special.M8013);

      if (isDeviceX(d)) return Boolean(state.deviceMemory.X[d]);
      if (isDeviceY(d)) return Boolean(state.deviceMemory.Y[d]);
      if (/^M\d+$/.test(d)) return Boolean(state.deviceMemory.M[d]);
      if (/^S\d+$/.test(d)) return Boolean(state.deviceMemory.S[d]);
      if (/^T\d+$/.test(d)) return Boolean(state.deviceMemory.T[d]?.done);
      if (/^C\d+$/.test(d)) return Boolean(state.deviceMemory.C[d]?.done);
      if (/^D\d+$/.test(d)) return Number(state.deviceMemory.D[d] || 0);
      if (/^R\d+$/.test(d)) return Number(state.deviceMemory.R[d] || 0);
      return false;
    }

    function setDeviceValue(device, value) {
      const d = String(device || '').toUpperCase();
      if (isDeviceX(d)) state.deviceMemory.X[d] = Boolean(value);
      else if (isDeviceY(d)) state.deviceMemory.Y[d] = Boolean(value);
      else if (/^M\d+$/.test(d)) state.deviceMemory.M[d] = Boolean(value);
      else if (/^S\d+$/.test(d)) state.deviceMemory.S[d] = Boolean(value);
      else if (/^D\d+$/.test(d)) state.deviceMemory.D[d] = Number(value) || 0;
      else if (/^R\d+$/.test(d)) state.deviceMemory.R[d] = Number(value) || 0;
      else if (/^T\d+$/.test(d)) {
        const timer = state.deviceMemory.T[d] || { preset:0, current:0, done:false };
        timer.done = Boolean(value);
        if (!value) timer.current = 0;
        state.deviceMemory.T[d] = timer;
      } else if (/^C\d+$/.test(d)) {
        const counter = state.deviceMemory.C[d] || { preset:0, current:0, done:false };
        counter.done = Boolean(value);
        if (!value) counter.current = 0;
        state.deviceMemory.C[d] = counter;
      }
    }

    function deviceRange(start, end) {
      const a = String(start || '').toUpperCase().match(/^([A-Z]+)(\d+)$/);
      const b = String(end || '').toUpperCase().match(/^([A-Z]+)(\d+)$/);
      if (!a || !b || a[1] !== b[1]) return [];
      const radix = a[1] === 'X' || a[1] === 'Y' ? 8 : 10;
      const first = parseInt(a[2], radix);
      const last = parseInt(b[2], radix);
      if (!Number.isFinite(first) || !Number.isFinite(last) || last < first || last - first > 4096) return [];
      return Array.from({length:last - first + 1}, (_,index) => `${a[1]}${(first + index).toString(radix).toUpperCase()}`);
    }

    function toBcd(value) {
      const digits = Math.abs(Math.trunc(Number(value) || 0)).toString().slice(-4);
      return Number.parseInt(digits, 16) || 0;
    }

    function fromBcd(value) {
      const hex = Math.abs(Math.trunc(Number(value) || 0)).toString(16);
      return /^\d+$/.test(hex) ? Number(hex) : 0;
    }

    function readWordValue(token) {
      const t = String(token || '').toUpperCase();
      if (/^K-?\d+$/.test(t)) return Number(t.slice(1));
      if (/^H[0-9A-F]+$/.test(t)) return parseInt(t.slice(1), 16);
      if (/^D\d+$/.test(t)) return Number(state.deviceMemory.D[t] || 0);
      if (/^R\d+$/.test(t)) return Number(state.deviceMemory.R[t] || 0);
      if (/^M\d+$/.test(t)) return getDeviceValue(t) ? 1 : 0;
      if (isDeviceY(t)) return getDeviceValue(t) ? 1 : 0;
      return 0;
    }

    function evalComponentCondition(component) {
      if (!component) return false;
      if (component.kind === 'CONTACT') {
        const raw = getDeviceValue(component.device);
        const current = component.polarity === 'INVERSE' ? !raw : Boolean(raw);
        const previous = Boolean(state.simulator.previousInputs[component.id]);
        if (component.pulse === 'RISING') return current && !previous;
        if (component.pulse === 'FALLING') return !current && previous;
        return current;
      }
      if (component.kind === 'COMPARE') {
        const a = readWordValue(component.args[0]);
        const b = readWordValue(component.args[1]);
        switch (component.instruction) {
          case '<': return a < b;
          case '>': return a > b;
          case '=': return a === b;
          case '<=': return a <= b;
          case '>=': return a >= b;
          case '<>': return a !== b;
          case 'CMP': return a === b;
          default: return false;
        }
      }
      return false;
    }

    function evalExpr(expr) {
      if (!expr) return false;
      if (expr.type === 'TRUE') return true;
      if (expr.type === 'LEAF') return evalComponentCondition(expr.component);
      if (expr.type === 'AND') return expr.nodes.every(evalExpr);
      if (expr.type === 'OR') return expr.nodes.some(evalExpr);
      return false;
    }

    function resetSimulator() {
      state.simulator.scanCount = 0;
      state.simulator.elapsedMs = 0;
      state.simulator.lastClockToggleMs = 0;
      state.deviceMemory.special.M8000 = true;
      state.deviceMemory.special.M8002 = true;
      state.deviceMemory.special.M8013 = false;
      state.simulator.report = [];
      state.simulator.previousPower = {};
      state.simulator.previousInputs = {};
      updateStatus();
      if (dom.testReportBox) dom.testReportBox.textContent = '模擬器已重置。';
      renderDeviceWatchPanel();
    }

    function runOneScan() {
      if (!state.compile?.passed) {
        state.simulator.report.push('無法掃描：程式尚未成功編譯。');
        if (dom.testReportBox) dom.testReportBox.textContent = state.simulator.report.join('\n');
        return false;
      }

      state.simulator.scanCount += 1;
      state.simulator.elapsedMs += state.simulator.scanTimeMs;
      state.deviceMemory.special.M8000 = true;
      state.deviceMemory.special.M8002 = state.simulator.scanCount === 1;

      if (state.simulator.elapsedMs - state.simulator.lastClockToggleMs >= 1000) {
        state.deviceMemory.special.M8013 = !state.deviceMemory.special.M8013;
        state.simulator.lastClockToggleMs = state.simulator.elapsedMs;
      }

      const nodeGraph = buildNodeLevelGraph();
      const allOutputs = Object.values(state.components)
        .filter((c) => c.endCol === LAST_EDIT_COL && (c.kind === 'COIL' || c.output))
        .sort((a, b) => a.row - b.row || a.startCol - b.startCol);

      allOutputs.forEach(outComp => {
        const expr = extractOutputExpr(nodeGraph, outComp);
        const isPowerOn = evalExpr(expr);
        const wasPowerOn = Boolean(state.simulator.previousPower[outComp.id]);
        const rising = isPowerOn && !wasPowerOn;
        const falling = !isPowerOn && wasPowerOn;

        if (outComp.kind === 'COIL') {
          if (outComp.instruction === 'OUT') setDeviceValue(outComp.device, isPowerOn);
          else if (outComp.instruction === 'SET' && isPowerOn) setDeviceValue(outComp.device, true);
          else if (outComp.instruction === 'RST' && isPowerOn) setDeviceValue(outComp.device, false);
          else if (outComp.instruction === 'PLS') setDeviceValue(outComp.device, rising);
          else if (outComp.instruction === 'PLF') setDeviceValue(outComp.device, falling);
        } else if (outComp.output) {
          const baseInstruction = outComp.baseInstruction || (outComp.instruction === 'MOVP' || outComp.instruction === 'DMOV' ? 'MOV' : outComp.instruction);
          const pulseExecution = Boolean(outComp.pulse) || /P$/.test(outComp.instruction) && !['PLSR','PLSY','PWM','POP'].includes(outComp.instruction);
          const shouldExecute = isPowerOn && (!pulseExecution || rising);
          if (shouldExecute) {
            if (['MOV', 'MOVP', 'DMOV'].includes(outComp.instruction) || baseInstruction === 'MOV') {
              setDeviceValue(outComp.args[1], readWordValue(outComp.args[0]));
            } else if (['ADD', 'SUB', 'MUL', 'DIV'].includes(baseInstruction)) {
              const a = readWordValue(outComp.args[0]);
              const b = readWordValue(outComp.args[1]);
              const result = baseInstruction === 'ADD' ? a + b
                : baseInstruction === 'SUB' ? a - b
                : baseInstruction === 'MUL' ? a * b
                : (b === 0 ? 0 : Math.trunc(a / b));
              setDeviceValue(outComp.args[2], result);
            } else if (baseInstruction === 'INC') {
              setDeviceValue(outComp.args[0], readWordValue(outComp.args[0]) + 1);
            } else if (baseInstruction === 'DEC') {
              setDeviceValue(outComp.args[0], readWordValue(outComp.args[0]) - 1);
            } else if (baseInstruction === 'ZRST') {
              deviceRange(outComp.args[0], outComp.args[1]).forEach((device) => setDeviceValue(device, 0));
            } else if (baseInstruction === 'BMOV') {
              const count = Math.max(0, readWordValue(outComp.args[2]));
              const sources = deviceRange(outComp.args[0], outComp.args[0].replace(/\d+$/, (n) => String(Number(n) + count - 1)));
              const destinations = deviceRange(outComp.args[1], outComp.args[1].replace(/\d+$/, (n) => String(Number(n) + count - 1)));
              sources.forEach((source,index) => setDeviceValue(destinations[index], readWordValue(source)));
            } else if (baseInstruction === 'FMOV') {
              const count = Math.max(0, readWordValue(outComp.args[2]));
              const destinations = deviceRange(outComp.args[1], outComp.args[1].replace(/\d+$/, (n) => String(Number(n) + count - 1)));
              destinations.forEach((device) => setDeviceValue(device, readWordValue(outComp.args[0])));
            } else if (baseInstruction === 'XCH') {
              const a = readWordValue(outComp.args[0]);
              const b = readWordValue(outComp.args[1]);
              setDeviceValue(outComp.args[0], b);
              setDeviceValue(outComp.args[1], a);
            } else if (baseInstruction === 'BCD') {
              setDeviceValue(outComp.args[1], toBcd(readWordValue(outComp.args[0])));
            } else if (baseInstruction === 'BIN') {
              setDeviceValue(outComp.args[1], fromBcd(readWordValue(outComp.args[0])));
            } else if (baseInstruction === 'ALT' && rising) {
              setDeviceValue(outComp.args[0], !getDeviceValue(outComp.args[0]));
            } else if (outComp.instruction === 'OUT' && /^T\d+$/.test(outComp.device || '')) {
              const preset = readWordValue(outComp.args[1]);
              const timer = state.deviceMemory.T[outComp.device] || { preset, current: 0, done: false };
              timer.preset = preset;
              timer.current += state.simulator.scanTimeMs;
              timer.done = timer.current >= preset;
              state.deviceMemory.T[outComp.device] = timer;
            } else if (outComp.instruction === 'OUT' && /^C\d+$/.test(outComp.device || '') && rising) {
              const preset = readWordValue(outComp.args[1]);
              const counter = state.deviceMemory.C[outComp.device] || { preset, current: 0, done: false };
              counter.preset = preset;
              counter.current += 1;
              counter.done = counter.current >= preset;
              state.deviceMemory.C[outComp.device] = counter;
            }
          }
          if (!isPowerOn && outComp.instruction === 'OUT' && /^T\d+$/.test(outComp.device || '')) {
            const preset = readWordValue(outComp.args[1]);
            state.deviceMemory.T[outComp.device] = {preset, current:0, done:false};
          }
        }
        state.simulator.previousPower[outComp.id] = isPowerOn;
      });

      state.deviceMemory.special.M8002 = false;
      Object.values(state.components).filter((component) => component.kind === 'CONTACT').forEach((component) => {
        const raw = getDeviceValue(component.device);
        state.simulator.previousInputs[component.id] = component.polarity === 'INVERSE' ? !raw : Boolean(raw);
      });
      renderDeviceWatchPanel();

      state.simulator.report = [
        `Scan Count: ${state.simulator.scanCount}`,
        `Elapsed Time: ${state.simulator.elapsedMs} ms`,
        `M8000 (RUN): ON`,
        `M8002 (第一掃描): ${state.simulator.scanCount === 1 ? 'ON' : 'OFF'}`,
        `M8013 (1秒時脈): ${state.deviceMemory.special.M8013 ? 'ON' : 'OFF'}`
      ];
      if (dom.testReportBox) dom.testReportBox.textContent = state.simulator.report.join('\n');
      return true;
    }

    // ===== Device Watch UI =====
    function describeDevice(device) {
      const d = String(device || '').trim().toUpperCase();
      if (!d) return '請輸入裝置，例如 D0、M0、Y0、T0、C0、M8000';

      if (d === 'M8000') return `M8000\n類型：特殊輔助電驛\n說明：RUN 中常 ON\n目前值：${getDeviceValue(d) ? 'ON' : 'OFF'}`;
      if (d === 'M8002') return `M8002\n類型：特殊輔助電驛\n說明：第一掃描 ON\n目前值：${getDeviceValue(d) ? 'ON' : 'OFF'}`;
      if (d === 'M8013') return `M8013\n類型：特殊輔助電驛\n說明：1 秒時脈\n目前值：${getDeviceValue(d) ? 'ON' : 'OFF'}`;

      if (/^[XY]\d+$/.test(d) && !isDeviceX(d) && !isDeviceY(d)) return `${d}\n位址錯誤：X／Y 只能使用八進制數字 0～7。\n例如 X7 的下一點是 X10，Y17 的下一點是 Y20。`;
      if (isDeviceX(d)) return `${d}\n類型：輸入 X（八進制位址）\n目前值：${getDeviceValue(d) ? 'ON' : 'OFF'}`;
      if (isDeviceY(d)) return `${d}\n類型：輸出 Y（八進制位址）\n目前值：${getDeviceValue(d) ? 'ON' : 'OFF'}`;
      if (/^M\d+$/.test(d)) return `${d}\n類型：內部輔助 M\n目前值：${getDeviceValue(d) ? 'ON' : 'OFF'}`;
      if (/^S\d+$/.test(d)) return `${d}\n類型：步進 S\n目前值：${getDeviceValue(d) ? 'ON' : 'OFF'}`;
      if (/^D\d+$/.test(d)) return `${d}\n類型：資料暫存器 D\n目前值：${readWordValue(d)}`;
      if (/^R\d+$/.test(d)) return `${d}\n類型：檔案暫存器 R\n目前值：${readWordValue(d)}`;

      if (/^T\d+$/.test(d)) {
        const t = state.deviceMemory.T[d] || { preset: 0, current: 0, done: false };
        return `${d}\n類型：Timer\n目前值：${t.current}\n設定值：${t.preset}\n完成位：${t.done ? 'ON' : 'OFF'}`;
      }

      if (/^C\d+$/.test(d)) {
        const c = state.deviceMemory.C[d] || { preset: 0, current: 0, done: false };
        return `${d}\n類型：Counter\n目前值：${c.current}\n設定值：${c.preset}\n完成位：${c.done ? 'ON' : 'OFF'}`;
      }

      return `不支援或格式錯誤：${d}`;
    }

    function getWatchedDeviceName() {
      return (dom.deviceSearchInput?.value || '').trim().toUpperCase();
    }

    function renderDeviceWatchPanel() {
      if (!dom.deviceWatchBox) return;
      dom.deviceWatchBox.textContent = describeDevice(getWatchedDeviceName());
    }

    function toggleWatchedDevice() {
      const d = getWatchedDeviceName();
      if (!isDeviceX(d) && !isDeviceY(d) && !/^(M|S)\d+$/.test(d)) {
        if (dom.deviceWatchBox) dom.deviceWatchBox.textContent = '只有 X/Y/M/S bit 裝置可切換 ON/OFF。';
        return;
      }
      setDeviceValue(d, !getDeviceValue(d));
      renderDeviceWatchPanel();
    }

    function writeWatchedDevice() {
      const d = getWatchedDeviceName();
      const raw = dom.deviceValueInput?.value || '';
      if (/^(D|R)\d+$/.test(d)) {
        setDeviceValue(d, Number(raw) || 0);
      } else if (isDeviceX(d) || isDeviceY(d) || /^(M|S)\d+$/.test(d)) {
        setDeviceValue(d, raw === '1' || raw.toUpperCase() === 'ON' || raw.toUpperCase() === 'TRUE');
      } else {
        if (dom.deviceWatchBox) dom.deviceWatchBox.textContent = '此裝置暫不支援寫入。';
        return;
      }
      renderDeviceWatchPanel();
    }

    // ===== Core Editor Logic =====
    function createCell(row, col) {
      return {
        row,
        col,
        componentId: null,
        partIndex: 0,
        wires: { left: false, right: false, up: false, down: false },
        errorCode: null
      };
    }

    function createRows(count) {
      const rows = [];
      for (let r = 0; r < count; r += 1) {
        const row = [];
        for (let c = 0; c < COLS; c += 1) row.push(createCell(r, c));
        rows.push(row);
      }
      return rows;
    }

    function resetErrors() {
      state.issues = [];
      state.cells.forEach((row) => row.forEach((cell) => { cell.errorCode = null; }));
    }

    function addIssue(issue) {
      const normalized = {
        code: issue.code || 'E000',
        message: issue.message || '未知錯誤',
        row: Number.isInteger(issue.row) ? issue.row : state.cursor.row,
        col: Number.isInteger(issue.col) ? issue.col : state.cursor.col,
        suggestion: issue.suggestion || ''
      };
      state.issues.push(normalized);
      const cell = getCell(normalized.row, normalized.col);
      if (cell) cell.errorCode = normalized.code;
    }

    function setValidation(tool, official, functional, reversePassed = false) {
      state.validation.tool = tool;
      state.validation.official = official;
      state.validation.function = functional;
      state.validation.reversePassed = reversePassed;
    }

    function summarizeLayerChecks() {
      const counts = { syntax: 0, topology: 0, semantic: 0 };
      state.issues.forEach((issue) => {
        if (/^E00\d$/.test(issue.code)) counts.syntax += 1;
        else if (/^E1\d\d$/.test(issue.code) || /^E2\d\d$/.test(issue.code)) counts.topology += 1;
        else counts.semantic += 1;
      });
      return [
        `Layer 1 語法: ${counts.syntax ? `失敗 (${counts.syntax})` : '通過'}`,
        `Layer 2 型別: ${counts.syntax ? '需人工確認' : '通過'}`,
        `Layer 3 拓樸: ${counts.topology ? `失敗 (${counts.topology})` : '通過'}`,
        `Layer 4 語意: ${counts.semantic ? `警告 (${counts.semantic})` : '通過'}`,
        `Layer 5 IL逆向: ${state.validation.reversePassed ? '通過' : '未通過'}`,
        `Layer 6 功能測試: ${state.validation.function}`,
        `總錯誤數: ${state.issues.length}`
      ].join('\n');
    }

    function parseIlOutputLine(line) {
      const text = String(line || '').trim();
      if (!text) return null;
      const parts = text.split(/\s+/);
      const opcode = parts[0];
      if (['OUT', 'SET', 'RST', 'PLS', 'PLF'].includes(opcode) && parts.length >= 2) {
        return { instruction: opcode, device: parts[1] };
      }
      const meta = INSTRUCTION_DB[opcode];
      if (meta?.outputSide) return { instruction: opcode, device: parts.length > 1 ? (parts[parts.length - 1] || '') : '' };
      if (opcode === 'ZCP' && parts.length >= 5) return { instruction: opcode, device: parts[4] };
      return null;
    }

    function reverseCheckOutputs(ilLines, outputs) {
      const ilOutputs = ilLines.map(parseIlOutputLine).filter(Boolean);
      const compOutputs = outputs.map((c) => ({
        instruction: c.kind === 'COIL' ? (c.instruction || 'OUT') : c.instruction,
        device: c.device || c.args[c.args.length - 1] || ''
      }));

      if (ilOutputs.length !== compOutputs.length) {
        return { passed: false, reason: `IL輸出數量(${ilOutputs.length})與圖面輸出數量(${compOutputs.length})不一致` };
      }
      for (let i = 0; i < ilOutputs.length; i += 1) {
        if (ilOutputs[i].instruction !== compOutputs[i].instruction || ilOutputs[i].device !== compOutputs[i].device) {
          return { passed: false, reason: `第${i + 1}筆輸出不一致: IL(${ilOutputs[i].instruction} ${ilOutputs[i].device}) vs 圖面(${compOutputs[i].instruction} ${compOutputs[i].device})` };
        }
      }
      return { passed: true, reason: 'IL 輸出序列與圖面一致' };
    }

    function runFunctionalTests() {
      if (!state.compile.passed) compileProgram();
      const report = [];
      const lines = (state.il || '').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
      const hasEnd = lines[lines.length - 1] === 'END';
      const hasOutput = lines.some((line) => Boolean(parseIlOutputLine(line)));
      const noToolError = !state.issues.some((x) => /^E00\d$/.test(x.code));
      const noTopoError = !state.issues.some((x) => /^E1\d\d$/.test(x.code) || /^E2\d\d$/.test(x.code));

      report.push(`[${hasEnd ? 'PASS' : 'FAIL'}] 程式結尾 END`);
      report.push(`[${hasOutput ? 'PASS' : 'FAIL'}] 至少一個輸出步階`);
      report.push(`[${noToolError ? 'PASS' : 'FAIL'}] 工具層語法檢查`);
      report.push(`[${noTopoError ? 'PASS' : 'FAIL'}] 拓樸檢查`);
      report.push(`[${state.validation.reversePassed ? 'PASS' : 'FAIL'}] IL逆向一致性`);

      const passed = hasEnd && hasOutput && noToolError && noTopoError && state.validation.reversePassed;
      state.validation.function = passed ? '通過' : '失敗';
      if (dom.testReportBox) dom.testReportBox.textContent = report.join('\n');
      updateStatus();
      return passed;
    }

    function isLabelToken(token) {
      return /^[A-Z_][A-Z0-9_]*$/.test(token)
        && !/^(?:X|Y|M|S|T|C|D|R|V|Z|P|I|N|TC)\d+$/.test(token)
        && !/^K-?\d+$/.test(token)
        && !/^H[0-9A-F]+$/.test(token);
    }

    function resolveLabelOrDevice(token) {
      const upper = token.toUpperCase();
      if (state.labelTable[upper]) {
        return { token: upper, resolved: state.labelTable[upper].device, isLabel: true, label: upper, type: state.labelTable[upper].type };
      }
      return { token: upper, resolved: upper, isLabel: false, label: null, type: null };
    }

    function isDeviceX(v) { return /^X[0-7]+$/.test(v); }
    function isDeviceY(v) { return /^Y[0-7]+$/.test(v); }
    function isDeviceM(v) { return /^M\d+$/.test(v); }
    function isDeviceD(v) { return /^D\d+$/.test(v); }
    function isDeviceT(v) { return /^T\d+$/.test(v); }
    function isDeviceC(v) { return /^C\d+$/.test(v); }
    function isDeviceS(v) { return /^S\d+$/.test(v); }
    function isDeviceR(v) { return /^R\d+$/.test(v); }
    function isDeviceV(v) { return /^V\d+$/.test(v); }
    function isDeviceZ(v) { return /^Z\d+$/.test(v); }
    function isDeviceTC(v) { return /^TC\d+$/.test(v); }
    function isSpecialM(v) { return /^M8\d{3}$/.test(v); }
    function isConstK(v) { return /^K-?\d+$/.test(v); }
    function isConstH(v) { return /^H[0-9A-F]+$/.test(v); }

    function isTimerCounterRef(v) {
      return /^TC\d+$/.test(v) || /^T\d+$/.test(v) || /^C\d+$/.test(v);
    }

    function isContactDevice(v) {
      return isDeviceX(v) || isDeviceY(v) || isDeviceM(v) || isDeviceS(v) || isDeviceT(v) || isDeviceC(v) || isSpecialM(v);
    }

    function isCoilDevice(v) {
      return isDeviceY(v) || isDeviceM(v) || isDeviceS(v) || isDeviceT(v) || isDeviceC(v);
    }

    function validateOperand(rawToken, accepted, allowLabel = true) {
      const info = resolveLabelOrDevice(rawToken);
      const token = info.resolved;
      if (/^[XY]\d+$/.test(token) && !isDeviceX(token) && !isDeviceY(token)) {
        return { ok:false, error:`位址 ${token} 不合法：X／Y 裝置只能使用八進制數字 0～7。`, code:'E305', suggestion:`請改用八進制位址，例如 ${token[0]}7 的下一點是 ${token[0]}10。` };
      }
      if (allowLabel && isLabelToken(rawToken.toUpperCase()) && !info.isLabel) {
        return { ok: false, error: `找不到標籤 ${rawToken.toUpperCase()}，請先建立標籤或改用 D 裝置。`, code: 'E301', suggestion: '請確認標籤名稱或改用 D0 類型裝置。' };
      }
      if (accepted.includes('CONTACT') && isContactDevice(token)) return { ok: true, value: token, source: info };
      if (accepted.includes('COIL') && isCoilDevice(token)) return { ok: true, value: token, source: info };
      if (accepted.includes('D') && isDeviceD(token)) return { ok: true, value: token, source: info };
      if (accepted.includes('R') && isDeviceR(token)) return { ok: true, value: token, source: info };
      if (accepted.includes('K') && isConstK(token)) return { ok: true, value: token, source: info };
      if (accepted.includes('H') && isConstH(token)) return { ok: true, value: token, source: info };
      if (accepted.includes('WORD') && (isDeviceD(token) || isDeviceR(token) || isDeviceV(token) || isDeviceZ(token) || isDeviceM(token) || isDeviceY(token) || isConstK(token) || isConstH(token))) return { ok: true, value: token, source: info };
      if (accepted.includes('TC') && isDeviceTC(token)) return { ok: true, value: token, source: info };
      return { ok: false, error: `參數格式錯誤：${rawToken.toUpperCase()} 不符合 ${accepted.join('/')}。`, code: 'E302', suggestion: '請改用合法的裝置或常數格式。' };
    }

    function tokenizeInstruction(raw) {
      return (String(raw || '').match(/"[^"]*"|'[^']*'|[^\s]+/g) || [])
        .map((token) => (/^['"]/.test(token) ? token : token.toUpperCase()));
    }

    function resolveFx3uInstruction(opcode) {
      const exact = INSTRUCTION_DB[opcode];
      if (exact && exact.supported !== false) return { opcode, base: opcode, meta: exact, doubleWord: false, pulse: false };

      // FX 應用指令可依適用表使用 D（32 位元）與 P（脈衝執行）修飾。
      // 先找 D+P，再找單一修飾；真正的 D 開頭指令會在上方 exact 優先命中。
      const candidates = [];
      if (opcode.startsWith('D') && opcode.endsWith('P') && opcode.length > 2) {
        candidates.push({ base: opcode.slice(1, -1), doubleWord: true, pulse: true });
      }
      if (opcode.endsWith('P') && opcode.length > 1) candidates.push({ base: opcode.slice(0, -1), doubleWord: false, pulse: true });
      if (opcode.startsWith('D') && opcode.length > 1) candidates.push({ base: opcode.slice(1), doubleWord: true, pulse: false });

      for (const candidate of candidates) {
        const meta = INSTRUCTION_DB[candidate.base];
        if (meta?.fx3u && meta.family === 'FUNCTION' && meta.supported !== false) {
          return { opcode, ...candidate, meta };
        }
      }
      return null;
    }

    function validateFx3uGenericOperand(rawToken) {
      const token = String(rawToken || '').toUpperCase();
      if (/^[XY]\d+$/.test(token) && !isDeviceX(token) && !isDeviceY(token)) {
        return { ok:false, error:`位址 ${token} 不合法：X／Y 裝置只能使用八進制數字 0～7。`, code:'E305', suggestion:`請改用八進制位址，例如 ${token[0]}7 的下一點是 ${token[0]}10。` };
      }
      if (/^['"][\s\S]*['"]$/.test(rawToken)) return { ok:true, value:rawToken };
      if (/^-?\d+(?:\.\d+)?$/.test(token)) return { ok:true, value:token };
      if (/^E-?\d+(?:\.\d+)?$/.test(token)) return { ok:true, value:token };
      if (/^(?:K-?\d+|H[0-9A-F]+)$/.test(token)) return { ok:true, value:token };
      if (/^K[1-8](?:X[0-7]+|Y[0-7]+|M\d+|S\d+)$/.test(token)) return { ok:true, value:token };
      if (/^(?:X[0-7]+|Y[0-7]+|M\d+|S\d+|T\d+|C\d+|D\d+|R\d+|V\d+|Z\d+|P\d+|I\d+|N\d+)(?:[VZ]\d+)?(?:\.\d+)?$/.test(token)) return { ok:true, value:token };
      if (/^U[0-9A-F]+\\G\d+$/.test(token)) return { ok:true, value:token };
      if (/^@[DR]\d+$/.test(token)) return { ok:true, value:token };
      if (/^[A-Z_$][A-Z0-9_.$:+\-]*$/.test(token)) return { ok:true, value:token };
      return { ok:false, error:`FX3U 參數格式錯誤：${rawToken}。`, code:'E332', suggestion:'請使用裝置、常數、指標、標籤或字串參數；X／Y 位址必須為八進制。' };
    }

    function parseGenericFx3uInstruction(resolved, args) {
      const { opcode, base, meta, doubleWord, pulse } = resolved;
      const min = Number.isInteger(meta.arity) ? meta.arity : (meta.minArity ?? 0);
      const max = Number.isInteger(meta.arity) ? meta.arity : (meta.maxArity ?? 8);
      if (args.length < min || args.length > max) {
        const expected = min === max ? `${min} 個` : `${min}～${max} 個`;
        return { error:`錯誤：${opcode} 需要 ${expected}參數，目前輸入 ${args.length} 個。`, code:'E331', suggestion:`請依 FX3U 手冊確認 ${base} 的運算元數量與裝置範圍。` };
      }
      const checked = [];
      for (const arg of args) {
        const result = validateFx3uGenericOperand(arg);
        if (!result.ok) return result;
        checked.push(result.value);
      }
      return {
        kind:'FUNCTION', display:[opcode, ...checked].join(' '), instruction:opcode, baseInstruction:base,
        args:checked, span:Math.min(4, Math.max(2, checked.length + 1)), output:true, alignRight:true,
        polarity:'NORMAL', fx3u:true, doubleWord, pulse, simulated:Boolean(meta.simulated)
      };
    }

    function parseInstruction(text, context = {}) {
      const raw = text.trim();
      if (!raw) return { error: '請輸入內容。', code: 'E000', suggestion: '請輸入例如 X0、Y0、MOV D0 D1。' };
      const tokens = tokenizeInstruction(raw);
      const [first, ...rest] = tokens;

      if (/^[XY]\d+$/.test(first) && !isDeviceX(first) && !isDeviceY(first)) {
        return { error:`位址 ${first} 不合法：X／Y 裝置只能使用八進制數字 0～7。`, code:'E305', suggestion:`請改用八進制位址，例如 ${first[0]}7 的下一點是 ${first[0]}10。` };
      }
      if (/^\/[XY]\d+$/.test(first)) {
        const device = first.slice(1);
        if (!isDeviceX(device) && !isDeviceY(device)) return { error:`位址 ${device} 不合法：X／Y 裝置只能使用八進制數字 0～7。`, code:'E305', suggestion:`請改用八進制位址，例如 ${device[0]}7 的下一點是 ${device[0]}10。` };
      }

      const resolvedInstruction = resolveFx3uInstruction(first);
      const meta = resolvedInstruction?.meta || INSTRUCTION_DB[first];
      if (meta && meta.supported === false) {
        return { error: `指令 ${first} 已登錄但目前尚未實作 parser。`, code: 'E330', suggestion: '請改用目前已支援的指令，或等待後續支援。' };
      }

      const forceCoil = context.tool === 'COIL';
      const forceNcContact = context.tool === 'CONTACT_NC';

      if (first === 'OP') {
        if (rest.length !== 1) return { error: 'OP 需要 1 個接點參數，例如 OP X3。', code: 'E022', suggestion: '請使用 OP X3。' };
        const op = validateOperand(rest[0], ['CONTACT']);
        if (!op.ok) return op;
        return { kind: 'MACRO', macro: 'OP_BRANCH', display: `OP ${op.value}`, instruction: 'OP', device: op.value, args: [op.value], span: 1, output: false, polarity: 'NORMAL' };
      }

      if (first === 'STL') {
        if (rest.length !== 1 || !isDeviceS(rest[0])) return { error:'STL 需要 1 個步進狀態裝置，例如 STL S0。', code:'E333', suggestion:'請使用 STL S0；步進狀態只能使用 S 裝置。' };
        return { kind:'CONTACT', display:`STL ${rest[0]}`, device:rest[0], instruction:'STL', args:[rest[0]], span:1, output:false, polarity:'NORMAL', step:true, simulated:true };
      }

      if (/^\/(X|M|T|C)\d+$/.test(first)) {
        return { kind: 'CONTACT', display: first, device: first.slice(1), instruction: 'LDI', args: [first.slice(1)], span: 1, output: false, polarity: 'INVERSE' };
      }

      if (isDeviceY(first)) {
        return { kind: 'COIL', display: first, device: first, instruction: 'OUT', args: [first], span: 1, output: true, polarity: 'NORMAL' };
      }

      if (isDeviceT(first) || isDeviceC(first)) {
        if (rest.length === 1) {
          const preset = validateOperand(rest[0], ['K', 'H', 'D']);
          if (!preset.ok) return preset;
          return { kind: 'FUNCTION', display: `OUT ${first} ${preset.value}`, instruction: 'OUT', device: first, args: [first, preset.value], span: 3, output: true, alignRight: true, polarity: 'NORMAL' };
        }
        if (rest.length > 1) return { error: `${first} 後方參數數量不正確。`, code: 'E023', suggestion: `請用 ${first} K10 (輸出) 或單獨 ${first} (接點)。` };
        return { kind: 'CONTACT', display: first, device: first, instruction: 'LD', args: [first], span: 1, output: false, polarity: 'NORMAL' };
      }

      if (isDeviceX(first) || isDeviceM(first)) {
        if (rest.length > 0) return { error: `${first} 不接受額外參數。`, code: 'E024', suggestion: '請刪除多餘參數，或改用功能指令。' };
        if (forceCoil && isDeviceX(first)) return { error: 'X 裝置不可作為輸出線圈。', code: 'E210', suggestion: '請改用 Y 或 M 裝置。' };
        if (forceCoil && !isCoilDevice(first)) return { error: '此裝置不可作為輸出線圈。', code: 'E211', suggestion: '請使用 Y0 或 M0。' };
        if (forceCoil) return { kind: 'COIL', display: first, device: first, instruction: 'OUT', args: [first], span: 1, output: true, polarity: 'NORMAL' };
        return { kind: 'CONTACT', display: forceNcContact ? `LDI ${first}` : first, device: first, instruction: forceNcContact ? 'LDI' : 'LD', args: [first], span: 1, output: false, polarity: forceNcContact ? 'INVERSE' : 'NORMAL' };
      }

      if (isDeviceD(first)) {
        return { error: '資料暫存器 D 不能單獨作為接點或輸出。', code: 'E008', suggestion: '請將 D 裝置放在 MOV、比較或運算指令中。' };
      }

      if (SUPPORTED_INSTRUCTIONS.CONTACT.includes(first)) {
        if (rest.length !== 1) return { error: `錯誤：${first} 指令需要 1 個參數，例如 ${first} X0。`, code: 'E002', suggestion: '請輸入單一接點裝置，例如 X0。' };
        const op = validateOperand(rest[0], ['CONTACT']);
        if (!op.ok) return op;
        const polarity = ['LDI', 'ANI', 'ORI'].includes(first) ? 'INVERSE' : 'NORMAL';
        const pulse = (first === 'LDP' || first === 'ANDP' || first === 'ANP' || first === 'ORP') ? 'RISING' : ((first === 'LDF' || first === 'ANDF' || first === 'ANF' || first === 'ORF') ? 'FALLING' : null);
        return { kind: 'CONTACT', display: `${first} ${op.value}`, device: op.value, instruction: first, args: [op.value], span: 1, output: false, polarity, pulse };
      }

      const prefixedCompareMatch = first.match(/^(LD|AND|OR)(<=|>=|<>|<|>|=)$/);
      if (prefixedCompareMatch) {
        if (rest.length !== 2) return { error: `錯誤：${first} 需要兩個參數，例如 ${first} D0 D9。`, code: 'E006', suggestion: `請使用 ${first} D0 D9。` };
        const a = validateOperand(rest[0], ['WORD', 'K', 'H']);
        const b = validateOperand(rest[1], ['WORD', 'K', 'H']);
        if (!a.ok) return a;
        if (!b.ok) return b;
        const compareOp = prefixedCompareMatch[2];
        return { kind: 'COMPARE', display: `${first} ${a.value} ${b.value}`, instruction: compareOp, args: [a.value, b.value], span: 3, output: false, polarity: 'NORMAL', compileMode: prefixedCompareMatch[1] };
      }

      if (first === 'ZCP') {
        if (rest.length !== 4) return { error: '錯誤：ZCP 需要 4 個參數，例如 ZCP D0 D10 K100 D20。', code: 'E322', suggestion: '請輸入 ZCP S1 S2 S3 D。' };
        const s1 = validateOperand(rest[0], ['WORD', 'K', 'H']);
        const s2 = validateOperand(rest[1], ['WORD', 'K', 'H']);
        const s3 = validateOperand(rest[2], ['WORD', 'K', 'H']);
        const d = validateOperand(rest[3], ['D', 'R']);
        if (!s1.ok) return s1;
        if (!s2.ok) return s2;
        if (!s3.ok) return s3;
        if (!d.ok) return d;
        // Forced to FUNCTION block output
        return { kind: 'FUNCTION', display: `ZCP ${s1.value} ${s2.value} ${s3.value} ${d.value}`, instruction: 'ZCP', args: [s1.value, s2.value, s3.value, d.value], span: 4, output: true, alignRight: true, polarity: 'NORMAL' };
      }

      if (first === 'OUT' && rest.length === 2) {
        const timerToken = rest[0].toUpperCase();
        if (!isTimerCounterRef(timerToken)) {
          return { error: 'OUT 雙參數格式僅允許 T/C/TC 裝置。', code: 'E029', suggestion: '請使用 OUT T0 K100 或 OUT C0 K10。' };
        }
        const preset = validateOperand(rest[1], ['K', 'H', 'D']);
        if (!preset.ok) return preset;
        return { kind: 'FUNCTION', display: `OUT ${timerToken} ${preset.value}`, instruction: 'OUT', device: timerToken, args: [timerToken, preset.value], span: 3, output: true, alignRight: true, polarity: 'NORMAL' };
      }

      if (first === 'OUT' || first === 'SET' || first === 'RST' || first === 'PLS' || first === 'PLF') {
        if (rest.length !== 1) return { error: `錯誤：${first} 指令需要 1 個輸出裝置，例如 ${first} Y0。`, code: 'E003', suggestion: '請輸入 OUT Y0 或 OUT M0。' };
        const accepted = first === 'RST' ? ['COIL', 'CONTACT'] : ['COIL'];
        const op = validateOperand(rest[0], accepted);
        if (!op.ok && op.code === 'E305') return op;
        if (!op.ok) return { error: `錯誤：${first} 裝置型別不合法。`, code: 'E212', suggestion: first === 'RST' ? 'RST 可使用 Y/M/S/T/C。' : '請改用 Y 或 M 裝置。' };
        if (isDeviceX(op.value) || isDeviceD(op.value)) return { error: `${first} 參數不合法：${op.value}。`, code: 'E213', suggestion: first === 'RST' ? 'RST 不可接 X 或 D。' : `${first} 只能接 Y/M 裝置。` };
        return { kind: 'COIL', display: `${first} ${op.value}`, device: op.value, instruction: first, args: [op.value], span: 1, output: true, polarity: 'NORMAL' };
      }

      if (first === 'MOV' || first === 'MOVP' || first === 'DMOV') {
        if (rest.length !== 2) return { error: `錯誤：${first} 指令需要兩個參數，例如 ${first} D0 D1。`, code: 'E004', suggestion: `請使用 ${first} D0 D1 或 ${first} K10 D0。` };
        const src = validateOperand(rest[0], ['WORD', 'K', 'H']);
        if (!src.ok) return src;
        const dst = validateOperand(rest[1], ['D', 'COIL']);
        if (!dst.ok) return dst;
        return { kind: 'FUNCTION', display: `${first} ${src.value} ${dst.value}`, instruction: first, args: [src.value, dst.value], span: 3, output: true, alignRight: true, polarity: 'NORMAL' };
      }

      if (['ADD', 'SUB', 'MUL', 'DIV'].includes(first)) {
        if (rest.length !== 3) return { error: `錯誤：${first} 需要 3 個參數，例如 ${first} D0 D1 D2。`, code: 'E320', suggestion: `請使用 ${first} D0 D1 D2。` };
        const a = validateOperand(rest[0], ['WORD', 'K', 'H']);
        const b = validateOperand(rest[1], ['WORD', 'K', 'H']);
        const dst = validateOperand(rest[2], ['D']);
        if (!a.ok) return a;
        if (!b.ok) return b;
        if (!dst.ok) return dst;
        return { kind: 'FUNCTION', display: `${first} ${a.value} ${b.value} ${dst.value}`, instruction: first, args: [a.value, b.value, dst.value], span: 4, output: true, alignRight: true, polarity: 'NORMAL' };
      }

      if (first === 'INC' || first === 'DEC') {
        if (rest.length !== 1) return { error: `錯誤：${first} 需要 1 個參數。`, code: 'E321', suggestion: `${first} D0` };
        const op = validateOperand(rest[0], ['D']);
        if (!op.ok) return op;
        return { kind: 'FUNCTION', display: `${first} ${op.value}`, instruction: first, args: [op.value], span: 2, output: true, alignRight: true, polarity: 'NORMAL' };
      }

      if (first === 'OUT_T' || first === 'TMR' || first === 'CNT') {
        if (rest.length !== 2) return { error: `錯誤：${first} 需要兩個參數，例如 ${first} T0 K10。`, code: 'E005', suggestion: `請使用 ${first} T0 K10。` };
        const timerToken = rest[0].toUpperCase();
        if (!isTimerCounterRef(timerToken)) {
          return { error: `錯誤：${first} 第一參數需為 T/C/TC 裝置。`, code: 'E025', suggestion: `請使用 ${first} T0 K10 或 ${first} C0 K10。` };
        }
        const preset = validateOperand(rest[1], ['K', 'H', 'D']);
        if (!preset.ok) return preset;
        return { kind: 'FUNCTION', display: `OUT ${timerToken} ${preset.value}`, instruction: 'OUT', device: timerToken, args: [timerToken, preset.value], span: 3, output: true, alignRight: true, polarity: 'NORMAL' };
      }

      if (first === 'CMP') {
        if (rest.length === 3) return parseGenericFx3uInstruction({ opcode:'CMP', base:'CMP', meta:{...INSTRUCTION_DB.CMP, arity:3, simulated:false}, doubleWord:false, pulse:false }, rest);
        if (rest.length !== 2) return { error: 'CMP 接點格式需要 2 個參數；FX3U 比較輸出格式需要 3 個參數。', code: 'E006', suggestion: '請使用 CMP D0 D9，或 CMP D0 D9 M0。' };
        const a = validateOperand(rest[0], ['WORD', 'K', 'H']);
        const b = validateOperand(rest[1], ['WORD', 'K', 'H']);
        if (!a.ok) return a;
        if (!b.ok) return b;
        return { kind: 'COMPARE', display: `CMP ${a.value} ${b.value}`, instruction: 'CMP', args: [a.value, b.value], span: 3, output: false, polarity: 'NORMAL' };
      }

      if (['<', '>', '=', '<=', '>=', '<>'].includes(first)) {
        if (rest.length !== 2) return { error: '錯誤：比較指令需要兩個參數，例如 < D0 D9。', code: 'E006', suggestion: '請使用 < D0 D9。' };
        const a = validateOperand(rest[0], ['WORD', 'K', 'H']);
        const b = validateOperand(rest[1], ['WORD', 'K', 'H']);
        if (!a.ok) return a;
        if (!b.ok) return b;
        return { kind: 'COMPARE', display: `${first} ${a.value} ${b.value}`, instruction: first, args: [a.value, b.value], span: 3, output: false, polarity: 'NORMAL' };
      }

      if (first === 'END') {
        return { error: 'END 由系統自動維護，不需手動輸入。', code: 'E112', suggestion: '請直接編輯階梯圖內容，系統會自動維持 END。' };
      }

      if (resolvedInstruction?.meta?.fx3u) {
        return parseGenericFx3uInstruction(resolvedInstruction, rest);
      }

      if (first === 'MV') return { error: '錯誤：不存在的指令 MV，是否要輸入 MOV？', code: 'E001', suggestion: '請改為 MOV。' };
      return { error: `錯誤：不存在的指令 ${first}。`, code: 'E001', suggestion: '請輸入 X0、Y0、M0、MOV D0 D1、< D0 D9。' };
    }

    function saveSnapshot() {
      state.history.undo.push(JSON.stringify({
        rows: state.rows,
        cells: state.cells,
        components: state.components,
        rungs: state.rungs,
        graph: state.graph,
        cursor: state.cursor,
        tool: state.tool,
        issues: state.issues,
        il: state.il,
        compile: state.compile,
        compiled: state.compiled,
        componentCounter: state.componentCounter,
        labelTable: state.labelTable
      }));
      if (state.history.undo.length > 100) state.history.undo.shift();
      state.history.redo = [];
    }

    function restoreSnapshot(snapshotText) {
      const snapshot = JSON.parse(snapshotText);
      state.rows = snapshot.rows;
      state.cells = snapshot.cells;
      state.components = snapshot.components;
      state.rungs = snapshot.rungs || [];
      state.graph = snapshot.graph || {};
      state.cursor = snapshot.cursor;
      state.tool = snapshot.tool;
      state.issues = snapshot.issues || [];
      state.il = snapshot.il || 'END';
      state.compile = snapshot.compile || { attempted: false, passed: false, fatal: false, warning: false, lastMessage: '' };
      state.compiled = Boolean(snapshot.compiled);
      state.componentCounter = snapshot.componentCounter || 0;
      state.labelTable = snapshot.labelTable || state.labelTable;
      ensureCellShape();
      ensureEndRow();
      render();
      showOutput();
    }

    function undo() {
      if (!state.history.undo.length) return;
      state.history.redo.push(JSON.stringify({
        rows: state.rows,
        cells: state.cells,
        components: state.components,
        rungs: state.rungs,
        graph: state.graph,
        cursor: state.cursor,
        tool: state.tool,
        issues: state.issues,
        il: state.il,
        compile: state.compile,
        compiled: state.compiled,
        componentCounter: state.componentCounter,
        labelTable: state.labelTable
      }));
      restoreSnapshot(state.history.undo.pop());
    }

    function redo() {
      if (!state.history.redo.length) return;
      state.history.undo.push(JSON.stringify({
        rows: state.rows,
        cells: state.cells,
        components: state.components,
        rungs: state.rungs,
        graph: state.graph,
        cursor: state.cursor,
        tool: state.tool,
        issues: state.issues,
        il: state.il,
        compile: state.compile,
        compiled: state.compiled,
        componentCounter: state.componentCounter,
        labelTable: state.labelTable
      }));
      restoreSnapshot(state.history.redo.pop());
    }

    function ensureCellShape() {
      state.cells.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          cell.row = rowIndex;
          cell.col = colIndex;
          if (!cell.wires) cell.wires = { left: false, right: false, up: false, down: false };
          if (!Object.prototype.hasOwnProperty.call(cell, 'componentId')) cell.componentId = null;
          if (!Object.prototype.hasOwnProperty.call(cell, 'partIndex')) cell.partIndex = 0;
          if (!Object.prototype.hasOwnProperty.call(cell, 'errorCode')) cell.errorCode = null;
        });
      });
    }

    function ensureEndRow() {
      while (state.cells.length < state.rows + 1) {
        const row = [];
        for (let c = 0; c < COLS; c += 1) row.push(createCell(state.cells.length, c));
        state.cells.push(row);
      }
      if (state.cells.length > state.rows + 1) {
        state.cells = state.cells.slice(0, state.rows + 1);
      }
      ensureCellShape();
      for (let r = 0; r < state.cells.length; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
          const cell = state.cells[r][c];
          if (cell.componentId === END_ID) {
            cell.componentId = null;
            cell.partIndex = 0;
          }
        }
      }
      const endRow = state.rows;
      const endCell = state.cells[endRow][COLS - 1];
      endCell.componentId = END_ID;
      endCell.partIndex = 0;
    }

    function init(options = {}) {
      const preserveHistory = Boolean(options.preserveHistory);
      state.cells = createRows(state.rows + 1);
      state.components = {};
      state.cursor = { row: 0, col: 1 };
      state.issues = [];
      state.il = 'END';
      state.compile = { attempted: false, passed: false, fatal: false, warning: false, lastMessage: '' };
      state.compiled = false;
      setValidation('未檢查', '未驗證', '未測試', false);
      state.componentCounter = 0;
      state.rungs = [];
      state.graph = {};
      if (!preserveHistory) state.history = { undo: [], redo: [] };
      ensureEndRow();
      render();
      showOutput();
    }

    function getCell(row, col) {
      return state.cells[row]?.[col] || null;
    }

    function setCursor(row, col) {
      const nextRow = Math.max(0, Math.min(state.rows - 1, row));
      const nextCol = Math.max(FIRST_EDIT_COL, Math.min(LAST_EDIT_COL, col));
      state.cursor = { row: nextRow, col: nextCol };
      updateStatus();
      render();
    }

    function ensureRowSpace(force = false) {
      const nearBottom = state.cursor.row >= state.rows - 2;
      if (!force && !nearBottom) return false;
      saveSnapshot();
      state.rows += 1;
      state.cells.splice(state.rows - 1, 0, createRows(1)[0]);
      ensureEndRow();
      state.compile.attempted = false;
      state.compiled = false;
      return true;
    }

    function componentFromCell(cell) {
      if (!cell?.componentId) return null;
      if (cell.componentId === END_ID) return { id: END_ID, kind: 'END', row: state.rows, startCol: COLS - 1, span: 1, args: [] };
      return state.components[cell.componentId] || null;
    }

    function clearCellAndNeighbors(row, col) {
      const cell = getCell(row, col);
      if (!cell) return;
      const links = [
        ['left', row, col - 1, 'right'],
        ['right', row, col + 1, 'left'],
        ['up', row - 1, col, 'down'],
        ['down', row + 1, col, 'up']
      ];
      links.forEach(([selfDir, nr, nc, otherDir]) => {
        if (cell.wires[selfDir]) {
          const n = getCell(nr, nc);
          if (n) n.wires[otherDir] = false;
        }
      });
      cell.wires = { left: false, right: false, up: false, down: false };
    }

    function removeComponentById(componentId) {
      if (!componentId || componentId === END_ID) return;
      const component = state.components[componentId];
      if (!component) return;
      for (let c = component.startCol; c <= component.endCol; c += 1) {
        const cell = getCell(component.row, c);
        if (!cell) continue;
        clearCellAndNeighbors(component.row, c);
        cell.componentId = null;
        cell.partIndex = 0;
        cell.errorCode = null;
      }
      delete state.components[componentId];
    }

    function clearComponentBlock(row, col) {
      const cell = getCell(row, col);
      if (!cell || !cell.componentId || cell.componentId === END_ID) return false;
      removeComponentById(cell.componentId);
      return true;
    }

    function clearCurrentCell() {
      const row = state.cursor.row;
      const col = state.cursor.col;
      const cell = getCell(row, col);
      if (!cell) return;
      saveSnapshot();
      if (cell.componentId) {
        clearComponentBlock(row, col);
      } else {
        clearCellAndNeighbors(row, col);
      }
      ensureEndRow();
      state.compile.attempted = false;
      state.compiled = false;
      render();
      showOutput();
    }

    function clearPreviousCell() {
      const row = state.cursor.row;
      const col = Math.max(FIRST_EDIT_COL, state.cursor.col - 1);
      saveSnapshot();
      const cell = getCell(row, col);
      if (!cell) return;
      if (cell.componentId) clearComponentBlock(row, col);
      else clearCellAndNeighbors(row, col);
      setCursor(row, col);
      ensureEndRow();
      state.compile.attempted = false;
      state.compiled = false;
      render();
      showOutput();
    }

    function nextComponentId() {
      state.componentCounter += 1;
      return `c${state.componentCounter}`;
    }

    function createComponent(parsed, row, startCol) {
      const id = nextComponentId();
      const span = Math.max(1, parsed.span || 1);
      const component = {
        id,
        kind: parsed.kind,
        instruction: parsed.instruction,
        args: [...(parsed.args || [])],
        row,
        col: startCol,
        startCol,
        endCol: startCol + span - 1,
        span,
        device: parsed.device || null,
        polarity: parsed.polarity || 'NORMAL',
        output: Boolean(parsed.output),
        alignRight: Boolean(parsed.alignRight),
        pulse: parsed.pulse || null,
        baseInstruction: parsed.baseInstruction || parsed.instruction,
        fx3u: Boolean(parsed.fx3u),
        doubleWord: Boolean(parsed.doubleWord),
        simulated: parsed.simulated !== false,
        step: Boolean(parsed.step),
        display: parsed.display,
        originText: parsed.display,
        slots: [parsed.instruction || '', ...(parsed.args || [])]
      };
      state.components[id] = component;
      return component;
    }

    function resolveStartCol(parsed, col) {
      if (parsed.kind === 'COIL') return COLS - 1;
      if (parsed.alignRight) {
        const spanRight = Math.max(1, parsed.span || 1);
        return Math.max(FIRST_EDIT_COL, LAST_EDIT_COL - spanRight + 1);
      }
      const span = parsed.span || 1;
      const maxStartCol = Math.max(FIRST_EDIT_COL, LAST_EDIT_COL - span);
      return Math.max(FIRST_EDIT_COL, Math.min(col, maxStartCol));
    }

    function setBiWire(aRow, aCol, bRow, bCol) {
      const a = getCell(aRow, aCol);
      const b = getCell(bRow, bCol);
      if (!a || !b) return;
      if (aRow === bRow && aCol + 1 === bCol) {
        a.wires.right = true;
        b.wires.left = true;
      } else if (aRow === bRow && aCol - 1 === bCol) {
        a.wires.left = true;
        b.wires.right = true;
      } else if (aCol === bCol && aRow + 1 === bRow) {
        a.wires.down = true;
        b.wires.up = true;
      } else if (aCol === bCol && aRow - 1 === bRow) {
        a.wires.up = true;
        b.wires.down = true;
      }
    }

    function applyComponentWires(component) {
      for (let c = component.startCol; c <= component.endCol; c += 1) {
        const cell = getCell(component.row, c);
        if (!cell) continue;
        if (component.kind === 'COIL') {
          cell.wires.left = true;
          cell.wires.right = false;
        } else {
          cell.wires.left = true;
          cell.wires.right = true;
        }
      }
      for (let c = component.startCol; c < component.endCol; c += 1) {
        setBiWire(component.row, c, component.row, c + 1);
      }
    }

    function rowHasSignal(row, col) {
      const cell = getCell(row, col);
      if (!cell) return false;
      return Boolean(cell.componentId || cell.wires.left || cell.wires.right || cell.wires.up || cell.wires.down);
    }

    function connectCoilToLeft(row, coilCol) {
      const coilCell = getCell(row, coilCol);
      if (!coilCell) return;
      coilCell.wires.left = false;
      let sourceCol = -1;
      for (let c = coilCol - 1; c >= FIRST_EDIT_COL; c -= 1) {
        if (rowHasSignal(row, c)) {
          sourceCol = c;
          break;
        }
      }
      if (sourceCol < 0) return;
      for (let c = sourceCol; c < coilCol; c += 1) {
        setBiWire(row, c, row, c + 1);
      }
      for (let c = sourceCol + 1; c < coilCol; c += 1) {
        const mid = getCell(row, c);
        if (mid && !mid.componentId) {
          mid.wires.left = true;
          mid.wires.right = true;
        }
      }
    }

    function connectOutputBlockToLeft(component) {
      if (!component || !component.output) return;
      const leftMost = component.startCol;
      let sourceCol = -1;
      for (let c = leftMost - 1; c >= FIRST_EDIT_COL; c -= 1) {
        if (rowHasSignal(component.row, c)) {
          sourceCol = c;
          break;
        }
      }
      if (sourceCol < 0) return;
      for (let c = sourceCol; c < leftMost; c += 1) {
        setBiWire(component.row, c, component.row, c + 1);
      }
      for (let c = sourceCol + 1; c < leftMost; c += 1) {
        const mid = getCell(component.row, c);
        if (mid && !mid.componentId) {
          mid.wires.left = true;
          mid.wires.right = true;
        }
      }
    }

    function applyParsedComponent(parsed) {
      const row = state.cursor.row;
      const col = state.cursor.col;
      const span = parsed.span || 1;
      const startCol = resolveStartCol(parsed, col);

      if (startCol + span > COLS) {
        addIssue({ code: 'E104', message: '這個元件超出欄位，請改在較前的位置輸入。', row, col, suggestion: '請改成較靠左的欄位。' });
        state.compile.attempted = false;
        state.compiled = false;
        render();
        showOutput();
        return false;
      }

      const isRightOutput = parsed.kind === 'COIL' || Boolean(parsed.alignRight);
      if (isRightOutput && startCol + span - 1 !== LAST_EDIT_COL) {
        addIssue({ code: 'E214', message: '輸出元件必須位於每列最右側。', row, col, suggestion: '請改在最右側輸入輸出元件。' });
        return false;
      }

      saveSnapshot();
      resetErrors();

      for (let c = startCol; c < startCol + span; c += 1) {
        const cell = getCell(row, c);
        if (!cell) continue;
        if (cell.componentId) removeComponentById(cell.componentId);
      }

      const component = createComponent(parsed, row, startCol);
      for (let offset = 0; offset < component.span; offset += 1) {
        const cell = getCell(row, component.startCol + offset);
        if (!cell) continue;
        cell.componentId = component.id;
        cell.partIndex = offset;
        cell.errorCode = null;
      }
      applyComponentWires(component);

      if (component.kind === 'COIL') {
        connectCoilToLeft(row, component.startCol);
      } else if (component.output) {
        connectOutputBlockToLeft(component);
      }

      const nextCol = Math.min(LAST_EDIT_COL, component.endCol + 1);
      state.compile.attempted = false;
      state.compiled = false;
      setCursor(row, nextCol);
      ensureEndRow();
      render();
      showOutput();
      return true;
    }

    function findParallelAnchorRow(row, col) {
      for (let r = row - 1; r >= 0; r -= 1) {
        if (rowHasSignal(r, col) || rowHasSignal(r, col + 1) || hasBiWire(r, col, r, col + 1)) return r;
      }
      return row > 0 ? row - 1 : null;
    }

    function connectVerticalSpan(col, fromRow, toRow) {
      const start = Math.min(fromRow, toRow);
      const end = Math.max(fromRow, toRow);
      for (let r = start; r < end; r += 1) {
        setBiWire(r, col, r + 1, col);
      }
    }

    function applyOrParallelContact(parsed) {
      const row = state.cursor.row;
      const col = state.cursor.col;
      if (row <= 0) {
        addIssue({ code: 'E027', message: 'OR/ORI 需要在第 2 列(含)以下，才能與上一列形成並聯。', row, col, suggestion: '請先建立上一列主幹，再在下一列輸入 OR 或 ORI。' });
        render();
        showOutput();
        return false;
      }
      if (col >= LAST_EDIT_COL) {
        addIssue({ code: 'E028', message: 'OR/ORI 至少需要 1 格寬度連到右側。', row, col, suggestion: '請將游標移到非最右欄位。' });
        render();
        showOutput();
        return false;
      }

      saveSnapshot();
      resetErrors();

      const startCol = resolveStartCol(parsed, col);
      if (startCol >= LAST_EDIT_COL) {
        addIssue({ code: 'E028', message: 'OR/ORI 至少需要 1 格寬度連到右側。', row, col: startCol, suggestion: '請將游標移到非最右欄位。' });
        render();
        showOutput();
        return false;
      }

      const targetCell = getCell(row, startCol);
      if (targetCell?.componentId) removeComponentById(targetCell.componentId);

      const component = createComponent(parsed, row, startCol);
      const cell = getCell(row, startCol);
      if (cell) {
        cell.componentId = component.id;
        cell.partIndex = 0;
        cell.errorCode = null;
      }
      applyComponentWires(component);

      const anchorRow = findParallelAnchorRow(row, startCol);
      if (anchorRow !== null) {
        setBiWire(anchorRow, startCol, anchorRow, startCol + 1);
        connectVerticalSpan(startCol, anchorRow, row);
        connectVerticalSpan(startCol + 1, anchorRow, row);
      }

      setBiWire(row, startCol, row, startCol + 1);

      state.compile.attempted = false;
      state.compiled = false;
      setCursor(row, Math.min(LAST_EDIT_COL, component.endCol + 1));
      ensureEndRow();
      render();
      showOutput();
      return true;
    }

    function getAutocompleteItems(raw) {
      const text = (raw || '').trim().toUpperCase();
      if (!text) return [];
      const firstToken = text.split(/\s+/)[0] || '';
      if (!firstToken) return [];
      const instructionItems = Object.keys(INSTRUCTION_DB)
        .filter((key) => INSTRUCTION_DB[key]?.supported !== false)
        .concat(['LDP', 'ANDP', 'ANP', 'LDF', 'ANDF', 'ANF', 'OP'])
        .filter((key, index, arr) => arr.indexOf(key) === index)
        .filter((key) => key.startsWith(firstToken))
        .map((key) => ({ code: key, category: INSTRUCTION_DB[key]?.category || '擴充指令' }));
      const hintItems = HINT_LIBRARY
        .filter((item) => item.code.startsWith(firstToken) || item.template.startsWith(text))
        .map((item) => ({ code: item.template, category: `${item.category} 範例` }));
      return instructionItems
        .concat(hintItems)
        .sort((a, b) => a.code.localeCompare(b.code))
        .slice(0, 20);
    }

    function applyOpBranchMacro(parsed) {
      const baseRow = state.cursor.row;
      const col = state.cursor.col;
      if (col >= LAST_EDIT_COL) {
        addIssue({ code: 'E026', message: 'OP 需要至少 1 格寬度建立平行支路。', row: baseRow, col, suggestion: '請將游標移到非最右欄位後再輸入 OP。' });
        render();
        showOutput();
        return false;
      }

      if (baseRow >= state.rows - 1) ensureRowSpace(true);
      const branchRow = Math.min(state.rows - 1, baseRow + 1);

      saveSnapshot();
      resetErrors();

      const branchCell = getCell(branchRow, col);
      if (branchCell?.componentId) clearComponentBlock(branchRow, col);

      const contactParsed = {
        kind: 'CONTACT',
        display: `OR ${parsed.device}`,
        device: parsed.device,
        instruction: 'OR',
        args: [parsed.device],
        span: 1,
        output: false,
        polarity: 'NORMAL',
        pulse: null
      };

      const component = createComponent(contactParsed, branchRow, col);
      const targetCell = getCell(branchRow, col);
      if (targetCell) {
        targetCell.componentId = component.id;
        targetCell.partIndex = 0;
        targetCell.errorCode = null;
      }
      applyComponentWires(component);

      setBiWire(baseRow, col, baseRow, col + 1);
      setBiWire(baseRow, col, branchRow, col);
      setBiWire(baseRow, col + 1, branchRow, col + 1);
      setBiWire(branchRow, col, branchRow, col + 1);

      state.compile.attempted = false;
      state.compiled = false;
      setCursor(branchRow, Math.min(LAST_EDIT_COL, col + 1));
      ensureEndRow();
      render();
      showOutput();
      return true;
    }

    function applySuggestionToInput(input, suggestionCode) {
      if (suggestionCode.includes(' ')) {
        input.value = suggestionCode;
        return;
      }
      const current = (input.value || '').trim();
      const parts = current ? current.split(/\s+/) : [];
      if (!parts.length) {
        input.value = suggestionCode;
        return;
      }
      parts[0] = suggestionCode;
      input.value = parts.join(' ');
    }

    function renderAutocomplete(inputState) {
      const { dropdown, items, activeIndex } = inputState;
      dropdown.innerHTML = '';
      if (!items.length) {
        dropdown.classList.remove('show');
        return;
      }
      items.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = `dropdown-item${index === activeIndex ? ' active' : ''}`;
        row.innerHTML = `<span class="code">${item.code}</span><span class="meta">${item.category}</span>`;
        row.addEventListener('mousedown', (event) => {
          event.preventDefault();
          applySuggestionToInput(inputState.input, item.code);
          inputState.input.focus();
          inputState.input.setSelectionRange(inputState.input.value.length, inputState.input.value.length);
          inputState.items = [];
          inputState.activeIndex = -1;
          renderAutocomplete(inputState);
        });
        dropdown.appendChild(row);
      });
      dropdown.classList.add('show');
    }

    function openInput(initialValue = '') {
      hideInput();
      const rect = document.querySelector(`[data-row="${state.cursor.row}"][data-col="${state.cursor.col}"]`)?.getBoundingClientRect();

      const wrap = document.createElement('div');
      wrap.className = 'inline-input-dialog';

      const row = document.createElement('div');
      row.className = 'inline-input-row';

      const left = document.createElement('div');
      left.className = 'inline-input-left';

      const input = document.createElement('input');
      input.type = 'text';
      input.value = initialValue;
      input.placeholder = '輸入指令，例如 X0、/X0、Y0、MOV D0 D1、< D0 D9';

      const dropdown = document.createElement('div');
      dropdown.className = 'autocomplete-dropdown';

      left.appendChild(input);
      left.appendChild(dropdown);

      const buttons = document.createElement('div');
      buttons.className = 'inline-input-buttons';
      const okBtn = document.createElement('button');
      okBtn.type = 'button';
      okBtn.className = 'dialog-btn';
      okBtn.textContent = '確定';
      const cancelBtn = document.createElement('button');
      cancelBtn.type = 'button';
      cancelBtn.className = 'dialog-btn';
      cancelBtn.textContent = '取消';
      const expandBtn = document.createElement('button');
      expandBtn.type = 'button';
      expandBtn.className = 'dialog-btn';
      expandBtn.textContent = '擴展顯示';

      buttons.appendChild(okBtn);
      buttons.appendChild(cancelBtn);
      buttons.appendChild(expandBtn);

      row.appendChild(left);
      row.appendChild(buttons);
      wrap.appendChild(row);
      document.body.appendChild(wrap);

      state.input = { wrap, input, dropdown, items: [], activeIndex: -1 };

      const refreshItems = () => {
        if (!state.input) return;
        state.input.items = getAutocompleteItems(input.value);
        state.input.activeIndex = -1; 
        renderAutocomplete(state.input);
      };

      const confirmInput = () => {
        if (!state.input) return;
        placeInput(input.value);
        if (!state.input) return;
        if (!state.issues.length) hideInput();
      };

      input.addEventListener('input', () => refreshItems());

      input.addEventListener('keydown', (event) => {
        if (!state.input) return;
        const hasDropdown = state.input.items.length > 0;
        if (event.key === 'ArrowDown' && hasDropdown) {
          event.preventDefault();
          state.input.activeIndex = Math.min(state.input.items.length - 1, state.input.activeIndex + 1);
          renderAutocomplete(state.input);
          return;
        }
        if (event.key === 'ArrowUp' && hasDropdown) {
          event.preventDefault();
          state.input.activeIndex = Math.max(0, state.input.activeIndex - 1);
          renderAutocomplete(state.input);
          return;
        }
        if (event.key === 'Enter') {
          event.preventDefault();
          if (hasDropdown && state.input.activeIndex >= 0) {
            const picked = state.input.items[state.input.activeIndex];
            if (picked) {
              applySuggestionToInput(input, picked.code);
              state.input.items = [];
              state.input.activeIndex = -1;
              renderAutocomplete(state.input);
              return;
            }
          }
          confirmInput();
          return;
        }
        if (event.key === 'Escape') {
          event.preventDefault();
          hideInput();
        }
      });

      okBtn.addEventListener('click', () => confirmInput());
      cancelBtn.addEventListener('click', () => hideInput());
      expandBtn.addEventListener('click', () => input.focus());

      if (rect) {
        wrap.style.left = `${Math.max(8, rect.left + 4)}px`;
        wrap.style.top = `${Math.max(8, rect.top + 4)}px`;
      }
      input.focus();
      if (initialValue) input.setSelectionRange(input.value.length, input.value.length);
      else input.select();
      refreshItems();
    }

    function hideInput() {
      if (state.input?.wrap) state.input.wrap.remove();
      state.input = null;
    }

    function placeInput(raw) {
      const text = raw.trim().toUpperCase();
      if (!text) { hideInput(); return; }
      resetErrors();
      const parsed = parseInstruction(text, { tool: state.tool });
      if (parsed.error) {
        addIssue({ code: parsed.code, message: parsed.error, row: state.cursor.row, col: state.cursor.col, suggestion: parsed.suggestion || '' });
        if (parsed.code === 'E305') window.alert(`${parsed.error}\n\n${parsed.suggestion || ''}`);
        state.compile.attempted = false;
        state.compiled = false;
        render();
        showOutput();
        if (state.input?.input) {
          state.input.input.value = text;
          state.input.input.focus();
          state.input.input.select();
        }
        return;
      }
      if (parsed.kind === 'MACRO' && parsed.macro === 'OP_BRANCH') {
        if (applyOpBranchMacro(parsed)) hideInput();
        return;
      }
      if (parsed.kind === 'CONTACT' && (parsed.instruction === 'OR' || parsed.instruction === 'ORI')) {
        if (applyOrParallelContact(parsed)) hideInput();
        return;
      }
      if (applyParsedComponent(parsed)) hideInput();
    }

    function connectWireTo(direction) {
      const row = state.cursor.row;
      const col = state.cursor.col;
      const cell = getCell(row, col);
      if (!cell) return;
      saveSnapshot();
      if (direction === 'RIGHT') {
        const targetCol = cell.componentId ? col + 1 : col;
        const target = getCell(row, targetCol);
        if (!target || targetCol > LAST_EDIT_COL || target.componentId) return;
        const shouldEnable = !(target.wires.left && target.wires.right);
        target.wires.left = shouldEnable;
        target.wires.right = shouldEnable;
      } else if (direction === 'LEFT') {
        const targetCol = col - 1;
        const target = getCell(row, targetCol);
        if (!target || targetCol < FIRST_EDIT_COL || target.componentId) return;
        const shouldEnable = !(target.wires.left && target.wires.right);
        target.wires.left = shouldEnable;
        target.wires.right = shouldEnable;
      } else if (direction === 'DOWN') {
        const next = getCell(row + 1, col);
        if (!next || row + 1 >= state.rows) return;
        toggleBiWire(row, col, row + 1, col);
      } else if (direction === 'UP') {
        const prev = getCell(row - 1, col);
        if (!prev) return;
        toggleBiWire(row, col, row - 1, col);
      }
      state.compile.attempted = false;
      state.compiled = false;
      render();
      showOutput();
    }

    function disconnectBiWire(aRow, aCol, bRow, bCol) {
      const a = getCell(aRow, aCol);
      const b = getCell(bRow, bCol);
      if (!a || !b) return;
      if (aRow === bRow && aCol + 1 === bCol) {
        a.wires.right = false; b.wires.left = false;
      } else if (aRow === bRow && aCol - 1 === bCol) {
        a.wires.left = false; b.wires.right = false;
      } else if (aCol === bCol && aRow + 1 === bRow) {
        a.wires.down = false; b.wires.up = false;
      } else if (aCol === bCol && aRow - 1 === bRow) {
        a.wires.up = false; b.wires.down = false;
      }
    }

    function hasBiWire(aRow, aCol, bRow, bCol) {
      const a = getCell(aRow, aCol);
      const b = getCell(bRow, bCol);
      if (!a || !b) return false;
      if (aRow === bRow && aCol + 1 === bCol) return Boolean(a.wires.right && b.wires.left);
      if (aRow === bRow && aCol - 1 === bCol) return Boolean(a.wires.left && b.wires.right);
      if (aCol === bCol && aRow + 1 === bRow) return Boolean(a.wires.down && b.wires.up);
      if (aCol === bCol && aRow - 1 === bRow) return Boolean(a.wires.up && b.wires.down);
      return false;
    }

    function toggleBiWire(aRow, aCol, bRow, bCol) {
      if (hasBiWire(aRow, aCol, bRow, bCol)) disconnectBiWire(aRow, aCol, bRow, bCol);
      else setBiWire(aRow, aCol, bRow, bCol);
    }

    function sweepWireHorizontal(direction) {
      const row = state.cursor.row;
      const from = state.cursor.col;
      const step = direction === 'RIGHT' ? 1 : -1;
      const minCol = FIRST_EDIT_COL;
      const maxCol = LAST_EDIT_COL;
      const targets = [];
      let c = from;
      while (true) {
        if (c < minCol || c > maxCol) break;
        const cell = getCell(row, c);
        if (!cell) break;
        if (!cell.componentId) targets.push(cell);
        c += step;
      }
      if (!targets.length) return;
      saveSnapshot();
      const shouldErase = targets.every(cell => cell.wires.left && cell.wires.right);
      targets.forEach(cell => {
        cell.wires.left = !shouldErase;
        cell.wires.right = !shouldErase;
      });
      state.compile.attempted = false;
      state.compiled = false;
      render();
      showOutput();
    }

    function clearSelection() {
      state.selection.active = false;
      state.selection.start = null;
      state.selection.end = null;
      state.selection.cells = [];
      state.selection.dragging = false;
    }

    function setSelectionRange(start, end) {
      const minRow = Math.max(0, Math.min(start.row, end.row));
      const maxRow = Math.min(state.rows - 1, Math.max(start.row, end.row));
      const minCol = Math.max(FIRST_EDIT_COL, Math.min(start.col, end.col));
      const maxCol = Math.min(LAST_EDIT_COL, Math.max(start.col, end.col));
      const cells = [];
      for (let r = minRow; r <= maxRow; r += 1) {
        for (let c = minCol; c <= maxCol; c += 1) { cells.push({ row: r, col: c }); }
      }
      state.selection.active = true;
      state.selection.start = { row: minRow, col: minCol };
      state.selection.end = { row: maxRow, col: maxCol };
      state.selection.cells = cells;
    }

    function selectionHasCell(row, col) {
      return state.selection.active && state.selection.cells.some((p) => p.row === row && p.col === col);
    }

    function removeSelection() {
      if (!state.selection.active || !state.selection.cells.length) return;
      saveSnapshot();
      state.selection.cells.forEach((p) => {
        const cell = getCell(p.row, p.col);
        if (!cell) return;
        if (cell.componentId) removeComponentById(cell.componentId);
        else clearCellAndNeighbors(p.row, p.col);
      });
      clearSelection();
      ensureEndRow();
      state.compile.attempted = false;
      state.compiled = false;
      render();
      showOutput();
    }

    function nodeId(row, col) { return `${row}:${col}`; }

    function buildGraph() {
      const graph = {};
      function addEdge(a, b) {
        if (!graph[a]) graph[a] = new Set();
        if (!graph[b]) graph[b] = new Set();
        graph[a].add(b); graph[b].add(a);
      }

      for (let r = 0; r < state.rows; r += 1) {
        for (let c = 1; c < COLS; c += 1) {
          const cell = getCell(r, c);
          if (!cell) continue;
          const id = nodeId(r, c);
          if (!graph[id]) graph[id] = new Set();

          const right = getCell(r, c + 1);
          if (right && cell.wires.right && right.wires.left) addEdge(id, nodeId(r, c + 1));

          const down = getCell(r + 1, c);
          if (down && r + 1 < state.rows && cell.wires.down && down.wires.up) addEdge(id, nodeId(r + 1, c));
        }
      }

      for (let r = 0; r < state.rows; r += 1) {
        const source = `BUS:${r}`;
        const entry = getCell(r, FIRST_EDIT_COL);
        graph[source] = graph[source] || new Set();
        if (entry && (entry.wires.left || entry.wires.right || entry.componentId)) {
          addEdge(source, nodeId(r, FIRST_EDIT_COL));
        }
      }

      state.graph = graph;
      return graph;
    }

    function formatCompare(prefix, component) {
      if (component.instruction === 'CMP') return `${prefix}CMP ${component.args.join(' ')}`;
      return `${prefix}${component.instruction} ${component.args.join(' ')}`;
    }

    function conditionLine(component, mode) {
      if (component.kind === 'COMPARE' && component.instruction === 'ZCP') {
        addIssue({ code: 'E323', message: 'ZCP 條件模式尚未支援，避免產生錯誤 IL。', row: component.row, col: component.startCol, suggestion: '請改用功能方塊模式，或使用已支援的 <、>、=、CMP 比較。' });
        return null;
      }

      if (component.kind === 'CONTACT') {
        const d = component.device;
        if (component.instruction === 'STL') {
          if (mode === 'LD') return `STL ${d}`;
          return mode === 'AND' ? `AND ${d}` : `OR ${d}`;
        }
        if (component.pulse === 'RISING') {
          if (mode === 'LD') return `LDP ${d}`;
          if (mode === 'AND') return `ANDP ${d}`;
          return `ORP ${d}`;
        }
        if (component.pulse === 'FALLING') {
          if (mode === 'LD') return `LDF ${d}`;
          if (mode === 'AND') return `ANDF ${d}`;
          return `ORF ${d}`;
        }
        if (mode === 'LD') return component.polarity === 'INVERSE' ? `LDI ${d}` : `LD ${d}`;
        if (mode === 'AND') return component.polarity === 'INVERSE' ? `ANI ${d}` : `AND ${d}`;
        return component.polarity === 'INVERSE' ? `ORI ${d}` : `OR ${d}`;
      }
      if (component.kind === 'COMPARE') {
        if (mode === 'LD') return formatCompare('LD', component);
        if (mode === 'AND') return formatCompare('AND', component);
        return formatCompare('OR', component);
      }
      return null;
    }

    function makeLeafExpr(component) { return { type: 'LEAF', component, key: `L:${component.id}` }; }

    function mergeExpr(op, left, right) {
      if (!left || left.type === 'TRUE') return right;
      if (!right || right.type === 'TRUE') return left;
      if (left.key === right.key) return left;
      const type = op === 'AND' ? 'AND' : 'OR';
      const nodes = [];
      const append = (n) => {
        if (!n) return;
        if (n.type === type) n.nodes.forEach((x) => nodes.push(x));
        else nodes.push(n);
      };
      append(left); append(right);
      const uniqueNodes = [];
      const seen = new Set();
      nodes.forEach(n => {
        if (!seen.has(n.key)) { seen.add(n.key); uniqueNodes.push(n); }
      });
      if (uniqueNodes.length === 1) return uniqueNodes[0];
      const key = `${type}(${uniqueNodes.map((n) => n.key).join(',')})`;
      return { type, nodes: uniqueNodes, key };
    }

    function countExprLeaves(expr) {
      if (!expr || expr.type === 'TRUE') return 0;
      if (expr.type === 'LEAF') return 1;
      return (expr.nodes || []).reduce((sum, node) => sum + countExprLeaves(node), 0);
    }

    function rewriteLeadOpcode(line, targetMode) {
      if (!line) return line;
      const replacements = { LD: { OR: 'OR', AND: 'AND' }, LDI: { OR: 'ORI', AND: 'ANI' }, LDP: { OR: 'ORP', AND: 'ANDP' }, LDF: { OR: 'ORF', AND: 'ANDF' } };
      const parts = line.split(/\s+/);
      const head = parts[0] || '';
      if (replacements[head]?.[targetMode]) {
        parts[0] = replacements[head][targetMode];
        return parts.join(' ');
      }
      if (targetMode === 'OR' && /^LD(CMP|[<>]=?|=|<>)$/i.test(head)) { parts[0] = head.replace(/^LD/i, 'OR'); return parts.join(' '); }
      if (targetMode === 'AND' && /^LD(CMP|[<>]=?|=|<>)$/i.test(head)) { parts[0] = head.replace(/^LD/i, 'AND'); return parts.join(' '); }
      return line;
    }

    function compileExprNode(expr, leadMode = 'LD') {
      if (!expr || expr.type === 'TRUE') return { lines: [], leafCount: 0 };
      if (expr.type === 'LEAF') {
        const line = conditionLine(expr.component, leadMode);
        return { lines: line ? [line] : [], leafCount: 1 };
      }
      if (expr.type === 'AND') {
        const [first, ...rest] = expr.nodes;
        const firstResult = compileExprNode(first, leadMode);
        const lines = [...firstResult.lines];
        let leafCount = firstResult.leafCount;
        rest.forEach((child) => {
          const childLeaves = countExprLeaves(child);
          if (child.type === 'LEAF' || childLeaves <= 1) {
            const currentMode = lines.length === 0 ? leadMode : 'AND';
            const childResult = compileExprNode(child, currentMode);
            lines.push(...childResult.lines); leafCount += childResult.leafCount;
            return;
          }
          const blockResult = compileExprNode(child, 'LD');
          if (!blockResult.lines.length) return;
          if (lines.length === 0) lines.push(...blockResult.lines);
          else { lines.push(...blockResult.lines); lines.push('ANB'); }
          leafCount += blockResult.leafCount;
        });
        return { lines, leafCount };
      }
      if (expr.type === 'OR') {
        const [first, ...rest] = expr.nodes;
        const firstResult = compileExprNode(first, leadMode);
        const lines = [...firstResult.lines];
        let leafCount = firstResult.leafCount;
        rest.forEach((child) => {
          const childLeaves = countExprLeaves(child);
          if (child.type === 'LEAF' || childLeaves <= 1) {
            const currentMode = lines.length === 0 ? leadMode : 'LD';
            const childResult = compileExprNode(child, currentMode);
            if (!childResult.lines.length) return;
            if (lines.length === 0) lines.push(...childResult.lines);
            else {
              lines.push(rewriteLeadOpcode(childResult.lines[0], 'OR'));
              if (childResult.lines.length > 1) lines.push(...childResult.lines.slice(1));
            }
            leafCount += childResult.leafCount;
            return;
          }
          const blockResult = compileExprNode(child, 'LD');
          if (!blockResult.lines.length) return;
          if (lines.length === 0) lines.push(...blockResult.lines);
          else { lines.push(...blockResult.lines); lines.push('ORB'); }
          leafCount += blockResult.leafCount;
        });
        return { lines, leafCount };
      }
      return { lines: [], leafCount: 0 };
    }

    function exprToIL(expr, mode = 'LD') { return compileExprNode(expr, mode).lines; }

    function normalizeLeadInstruction(lines) {
      if (!Array.isArray(lines) || !lines.length) return lines || [];
      const out = [...lines];
      const first = out[0] || '';
      const leadMap = { AND: 'LD', OR: 'LD', ANI: 'LDI', ORI: 'LDI', ANDP: 'LDP', ANP: 'LDP', ORP: 'LDP', ANDF: 'LDF', ANF: 'LDF', ORF: 'LDF' };
      const token = first.split(/\s+/)[0] || '';
      if (leadMap[token]) { out[0] = `${leadMap[token]} ${first.slice(token.length).trim()}`.trim(); return out; }
      if (/^AND(CMP|[<>]=?|=|<>)\s+/i.test(first)) { out[0] = first.replace(/^AND/i, 'LD'); return out; }
      if (/^OR(CMP|[<>]=?|=|<>)\s+/i.test(first)) { out[0] = first.replace(/^OR/i, 'LD'); }
      return out;
    }

    function buildVerticalGroups(boundaryCol) {
      const parent = Array.from({ length: state.rows }, (_, i) => i);
      const find = (x) => {
        let n = x;
        while (parent[n] !== n) { parent[n] = parent[parent[n]]; n = parent[n]; }
        return n;
      };
      const union = (a, b) => {
        const ra = find(a); const rb = find(b);
        if (ra !== rb) parent[rb] = ra;
      };
      for (let r = 0; r < state.rows - 1; r += 1) {
        const a = getCell(r, boundaryCol); const b = getCell(r + 1, boundaryCol);
        if (a?.wires.down && b?.wires.up) union(r, r + 1);
      }
      const groups = {};
      for (let r = 0; r < state.rows; r += 1) {
        const root = find(r);
        if (!groups[root]) groups[root] = [];
        groups[root].push(r);
      }
      return Object.values(groups);
    }

    function closeBoundaryByVertical(boundaryMap, groups) {
      if (!boundaryMap || !Object.keys(boundaryMap).length) return {};
      const closed = {};
      groups.forEach((rows) => {
        let merged = null;
        rows.forEach((r) => { const expr = boundaryMap[r]; if (expr) merged = mergeExpr('OR', merged, expr); });
        if (!merged) return;
        rows.forEach((r) => { closed[r] = mergeExpr('OR', closed[r] || null, merged); });
      });
      return closed;
    }

    function mergeBoundaryExpr(target, row, expr) {
      if (!expr) return;
      target[row] = target[row] ? mergeExpr('OR', target[row], expr) : expr;
    }

    function boundaryKey(boundaryIndex, row) { return `${boundaryIndex}:${row}`; }

    function buildBoundaryGroups(maxBoundary) {
      const boundaryGroups = [];
      for (let b = 0; b <= maxBoundary; b += 1) { boundaryGroups[b] = buildVerticalGroups(b + 1); }
      return boundaryGroups;
    }

    function buildMatrixTransitions(maxBoundary) {
      const transitions = Array.from({ length: maxBoundary + 1 }, () => []);
      for (let b = 0; b < maxBoundary; b += 1) {
        const col = b + 1;
        for (let r = 0; r < state.rows; r += 1) {
          const cell = getCell(r, col);
          if (!cell) continue;
          const comp = componentFromCell(cell);
          const isCondStart = Boolean(comp && comp.startCol === col && (comp.kind === 'CONTACT' || comp.kind === 'COMPARE'));
          if (isCondStart) {
            const toBoundary = Math.min(maxBoundary, comp.endCol);
            if (toBoundary > b) transitions[b].push({ row: r, toBoundary, component: comp });
            continue;
          }
          if (!comp && cell.wires.left && cell.wires.right) {
            transitions[b].push({ row: r, toBoundary: b + 1, component: null });
          }
        }
      }
      return transitions;
    }

    function buildOutputRowMap(maxBoundary) {
      const outputs = Object.values(state.components).filter((c) => c.endCol === LAST_EDIT_COL && (c.kind === 'COIL' || c.output));
      const byRow = {};
      outputs.forEach((outComp) => {
        const leftBoundary = Math.max(0, Math.min(maxBoundary, outComp.startCol - 1));
        const key = boundaryKey(leftBoundary, outComp.row);
        byRow[key] = true;
      });
      return byRow;
    }

    function buildBackwardReach(maxBoundary, transitions, boundaryGroups, outputRowMap) {
      const reach = Array.from({ length: maxBoundary + 1 }, () => ({}));
      Object.keys(outputRowMap).forEach((key) => {
        const [b, r] = key.split(':').map(Number);
        reach[b][r] = true;
      });
      let changed = true;
      while (changed) {
        changed = false;
        for (let b = maxBoundary; b >= 0; b -= 1) {
          const groups = boundaryGroups[b] || [];
          groups.forEach((rows) => {
            const any = rows.some((r) => reach[b][r]);
            if (!any) return;
            rows.forEach((r) => { if (!reach[b][r]) { reach[b][r] = true; changed = true; } });
          });
        }
        for (let b = maxBoundary - 1; b >= 0; b -= 1) {
          (transitions[b] || []).forEach((tr) => {
            if (reach[tr.toBoundary]?.[tr.row] && !reach[b][tr.row]) { reach[b][tr.row] = true; changed = true; }
          });
        }
      }
      return reach;
    }

    function buildNodeLevelGraph() {
      const maxBoundary = LAST_EDIT_COL - 1;
      const boundaryExpr = Array.from({ length: maxBoundary + 1 }, () => ({}));
      const boundaryGroups = buildBoundaryGroups(maxBoundary);
      const transitions = buildMatrixTransitions(maxBoundary);
      const outputRowMap = buildOutputRowMap(maxBoundary);
      const backwardReach = buildBackwardReach(maxBoundary, transitions, boundaryGroups, outputRowMap);

      for (let r = 0; r < state.rows; r += 1) {
        const entry = getCell(r, FIRST_EDIT_COL);
        if (!entry) continue;
        const right = getCell(r, FIRST_EDIT_COL + 1);
        const hasEntrySignal = Boolean(entry.componentId !== null || entry.wires.left || entry.wires.right || entry.wires.up || entry.wires.down || (right && entry.wires.right && right.wires.left));
        if (hasEntrySignal && backwardReach[0]?.[r]) boundaryExpr[0][r] = { type: 'TRUE', key: `SRC:${r}` };
      }

      for (let k = 0; k <= maxBoundary; k += 1) {
        boundaryExpr[k] = closeBoundaryByVertical(boundaryExpr[k], boundaryGroups[k] || []);
        if (k === maxBoundary) break;
        (transitions[k] || []).forEach((tr) => {
          const base = boundaryExpr[k][tr.row];
          if (!base) return;
          if (!backwardReach[tr.toBoundary]?.[tr.row]) return;
          if (tr.component) {
            const condExpr = mergeExpr('AND', base, makeLeafExpr(tr.component));
            mergeBoundaryExpr(boundaryExpr[tr.toBoundary], tr.row, condExpr);
          } else {
            mergeBoundaryExpr(boundaryExpr[tr.toBoundary], tr.row, base);
          }
        });
      }
      return { boundaryExpr, maxBoundary, boundaryGroups, transitions, backwardReach };
    }

    function extractOutputExpr(graph, outputComponent) {
      const leftBoundary = Math.max(0, Math.min(graph.maxBoundary, outputComponent.startCol - 1));
      return graph.boundaryExpr[leftBoundary]?.[outputComponent.row] || null;
    }

    function hasFatalCompileError() {
      return state.issues.some((x) => /^E00\d$/.test(x.code) || /^E1\d\d$/.test(x.code) || /^E2\d\d$/.test(x.code) || /^E610$/.test(x.code) || /^E70\d$/.test(x.code));
    }

    function cleanupExtraneousWires() {
      // Phase 1: 遞迴刪除未連接任何有效元件的單端線段（Degree = 1）
      let changed = true;
      while (changed) {
        changed = false;
        for (let r = 0; r < state.rows; r += 1) {
          for (let c = FIRST_EDIT_COL; c < COLS; c += 1) {
            const cell = getCell(r, c);
            if (!cell || cell.componentId) continue;

            let degree = 0;
            if (cell.wires.left) degree += 1;
            if (cell.wires.right) degree += 1;
            if (cell.wires.up) degree += 1;
            if (cell.wires.down) degree += 1;

            if (degree === 1) {
              if (cell.wires.left) disconnectBiWire(r, c, r, c - 1);
              if (cell.wires.right) disconnectBiWire(r, c, r, c + 1);
              if (cell.wires.up) disconnectBiWire(r, c, r - 1, c);
              if (cell.wires.down) disconnectBiWire(r, c, r + 1, c);
              changed = true;
            }
          }
        }
      }

      // Phase 2: 尋找沒有任何錨點（未連接組件且未連接左母線）的孤島並刪除
      const visited = new Set();
      for (let r = 0; r < state.rows; r += 1) {
        for (let c = FIRST_EDIT_COL; c < COLS; c += 1) {
          const cell = getCell(r, c);
          if (!cell || cell.componentId) continue;

          const hasWires = cell.wires.left || cell.wires.right || cell.wires.up || cell.wires.down;
          if (hasWires && !visited.has(`${r},${c}`)) {
            const island = [];
            let hasAnchor = false;
            const queue = [{ row: r, col: c }];
            visited.add(`${r},${c}`);

            while (queue.length > 0) {
              const cur = queue.shift();
              island.push(cur);
              const curCell = getCell(cur.row, cur.col);

              if (cur.col === FIRST_EDIT_COL && curCell.wires.left) hasAnchor = true;

              const neighbors = [];
              if (curCell.wires.left) neighbors.push({ r: cur.row, c: cur.col - 1 });
              if (curCell.wires.right) neighbors.push({ r: cur.row, c: cur.col + 1 });
              if (curCell.wires.up) neighbors.push({ r: cur.row - 1, c: cur.col });
              if (curCell.wires.down) neighbors.push({ r: cur.row + 1, c: cur.col });

              neighbors.forEach(n => {
                if (n.c >= FIRST_EDIT_COL && n.r >= 0 && n.r < state.rows) {
                  const nCell = getCell(n.r, n.c);
                  if (nCell && nCell.componentId) {
                    hasAnchor = true;
                  } else if (!visited.has(`${n.r},${n.c}`)) {
                    visited.add(`${n.r},${n.c}`);
                    queue.push({ row: n.r, col: n.c });
                  }
                }
              });
            }

            if (!hasAnchor) {
              island.forEach(pos => {
                disconnectBiWire(pos.row, pos.col, pos.row, pos.col - 1);
                disconnectBiWire(pos.row, pos.col, pos.row, pos.col + 1);
                disconnectBiWire(pos.row, pos.col, pos.row - 1, pos.col);
                disconnectBiWire(pos.row, pos.col, pos.row + 1, pos.col);
                const ic = getCell(pos.row, pos.col);
                if (ic) ic.wires = { left: false, right: false, up: false, down: false };
              });
            }
          }
        }
      }
    }

    function runProjectDiagnostics(nodeGraph, allOutputs) {
      const outputDevices = new Map();
      allOutputs.forEach((component) => {
        const target = component.device || component.args?.[component.args.length - 1];
        if (!target) return;
        if (!outputDevices.has(target)) outputDevices.set(target, []);
        outputDevices.get(target).push(component);
      });
      outputDevices.forEach((items, device) => {
        if (items.length > 1) {
          addIssue({ code:'W201', message:`裝置 ${device} 有 ${items.length} 個輸出位置（重複線圈/重複寫入）。`, row:items[1].row, col:items[1].startCol, suggestion:'GX Works 專案通常應避免重複線圈；請合併條件或確認掃描順序。', severity:'warning' });
        }
      });

      Object.values(state.components).forEach((component) => {
        if (component.kind === 'END') return;
        const cells = Array.from({length:component.span || 1}, (_,i) => getCell(component.row, component.startCol + i)).filter(Boolean);
        const connected = cells.some(cell => cell.wires.left || cell.wires.right || cell.wires.up || cell.wires.down);
        if (!connected) {
          addIssue({ code:'E115', message:`未連接的元件：${component.display || component.instruction}。`, row:component.row, col:component.startCol, suggestion:'請將元件接到左母線與有效輸出路徑。' });
        }
      });

      allOutputs.forEach(component => {
        if (!extractOutputExpr(nodeGraph, component)) return;
        if (component.kind === 'COIL' && ['PLS','PLF'].includes(component.instruction)) {
          addIssue({ code:'W230', message:`${component.instruction} 已可編譯與模擬，但脈衝只維持一個模擬掃描週期。`, row:component.row, col:component.startCol, suggestion:'以「單掃描」觀察結果最清楚。', severity:'warning' });
        }
        if (component.fx3u && component.simulated === false) {
          addIssue({ code:'W331', message:`${component.instruction} 已通過 FX3U 語法登錄，但虛擬 PLC 尚未模擬此指令的硬體／運算語意。`, row:component.row, col:component.startCol, suggestion:'可正常產生 IL；實際動作請依 FX3U 手冊與實機／GX Works2 模擬結果確認。', severity:'warning' });
        }
      });

      const stepContacts = Object.values(state.components).filter((component) => component.instruction === 'STL');
      const hasRet = Object.values(state.components).some((component) => component.instruction === 'RET');
      if (stepContacts.length && !hasRet) {
        const first = stepContacts[0];
        addIssue({ code:'E334', message:'步進流程包含 STL，但缺少 RET 結束指令。', row:first.row, col:first.startCol, suggestion:'請在最後一個步進區段加入 RET。' });
      }
      stepContacts.forEach((component) => {
        if (!/^S\d+$/.test(component.device || '')) {
          addIssue({ code:'E335', message:`STL 的步進裝置 ${component.device || ''} 不合法。`, row:component.row, col:component.startCol, suggestion:'STL 僅可使用 S 裝置，例如 STL S0。' });
        }
      });
    }

    function compileProgram() {
      saveSnapshot(); // 自動儲存歷史紀錄，若使用者想要救回線段可用復原
      cleanupExtraneousWires();

      resetErrors();
      setValidation('檢查中', '未驗證', '未測試', false);
      const lines = [];
      const rungResults = [];
      const nodeGraph = buildNodeLevelGraph();

      const allOutputs = Object.values(state.components)
        .filter((c) => c.endCol === LAST_EDIT_COL && (c.kind === 'COIL' || c.output))
        .sort((a, b) => a.row - b.row || a.startCol - b.startCol);

      runProjectDiagnostics(nodeGraph, allOutputs);
      runPracticeDiagnostics();

      allOutputs.forEach((outComp) => {
        const expr = extractOutputExpr(nodeGraph, outComp);
        const rowInfo = { row: outComp.row, output: outComp.device || outComp.instruction, resultLines: [] };

        if (expr === null && outComp.kind === 'COIL') {
          addIssue({ code: 'E110', message: '輸出線圈左側沒有有效條件或連線。', row: outComp.row, col: outComp.startCol, suggestion: '請從 BUS 建立有效導通路徑。' });
        }
        if (expr === null && outComp.output) {
          addIssue({ code: 'E240', message: '功能輸出方塊左側沒有有效條件。', row: outComp.row, col: outComp.startCol, suggestion: '請先放置接點或比較方塊並拉線。' });
        }

        // 每一個輸出都必須重新建立邏輯運算結果。舊版會省略相同條件，
        // 導致第二個輸出依賴前一個輸出後殘留的運算狀態。
        const rawCondLines = expr ? exprToIL(expr, 'LD') : [];
        const condLines = normalizeLeadInstruction(rawCondLines);
        if (condLines.length) {
          lines.push(...condLines);
          rowInfo.resultLines.push(...condLines);
        }

        const outLine = outComp.kind === 'COIL'
          ? `${outComp.instruction || 'OUT'} ${outComp.device}`
          : `${outComp.instruction} ${outComp.args.join(' ')}`;
        lines.push(outLine);
        rowInfo.resultLines.push(outLine);

        rungResults.push(rowInfo);
      });

      ensureEndRow();
      if (!lines.length) {
        addIssue({ code: 'E109', message: '目前沒有任何輸出，請先放置線圈或輸出型方塊。', row: 0, col: 1, suggestion: '例如輸入 Y0 或 MOV D0 D1。' });
      }

      const reverseResult = reverseCheckOutputs(lines, allOutputs);
      if (!reverseResult.passed) {
        addIssue({ code: 'E610', message: `逆向驗證失敗：${reverseResult.reason}`, row: state.cursor.row, col: state.cursor.col, suggestion: '請檢查平行支路、輸出次序與指令型別。' });
      }

      const fatal = hasFatalCompileError();
      const hasWarning = state.issues.length > 0 && !fatal;

      setValidation(hasFatalCompileError() ? '失敗' : '通過', reverseResult.passed && !fatal ? '通過' : '失敗', '未測試', reverseResult.passed);

      state.rungs = rungResults;
      
      let finalIL = `${lines.join('\n')}${lines.length ? '\n' : ''}END`;
      if (fatal) {
        finalIL += '\n// 注意：此 IL 包含嚴重錯誤未通過驗證，禁止視為正確答案';
      }
      state.il = finalIL;

      state.compile.attempted = true;
      state.compile.passed = !fatal && reverseResult.passed;
      state.compile.fatal = fatal;
      state.compile.warning = hasWarning;
      state.compile.lastMessage = fatal
        ? '編譯失敗：存在嚴重錯誤'
        : (hasWarning ? '編譯完成但有警告' : '編譯成功');

      state.compiled = state.compile.passed;
      state.compileDialogVisible = true;
      saveActiveQuestionProgram();
      render();
      showOutput();
    }

    function exportJson() {
      const payload = { schemaVersion: state.schemaVersion, rows: state.rows, cols: state.cols, cells: state.cells, components: state.components, rungs: state.rungs, labelTable: state.labelTable };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'ladder.json';
      a.click();
      URL.revokeObjectURL(a.href);
    }

    function importJson() {
      const text = window.prompt('請貼上匯入 JSON 內容');
      if (!text) return;
      try {
        const payload = JSON.parse(text);
        if (!payload.cells || !payload.components) throw new Error('JSON 結構不完整');
        saveSnapshot();
        state.rows = payload.rows || 8;
        state.cols = COLS;
        state.cells = payload.cells;
        state.components = payload.components;
        state.rungs = payload.rungs || [];
        state.labelTable = payload.labelTable || state.labelTable;
        state.cursor = { row: 0, col: 1 };
        state.compile.attempted = false;
        state.compiled = false;
        ensureCellShape();
        ensureEndRow();
        render();
        showOutput();
      } catch (error) {
        resetErrors();
        addIssue({ code: 'E500', message: `匯入失敗：${error.message}`, row: state.cursor.row, col: state.cursor.col, suggestion: '請確認 JSON 結構與欄位名稱。' });
        render();
        showOutput();
      }
    }

    function importJsonFile(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const payload = JSON.parse(String(reader.result || ''));
          if (!payload.cells || !payload.components) throw new Error('JSON 結構不完整');
          saveSnapshot();
          state.rows = payload.rows || 8;
          state.cols = COLS;
          state.cells = payload.cells;
          state.components = payload.components;
          state.rungs = payload.rungs || [];
          state.labelTable = payload.labelTable || state.labelTable;
          state.cursor = {row:0,col:1};
          state.compile.attempted = false;
          state.compiled = false;
          ensureCellShape(); ensureEndRow(); render(); showOutput();
        } catch (error) {
          resetErrors(); addIssue({code:'E500',message:`匯入失敗：${error.message}`,row:0,col:1,suggestion:'請選擇由本編輯器匯出的 ladder.json。'}); render(); showOutput();
        }
      };
      reader.readAsText(file);
    }

    function updateStatus() {
      if (dom.cursorInfo) dom.cursorInfo.textContent = `R${state.cursor.row + 1}, C${Math.max(1, state.cursor.col)}`;
      if (dom.toolInfo) dom.toolInfo.textContent = state.tool;
      
      if (dom.compileState) {
        if (!state.compile.attempted) dom.compileState.textContent = '未編譯';
        else if (state.compile.fatal) dom.compileState.textContent = '編譯失敗';
        else if (state.compile.warning) dom.compileState.textContent = '有警告';
        else if (state.compile.passed) dom.compileState.textContent = '已編譯';
        else dom.compileState.textContent = '未通過';
      }

      if (dom.toolCheckState) dom.toolCheckState.textContent = state.compile.attempted ? state.validation.tool : '未檢查';
      if (dom.officialCheckState) dom.officialCheckState.textContent = state.compile.attempted ? state.validation.official : '未驗證';
      if (dom.functionTestState) dom.functionTestState.textContent = state.compile.attempted ? state.validation.function : '未測試';
      if (dom.checklistBox) dom.checklistBox.textContent = summarizeLayerChecks();
      const summary = document.getElementById('compileSummary');
      if (summary) {
        const outputCount = Object.values(state.components).filter(c => c.kind === 'COIL' || c.output).length;
        const semanticPending = Object.values(state.components).filter((component) => component.fx3u && component.simulated === false).length;
        summary.textContent = `PROJECT  GX-WORK Ladder Simulator\n程式步數：${state.il === 'END' ? 0 : state.il.split('\n').filter(x => x && x !== 'END').length}  輸出數：${outputCount}  錯誤/警告：${state.issues.length}\nFX3U 指令目錄：${FX3U_INSTRUCTION_COUNT} 種  僅語法驗證：${semanticPending} 個`;
      }
    }

    function renderIssues() {
      if (!dom.issueList) return;
      dom.issueList.innerHTML = '';
      state.issues.forEach((issue, index) => {
        const btn = document.createElement('button');
        btn.className = 'issue-item';
        btn.dataset.issueIndex = String(index);
        btn.textContent = `[${issue.code}] R${issue.row + 1}, C${Math.max(1, issue.col)} ${issue.message}${issue.suggestion ? ` | 建議: ${issue.suggestion}` : ''}`;
        dom.issueList.appendChild(btn);
      });
      if (!state.issues.length) {
        const div = document.createElement('div');
        div.className = 'hint';
        div.textContent = '目前沒有錯誤。';
        dom.issueList.appendChild(div);
      }
    }

    function showOutput() {
      if (dom.output) dom.output.textContent = state.il || 'END';
      renderIssues();
      updateStatus();
      if (dom.testReportBox && !dom.testReportBox.textContent) dom.testReportBox.textContent = '尚未執行功能測試。';
    }

    function questionProgress(question) {
      const mapping = ensurePracticeState(question.id).wiring;
      const wired = Object.keys(mapping).length;
      let compiled = false;
      try { compiled = Boolean(JSON.parse(state.programsByQuestion[question.id] || '{}').compile?.passed); } catch (_) { compiled = false; }
      const simulated = Boolean(ensurePracticeState(question.id).simulation.history.length);
      return { wired, total: question.inputs.length + question.outputs.length, compiled, simulated };
    }

    function buildQuestionSelectionHome() {
      const home = document.createElement('main');
      home.className = 'question-home';
      home.innerHTML = `
        <section class="home-hero">
          <div class="home-brand"><div class="brand-mark">PLC<br>LAB</div><span>工業配線乙級 · 第一站低壓部分</span></div>
          <div class="home-hero-copy"><div class="home-eyebrow">INTERACTIVE PRACTICE SYSTEM</div><h1>今天要練習哪一題？</h1><p>選擇題目後，系統會依序引導你完成 PLC 外部接線、階梯圖程式、編譯、虛擬機台操作與評分檢核。</p></div>
          <div class="home-flow" aria-label="練習流程"><span><b>1</b>選擇題目</span><span><b>2</b>PLC 配線</span><span><b>3</b>編輯程式</span><span><b>4</b>虛擬 PLC</span><span><b>5</b>評分回饋</span></div>
        </section>
        <section class="question-picker-section">
          <div class="picker-heading"><div><span>LOW-VOLTAGE SIX QUESTIONS</span><h2>低壓控制六題</h2></div><p>每一題會保存自己的配線、階梯圖與操作紀錄。</p></div>
          <div class="question-card-grid">
            ${PRACTICE_QUESTIONS.map(q => {
              const progress = questionProgress(q);
              const percent = Math.round((progress.wired / progress.total) * 40 + (progress.compiled ? 35 : 0) + (progress.simulated ? 25 : 0));
              return `<article class="question-card q${q.id}">
                <div class="question-card-top"><span class="question-number">0${q.id}</span><span class="question-code">${q.code}</span></div>
                <h3>${q.title}</h3><p>${q.short}</p>
                <ul>${q.brief.map(item => `<li>${item}</li>`).join('')}</ul>
                <div class="question-card-meta"><span>${q.inputs.length} 輸入</span><span>${q.outputs.length} 輸出</span><span>${q.machine === 'tank' ? '液位動畫' : q.machine === 'door' ? '門機動畫' : q.machine === 'slider' ? '定位動畫' : q.machine === 'hopper' ? '秤重動畫' : '馬達時序動畫'}</span></div>
                <div class="progress-line"><span style="width:${percent}%"></span></div>
                <div class="question-card-foot"><small>進度 ${percent}% · 接線 ${progress.wired}/${progress.total}</small><button data-question-id="${q.id}">${percent ? '繼續練習' : '開始練習'} <span>→</span></button></div>
              </article>`;
            }).join('')}
          </div>
        </section>`;
      return home;
    }

    function buildAcademyHeader() {
      const q = activeQuestion();
      const header = document.createElement('header');
      header.className = 'academy-header';
      header.innerHTML = `
        <div class="academy-header-main">
          <div class="brand-lockup">
            <div class="brand-mark">PLC<br>LAB</div>
            <div><div class="brand-title">工業配線乙級｜低壓 PLC 實作訓練站</div><div class="brand-subtitle">依 108 年術科第一站六題建置 · GX Works2 風格離線模擬</div></div>
          </div>
          <div class="header-status">
            <button class="back-home-button" data-action="back-home">← 回到六題選擇</button>
            <span class="status-chip live">本機資料自動保存</span>
            <span class="status-chip">${q.code}</span>
            <span class="status-chip">掃描 ${state.simulator.scanCount}</span>
          </div>
        </div>
        <nav class="question-tabs" aria-label="低壓六題">
          ${PRACTICE_QUESTIONS.map(item => `<button class="question-tab ${item.id === q.id ? 'active' : ''}" data-question-id="${item.id}"><strong>0${item.id}｜${item.title}</strong><small>${item.short}</small></button>`).join('')}
        </nav>`;
      return header;
    }

    function buildMissionStrip() {
      const q = activeQuestion();
      const strip = document.createElement('section');
      strip.className = 'mission-strip';
      const stages = [['wiring','1','外部接線'],['ladder','2','階梯圖程式'],['simulation','3','虛擬 PLC'],['assessment','4','評分報告']];
      strip.innerHTML = `
        <div><div class="mission-eyebrow">CURRENT MISSION / ${q.code}</div><div class="mission-title">第 ${q.id} 題 · ${q.title}</div><div class="mission-copy">${q.brief[0]}。完成接線、程式、模擬後取得逐項回饋。</div></div>
        <div><div class="workflow">${stages.map(([stage,step,label]) => { const access = canEnterStage(stage); return `<button class="${state.practiceStage === stage ? 'active' : ''} ${access.ok ? '' : 'locked'}" data-stage="${stage}" data-step="${step}" ${access.ok ? '' : 'disabled'} title="${access.reason}">${label}${access.ok ? '' : ' 🔒'}</button>`; }).join('')}</div>${state.stageNotice ? `<div class="stage-notice">${state.stageNotice}</div>` : ''}</div>`;
      return strip;
    }

    function buildWiringStage() {
      const q = activeQuestion();
      const mapping = ensurePracticeState(q.id).wiring;
      const pending = state.pendingWire;
      const panel = document.createElement('div');
      panel.className = 'editor-stage';
      const inputAddresses = addressPool('input');
      const outputAddresses = addressPool('output');
      const terminalList = (items, side) => {
        const remainingItems = sortComponentsForWiring(items, mapping).filter(item => !mapping[item.id]);
        if (!remainingItems.length) return '<div class="component-tray-empty">本區元件已全部安裝到 PLC 端子</div>';
        return remainingItems.map(item => {
        const contactType = side === 'input' ? inputContactType(q, item) : '';
        const symbol = side === 'input'
          ? inputDeviceSymbolMarkup(q, item)
          : outputDeviceSymbolMarkup(item);
        const selector = side === 'input' ? selectorProfile(q, item) : null;
        const contactBadge = side === 'input'
          ? selector ? `<span class="contact-type-badge selector">${selector.positions} 段 COS</span>` : `<span class="contact-type-badge ${contactType.toLowerCase()}">${contactType === 'NC' ? '常閉 NC' : '常開 NO'}</span>`
          : '<span class="contact-type-badge load">輸出負載</span>';
        return `<button draggable="true" class="terminal field-component ${side}-component ${pending?.componentId === item.id ? 'pending' : ''}" data-io-id="${item.id}" data-io="${item.io}">${symbol}<span class="terminal-dot"></span><span class="component-copy"><strong>${item.id}</strong><small>${item.label}</small>${contactBadge}</span><span class="terminal-code">${side === 'input' ? '拖到 X' : '拖到 Y'}</span></button>`;
        }).join('');
      };
      const plcTerminal = (address, io) => {
        const installedItem = questionIoItems(q).find(item => mapping[item.id] === address);
        return `<button class="plc-terminal screw-terminal ${installedItem ? 'used has-installed-device' : ''} ${pending?.io === io ? 'pending' : ''}" data-address="${address}" data-io="${io}" aria-label="${address} 端子${installedItem ? `，已接 ${installedItem.id} ${installedItem.label}` : ''}">${installedDeviceMarkup(q, installedItem, address)}<span class="screw-head">＋</span><span class="plc-address">${address}</span><span class="plc-led"></span></button>`;
      };
      const outputGroups = [0,1,2,3].map((group) => {
        const addresses = outputAddresses.slice(group * 4, group * 4 + 4);
        return `<div class="output-terminal-group"><span class="common-label">COM${group + 1}</span>${addresses.map(address => plcTerminal(address,'output')).join('')}</div>`;
      }).join('');
      panel.innerHTML = `
        <div class="stage-heading"><div><h2>PLC 外部接線實習板</h2><p>依照參考圖，將本題元件拖曳到 PLC 的 X／Y 螺絲端子；也可以先點元件再點端子。</p></div><span class="stage-badge">${Object.keys(mapping).length}/${q.inputs.length + q.outputs.length} POINTS</span></div>
        <div class="wiring-board">
          <section class="component-tray input-tray wiring-component-zone input-component-zone"><div class="tray-heading"><div><span>INPUT COMPONENTS · PLC 上方</span><h3>本題輸入開關／感測接點（拖曳至 X 端子）</h3></div><b>${q.inputs.length} 點</b></div><div class="component-card-grid">${terminalList(q.inputs,'input')}</div></section>
          <section class="plc-external-panel" aria-label="互動式 PLC 外部接線盤">
            <div class="input-terminal-rail"><div class="fixed-terminal"><span class="screw-head">＋</span><b>24V</b></div><div class="fixed-terminal"><span class="screw-head">＋</span><b>0V</b></div><div class="fixed-terminal"><span class="screw-head">＋</span><b>S/S</b></div>${inputAddresses.map(address => plcTerminal(address,'input')).join('')}</div>
            <div class="power-terminal-stack"><div><span class="screw-head">＋</span><b>L</b></div><div><span class="screw-head">＋</span><b>G</b></div><div><span class="screw-head">＋</span><b>N</b></div></div>
            <div class="plc-panel-center"><span>MELSEC TRAINING PLC</span><strong>PLC 外部接線圖</strong><small>第 ${q.id} 題｜${q.title}</small></div>
            <div class="output-terminal-rail">${outputGroups}</div>
          </section>
          <section class="component-tray output-tray wiring-component-zone output-component-zone"><div class="tray-heading"><div><span>OUTPUT COMPONENTS · PLC 下方</span><h3>本題輸出線圈／負載（拖曳至 Y 端子）</h3></div><b>${q.outputs.length} 點</b></div><div class="component-card-grid">${terminalList(q.outputs,'output')}</div></section>
          <div class="wiring-help"><span>${pending ? `已拿取 ${pending.componentId}，請放到一個 ${pending.io === 'input' ? 'X' : 'Y'} 螺絲端子。` : '拖曳元件到端子後，元件會直接安裝在螺絲端子旁；點一下已安裝的端子可拆回元件區。'}</span><span><button data-action="auto-wire">示範自動配線</button> <button data-action="clear-wiring">清除本題接線</button></span></div>
        </div>`;
      return panel;
    }

    function machineBodyMarkup(question, sim) {
      const lampIds = question.outputs.filter(item => /^PL|BZ/.test(item.id)).slice(0,8);
      const lampHtml = `<div class="sim-lamp-row">${lampIds.map((item,index) => `<div class="sim-lamp ${physicalOutputOn(item.id) || (!state.compile.passed && sim.running && index < Math.max(1,Math.min(lampIds.length,sim.level))) || (item.id === 'BZ' && sim.alarm) ? 'on' : ''} ${item.id === 'BZ' ? 'alarm' : ''}">${item.id}</div>`).join('')}</div>`;
      if (question.machine === 'door') return `<div class="sim-door-frame" style="--open:${sim.doorOpen}"><div class="sim-door left"></div><div class="sim-door right"></div></div>${lampHtml}`;
      if (question.machine === 'tank') return `<div class="sim-motor ${physicalOutputOn('MC1') || (!state.compile.passed && sim.running) ? 'on' : ''}" style="left:55px;top:76px">M1</div><div class="sim-tank" style="--level:${(sim.level/6)*100}%"><div class="sim-water"></div></div><div class="sim-motor ${physicalOutputOn('MC2') || (!state.compile.passed && sim.running && sim.level >= 3) ? 'on' : ''}" style="right:55px;top:76px">M2</div>${lampHtml}`;
      if (question.machine === 'slider') return `<div class="sim-conveyor" style="--belt:${sim.running ? '-28px' : '0'}"></div><div class="sim-slider" style="--position:${sim.position}%">SLIDE</div>${lampHtml}`;
      if (question.machine === 'hopper') return `<div class="sim-hopper"></div><div class="sim-scale">${String(sim.weight).padStart(2,'0')}.0 kg</div>${lampHtml}`;
      return `<div class="sim-conveyor" style="--belt:${sim.running ? '-28px' : '0'}"></div><div class="sim-motor ${physicalOutputOn('MC1') || (!state.compile.passed && sim.running) ? 'on' : ''}" style="left:58px;top:72px">M1</div><div class="sim-motor ${physicalOutputOn('MC2') || (!state.compile.passed && sim.running && sim.level >= 2) ? 'on' : ''}" style="left:calc(50% - 36px);top:72px">M2</div><div class="sim-motor ${physicalOutputOn('MC3') || (!state.compile.passed && sim.running && sim.level >= 3) ? 'on' : ''}" style="right:58px;top:72px">M3</div>${lampHtml}`;
    }

    function buildSimulationStage() {
      const q = activeQuestion();
      const sim = ensurePracticeState(q.id).simulation;
      const extraControls = q.machine === 'door' ? '<button data-action="sim-open">開門</button><button data-action="sim-close">關門</button>'
        : q.machine === 'slider' ? '<button data-action="sim-position-next">下一定位點</button>'
        : q.machine === 'hopper' ? '<button data-action="sim-weight-up">增加 10kg</button><button data-action="sim-weight-down">減少 10kg</button>'
        : q.machine === 'conveyor' ? '<button data-action="sim-level-up">推進下一行程</button><button data-action="sim-level-down">回到前一行程</button>'
        : '<button data-action="sim-level-up">水位上升</button><button data-action="sim-level-down">水位下降</button>';
      const procedures = simulationProcedure(q);
      const panel = document.createElement('div');
      panel.className = 'editor-stage';
      panel.innerHTML = `
        <div class="stage-heading"><div><h2>虛擬 PLC 與機台動作</h2><p>編譯成功後寫入虛擬 PLC；按鈕會改變感測情境並執行一次掃描。</p></div><span class="stage-badge">${state.compile.passed ? 'PROGRAM LOADED' : 'PROGRAM NOT LOADED'}</span></div>
        <div class="machine-stage">
          <div class="machine-toolbar"><button class="primary" data-action="download-plc">重新寫入虛擬 PLC</button><button data-action="sim-start">啟動／RUN</button><button data-action="sim-stop">停止／STOP</button>${extraControls}<button data-action="sim-alarm">異常／復歸</button><button data-action="scan-once">執行單次掃描</button></div>
          ${simulationInputPanelMarkup(q)}
          <div class="machine-scene"><div class="machine-visual"><div class="machine-titlebar"><span>${q.code} / ${q.title}</span><span>${sim.running ? 'RUN' : 'STOP'} · ${state.simulator.scanTimeMs}ms</span></div><div class="machine-body">${machineBodyMarkup(q,sim)}</div></div></div>
          <div class="simulation-details">
            <section class="operation-guide"><div class="section-kicker">OPERATION PROCEDURE</div><h3>建議操作流程</h3><ol>${procedures.map((item,index) => `<li><span>${index + 1}</span><p>${item}</p></li>`).join('')}</ol></section>
            <section class="live-process"><div class="section-kicker">LIVE I/O PROCESS</div><h3>即時輸出與動作</h3><div class="process-output-grid">${q.outputs.map(item => `<div class="process-output ${physicalOutputOn(item.id) ? 'on' : ''}"><span class="process-led"></span><div><strong>${item.id}</strong><small>${item.label}</small></div><b>${physicalOutputOn(item.id) ? 'ON' : 'OFF'}</b></div>`).join('')}</div></section>
            <section class="operation-log"><div class="section-kicker">SCAN EVENT LOG</div><h3>操作與掃描紀錄</h3><div class="log-list">${sim.history.length ? sim.history.map(entry => `<div><time>${entry.time}</time><p><strong>${entry.label}</strong><small>${entry.detail}</small></p></div>`).join('') : '<p class="empty-log">尚無操作紀錄。請由上方控制列開始測試。</p>'}</div></section>
          </div>
        </div>`;
      return panel;
    }

    function buildAssessmentStage() {
      const q = activeQuestion();
      const results = assessmentResult(q);
      const score = results.reduce((sum,item) => sum + (item.pass ? item.weight : 0),0);
      const panel = document.createElement('div');
      panel.className = 'editor-stage';
      panel.innerHTML = `
        <div class="stage-heading"><div><h2>依評審表項目產生練習回饋</h2><p>這是學習用即時檢核；正式考試仍以監評人員與現場設備結果為準。</p></div><span class="stage-badge">${score >= 80 ? 'READY' : 'NEEDS WORK'}</span></div>
        <section class="assessment-card">
          <div class="score-hero"><div class="score-ring" style="--score:${score}%"><strong>${score}</strong></div><div><h2 style="margin:0 0 5px">${score >= 80 ? '本題主要流程已具備' : '仍有動作或接線未完成'}</h2><div style="color:#bad0de;font-size:12px">主要功能需完全正確；次要功能容許值依原評審表逐項判定。</div></div></div>
          <div class="rubric-list">${results.map(item => `<div class="rubric-item ${item.pass ? 'pass' : 'fail'}"><div class="rubric-state">${item.pass ? '✓' : '!'}</div><div><strong>${item.label}</strong><p>${item.pass ? '目前檢查通過。' : `${item.description}；目前尚未偵測到完整動作。`}</p></div><span class="rubric-weight">${item.weight}%</span></div>`).join('')}</div>
        </section>`;
      return panel;
    }

    function render() {
      const root = document.getElementById('app');
      if (!root) return;
      if (state.portalView === 'home') {
        root.innerHTML = '';
        root.appendChild(buildQuestionSelectionHome());
        return;
      }
      const previousCanvas = root.querySelector('.canvas-wrap');
      const previousScroll = previousCanvas ? { left: previousCanvas.scrollLeft, top: previousCanvas.scrollTop } : { left: 0, top: 0 };

      root.innerHTML = '';
      const shell = document.createElement('div');
      shell.className = 'app-shell';
      shell.appendChild(buildAcademyHeader());

      const toolbar = document.createElement('div');
      toolbar.className = 'toolbar';
      toolbar.style.display = state.practiceStage === 'ladder' ? 'flex' : 'none';
      toolbar.innerHTML = `
        <button data-action="compile">轉換／編譯</button>
        <button data-action="download-plc">寫入虛擬 PLC</button>
        <button data-action="run-tests">功能檢查</button>
        <button data-action="scan-once">單掃描</button>
        <button data-action="reset-sim">重置模擬</button>
        <span class="separator"></span>
        <button data-action="undo">復原</button>
        <button data-action="redo">重做</button>
        <button data-action="export">儲存 JSON</button>
        <button data-action="import">開啟 JSON</button>
        <button data-action="clear">清空</button>
        <input id="jsonFileInput" type="file" accept="application/json,.json" hidden />
        <span class="hint">雙擊儲存格或直接鍵入：編輯元件｜Ctrl+左／右：每次配線一整格｜Delete：刪除</span>
      `;
      shell.appendChild(toolbar);
      shell.appendChild(buildMissionStrip());

      const workspace = document.createElement('div');
      workspace.className = 'workspace';
      if (state.practiceStage === 'ladder') workspace.classList.add('ladder-workspace');

      const toolbox = document.createElement('div');
      toolbox.className = 'panel toolbox';
      const q = activeQuestion();
      toolbox.innerHTML = `
        <section class="side-section">
          <div class="section-kicker">QUESTION ${String(q.id).padStart(2,'0')}</div>
          <div class="section-title">${q.title}</div>
          <ul class="brief-list">${q.brief.map(item => `<li>${item}</li>`).join('')}</ul>
        </section>
        <section class="side-section">
          <div class="section-kicker">FIELD DEVICES</div>
          <div class="section-title">本題元件</div>
          <div class="device-pills">${q.inputs.map(item => `<span class="device-pill input" title="${item.label}">${item.id}</span>`).join('')}${q.outputs.map(item => `<span class="device-pill output" title="${item.label}">${item.id}</span>`).join('')}</div>
        </section>
        <section class="side-section" style="display:${state.practiceStage === 'ladder' ? 'block' : 'none'}">
          <div class="section-kicker">LADDER TOOLBOX</div>
          <div class="section-title">階梯圖元件</div>
          <button data-tool="CONTACT" class="${state.tool === 'CONTACT' ? 'active' : ''}">常開接點</button>
          <button data-tool="CONTACT_NC" class="${state.tool === 'CONTACT_NC' ? 'active' : ''}">常閉接點</button>
          <button data-tool="COIL" class="${state.tool === 'COIL' ? 'active' : ''}">輸出線圈</button>
          <button data-tool="FUNCTION" class="${state.tool === 'FUNCTION' ? 'active' : ''}">功能方塊</button>
          <button data-tool="COMPARE" class="${state.tool === 'COMPARE' ? 'active' : ''}">比較方塊</button>
        </section>
        <section class="side-section"><div class="section-kicker">REFERENCE</div><div class="section-title">考試提醒</div><ul class="brief-list"><li>先完成 PLC 外部接線圖再輸入程式</li><li>指示燈不得由 PLC 輸出直接驅動功率負載</li><li>EMS、過載與正反轉須設外部連鎖</li><li>模擬結果僅供練習，需再與正式評審表核對</li></ul></section>
      `;
      workspace.appendChild(toolbox);

      const editorArea = document.createElement('div');
      editorArea.className = 'panel editor-area';
      const status = document.createElement('div');
      status.className = 'status-bar';
      status.style.display = state.practiceStage === 'ladder' ? 'flex' : 'none';
      status.innerHTML = `
        <strong>游標</strong><span id="cursorInfo">R1, C1</span>
        <strong>工具</strong><span id="toolInfo">CONTACT</span>
        <strong>編譯</strong><span id="compileState">未編譯</span>
        <strong>工具檢查</strong><span id="toolCheckState">未檢查</span>
        <strong>官方編譯</strong><span id="officialCheckState">未驗證</span>
        <strong>功能測試</strong><span id="functionTestState">未測試</span>
      `;
      editorArea.appendChild(status);
      if (state.practiceStage === 'ladder') {
        const octalNotice = document.createElement('div');
        octalNotice.className = 'octal-address-notice';
        octalNotice.innerHTML = '<strong>X／Y 使用八進制位址</strong><span>合法：X0～X7、X10～X17、Y0～Y7、Y10～Y17。輸入 X8、Y9、Y18 等位址會立即阻止並提示。</span>';
        editorArea.appendChild(octalNotice);
      }

      const canvasWrap = document.createElement('div');
      canvasWrap.className = 'canvas-wrap';
      const grid = document.createElement('div');
      grid.className = 'ladder-grid';
      grid.style.setProperty('--cols', COLS);

      const headerLabel = document.createElement('div');
      headerLabel.className = 'cell bus';
      headerLabel.innerHTML = '<div class="cell-label">Rung</div>';
      grid.appendChild(headerLabel);

      for (let c = 0; c < COLS; c += 1) {
        const head = document.createElement('div');
        head.className = 'cell bus';
        head.innerHTML = `<div class="cell-label">${c === BUS_COL ? 'BUS' : `C${c}`}</div>`;
        grid.appendChild(head);
      }

      for (let row = 0; row < state.cells.length; row += 1) {
        const label = document.createElement('div');
        label.className = 'cell bus';
        label.innerHTML = `<div class="cell-label">${row + 1}</div>`;
        grid.appendChild(label);

        for (let col = 0; col < COLS; col += 1) {
          const cell = getCell(row, col);
          if (!cell) continue;
          const div = document.createElement('div');
          div.className = 'cell';
          div.dataset.row = row;
          div.dataset.col = col;

          if (row === state.rows) div.classList.add('bus');
          if (row === state.cursor.row && col === state.cursor.col) div.classList.add('selected');
          if (selectionHasCell(row, col)) div.classList.add('range-selected');
          if (cell.errorCode) div.classList.add('error');

          if (row === state.rows) {
            if (col === COLS - 1 && cell.componentId === END_ID) {
              div.innerHTML = '<div class="symbol"><div class="end-chip">-[ END ]-</div></div>';
            }
            grid.appendChild(div);
            continue;
          }

          if (cell.wires.left && cell.wires.right) {
            const wire = document.createElement('div');
            wire.className = 'wire mid';
            div.appendChild(wire);
          } else {
            if (cell.wires.left) {
              const wire = document.createElement('div');
              wire.className = 'wire left';
              div.appendChild(wire);
            }
            if (cell.wires.right) {
              const wire = document.createElement('div');
              wire.className = 'wire right';
              div.appendChild(wire);
            }
          }
          if (cell.wires.up) {
            const wire = document.createElement('div');
            wire.className = 'wire up';
            div.appendChild(wire);
          }
          if (cell.wires.down) {
            const wire = document.createElement('div');
            wire.className = 'wire down';
            div.appendChild(wire);
          }

          const component = componentFromCell(cell);
          if (component && component.kind !== 'END') {
            if (component.kind === 'CONTACT') {
              const symbol = document.createElement('div');
              symbol.className = 'symbol';
              const chip = document.createElement('div');
              chip.className = `contact-chip${component.polarity === 'INVERSE' ? ' inverted' : ''}`;
              if (component.pulse) {
                const pulseArrow = document.createElement('span');
                pulseArrow.className = 'pulse-arrow';
                pulseArrow.textContent = component.pulse === 'RISING' ? '↑' : '↓';
                chip.appendChild(pulseArrow);
              }
              symbol.appendChild(chip);
              const text = document.createElement('div');
              text.textContent = component.device;
              text.style.position = 'absolute';
              text.style.top = '2px';
              text.style.fontSize = '10px';
              text.style.background = 'white';
              text.style.padding = '0 2px';
              symbol.appendChild(text);
              div.appendChild(symbol);
            } else if (component.kind === 'COIL') {
              const symbol = document.createElement('div');
              symbol.className = 'symbol';
              const chip = document.createElement('div');
              chip.className = 'coil-chip';
              chip.textContent = component.device;
              symbol.appendChild(chip);
              div.appendChild(symbol);
            } else if (component.kind === 'FUNCTION' || component.kind === 'COMPARE') {
              const slot = document.createElement('div');
              slot.className = 'block-slot';
              if (cell.partIndex === 0) slot.classList.add('start');
              if (cell.partIndex === component.span - 1) slot.classList.add('end');
              slot.textContent = component.slots[cell.partIndex] || '';
              div.appendChild(slot);
            }
          }

          div.addEventListener('click', () => { if (row < state.rows && col >= FIRST_EDIT_COL) setCursor(row, col); });
          div.addEventListener('mousedown', (event) => {
            if (event.button !== 0) return;
            if (row >= state.rows || col < FIRST_EDIT_COL) return;
            state.selection.dragging = true;
            setSelectionRange({ row, col }, { row, col });
            setCursor(row, col);
            render();
          });
          div.addEventListener('mouseenter', () => {
            if (!state.selection.dragging || row >= state.rows || col < FIRST_EDIT_COL) return;
            const start = state.selection.start || { row, col };
            setSelectionRange(start, { row, col });
            render();
          });
          div.addEventListener('dblclick', () => { if (row < state.rows && col >= FIRST_EDIT_COL) openInput(''); });
          grid.appendChild(div);
        }
      }

      canvasWrap.appendChild(grid);
      canvasWrap.style.display = state.practiceStage === 'ladder' ? 'block' : 'none';
      editorArea.appendChild(canvasWrap);
      if (state.practiceStage === 'wiring') editorArea.appendChild(buildWiringStage());
      else if (state.practiceStage === 'simulation') editorArea.appendChild(buildSimulationStage());
      else if (state.practiceStage === 'assessment') editorArea.appendChild(buildAssessmentStage());
      workspace.appendChild(editorArea);

      const infoPanel = document.createElement('div');
      infoPanel.className = 'panel';
      const currentMapping = ensurePracticeState(q.id).wiring;
      infoPanel.innerHTML = `
        <div class="right-stack">
          <section class="mini-panel io-address-panel"><h3>本題元件與使用者 PLC 接點</h3><div class="io-table-heading"><span>元件名稱</span><span>PLC I/O</span></div><div class="io-live-grid">${questionIoItems(q).map(item => `<div class="io-live ${item.io} ${currentMapping[item.id] && getDeviceValue(currentMapping[item.id]) ? 'on' : ''}" data-device-toggle="${currentMapping[item.id] || ''}" title="${item.label}"><div><strong>${item.id}</strong><small>${item.label}</small></div><span>${currentMapping[item.id] || '未配線'}</span></div>`).join('')}</div></section>
          <section class="mini-panel"><h3>流程狀態</h3><div class="brief-list">接線 ${Object.keys(currentMapping).length}/${q.inputs.length + q.outputs.length} · 編譯 ${state.compile.passed ? '通過' : state.compile.attempted ? '失敗' : '未執行'} · PLC ${state.simulator.enabled ? '已寫入' : '未寫入'} · 掃描 ${state.simulator.scanCount}</div></section>
        </div>
        <div id="compileSummary" class="compile-summary"></div>
        <div style="margin-top:10px;"><strong>裝置監看 / 暫存器搜尋</strong></div>
        <div class="device-watch-panel">
          <input id="deviceSearchInput" placeholder="輸入 D0、M0、Y0、T0、C0、M8000" value="${state.deviceMemory.lastSearch || ''}" />
          <div>
            <button data-action="watch-device">查詢</button>
            <button data-action="toggle-device">切換 ON/OFF</button>
          </div>
          <input id="deviceValueInput" placeholder="寫入數值，例如 123" />
          <button data-action="write-device">寫入數值</button>
          <div id="deviceWatchBox" class="mono-box checklist-box" style="margin-top: 4px;"></div>
        </div>

        <div style="margin-top:10px;"><strong>檢查清單</strong></div>
        <div id="checklistBox" class="mono-box checklist-box"></div>
        <div style="margin-top:10px;"><strong>錯誤列表（可點擊定位）</strong></div>
        <div id="issueList" class="issue-list"></div>
        <div style="margin-top:10px;"><strong>功能測試報告</strong></div>
        <div id="testReportBox" class="mono-box checklist-box"></div>
        <div style="margin-top:10px;"><strong>助記碼</strong></div>
        <div id="output" class="mono-box"></div>
      `;
      workspace.appendChild(infoPanel);
      shell.appendChild(workspace);
      root.appendChild(shell);
      const dialog = renderCompileDialog();
      if (dialog) root.appendChild(dialog);

      dom.canvasWrap = canvasWrap;
      dom.output = infoPanel.querySelector('#output');
      dom.issueList = infoPanel.querySelector('#issueList');
      dom.cursorInfo = status.querySelector('#cursorInfo');
      dom.toolInfo = status.querySelector('#toolInfo');
      dom.compileState = status.querySelector('#compileState');
      dom.toolCheckState = status.querySelector('#toolCheckState');
      dom.officialCheckState = status.querySelector('#officialCheckState');
      dom.functionTestState = status.querySelector('#functionTestState');
      dom.checklistBox = infoPanel.querySelector('#checklistBox');
      dom.testReportBox = infoPanel.querySelector('#testReportBox');
      dom.deviceSearchInput = infoPanel.querySelector('#deviceSearchInput');
      dom.deviceWatchBox = infoPanel.querySelector('#deviceWatchBox');
      dom.deviceValueInput = infoPanel.querySelector('#deviceValueInput');

      const jsonFileInput = toolbar.querySelector('#jsonFileInput');
      jsonFileInput.addEventListener('change', () => { importJsonFile(jsonFileInput.files?.[0]); jsonFileInput.value = ''; });

      if (dom.canvasWrap) {
        dom.canvasWrap.scrollLeft = previousScroll.left;
        dom.canvasWrap.scrollTop = previousScroll.top;
      }
      
      dom.deviceSearchInput.addEventListener('input', (e) => {
        state.deviceMemory.lastSearch = e.target.value;
      });

      renderIssues();
      updateStatus();
      if (dom.output) dom.output.textContent = state.il || 'END';
      renderDeviceWatchPanel();
      if (state.practiceStage === 'wiring') requestAnimationFrame(drawWiringLines);
    }

    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'z') { event.preventDefault(); undo(); return; }
      if (event.ctrlKey && event.key.toLowerCase() === 'y') { event.preventDefault(); redo(); return; }
      if (event.ctrlKey && event.key.toLowerCase() === 's') { event.preventDefault(); exportJson(); return; }

      if (state.input || document.activeElement.tagName === 'INPUT') {
        if (event.key === 'Escape' && state.input) { event.preventDefault(); hideInput(); }
        return;
      }

      if (state.practiceStage !== 'ladder') return;

      if (event.ctrlKey) {
        if (event.shiftKey && event.key === 'ArrowRight') { event.preventDefault(); sweepWireHorizontal('RIGHT'); return; }
        if (event.shiftKey && event.key === 'ArrowLeft') { event.preventDefault(); sweepWireHorizontal('LEFT'); return; }
        if (event.key === 'ArrowRight') { event.preventDefault(); connectWireTo('RIGHT'); setCursor(state.cursor.row, state.cursor.col + 1); }
        else if (event.key === 'ArrowLeft') { event.preventDefault(); connectWireTo('LEFT'); setCursor(state.cursor.row, state.cursor.col - 1); }
        else if (event.key === 'ArrowDown') {
          event.preventDefault();
          if (state.cursor.row >= state.rows - 1) ensureRowSpace(true);
          else if (state.cursor.row >= state.rows - 2) ensureRowSpace();
          connectWireTo('DOWN'); setCursor(Math.min(state.rows - 1, state.cursor.row + 1), state.cursor.col);
        }
        else if (event.key === 'ArrowUp') { event.preventDefault(); connectWireTo('UP'); setCursor(state.cursor.row - 1, state.cursor.col); }
        return;
      }

      if (event.key === 'ArrowRight') { event.preventDefault(); setCursor(state.cursor.row, state.cursor.col + 1); }
      else if (event.key === 'ArrowLeft') { event.preventDefault(); setCursor(state.cursor.row, state.cursor.col - 1); }
      else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (state.cursor.row >= state.rows - 2) ensureRowSpace();
        setCursor(Math.min(state.rows - 1, state.cursor.row + 1), state.cursor.col);
      }
      else if (event.key === 'ArrowUp') { event.preventDefault(); setCursor(state.cursor.row - 1, state.cursor.col); }
      else if (event.key === 'Enter') { event.preventDefault(); openInput(''); }
      else if (event.key === 'Delete') {
        event.preventDefault();
        if (state.selection.active && state.selection.cells.length) removeSelection();
        else clearCurrentCell();
      }
      else if (event.key === 'Backspace') {
        event.preventDefault();
        if (state.selection.active && state.selection.cells.length) removeSelection();
        else clearPreviousCell();
      }
      else if (event.key.length === 1 && !event.altKey && !event.metaKey && !['Tab', 'Shift', 'CapsLock', 'Control'].includes(event.key)) {
        event.preventDefault();
        openInput(event.key);
      }
    });

    document.addEventListener('dragstart', (event) => {
      const component = event.target.closest('.field-component[data-io-id]');
      if (!component) return;
      state.pendingWire = { componentId:component.dataset.ioId, io:component.dataset.io };
      event.dataTransfer.effectAllowed = 'link';
      event.dataTransfer.setData('text/plain', component.dataset.ioId);
      component.classList.add('dragging');
      document.body.classList.add('wiring-drag-active');
    });

    document.addEventListener('dragover', (event) => {
      const terminal = event.target.closest('.plc-terminal[data-address]');
      if (!terminal || !state.pendingWire || terminal.dataset.io !== state.pendingWire.io) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = 'link';
      terminal.classList.add('drop-ready');
    });

    document.addEventListener('dragleave', (event) => {
      event.target.closest('.plc-terminal')?.classList.remove('drop-ready');
    });

    document.addEventListener('drop', (event) => {
      const terminal = event.target.closest('.plc-terminal[data-address]');
      document.querySelectorAll('.plc-terminal.drop-ready').forEach(item => item.classList.remove('drop-ready'));
      if (!terminal || !state.pendingWire || terminal.dataset.io !== state.pendingWire.io) return;
      event.preventDefault();
      handleWiringTerminal(terminal);
    });

    document.addEventListener('dragend', (event) => {
      event.target.closest('.field-component')?.classList.remove('dragging');
      document.body.classList.remove('wiring-drag-active');
      document.querySelectorAll('.plc-terminal.drop-ready').forEach(item => item.classList.remove('drop-ready'));
    });

    document.addEventListener('click', (event) => {
      const actionTarget = event.target.closest('[data-action]');
      const toolTarget = event.target.closest('[data-tool]');
      const issueTarget = event.target.closest('[data-issue-index]');
      const questionTarget = event.target.closest('[data-question-id]');
      const stageTarget = event.target.closest('[data-stage]');
      const wiringTarget = event.target.closest('.terminal, .plc-terminal');
      const deviceToggleTarget = event.target.closest('[data-device-toggle]');
      const simulationInputTarget = event.target.closest('[data-sim-input-id]');

      if (actionTarget) {
        const action = actionTarget.dataset.action;
        if (action === 'compile') compileProgram();
        else if (action === 'download-plc') downloadToVirtualPlc();
        else if (action === 'run-tests') runFunctionalTests();
        else if (action === 'scan-once') runOneScan();
        else if (action === 'reset-sim') resetSimulator();
        else if (action === 'export') exportJson();
        else if (action === 'import') document.getElementById('jsonFileInput')?.click();
        else if (action === 'clear') { saveSnapshot(); init({ preserveHistory: true }); }
        else if (action === 'undo') undo();
        else if (action === 'redo') redo();
        else if (action === 'watch-device') renderDeviceWatchPanel();
        else if (action === 'toggle-device') toggleWatchedDevice();
        else if (action === 'write-device') writeWatchedDevice();
        else if (action === 'auto-wire') autoWireQuestion();
        else if (action === 'clear-wiring') clearQuestionWiring();
        else if (action === 'close-compile-dialog') { state.compileDialogVisible = false; render(); }
        else if (action === 'back-home') returnToQuestionHome();
        else if (action.startsWith('sim-')) updateQuestionSimulation(action);
        updateStatus();
        return;
      }

      if (questionTarget) { switchQuestion(questionTarget.dataset.questionId); return; }
      if (stageTarget) { setPracticeStage(stageTarget.dataset.stage); return; }
      if (wiringTarget) { handleWiringTerminal(wiringTarget); return; }
      if (simulationInputTarget) { operateSimulationInput(simulationInputTarget.dataset.simInputId); return; }
      if (deviceToggleTarget?.dataset.deviceToggle) {
        const device = deviceToggleTarget.dataset.deviceToggle;
        if (isDeviceX(device)) { setDeviceValue(device, !getDeviceValue(device)); if (state.compile.passed) runOneScan(); render(); }
        return;
      }

      if (toolTarget) {
        state.tool = toolTarget.dataset.tool;
        document.querySelectorAll('[data-tool]').forEach((button) => button.classList.toggle('active', button === toolTarget));
        updateStatus();
        return;
      }

      if (issueTarget) {
        const index = Number(issueTarget.dataset.issueIndex);
        const issue = state.issues[index];
        if (issue) {
          state.compileDialogVisible = false;
          state.practiceStage = issue.code === 'E701' || issue.code === 'E702' ? 'wiring' : 'ladder';
          setCursor(issue.row, issue.col);
        }
      }
    });

    document.addEventListener('mouseup', () => {
      if (state.selection.dragging) {
        state.selection.dragging = false;
        render();
      }
    });

    hydratePracticeState();
    ensurePracticeState();
    if (state.programsByQuestion[state.activeQuestion]) restoreSnapshot(state.programsByQuestion[state.activeQuestion]);
    else init();
    window.addEventListener('beforeunload', saveActiveQuestionProgram);
    window.addEventListener('resize', () => { if (state.practiceStage === 'wiring') requestAnimationFrame(drawWiringLines); });
