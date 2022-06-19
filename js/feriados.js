function easterDay(y) {
    var c = Math.floor(y / 100);
    var n = y - 19 * Math.floor(y / 19);
    var k = Math.floor((c - 17) / 25);
    var i = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + 19 * n + 15;
    i = i - 30 * Math.floor((i / 30));
    i = i - Math.floor(i / 28) * (1 - Math.floor(i / 28) * Math.floor(29 / (i + 1)) * Math.floor((21 - n) / 11));
    var j = y + Math.floor(y / 4) + i + 2 - c + Math.floor(c / 4);
    j = j - 7 * Math.floor(j / 7);
    var l = i - j;
    var m = 3 + Math.floor((l + 40) / 44);
    var d = l + 28 - 31 * Math.floor(m / 4);
    return moment([y, (m - 1), d]);
};

function getHolidaysBr(y) {
    var anoNovo = moment("01/01/"+y,"DD/MM/YYYY");
    var carnaval1 = easterDay(y).add(-48, "d");
    var carnaval2 = easterDay(y).add(-47, "d");
    var paixaoCristo = easterDay(y).add(-2, "d");
    var pascoa = easterDay(y);
    var tiradentes = moment("21/04/"+y,"DD/MM/YYYY");
    var corpusChristi =  easterDay(y).add(60, "d");
    var diaTrabalho = moment("01/05/"+y,"DD/MM/YYYY");
    var diaIndependencia = moment("07/09/"+y,"DD/MM/YYYY");
    var nossaSenhora = moment("12/10/"+y,"DD/MM/YYYY");
    var finados = moment("02/11/"+y,"DD/MM/YYYY");
    var proclamaRepublica = moment("15/11/"+y,"DD/MM/YYYY");
    var natal = moment("25/12/"+y,"DD/MM/YYYY");
    return [
        {m: anoNovo, dia: "Ano Novo", d: anoNovo.format("DD/MM/YYYY") },
        {m: carnaval1, dia: "Carnaval", d: carnaval1.format("DD/MM/YYYY") },
        {m: carnaval2, dia: "Carnaval", d: carnaval2.format("DD/MM/YYYY") },
        {m: paixaoCristo, dia: "Paix\u00E3o de Cristo", d: paixaoCristo.format("DD/MM/YYYY") },
        {m: pascoa, dia: "P\u00E1scoa", d: pascoa.format("DD/MM/YYYY") },
        {m: tiradentes, dia: "Tiradentes", d: tiradentes.format("DD/MM/YYYY") },
        {m: corpusChristi, dia: "Corpus Christi", d: corpusChristi.format("DD/MM/YYYY") },
        {m: diaTrabalho, dia: "Dia do Trabalho", d: diaTrabalho.format("DD/MM/YYYY") },
        {m: diaIndependencia, dia: "Dia da Independ\u00EAncia do Brasil", d: diaIndependencia.format("DD/MM/YYYY") },
        {m: nossaSenhora, dia: "Nossa Senhora Aparecida", d: nossaSenhora.format("DD/MM/YYYY") },
        {m: finados, dia: "Finados", d: finados.format("DD/MM/YYYY") },
        {m: proclamaRepublica, dia: "Proclama\u00E7\u00E3o da Rep\u00FAblica", d: proclamaRepublica.format("DD/MM/YYYY") },
        {m: natal, dia: "Natal", d: natal.format("DD/MM/YYYY") }
    ];
};

function getHolidayBetweenDates(date, dateTo){
    var dateStart = moment(date,"YYYY-MM-DD");
    var dateEnd = moment(dateTo,"YYYY-MM-DD");
    var datesHoliday = [];

    while (dateEnd > dateStart || dateStart.format("Y") === dateEnd.format("Y")) {
       $.merge(datesHoliday,getHolidaysBr(parseInt(dateStart.format("YYYY"))));
       dateStart.add(1,"year");
    }
    return datesHoliday;
};

var hollidays = getHolidayBetweenDates("2016-01-01","2020-01-01");