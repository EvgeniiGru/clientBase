import { getPresentList, getQuttingList } from "../api/Api";

const SET_PRESENT = "SET_PRESENT";
const SET_QUTTING = "SET_QUTTING";
const CHANGE_PRESENT_ITEM = "CHANGE_PRESENT_ITEM";
const CHANGE_QUTTING_ITEM = "CHANGE_QUTTING_ITEM";
const CHANGE_VALUE_CHECK = "CHANGE_VALUE_CHECK";

let initialization = {
    valueCheck: 'present',
    presentList: [
        {
            historyNumber: 230,
            firstName: "jtrescgb",
            lastName: "mgvnyjve",
            patrName: "jfzirkwh",
            birthDate: "1950-02-02",
            diagnosis: "rpzcolmd",
            bedNumber: 119
        },
        {
            historyNumber: 168,
            firstName: "oiwkilgw",
            lastName: "pmpmqtuv",
            patrName: "uksilguj",
            birthDate: "1960-12-02",
            diagnosis: "mfpkfuii",
            bedNumber: 219
        },
        {
            historyNumber: 110,
            firstName: "jqdtmzot",
            lastName: "gxwofiyw",
            patrName: "pfizabcl",
            birthDate: "1952-01-11",
            diagnosis: "uupnukqy",
            bedNumber: 289
        },
    ],
    quttingList: [{
        historyNumber: 278,
        firstName: "nejhispw",
        lastName: "odxgnvqs",
        patrName: "qckvzlfq",
        birthDate: "1952-02-11",
        diagnosis: "oxvpjyvh",
        cause: "ufqp"
    },
    {
        historyNumber: 151,
        firstName: "uprmkona",
        lastName: "lgvlqwof",
        patrName: "htxivgrq",
        birthDate: "1960-04-02",
        diagnosis: "dreqstqv",
        cause: "gtdi"
    }],
    presentItem: {},
    quttingItem: {}
};

const Clientreduser = (state = initialization, action) => {
    switch (action.type) {
        case SET_PRESENT:
            return {
                ...state,
                presentList: [...action.present]
            }
        case SET_QUTTING:
            return {
                ...state,
                quttingList: [...action.qutting]
            }
        case CHANGE_PRESENT_ITEM:
            let birthDatePresent = new Date(action.presentCheck.birthDate);
            let todayPresent = new Date();
            let agePresent = todayPresent.getFullYear() - birthDatePresent.getFullYear();
            return {
                ...state,
                presentItem: {
                    ...action.presentCheck,
                    age: todayPresent.getTime() < birthDatePresent.setFullYear(todayPresent.getFullYear()) ? agePresent - 1 : agePresent
                }
            }
        case CHANGE_QUTTING_ITEM:
            let birthDateQutting = new Date(action.quttingCheck.birthDate);
            let today = new Date();
            let age = today.getFullYear() - birthDateQutting.getFullYear();
            return {
                ...state,
                quttingItem: {
                    ...action.quttingCheck,
                    age: today.getTime() < birthDateQutting.setFullYear(today.getFullYear()) ? age - 1 : age
                }
            }
        case CHANGE_VALUE_CHECK:
            return {
                ...state,
                valueCheck: action.value
            }
        default:
            return state;
    }
};

export default Clientreduser;

export const setPresent = (present) => ({ type: SET_PRESENT, present })
export const setQutting = (qutting) => ({ type: SET_QUTTING, qutting })
export const changePresentClient = (presentCheck) => ({ type: CHANGE_PRESENT_ITEM, presentCheck })
export const changeQuttingClient = (quttingCheck) => ({ type: CHANGE_QUTTING_ITEM, quttingCheck })
export const changeValueCheck = (value) => ({ type: CHANGE_VALUE_CHECK, value })

//запрос axio
export const getPresentMap = () => (dispatch) => {
    getPresentList().then(res => {
        dispatch(setPresent(res))
    })
}

export const getQuttingMap = () => (dispatch) => {
    getQuttingList().then(res => {
        dispatch(setQutting(res))
    })
}
