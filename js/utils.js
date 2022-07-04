function activeFilter(list){
    return list.filter(item=> {
        return item.completed === true
    })
}
export default {activeFilter}