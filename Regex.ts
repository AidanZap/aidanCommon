

export default class RegexHelper {

    // https://regexper.com/#%5E%28%3F!%5Cs*%24%29.%2B

    isNonEmptyString = () => {
        return RegExp("^(?!\\s*$).+");
    }

    // https://regexper.com/#%5E%5CS%2B%40%5CS%2B%5C.%5CS%2B%24

    isValidEmailBasic = () => {
        return RegExp("^\\S+@\\S+\\.\\S+$");
    }
}