eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    }
    ;
    if (!''.replace(/^/, String)) {
        while (c--)
            r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }
        ];
        e = function() {
            return '\\w+'
        }
        ;
        c = 1
    }
    ;while (c--)
        if (k[c])
            p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
    return p
}('m 3=n p();f Q(d,4){B.d=d;B.4=4;B.u=0}f q(v){g=5(v).9().10(/\\.|,| |\\-|\\t|a-z/11,"");g=(o(g)!=g-0)?0:o(g);7(o(g)>0){5(v).9(g)}C{5(v).9("")}12 g}f w(){m i,x,c,D;m h=n p();m E=-1;m r=n p();F=q("#G");s=q("#s");R=q("#H");13=q("#I");J=R;e(i=0;i<3.b;i++){h[i]=3[i].4;r[i]=2;3[i].u=0;J+=3[i].4}y=(s*J)/14;7(y<=0)y=1;6=n p();e(i=0;i<3.b;i++)7(3[i].4<y){3[i].u=-1}C{6.K(i)}7(F&&6.b){e(x=0;x<F;x++){8=6[0];e(c=0;c<6.b;c++){7(h[6[c]]>h[8]){8=6[c]}C 7(h[6[c]]==h[8]){7(3[6[c]].4>3[8].4){8=6[c]}}}3[8].u++;E=h[8];h[8]=3[8].4/r[8];r[8]++}T=8;L=-1;m A=-1;e(c=0;c<6.b;c++)7(6[c]!=T){m M=E*(r[6[c]]-1)-3[6[c]].4;7(L==-1||M<A){L=6[c];A=M}}15=16.17(A+1);k=n p();e(i=0;i<3.b;i++)k.K(i);e(i=0;i<3.b;i++)e(j=0;j<3.b-1;j++)7(3[k[j+1]].4>3[k[j]].4){D=k[j];k[j]=k[j+1];k[j+1]=D}}18()}f 19(l,d){7(l<3.b){3[l].d=d;5(".1a"+l).U(3[l].d)}}f 1b(l,4){7(l<3.b){3[l].4=(o(4)!=4-0)?"":o(4);w()}}f 1c(i){3.1d(i,1);V();w()}f 1e(i){3.K(n Q((5("#d"+i))?5("#d"+i).9():\'\',(5("#4"+i))?o(5("#4"+i).9()):0));V();w()}f 1f(){7(!5(\'.W\').1g(\'#N\')){5(\'#N\').U(\'&O;&O;&O;<1h 1i="0" 1j="/X/1k/1l.1m" />\');5(\'#N\').1n(\'W\');P={\'1o\':\'S\',\'4\':\'\',\'s\':5("#s").9(),\'Y\':5("#Y").9(),\'H\':5("#H").9(),\'I\':5("#I").9(),\'G\':5("#G").9(),\'Z\':5("#Z").9()};e(i=0;i<3.b;i++)P.4+=3[i].d+"|"+3[i].4+"|";5.1p({1q:"1r",1s:"/X/"+1t,1u:P,1v:1w})}}', 62, 95, '|||cdds|vots|jQuery|bons|if|candidata|val||length||sigla|for|function|num|dividend|||ordrebo|pos|var|new|parseInt|Array|getInt|divisor|minim||elegits|id|calcular|esc|minimVots||minDiffVots|this|else|aux|tallDividend|numRep|representants|blanc|nul|totalVots|push|seguentCand|diffVots|btSave|nbsp|vts|Candidatura|bl||ultimCand|html|dibCands|disSave|util|cens|titol|replace|gi|return|nu|100|votsMes|Math|floor|dibRes|updateSigla|sig|updateVots|elimCand|splice|addCand|guardar|is|img|border|src|hondt|load|gif|addClass|save|ajax|type|POST|url|varurl|data|success|dibSave'.split('|'), 0, {}))
