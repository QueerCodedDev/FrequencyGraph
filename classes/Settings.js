class Settings {
    // Canvas dimensions
    static canvasW = 2520;
    static canvasH = 1000;
    static offset  =   25;
    static xINC    =   10;
    static yINC    =   10;

    // Font/Text settings/vars
    static point      = 25;
    static _point     = 20;
    static textWeight =  2;
    static font;
    
    // Universe Colors
    static UNI_COLORS = {
        'lib': '#F5D327',
        'lev': '#27B0F5',
        'spn': '#C223BD',
        'psy': '#23C227',
        'men': '#C22823'
    }

    // General colors
    static black    = '#000000';
    static white    = '#ffffff';
    static grey     = '#646464';
    static darkGrey = '#1b1b1b';

    // Sort options
    static SORT = {
        DATE: 'date',
        UNIVERSE: 'universe'
    }

    // TEMP SETTINGS. WILL NEED TO BE REMOVED OR REWORKED TO BE not HARDCODED (?)
    static EARLIEST = new Date('01-01-2004');
    static LATEST   = new Date('12-31-2025');
}