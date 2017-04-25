
const Zamanlar = {
    'Genis': {
        '+': '&*r^',
        '-': {Any: 'm#z^', Ben:'m#m', Biz:'m#y*z'},
        '+?':{Any: '&*r?^', Onlar: '&*yor^?'},
        '-?':{Any: 'm#z^?', Ben:'m#z?^', Sen:'m#z?^', Biz:'m#z?^'}
    },
    'Simdiki':{
        '+': '&*yor^',
        '-': 'm*yor^',
        '+?': {Any: '&*yor?^', Onlar: '&*yor^?'},
        '-?': {Any: 'm*yor?^', Onlar: 'm*yor^?'}
    },
    'Gelecek':{
        '+': '%#c#k^',
        '-': 'm#y#c#k^',
        '+?': {Any: '%#c#k^?', Onlar: '%#c#k^?'},
        '-?': {Any: 'm#y#c#k?^', Onlar: 'm*yor^?'}
    },
    'GGecmis':{
        '+': {Any: 'd*^', Sen: 'd*&*n', Biz:'d*k', Siz:'d*&*n*z'},
        '-': {Any: 'm#d*^', Sen: 'm#d*&*n', Biz:'m#d*k', Siz:'m#d*&*n*z'},
        '+?': {Any: 'd*^?', Sen: 'd*&*n?', Biz:'d*k?', Siz:'d*&*n*z?'},
        '-?': {Any: 'm#d*^?', Sen: 'm#d*&*n?', Biz:'m#d*k?', Siz:'m#d*&*n*z?'},
    },
    'DGecmis':{
        '+': 'm*ş^',
        '-': 'm#m*ş^',
        '+?': {Any: 'm*ş?^', Onlar: 'm*ş^?'},
        '-?': {Any: 'm#m*ş?^', Onlar: 'm#m*ş^?'}
    },
    'Emir':{
        '+':  {Any: '', O:'s*n', Siz:'%*n', Onlar:'s*nl#r'},
        '-':  {Any: 'm#', O:'m#s*n', Siz:'m#%*n', Onlar:'m#s*nl#r'},
        '+?': {Any: '', Sen:'s#n?', O:'s*n?', Siz:'s#n*z?', Onlar:'s*nl#r?'},
        '-?': {Any: '', Sen:'m#s#n?',O:'m#s*n?', Siz:'m#s#n*z?', Onlar:'m#s*nl#r?'}
    },
    'Gereklilik':{
        '+':  {Any: '', Ben:'m#l*y*m', Sen:'m#l*s*n', O:'m#l*', Biz:'m#l*y*z', Siz:'m#l*s*n*z', Onlar:'m#l*l#r'},
        '-':  {Any: '', Ben:'m#m#l*y*m', Sen:'m#m#l*s*n', O:'m#m#l*', Biz:'m#m#l*y*z', Siz:'m#m#l*s*n*z', Onlar:'m#m#l*l#r'},
        '+?': {Any: '', Ben:'m#l*?y*m', Sen:'m#l*?s*n', O:'m#l*?', Biz:'m#l*?y*z', Siz:'m#l*?s*n*z', Onlar:'m#l*l#r?'},
        '-?': {Any: '', Ben:'m#m#l*?y*m', Sen:'m#m#l*?s*n', O:'m#m#l*?', Biz:'m#m#l*?y*z', Siz:'m#m#l*?s*n*z', Onlar:'m#m#l*l#r?'}
    },
    'Istek':{
        '+':  {Any: '', Ben:'%#y*m', Sen:'%#s*n', O:'#', Biz:'%#l*m', Siz:'%#s*n*z', Onlar:'%#l#r'},
        '-':  {Any: '', Ben:'m#y#y*m', Sen:'m#y#s*n', O:'m#y#', Biz:'m#y#l*m', Siz:'m#y#s*n*z', Onlar:'m#y#l#r'},
        '+?': {Any: '', Ben:'%#y*m?', Sen:'%#s*n?', O:'#?', Biz:'%#l*m?', Siz:'%#s*n*z?', Onlar:'%#l#r?'},
        '-?': {Any: '', Ben:'m#y#y*m?', Sen:'m#y#s*n?', O:'m#y#?', Biz:'m#y#l*m?', Siz:'m#y#s*n*z?', Onlar:'m#y#l#r?'}
    },
    'Sart':{
        '+':  {Any: '', Ben:'s#m', Sen:'s#n', O:'s#', Biz:'s#k', Siz:'s#n*z', Onlar:'s#l#r'},
        '-':  {Any: '', Ben:'m#s#m', Sen:'m#s#n', O:'m#s#', Biz:'m#s#k', Siz:'m#s#n*z', Onlar:'m#s#l#r'},
        '+?': {Any: '', Ben:'s#m?', Sen:'s#n?', O:'s#?', Biz:'s#k?', Siz:'s#n*z?', Onlar:'s#l#r?'},
        '-?': {Any: '', Ben:'m#s#m?', Sen:'m#s#n?', O:'m#s#?', Biz:'m#s#k?', Siz:'m#s#n*z?', Onlar:'m#s#l#r?'}
    }
};

const Durum = {
    Bulunma: 'd#',
    Yonelme: '%#',
    Belirtme: '%*',
    Ayrilma: 'd#n'
};

const Sahiplik = {
    Ben:  '&*m',
    Sen:  '&*n',
    O:    '&s*',
    Biz:  '&*m*z',
    Siz:  '&*n*z',
    Onlar:'l#r*'
};

const Kisiler = {
    Ben:'%&*m',
    Sen:'s*n',
    O  :'',
    Biz:'y*z',
    Siz:'s*n*z',
    Onlar:'l#r'
};

const Soru = '_m*';

module.exports = {Zamanlar, Durum, Sahiplik, Kisiler, Soru};
