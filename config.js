const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61VW47jNhbdSsD5tCvW+2GggMiSZcu2/JTKj0EwoCXKpvW0SMmSGv7KAmYRs4lZz2wgWwhUrkIX0OlODRD9kKDIc8899/DyC0hSTNAU1aD/BWQ5LiFF7ZTWGQJ9MCiCAOWgC3xIIeiDjiVzYY/dIZXhC+Em0+q4y9Zm7vqaWRqO31wISwtFJoz3DO5dkBXHCHs/AGRFJpdXF+wNS35+dA/HcTCzTNqb7Y/2tbwWh/FqUQ6Z0aVSnsG9RYQ4x8lpmJ1RjHIYTVG9hDj/HP3R3NNhwekVExFpUdyoF6vWVp95QTyoAt0MDwV/xeaFG5HP0UdLMRlmYSlspzPEj3jRuMyE+ZbunF1nZXFoVavW4OpYzI086BN8SpBv+SihmNaf1l0yjldirNdnAneOq11OoRkfziPkGNM6quTDPB0Fkh6f6pD5pO43cRMF12tHcIIxQ9bDMGU7M3m78RHDq24R7iu4cF6Uq+t+JL7M370S/j+6h7OXXsrJoxAf50I6Xi1lx8174tnb2jc0xzp3KSPdLlkzUj5Hv8HJKd5L0A9TnvLFstIJrayDh92mVFXflfeTWZVYa8J/oA9pkf+I5U44OFNi685SuDlzhceyYHEl59l0b4g03YSVqHe225RfDLgoMzdqIAtjl8B9yrvuejOvdXxyt3zjT3mxCqWrotiKsXp+zShEteWDPnvvghydMKE5pDhN2jVZ6ALolxvk5Yi+qgsCdqBjqdSRtqkc3zwIm0hsbhVrdTqH23jjymEd6OslwxyFZ9AFWZ56iBDkjzGhaV7biBB4QgT0//laqDbnHMUpRRPsgz7gJF5mVYXjGVX5hfx8O0NKYJb9nCAKuiDI09hGoE/zAnXB6wHFGHKcKAomb5ryQONVhlF0TuEYnVekgay0GcaPoA6OEaEwzkCflQWRlVmO4e/dv4eHKQ9MTRUk1pAFVZKHpqBxuiSpsmaKIiOwf8FDvf/aBQmq6MPGrfg82wUBzgl1kyKLUui/e/z9J/S8tEjopk48vZ2gHPQ/LCNKcXIibWZFAnPvjEukt3mAfgAjgu5d4KMSe6jFA08H/6L9Kzw7tTS6Drc7CMfQ1NoKntPksUVhESMjiX3ikc89CQrHPamcd3wSjyiQWF4SjooEWjkeHaQ9811Dr7XTFb9U4ajxORopEdMsoUWZyt2lr6Z8OBHlyH9X+Qi9sMicNETJD3DFONi8TGdjizncQjIZhcdViGYv0tCwPuA+HA76X752bT31W7zp5DCd2doGtNVq43zjhj7HfWuIBLa7wQxHP2kx9H/6x+///ff/fvsP+xikx9DGfytOi+wjCnFEQB/ok94LSYXhcNFEka2NRpp90vRTq/57Md97xOMSzhvz0klfjCVbaMJAxLvVy2Ubh0rdaLUwbXDuC3nvlK8Jdp//BAT0wQ1HdmNsPEPc2okjDXbhZLFYNYbbWZyESJ2wZcc1THKVBrWtbH2Zye3L/jgZD0oSNea5QT01jEjHzcrxBU7jReIfd8btuY32MNXHYJeF66yCsnAodWV7wRgz74JlnjnV4UVprl5V5RNLG/MLx+jMGzFAcZRhvYHGULP1wUYxoMMmS0VhGNEqHHMy4q7Se/d67Z7R26uF3xrLw4IBRq+PwFtx/rKIX28Dc+9+wHh7Vr7juIHjVfve1Vw16vG00NA+Ysw9m2VLm9zsQifClUfTnjBljlYE7u01zyJIgzSPQR/AxM9T7IMuiCCh2tcL/W2PYFWhC+Jay7INhfS9DwCt/QwlAPc/AIhpRt0xCQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BWM_MD,
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

