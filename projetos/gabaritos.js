document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    // F12
    if (e.keyCode == 123) {
        return false;
    }
    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+U
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

setInterval(function () {
    debugger;
}, 50);

const _0x112558 = _0x271a;
(function (_0x4c12a0, _0x2ce203) {
    const _0x1944cb = _0x271a, _0x4c5fca = _0x4c12a0();
    while (!![]) {
        try {
            const _0x2cc30b = -parseInt(_0x1944cb(0x141)) / (-0xc90 + -0x5b * 0x65 + 0x3078) + -parseInt(_0x1944cb(0x15e)) / (0xda * -0x19 + -0x174e + 0x164d * 0x2) * (parseInt(_0x1944cb(0x16d)) / (-0x10a8 + 0x85 + 0x2 * 0x813)) + -parseInt(_0x1944cb(0x155)) / (-0x1019 + -0x16 * 0x131 + -0x3d9 * -0xb) + parseInt(_0x1944cb(0x18d)) / (-0xe68 + 0x329 + 0xb44) + parseInt(_0x1944cb(0x159)) / (0x3 * -0x365 + -0x1c1 * -0xd + -0x7c * 0x1a) + parseInt(_0x1944cb(0x12a)) / (-0x1 * -0x2493 + -0x16 * 0xd + -0x236e) + -parseInt(_0x1944cb(0x16a)) / (-0xc * 0x2b4 + 0x15d * -0xa + -0x696 * -0x7) * (-parseInt(_0x1944cb(0x11b)) / (0xecc + 0x1de1 * 0x1 + -0x2ca4));
            if (_0x2cc30b === _0x2ce203)
                break;
            else
                _0x4c5fca['push'](_0x4c5fca['shift']());
        } catch (_0x472062) {
            _0x4c5fca['push'](_0x4c5fca['shift']());
        }
    }
}(_0xb76a, 0x8a585 + -0x1c40d * 0x1 + 0x332 * -0xc5));
const firebaseConfig = {
    'apiKey': _0x112558(0x14a) + _0x112558(0x17a) + _0x112558(0x1b7) + _0x112558(0x130),
    'authDomain': _0x112558(0x12b) + _0x112558(0x131) + _0x112558(0x19e) + _0x112558(0x187),
    'databaseURL': _0x112558(0x1a3) + _0x112558(0x1be) + _0x112558(0x126) + _0x112558(0x127) + _0x112558(0x181) + _0x112558(0x15a),
    'projectId': _0x112558(0x12b) + _0x112558(0x131) + 'ts',
    'storageBucket': _0x112558(0x12b) + _0x112558(0x131) + _0x112558(0x19e) + _0x112558(0x139) + 'pp',
    'messagingSenderId': _0x112558(0x1c1) + '17',
    'appId': _0x112558(0x157) + _0x112558(0x151) + _0x112558(0x158) + _0x112558(0x15d) + '8'
};
firebase[_0x112558(0x18a) + _0x112558(0x135)](firebaseConfig);
const db = firebase[_0x112558(0x128)](), gabaritosGrid = document[_0x112558(0x188) + _0x112558(0x1a0)](_0x112558(0x16e) + _0x112558(0x150)), searchInput = document[_0x112558(0x188) + _0x112558(0x1a0)](_0x112558(0x18b) + 'ut');
let allGabaritos = [];
function loadGabaritos() {
    const _0x130ae2 = _0x112558, _0x1e8653 = {
            'PWDdY': function (_0x219f56, _0x228c71) {
                return _0x219f56(_0x228c71);
            },
            'NTVjJ': _0x130ae2(0x14c) + _0x130ae2(0x168) + _0x130ae2(0x179) + _0x130ae2(0x15f),
            'TdYIC': _0x130ae2(0x1ad),
            'BCkgO': _0x130ae2(0x12f)
        };
    db[_0x130ae2(0x129)](_0x1e8653[_0x130ae2(0x166)])['on'](_0x1e8653[_0x130ae2(0x142)], _0x1ea768 => {
        const _0x16d17e = _0x130ae2, _0x350000 = _0x1ea768[_0x16d17e(0x163)]();
        gabaritosGrid[_0x16d17e(0x172)] = '', allGabaritos = [], _0x350000 ? (allGabaritos = Object[_0x16d17e(0x1b8)](_0x350000)[_0x16d17e(0x1ac)](_0x2c6f03 => ({
            'id': _0x2c6f03,
            ..._0x350000[_0x2c6f03]
        })), _0x1e8653[_0x16d17e(0x137)](renderGabaritos, allGabaritos)) : _0x1e8653[_0x16d17e(0x137)](showError, _0x1e8653[_0x16d17e(0x12e)]);
    });
}
function renderGabaritos(_0x2dcce5) {
    const _0x4092ea = _0x112558, _0x1174f4 = {
            'CFrUw': function (_0x4084af, _0x455001) {
                return _0x4084af === _0x455001;
            },
            'jbTJK': _0x4092ea(0x194),
            'ozpoC': _0x4092ea(0x167),
            'DswyA': _0x4092ea(0x1b9) + _0x4092ea(0x13a),
            'HWNbd': _0x4092ea(0x171),
            'PfKwL': _0x4092ea(0x124) + _0x4092ea(0x17c) + _0x4092ea(0x13b),
            'Mgdzv': function (_0x3b33cc, _0x3d0d42) {
                return _0x3b33cc === _0x3d0d42;
            },
            'ALVwD': function (_0x2b1a11, _0x4c7a19) {
                return _0x2b1a11(_0x4c7a19);
            },
            'Dumny': _0x4092ea(0x192) + _0x4092ea(0x185) + _0x4092ea(0x13f)
        };
    if (_0x1174f4[_0x4092ea(0x164)](_0x2dcce5[_0x4092ea(0x1bd)], -0x5b5 * -0x5 + 0x57 * 0x52 + 0x12cd * -0x3)) {
        _0x1174f4[_0x4092ea(0x122)](showError, _0x1174f4[_0x4092ea(0x11a)]);
        return;
    }
    gabaritosGrid[_0x4092ea(0x172)] = '', _0x2dcce5[_0x4092ea(0x19f)](_0x4e134d => {
        const _0x5c2a8a = _0x4092ea;
        if (_0x1174f4[_0x5c2a8a(0x17b)](_0x4e134d[_0x5c2a8a(0x161)], _0x1174f4[_0x5c2a8a(0x197)])) {
            const _0x51d4ec = document[_0x5c2a8a(0x1a1) + _0x5c2a8a(0x195)](_0x1174f4[_0x5c2a8a(0x19d)]);
            _0x51d4ec[_0x5c2a8a(0x145)] = _0x1174f4[_0x5c2a8a(0x1b2)], _0x51d4ec[_0x5c2a8a(0x172)] = _0x5c2a8a(0x14e) + _0x5c2a8a(0x1a7) + _0x5c2a8a(0x1c0) + _0x5c2a8a(0x13d) + _0x5c2a8a(0x16f) + _0x5c2a8a(0x12c) + _0x5c2a8a(0x1af) + _0x5c2a8a(0x1ab) + _0x5c2a8a(0x1b1) + '>' + (_0x4e134d[_0x5c2a8a(0x1a8)] || _0x1174f4[_0x5c2a8a(0x13e)]) + (_0x5c2a8a(0x1bf) + _0x5c2a8a(0x12c) + _0x5c2a8a(0x1b0) + _0x5c2a8a(0x1a2) + _0x5c2a8a(0x15b) + _0x5c2a8a(0x1b3) + _0x5c2a8a(0x193) + _0x5c2a8a(0x12c) + _0x5c2a8a(0x191) + _0x5c2a8a(0x12c) + _0x5c2a8a(0x186) + _0x5c2a8a(0x136) + _0x5c2a8a(0x13c)) + (_0x4e134d[_0x5c2a8a(0x196)] || _0x4e134d['id']) + (_0x5c2a8a(0x138) + _0x5c2a8a(0x12c) + _0x5c2a8a(0x17d) + _0x5c2a8a(0x169) + _0x5c2a8a(0x176)) + (_0x4e134d[_0x5c2a8a(0x178) + 'n'] || _0x1174f4[_0x5c2a8a(0x140)]) + (_0x5c2a8a(0x149) + _0x5c2a8a(0x12c) + _0x5c2a8a(0x182)) + _0x4e134d[_0x5c2a8a(0x1bb)] + (_0x5c2a8a(0x125) + _0x5c2a8a(0x15c) + _0x5c2a8a(0x144) + _0x5c2a8a(0x11f) + _0x5c2a8a(0x12c) + _0x5c2a8a(0x146) + _0x5c2a8a(0x11c) + _0x5c2a8a(0x1bc) + _0x5c2a8a(0x14b) + _0x5c2a8a(0x183) + _0x5c2a8a(0x12c) + _0x5c2a8a(0x12c) + _0x5c2a8a(0x19a) + _0x5c2a8a(0x153) + _0x5c2a8a(0x146) + _0x5c2a8a(0x18e) + _0x5c2a8a(0x148)), gabaritosGrid[_0x5c2a8a(0x170) + 'd'](_0x51d4ec);
        }
    });
}
function _0x271a(_0x3c0962, _0x6148e) {
    const _0xd4952c = _0xb76a();
    return _0x271a = function (_0x5d9771, _0x3af2ff) {
        _0x5d9771 = _0x5d9771 - (0x4a8 + 0x2148 + -0x126b * 0x2);
        let _0xbf5d4e = _0xd4952c[_0x5d9771];
        return _0xbf5d4e;
    }, _0x271a(_0x3c0962, _0x6148e);
}
function _0xb76a() {
    const _0x27d483 = [
        'bHYMcU4dPg',
        'CFrUw',
        'ção\x20dispon',
        '\x20\x20<p\x20class',
        'ng-spinner',
        'ault',
        'e.html',
        'tdb.fireba',
        '\x20<a\x20href=\x22',
        'alt\x22></i>\x0a',
        'rcle\x22></i>',
        'ultado\x20enc',
        '\x20\x20\x20\x20\x20\x20<h3\x20',
        'eapp.com',
        'getElement',
        '\x22error-mes',
        'initialize',
        'search-inp',
        'as\x20fa-excl',
        '1169250zYpBny',
        '/a>\x0a\x20\x20\x20\x20\x20\x20',
        'KMoKI',
        'maintenanc',
        '\x20\x20\x20</div>\x0a',
        'Nenhum\x20res',
        '/span>\x0a\x20\x20\x20',
        'Ativo',
        'ent',
        'title',
        'jbTJK',
        'lhvUc',
        'cflcv',
        'Ver\x20Gabari',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<',
        'filter',
        'ozpoC',
        'ts.firebas',
        'forEach',
        'ById',
        'createElem',
        'pan\x20class=',
        'https://co',
        'preventDef',
        '\x20\x20\x20\x20',
        '\x22loading\x22>',
        '\x20\x20\x20\x20\x20\x20\x20<di',
        'category',
        'target',
        'href',
        'lass=\x22card',
        'map',
        'gabaritos',
        'HMzHg',
        '\x20\x20\x20<span\x20c',
        '\x20\x20\x20\x20\x20\x20\x20\x20<s',
        '-category\x22',
        'DswyA',
        'us\x22>Ativo<',
        'addEventLi',
        'jWaYk',
        'shiftKey',
        'MWkhE73939',
        'keys',
        'gabarito-c',
        'ass=\x22loadi',
        'url',
        'as\x20fa-exte',
        'length',
        'ntrole-cla',
        '</span>\x0a\x20\x20',
        'v\x20class=\x22c',
        '6625967910',
        'Dumny',
        '491382Mioupv',
        'i\x20class=\x22f',
        'Owojf',
        'active',
        'button\x22>\x0a\x20',
        'amation-ci',
        '\x22></div>\x0a\x20',
        'ALVwD',
        'iv>\x0a\x20\x20\x20\x20',
        'Sem\x20descri',
        '\x22\x20target=\x22',
        'ss-scripts',
        '-default-r',
        'database',
        'ref',
        '2208913vbdaOB',
        'controle-c',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'stener',
        'NTVjJ',
        'value',
        'ErOaA2Stc',
        'lass-scrip',
        'input',
        'DOMContent',
        'trim',
        'App',
        'class=\x22car',
        'PWDdY',
        '</h3>\x0a\x20\x20\x20\x20',
        'estorage.a',
        'ard',
        'ível.',
        'd-title\x22>',
        'ard-header',
        'HWNbd',
        'ontrado.',
        'PfKwL',
        '32946vjqZqd',
        'BCkgO',
        'contextmen',
        'ass=\x22card-',
        'className',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20<',
        'Loaded',
        '\x20\x20\x20\x20\x20\x20',
        '</p>\x0a\x20\x20\x20\x20\x20',
        'AIzaSyBxCC',
        'rnal-link-',
        'Nenhum\x20gab',
        'location',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x20\x20\x20<div\x20cl',
        'grid',
        '1017:web:8',
        'WYyJq',
        'to\x0a\x20\x20\x20\x20\x20\x20\x20',
        'ZGQVR',
        '1757436RMckSq',
        'keydown',
        '1:66259679',
        '57fa68154b',
        '72588leBHCa',
        'seio.com',
        '\x22card-stat',
        '_blank\x22\x20cl',
        'c2d17375e7',
        '28kvZeBu',
        'momento.',
        'toLowerCas',
        'status',
        'ctrlKey',
        'val',
        'Mgdzv',
        'includes',
        'TdYIC',
        'div',
        'arito\x20disp',
        '=\x22card-des',
        '72YNayTi',
        '\x20\x20\x20\x20\x20\x20\x20</d',
        'ERxYW',
        '62313dXDVDl',
        'gabaritos-',
        '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20',
        'appendChil',
        'Geral',
        'innerHTML',
        'sage\x22>\x0a\x20\x20\x20',
        '\x20\x20\x20<p>',
        'keyCode',
        'cription\x22>',
        'div\x20class=',
        'descriptio',
        'onível\x20no\x20'
    ];
    _0xb76a = function () {
        return _0x27d483;
    };
    return _0xb76a();
}
function searchGabaritos(_0x59507e) {
    const _0x3d6173 = _0x112558, _0x35bfb8 = {
            'ERxYW': function (_0x39f329, _0x395e05) {
                return _0x39f329(_0x395e05);
            }
        }, _0x115289 = _0x59507e[_0x3d6173(0x160) + 'e']()[_0x3d6173(0x134)](), _0x5ae43e = allGabaritos[_0x3d6173(0x19c)](_0x337653 => {
            const _0x40c7f7 = _0x3d6173, _0x403559 = (_0x337653[_0x40c7f7(0x196)] || _0x337653['id'] || '')[_0x40c7f7(0x160) + 'e'](), _0x4e3bc1 = (_0x337653[_0x40c7f7(0x178) + 'n'] || '')[_0x40c7f7(0x160) + 'e'](), _0x1878fa = (_0x337653[_0x40c7f7(0x1a8)] || '')[_0x40c7f7(0x160) + 'e']();
            return _0x403559[_0x40c7f7(0x165)](_0x115289) || _0x4e3bc1[_0x40c7f7(0x165)](_0x115289) || _0x1878fa[_0x40c7f7(0x165)](_0x115289);
        });
    _0x35bfb8[_0x3d6173(0x16c)](renderGabaritos, _0x5ae43e);
}
function showError(_0x2a1efb) {
    const _0x4e2b79 = _0x112558;
    gabaritosGrid[_0x4e2b79(0x172)] = _0x4e2b79(0x19b) + _0x4e2b79(0x177) + _0x4e2b79(0x189) + _0x4e2b79(0x173) + _0x4e2b79(0x146) + _0x4e2b79(0x11c) + _0x4e2b79(0x18c) + _0x4e2b79(0x120) + _0x4e2b79(0x184) + _0x4e2b79(0x14e) + _0x4e2b79(0x174) + _0x2a1efb + (_0x4e2b79(0x149) + _0x4e2b79(0x191) + _0x4e2b79(0x1a5));
}
function showLoading() {
    const _0x24057c = _0x112558;
    gabaritosGrid[_0x24057c(0x172)] = _0x24057c(0x19b) + _0x24057c(0x177) + _0x24057c(0x1a6) + _0x24057c(0x14e) + _0x24057c(0x14f) + _0x24057c(0x1ba) + _0x24057c(0x17e) + _0x24057c(0x121) + _0x24057c(0x16b) + _0x24057c(0x123);
}
document[_0x112558(0x1b4) + _0x112558(0x12d)](_0x112558(0x133) + _0x112558(0x147), () => {
    const _0x5b1103 = _0x112558, _0x552c2b = {
            'Owojf': function (_0x567f43, _0x4c40b5) {
                return _0x567f43(_0x4c40b5);
            },
            'lhvUc': function (_0x52b6a0) {
                return _0x52b6a0();
            },
            'jWaYk': function (_0x4e8c82) {
                return _0x4e8c82();
            },
            'HMzHg': _0x5b1103(0x132)
        };
    _0x552c2b[_0x5b1103(0x198)](showLoading), _0x552c2b[_0x5b1103(0x1b5)](loadGabaritos), searchInput[_0x5b1103(0x1b4) + _0x5b1103(0x12d)](_0x552c2b[_0x5b1103(0x1ae)], _0x2cf2c3 => {
        const _0x1548fd = _0x5b1103;
        _0x552c2b[_0x1548fd(0x11d)](searchGabaritos, _0x2cf2c3[_0x1548fd(0x1a9)][_0x1548fd(0x12f)]);
    });
}), db[_0x112558(0x129)](_0x112558(0x190) + 'e')['on'](_0x112558(0x12f), _0x4363ae => {
    const _0x2bb9a8 = _0x112558, _0x371f61 = { 'ZGQVR': _0x2bb9a8(0x190) + _0x2bb9a8(0x180) }, _0x53b27a = _0x4363ae[_0x2bb9a8(0x163)]();
    _0x53b27a && _0x53b27a[_0x2bb9a8(0x11e)] && (window[_0x2bb9a8(0x14d)][_0x2bb9a8(0x1aa)] = _0x371f61[_0x2bb9a8(0x154)]);
}), document[_0x112558(0x1b4) + _0x112558(0x12d)](_0x112558(0x143) + 'u', _0x487e5d => _0x487e5d[_0x112558(0x1a4) + _0x112558(0x17f)]()), document[_0x112558(0x1b4) + _0x112558(0x12d)](_0x112558(0x156), _0x35adf0 => {
    const _0x514b87 = _0x112558, _0x23c990 = {
            'WYyJq': function (_0x364533, _0x2ecaa3) {
                return _0x364533 === _0x2ecaa3;
            },
            'cflcv': function (_0x592687, _0x27eed6) {
                return _0x592687 === _0x27eed6;
            },
            'KMoKI': function (_0x5e8c0f, _0x5e034c) {
                return _0x5e8c0f === _0x5e034c;
            }
        };
    if (_0x23c990[_0x514b87(0x152)](_0x35adf0[_0x514b87(0x175)], -0x28 * 0x73 + -0xf * 0x207 + 0x30dc) || _0x35adf0[_0x514b87(0x162)] && _0x35adf0[_0x514b87(0x1b6)] && _0x23c990[_0x514b87(0x199)](_0x35adf0[_0x514b87(0x175)], 0x17dd * 0x1 + 0x4 * 0x382 + -0x12ce * 0x2) || _0x35adf0[_0x514b87(0x162)] && _0x35adf0[_0x514b87(0x1b6)] && _0x23c990[_0x514b87(0x152)](_0x35adf0[_0x514b87(0x175)], 0x1eca + 0x689 + -0x4a2 * 0x8) || _0x35adf0[_0x514b87(0x162)] && _0x35adf0[_0x514b87(0x1b6)] && _0x23c990[_0x514b87(0x199)](_0x35adf0[_0x514b87(0x175)], -0x108b + 0x1a57 + -0x982 * 0x1) || _0x35adf0[_0x514b87(0x162)] && _0x23c990[_0x514b87(0x18f)](_0x35adf0[_0x514b87(0x175)], 0x1 * 0x5fd + 0x118f + -0x1737))
        return _0x35adf0[_0x514b87(0x1a4) + _0x514b87(0x17f)](), ![];
});