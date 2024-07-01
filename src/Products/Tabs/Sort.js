let sort = (Date, type) => {
    if (type === "Price") {
        for (let i = 0; i < Date.length; i++) {
            let min = Date[i].Price
            let min_id = i
            for (let j = i; j < Date.length; j++) {
                if (Date[j].Price < min) {
                    min = Date[j].Price
                    min_id = j
                }
            }
            let temp = Date[i]
            Date[i] = Date[min_id]
            Date[min_id] = temp
        }
    }
    if (type === "Name") {
        for (let i = 0; i < Date.length; i++) {
            let min = Date[i].Name
            let min_id = i
            for (let j = i; j < Date.length; j++) {
                if (Date[j].Name < min) {
                    min = Date[j].Name
                    min_id = j
                }
            }
            let temp = Date[i]
            Date[i] = Date[min_id]
            Date[min_id] = temp
        }
    }
    return (Date)
}

export default sort