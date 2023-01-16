const RATES = {
    usd: 0.015,
    eur: 0.014
};

function convert(rub, currency) {
    return rub * RATES[currency];
}

