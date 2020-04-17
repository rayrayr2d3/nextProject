export default interface baseRockData {
    type: string; // igneous/metamorphic/sedimentary
    subtype: string; // granite/rhyolite/diorite/andesite/gabbro/basalt/peridotite
    genericFormula: string; // SiO2
    majorMinerals: string[]; // silicon/feldspar/plagioclase
    minorMinerals: string[];
}