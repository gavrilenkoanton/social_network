import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Пусть это будет мой первый пост', likesCount: 23},
                {id: 2, message: 'Пусть это будет мой второй пост', likesCount: 32}
            ],
            newPostText: ''
        },

        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Тоха', img: "https://i.ytimg.com/vi/mK72EwuxZAU/hqdefault.jpg"},
                {id: 2, name: 'Марина', img: "https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg"},
                {
                    id: 3,
                    name: 'Андрей',
                    img: 'https://i.pinimg.com/originals/36/fd/c3/36fdc3549189dd354acc8d4b2615c571.jpg'
                },
                {id: 4, name: 'Жора', img: 'https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg'},
                {
                    id: 5,
                    name: 'Вася',
                    img: 'https://ichef.bbci.co.uk/news/410/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg'
                },
                {id: 6, name: 'Виктор', img: 'https://www.fresher.ru/wp-content/uploads/2018/03/1.jpg'},
            ],
            messagesData: [
                {id: 1, mesid: 1, message: 'еуеу, мазафака'},
                {id: 2, mesid: 1, message: 'хау а ю дуинг?'},
                {id: 3, mesid: 1, message: 'вери из май факинг мани?'},
                {id: 3, mesid: 2, message: 'ай хэв но мани'},
                {id: 3, mesid: 2, message: 'ай хэв онли лапки'},
                {id: 3, mesid: 2, message: 'бат ай кан ирн сом вискас'},
                {id: 3, mesid: 1, message: 'кэн ю бринг ме сом зис щит?'},
                {id: 3, mesid: 2, message: 'ок, бро, мяу'},
            ],

            newMessageText: ""
        }
    },
    _callSubscriber() {
        console.log("")
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
};


export default store;
window.store = store;