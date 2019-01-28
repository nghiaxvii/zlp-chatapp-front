export const MESSAGE = "MESSAGE";
export const ADDUSER = "ADDUSER";
export const CHATVIEW = "CHATVIEW";
export const ADDGROUP = "ADDGROUP";




export const addMessage = ({ p_sender, p_content, p_receiver, p_isgroup, p_time }) => {
    return {
        type: MESSAGE,
        payload: {
            sender: p_sender,
            content: p_content,
            receiver: p_receiver,
            isgroup: p_isgroup,
            time: p_time
        }
    }
}

export const changeChatView = (p_acc, p_isGroup, p_chatView, p_online) => {
    return {
        type: CHATVIEW,
        payload: {
            acc: p_acc,
            isGroup: p_isGroup,
            chatView: p_chatView,
            online: p_online
        }
    }
}

export const addUser = (p_name) => {
    return {
        type: ADDUSER,
        payload: {
            name: p_name
        }
    }
}


export const addGroup = (p_group, p_members) => {
    return {
        type: ADDGROUP,
        payload: {
            groupName: p_group,
            members: p_members,
        }
    }
}