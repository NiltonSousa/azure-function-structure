module.exports = async function (context, req) {
    let {
        principal,
        rate,
        term
    } = req.query;

    principal = parseFloat(principal);
    rate = parseFloat(rate);
    term = parseFloat(term);

    if ([principal, rate, term].some(isNaN)) {
        return context.res = {
            status: 400,
            body: "Error status active!!"
        };
    }
    return context.res = { body: principal * rate * term };
};