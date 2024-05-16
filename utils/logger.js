
const colors = require("colors");

function findColor(msg, color) {
    switch (color) {
        case `black`: return colors.black(msg);
        case `red`: return colors.red(msg);
        case `green`: return colors.green(msg);
        case `yellow`: return colors.yellow(msg);
        case `blue`: return colors.blue(msg);
        case `magenta`: return colors.magenta(msg);
        case `cyan`: return colors.cyan(msg);
        case `white`: return colors.white(msg);
        case `gray`: return colors.gray(msg);
        case `grey`: return colors.grey(msg);
        case `brightRed`: return colors.brightRed(msg);
        case `brightGreen`: return colors.brightGreen(msg);
        case `brightYellow`: return colors.brightYellow(msg);
        case `brightBlue`: return colors.brightBlue(msg);
        case `brightMagenta`: return colors.brightMagenta(msg);
        case `brightCyan`: return colors.brightCyan(msg);
        case `brightWhite`: return colors.brightWhite(msg);
        case `bgBlack`: return colors.bgBlack(msg);
        case `bgRed`: return colors.bgRed(msg);
        case `bgGreen`: return colors.bgGreen(msg);
        case `bgYellow`: return colors.bgYellow(msg);
        case `bgBlue`: return colors.bgBlue(msg);
        case `bgMagenta`: return colors.bgMagenta(msg);
        case `bgCyan`: return colors.bgCyan(msg);
        case `bgWhite`: return colors.bgWhite(msg);
        case `bgGray`: return colors.bgGray(msg);
        case `bgGrey`: return colors.bgGrey(msg);
        case `bgBrightRed`: return colors.bgBrightRed(msg);
        case `bgBrightGreen`: return colors.bgBrightGreen(msg);
        case `bgBrightYellow`: return colors.bgBrightYellow(msg);
        case `bgBrightBlue`: return colors.bgBrightBlue(msg);
        case `bgBrightMagenta`: return colors.bgBrightMagenta(msg);
        case `bgBrightCyan`: return colors.bgBrightCyan(msg);
        case `bgBrightWhite`: return colors.bgBrightWhite(msg);

        default: return msg;
    }
}

//pretty console logs, less typing



class Logger {
    constructor(){}

    log = (msg, color, bgColor) => {
        if (color) msg = findColor(msg, color);
        if (bgColor) msg = findColor(msg, bgColor);
        if (Array.isArray(msg)) {
            console.log('this is an array')
            msg.map(m => {
                console.log(m);
            });
        } else console.log(msg)
    }

    info = (msg) => {
       msg = colors.bgGray(colors.white(msg));
        if (Array.isArray(msg)) {
            console.info(msg);
        } else console.info(msg)
    }

    warn = (msg) =>{
        msg = colors.bgWhite(colors.red(msg));
        console.warn(msg);
    }

    error = (msg) => {
        msg = colors.bgYellow(colors.red(msg));
        console.error(msg);
    }
}



module.exports = Logger;