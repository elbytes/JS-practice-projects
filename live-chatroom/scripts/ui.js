//jshint esversion:6
class ChatUI{
    constructor(list){
        this.list = list;
    }
    render(data){
        const time = dateFns.distanceInWordsToNow(data.created_at.toDate(), {addSuffix: true});
        const html = `
        <li class="list-group-item">
            <span class="username">${data.username}:</span>
            <span>${data.message}</span>
            <div class="time">${time}</div>
        </li>`;

        this.list.innerHTML += html;
    }
}