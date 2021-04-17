export function manageFriends(state, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return {friends: [...state.friends, {
                name: action.friend.name,
                hometown: action.friend.hometown,
                id: action.friend.id
            }]}
        case "REMOVE_FRIEND":
            let friends = []
            for (let i = 0; i < state.friends.length; i++) {
                debugger
                if (state.friends[i].id !== action.id) {
                    friends.push(state.friends[i])
                }
            }
            return {friends}
        default:
            return state
    }
}
