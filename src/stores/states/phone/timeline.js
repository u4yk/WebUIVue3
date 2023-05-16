export default () => ({
    caseList: [],
    appState: 'caseList',
    /**
     * @property {Object} currentCase.currentCase
     * @property {Object.String} currentCase.title
     * @property {Object.String} currentCase.id
     * @property {Object.String} currentCase.crimeType
     * @property {Object.String[]} currentCase.suspects
     * @property {Object.String} currentCase.perp
     * @property {Object.String} currentCase.motive
     * @property {Object.Object[]} currentCase.clues
     * @property {Object.Object[].String} currentCase.clues.id
     * @property {Object.Object[].String} currentCase.clues.name
     * @property {Object.Object[].String} currentCase.clues.type
     * @property {Object.Object[].String} currentCase.clues.association
     * @property {Object.Object[].String} currentCase.clues.description
     * @property {Object.Object[]} currentCase.witnessStatements
     * @property {Object.Object[].String} currentCase.witnessStatements.witness
     * @property {Object.Object[].String} currentCase.witnessStatements.statement
     */
    currentCase: {}
})