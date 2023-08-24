import { SORT_OPTIONS } from "../util/config";

const sortModel = (id) => {
    const option = SORT_OPTIONS.find(item => item.id === id)

    return option.strategy
}

export default sortModel