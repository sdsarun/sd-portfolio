


class DateUtil {
    static #currentDate = new Date();
    static #monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    static getDateFormat() {
        return `${this.#currentDate.getDay()} ${this.#monthNames[this.#currentDate.getMonth()]} ${this.#currentDate.getFullYear()}`;
    }
}

export { DateUtil }